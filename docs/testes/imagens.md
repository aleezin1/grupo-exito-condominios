# Levantamento das imagens (`img/`)

> **Atualização de 06/11:** as 11 imagens sem uso (item 1) foram apagadas; `hero-reuniao-condominio.jpg` foi para `img/quem-somos/` e `relatorios-financeiros.jpg` para `img/index/`, com os caminhos trocados no `style.css` e na `index.html` (item 3). Nenhuma imagem em uso tinha nome fora do padrão. A `pages/index.html` e as 3 imagens dela (item 2) também foram apagadas. Com isso, os itens 7.3, 7.4, 7.5 e 7.6 do relatório de testes passaram a OK.

> **Atualização de 06/11 (vídeo):** imagem nova `img/quem-somos/capa-video-especialista.jpg` (145 KB, 1280 × 720), capa do vídeo da Quem Somos (`poster` do `<video>`). Fonte: quadro do próprio vídeo (Felipe Lima, canal Manutenção Predial). O teste de imagens sem uso (7.6) passou a contar também a capa de vídeo.

> **Atualização de 06/11 (topo da home):** o carrossel do topo da home saiu e ficou só a foto `img/noticias/telemetria-predial.jpg`. Com isso, `img/index/relatorios-financeiros.jpg` (a única imagem da pasta `img/index/`) ficou sem uso, e o teste 7.6 voltou para ATENÇÃO. Falta decidir se ela sai ou se volta a ser usada. Na `pages/noticias.html`, a foto da telemetria está com `width="800" height="450"`, mas o arquivo tem 512 × 279.

Conferência feita em 06/11/2026, arquivo por arquivo, contra os requisitos do professor:

- **7.4** imagens otimizadas, com até 500 KB;
- **7.5** imagens corretamente nomeadas: minúsculas, sem espaço nem acento e com um nome que diz o que é;
- **7.6** nenhuma imagem sobrando na pasta;
- e a regra do grupo de deixar cada imagem na pasta da sua página (`img/<pagina>/`), com só o que é do site todo na raiz.

O "Onde é usada" considera as páginas do site (`index.html` e `pages/*.html`), o `css/style.css` e o `site.webmanifest`. Ficam de fora as cópias `*-clickup.html`, as pastas de envio do ClickUp (`pages/projetos/` e `pages/servicos/`) e a `index-v3.html`, que é só referência.

## Resumo

| Situação | Quantidade |
| --- | :---: |
| Em uso, com nome e pasta certos | 42 |
| **Sem uso**: podem ser apagadas | 11 |
| Usadas só pela `pages/index.html`, a cópia solta do envio da Projetos | 3 |
| Em uso, mas fora da pasta da página | 2 |
| Referenciadas, mas o arquivo **não existe** | 2 |

---

## 1. Sem uso: podem ser apagadas

Nenhuma página, nem o CSS, usa estes arquivos. Juntos, eles somam cerca de 9,7 MB.

| Arquivo | Peso | Nome | Observação |
| --- | ---: | :---: | --- |
| `img/F1 (1).png` | 1.712 KB | ruim | Acima de 500 KB, com espaço e parênteses no nome |
| `img/F4.png` | 1.910 KB | ruim | Acima de 500 KB |
| `img/img.png` | 1.974 KB | ruim | Original da foto da Serviços 2, que hoje é `img/servicos-2/analise-financeira.jpg` |
| `img/img1.png` | 1.255 KB | ruim | Original da foto da Serviços 3, que hoje é `img/servicos-3/gestor-orientando-equipe.jpg` |
| `img/reuniao.jfif` | 49 KB | ruim | Original da foto da Serviços 1, que hoje é `img/servicos-1/reuniao-equipe.jpg` |
| `img/logo.png` | 853 KB | ok | Logo antigo; o site usa `logo-grupo-exito-header.png` |
| `img/logo-grupo-exito.png` | 254 KB | ok | Logo antigo, maior; o site usa a versão do header |
| `img/banner-contato-fundo.svg` | 9 KB | ok | Fundo da Contato antiga |
| `img/noticias/convivencia.svg` | 1 KB | ok | A Notícias passou a usar fotos (`equipe-executiva.jpg`…) no lugar destas ilustrações |
| `img/noticias/inadimplencia.svg` | 1 KB | ok | Idem |
| `img/noticias/legislacao.svg` | 1 KB | ok | Idem |

## 2. Usadas só pela `pages/index.html` (cópia solta do envio da Projetos)

A `pages/index.html` não faz parte do site. É uma cópia do `index.html` que veio no envio da Projetos; o mesmo conteúdo já está em `pages/projetos-clickup.html` e em `pages/projetos/index.html`. Saindo a cópia, estas imagens também ficam sem uso.

| Arquivo | Peso | Nome |
| --- | ---: | :---: |
| `img/f1.png` | 1.680 KB | ruim |
| `img/F2.png` | 1.799 KB | ruim |
| `img/F3.png` | 1.902 KB | ruim |

## 3. Em uso, mas fora da pasta da página

| Arquivo | Onde é usada | O que fazer |
| --- | --- | --- |
| `img/hero-reuniao-condominio.jpg` (233 KB) | Foto do topo da Quem Somos (bloco dela no `style.css`) e um card do carrossel da home (`index.html`, linha 218), além do `og:image` da home | Já anotado no checklist do fim do projeto: ir para `img/quem-somos/`, trocando os caminhos no `style.css` e na `index.html` |
| `img/relatorios-financeiros.jpg` (33 KB) | Só na home (`index.html`, linha 257) | Ir para `img/index/` e trocar o caminho na `index.html` |

## 4. Referenciadas, mas o arquivo não existe (teste 7.9)

| Arquivo esperado | Onde é usado |
| --- | --- |
| `img/servicos-1/hero-servicos-1.jpg` | Foto do topo da Serviços 1 (bloco dela no `style.css`) |
| `img/politica-privacidade/hero-politica-privacidade.jpg` | Foto do topo da Política de Privacidade (bloco dela no `style.css`) |

## 5. Em uso, com pasta e nome certos

| Pasta | Arquivos | Onde são usados |
| --- | --- | --- |
| `img/` (site todo) | `logo-grupo-exito-header.png` (7 KB) e `@2x` (19 KB) | Header e rodapé de todas as páginas |
| `img/favicon/` | `favicon-32.png`, `apple-touch-icon.png` | Todas as páginas |
| | `favicon-16.png` | Só a home |
| | `site.webmanifest`, `favicon-192.png`, `favicon-512.png` | O manifest só é carregado pela Serviços 3, e os dois ícones grandes são usados por ele. Ver item 6 |
| `img/clientes/` | `background-cond.jpg` (topo), `condominio-jardins.jpg`, `condominio-aurora.jpg`, `condominio-vila-verde.jpg`, `empresarial-pinheiros.jpg`, `joao.jpg`, `mariana.jpg`, `carlos.jpg` | Clientes; três delas também na seção de clientes da home |
| `img/contato/` | `hero-contato.jpg` (110 KB) | Topo da Contato |
| `img/faq/` | `hero-faq.jpg` (109 KB) | Topo da FAQ |
| `img/noticias/` | `hero-noticias.jpg` (**497 KB**, no limite de 500 KB), `assembleias-virtuais.jpg`, `equipe-executiva.jpg`, `telemetria-predial.jpg`, `manutencao.svg`, `portaria-remota.svg`, `sustentabilidade.svg` | Notícias; as três fotos também na home |
| `img/projetos/` | `hero.jpg` (312 KB) e as 9 fotos dos projetos (149 a 173 KB) | Projetos |
| `img/servicos/` | `hero-servicos.jpg`, `gestao-financeira.jpg`, `planejamento-investimentos.jpg`, `consultoria-tributaria.jpg` | Serviços |
| `img/servicos-1/` | `reuniao-equipe.jpg` | Serviços 1 |
| `img/servicos-2/` | `analise-financeira.jpg` (topo) | Serviços 2 |
| `img/servicos-3/` | `gestor-orientando-equipe.jpg` (topo) | Serviços 3 |

## 6. O que fazer

1. ~~Apagar as 11 imagens sem uso (item 1).~~ Feito em 06/11.
2. ~~Apagar a `pages/index.html` e, com ela, as 3 imagens do item 2.~~ Feito em 06/11.
3. ~~Mover `relatorios-financeiros.jpg` para `img/index/` e `hero-reuniao-condominio.jpg` para `img/quem-somos/`, trocando os caminhos.~~ Feito em 06/11.
4. Salvar as 2 fotos de topo que faltam (item 4).
5. Reduzir a `hero-noticias.jpg`, que está no limite de 500 KB.
6. Manifest: ligar o `site.webmanifest` em todas as páginas, como já está na Serviços 3, ou tirar dela.
7. Revisar as fontes: toda imagem que não é do grupo precisa de crédito na página.

Depois disso, todas as imagens ficam até 500 KB, com nome certo e em uso.
