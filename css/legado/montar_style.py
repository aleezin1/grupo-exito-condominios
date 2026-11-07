"""
Monta o css/style.css, o arquivo único de CSS que o professor pede na entrega final.

Como rodar (na pasta raiz do projeto):

    python docs/scripts/montar_style.py

O style.css é GERADO: ninguém edita ele à mão. Ele junta, nesta ordem:

    1. css/global.css          fontes, paleta, padrão das tags, componentes .ex-*
    2. css/layout/header.css   menu
    3. css/layout/footer.css   rodapé
    4. css/components/*.css    só os recursos usados pelas páginas da lista abaixo
    5. css/page/<pagina>.css   só as páginas da lista abaixo (já ajustadas)

Para colocar uma página no style.css:

    1. A página precisa estar isolada: <body class="pagina-<nome>"> e toda regra
       do css/page/<nome>.css começando com .pagina-<nome>. Se não estiver,
       o script para e mostra os seletores que faltam.
    2. Acrescente a página em PAGINAS_NO_STYLE (com os componentes que ela usa).
    3. Rode o script.
    4. No <head> da página, troque todos os <link> de CSS por um só:
       <link rel="stylesheet" href="../css/style.css">

Não precisa instalar nada: usa só o que já vem com o Python.
"""

import re
import sys
from datetime import datetime
from pathlib import Path

RAIZ = Path(__file__).resolve().parents[2]
CSS = RAIZ / "css"
SAIDA = CSS / "style.css"

BASE = ["global.css", "layout/header.css", "layout/footer.css"]

# Páginas que já foram ajustadas e usam só o style.css.
# Formato: "nome-da-pagina": ["componentes", "que", "ela", "usa"]
# Ex.: "adm-contato": ["acessibilidade", "assistente"]
PAGINAS_NO_STYLE = {
    "quem-somos": [],
    "clientes": [],
    "servicos": [],
    "projetos": [],
    "index": ["efeitos", "loading", "acessibilidade", "assistente"],
    "noticias": ["acessibilidade"],
    "faq": [],
    "contato": [],
    "servicos-1": [],
    "servicos-2": [],
    "servicos-3": [],
    "confirmacao": ["acessibilidade"],
}


def sem_comentarios(texto):
    return re.sub(r"/\*.*?\*/", "", texto, flags=re.S)


def seletores_sem_prefixo(arquivo, prefixo):
    """Lista os seletores do arquivo que não começam com o prefixo da página."""
    texto = sem_comentarios(arquivo.read_text(encoding="utf-8"))
    # @font-face e @keyframes não aceitam prefixo: ficam de fora da conferência.
    texto = re.sub(r"@(font-face|keyframes[^{]*)\{(?:[^{}]|\{[^{}]*\})*\}", "", texto)
    faltando = []
    for grupo in re.findall(r"([^{}]+)\{", texto):
        grupo = grupo.strip()
        if grupo.startswith("@"):
            continue
        faltando += [s.strip() for s in grupo.split(",") if not s.strip().startswith(prefixo)]
    return faltando


def ajustar_urls(texto, origem):
    """O url() é relativo ao arquivo .css. Ao mudar de pasta, o caminho precisa mudar junto."""
    def trocar(m):
        aspas, caminho = m.group(1), m.group(2)
        if caminho.startswith(("data:", "#", "http://", "https://", "//")):
            return m.group(0)
        arquivo = (origem.parent / caminho).resolve()
        if CSS in arquivo.parents:
            novo = arquivo.relative_to(CSS).as_posix()             # ex.: fonts/arquivo.woff2
        else:
            novo = "../" + arquivo.relative_to(RAIZ).as_posix()    # ex.: ../img/foto.jpg
        return f"url({aspas}{novo}{aspas})"
    return re.sub(r"url\(\s*(['\"]?)([^'\")]+)\1\s*\)", trocar, texto)


def bloco(arquivo):
    titulo = arquivo.relative_to(RAIZ).as_posix()
    corpo = ajustar_urls(arquivo.read_text(encoding="utf-8").strip(), arquivo)
    return (f"\n\n/* ##########################################################################\n"
            f"   ARQUIVO: {titulo}\n"
            f"   ########################################################################## */\n\n{corpo}\n")


def main():
    problemas = []
    componentes = []
    for pagina, usados in PAGINAS_NO_STYLE.items():
        arquivo = CSS / "page" / f"{pagina}.css"
        if not arquivo.exists():
            problemas.append(f"- {pagina}: não existe css/page/{pagina}.css")
            continue
        faltando = seletores_sem_prefixo(arquivo, f".pagina-{pagina}")
        if faltando:
            problemas.append(f"- {pagina}: {len(faltando)} seletor(es) sem .pagina-{pagina}, ex.: "
                             + ", ".join(faltando[:5]))
        for c in usados:
            if not (CSS / "components" / f"{c}.css").exists():
                problemas.append(f"- {pagina}: componente css/components/{c}.css não existe")
            elif c not in componentes:
                componentes.append(c)

    if problemas:
        print("O style.css NÃO foi gerado. Corrija antes:\n" + "\n".join(problemas))
        return 1

    arquivos = ([CSS / b for b in BASE]
                + [CSS / "components" / f"{c}.css" for c in componentes]
                + [CSS / "page" / f"{p}.css" for p in PAGINAS_NO_STYLE])

    lista = "\n".join(f"     - {a.relative_to(RAIZ).as_posix()}" for a in arquivos)
    topo = (
        "/* ==========================================================================\n"
        "   STYLE.CSS — arquivo único de CSS do site Grupo Êxito Condomínios\n"
        "   --------------------------------------------------------------------------\n"
        "   ARQUIVO GERADO. NÃO EDITE AQUI: a alteração some na próxima geração.\n"
        "   Edite o arquivo original (lista abaixo) e rode, na raiz do projeto:\n\n"
        "     python docs/scripts/montar_style.py\n\n"
        f"   Gerado em {datetime.now():%d/%m/%Y %H:%M}, juntando nesta ordem:\n{lista}\n"
        "   ========================================================================== */\n"
    )
    SAIDA.write_text(topo + "".join(bloco(a) for a in arquivos), encoding="utf-8", newline="\n")

    linhas = SAIDA.read_text(encoding="utf-8").count("\n")
    paginas = ", ".join(PAGINAS_NO_STYLE) or "nenhuma ainda (só os padrões)"
    print(f"css/style.css gerado: {len(arquivos)} arquivos, {linhas} linhas. Páginas: {paginas}.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
