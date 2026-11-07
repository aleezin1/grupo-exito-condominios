# Revisão manual — projeto (2ª entrega)

> **2ª entrega (a final):** o CSS **vale nota**. O site usa um único `css/style.css`, com identidade visual unificada, validado no W3C CSS Validator.

Primeira revisão feita lendo as páginas em 01/11/2026; atualizada em **06/11/2026**, no fechamento do projeto. Junta o que conferimos lendo o conteúdo e abrindo o site, e o que conferimos no código (tags, links, campos, arquivos). O registro de cada página fica em `docs/testes/pages/<pagina>/`.

Os números entre parênteses seguem a ordem dos requisitos do enunciado (por exemplo, 6.2 é o áudio).

---

## 1. Situação em 06/11/2026

| | |
| --- | --- |
| **Requisitos** | Todos atendidos, menos o áudio |
| **FALHOU** | 6.2 — o site não tem `<audio>` (decisão do líder: fica sem áudio) |
| **ATENÇÃO** | Nenhuma |
| **CSS no W3C** | Validado: `docs/testes/pages/css/w3c-validator.pdf` (9.3) |
| **Páginas no site** | 14: a home e as 13 de `pages/` |

---

## 2. O que foi resolvido desde a primeira revisão

| Ponto da revisão de 01/11 | Como ficou |
| --- | --- |
| Serviços falava de finanças pessoais, e os links não batiam com as páginas | Gestão Administrativa, Financeira e Operacional, ligando para `servicos-1`, `-2` e `-3` |
| Contato com assuntos de imobiliária | Assuntos de condomínio: proposta, boleto e taxa, assembleias, manutenção |
| Três conjuntos de dados de contato | Um só em todo o site: `contato@grupoexitocondominios.com.br` e (11) 2564-9963 (2.2) |
| Membros do grupo fora da Contato | Seção "Equipe do projeto", com os 12 integrantes (2.3) |
| `adm-contato.html` duplicando a Contato | Saiu do projeto |
| Tags inventadas, `<thread>`, `<h2 text align>`, vários `<h1>`, páginas sem `<main>` | Nenhuma página com esses erros (4.1, 4.2, 7.1) |
| Link quebrado na FAQ e scripts comentados (`menu.js`, `formulario.js`) | Nenhum link quebrado (4.3); todos os scripts ligados (5.5) |
| Formulário sem validação | `required`, `email`, `tel` com máscara, `number` e `date` na Contato (5.1 a 5.5) |
| Sem vídeo e sem mapa | Vídeo local com capa na Quem Somos (6.1) e mapas dos dois endereços na home (6.3) |
| Imagens pesadas, com nome ruim, sem fonte | Todas até 500 KB, com nome certo, na pasta da página e com a fonte na nota do fim da página (7.3 a 7.5, 7.7) |
| Orçamento só na planilha | Página `pages/orcamento-hospedagem.html`, com link no rodapé, e PDF em `docs/hospedagem/` (3.1 a 3.6) |
| CSS espalhado, com variáveis e cores fora da paleta | Um `css/style.css` em blocos, páginas isoladas com `.pagina-<nome>`, só cores da paleta em `rgb(...)` e a mesma tipografia em tudo (1.2, 7.10 a 7.13) |
| Tailwind, tela de carregamento, efeitos e assistente na home | Retirados. Os arquivos antigos ficaram em `css/legado/` e `js/legado/` |
| Diário sem dificuldades e README desatualizado | Diário com decisões, aprendizados e dificuldades (8.2); README com a árvore de pastas atual |

---

## 3. Pendências para fechar o projeto

### 3.1 Conteúdo

- [x] **Justificar a escolha da hospedagem (3.7)** (06/11): a conclusão explica o custo-benefício do Hostinger Single, o domínio `.com.br` no Registro.br e para quais planos o site pode subir se crescer. O PDF foi gerado de novo.
- [x] **Imagem sem uso (7.6)** (06/11): `img/index/relatorios-financeiros.jpg` foi apagada, junto com a pasta `img/index/`, que ficou vazia.
- [x] **Dados de contato (2.2)** (06/11): são de uma empresa real, por decisão do líder ficam no site. Conferido que são iguais em todas as páginas: e-mail `contato@grupoexitocondominios.com.br`, telefone e WhatsApp (11) 2564-9963, Instagram `grupoexito.condominios`, Facebook `grupoexitocondominios`, R. Gonçalo Ferreira, 164 (Mogi das Cruzes) e Av. Rio das Pedras, 3.409 (São Paulo).
- [ ] **Para os integrantes conferirem:** o nome completo e o RA de cada um na Contato. (A Serviços, a FAQ e a Projetos foram fechadas em 06/11 com os textos atuais.)

### 3.2 Ajustes por página

| Página | O que falta |
| --- | --- |
| Serviços 2 | ~~`aria-labelledby` apontando para um `id` que não existe~~ (o líder tirou o atributo em 06/11). O 1º e o 2º item da lista "Como funciona nossa gestão financeira" repetem a mesma frase (o responsável escreve o texto certo). O 4º card fica sozinho na segunda linha |
| Notícias | A foto do topo tem 498 KB, no limite |
| Orçamento | A largura de banda do Hostinger Premium aparece como "—" |

### 3.3 Conferir no navegador

- [ ] Abrir o site pelo `index.html` e clicar em **todos** os itens do menu e do rodapé, no computador e no celular (modo responsivo do navegador, F12).
- [ ] No celular estreito, ver se o aviso de cookies não cobre os botões.
- [ ] Imprimir a Confirmação (Ctrl+P) e ver se sai legível.
- [ ] Testar o formulário da Contato: enviar vazio, com e-mail sem `@`, com telefone fora do formato e com número negativo. O navegador deve bloquear em todos os casos. Guardar um print de cada mensagem em `docs/testes/formulario/` (evidência de teste).

### 3.4 Validação W3C (7.1)

Já têm o PDF: Quem Somos, Clientes, Serviços, Serviços 1, Projetos, Notícias e FAQ.

- [x] **Todas validadas** (06/11): Home, Serviços 2, Serviços 3, Contato e Política de Privacidade, depois de corrigir os avisos e o erro que o W3C apontou. As 12 páginas que passam pelo validador têm o PDF.
- **Fora do W3C** (decisão do líder em 06/11): Confirmação e Orçamento de hospedagem.

Passo a passo:

1. Abrir https://validator.w3.org/#validate_by_upload.
2. Enviar a página.
3. Corrigir os erros (os avisos podem ficar).
4. Quando aparecer "Document checking completed. No errors or warnings to show.", salvar o resultado em PDF.
5. Salvar em `docs/testes/pages/<pagina>/w3c-validator.pdf`. A home vai em `docs/testes/pages/index/`.

---

## 4. Antes de enviar

- [ ] **Notas finais** (06/11): registradas nos relatórios e no painel para 11 páginas (Quem Somos 7, Serviços 5, Serviços 1 7, Serviços 2 7, Serviços 3 9, Clientes 7, Projetos 6, Notícias 4, FAQ 6, Contato 6, Política de Privacidade 5). Falta a nota da Home e lançar as notas no ClickUp.
- [x] **Fechar cada página** (06/11): as 14 páginas têm o relatório final e o `antes-depois.md` em `docs/testes/pages/<pagina>/`.
- [ ] **Alinhar os nomes das páginas:** a tabela de equipe do README chama a página do Pablo de "Contatos", a do Felipe Gabriel de "Clientes — Projetos" e a do Evandro de "Perguntas Frequentes — FAQ"; o menu e os `<title>` usam "Contato", "Projetos" e "FAQ" / "Perguntas Frequentes". A Confirmação tem o `<title>` "Solicitação recebida".
- [ ] **Guia completo do CSS:** um documento só sobre o `css/style.css`: a ordem dos blocos, as fontes (`css/fonts/`), a paleta em `rgb(...)`, os ícones do Material Symbols (`.ex-icone--*`), os componentes `.ex-*` e a regra do prefixo `.pagina-<nome>`.
- [ ] **Protótipo do site:** todas as páginas num canvas ou no Figma, com o fluxo de navegação (menu, links e formulário → confirmação).
- [ ] **O que vai no `.zip`:** decidir sobre o `index-v3.html` (home antiga, só referência), `css/legado/` e `js/legado/`.
- [ ] **Diário e README:** última conferência, com o fechamento do projeto.
- [x] Conferir que nenhum requisito ficou sem atender (06/11): só o áudio, por decisão do líder.
- [ ] Fazer o commit.
- [ ] Compactar a pasta (sem `.git/`) como `nome_da_equipe.zip`, descompactar em outra pasta e abrir o `index.html` para ter certeza de que nada quebrou (9.1).
- [ ] Enviar pelo Blackboard (9.2).

---

## 5. Pontos conhecidos que ficam como estão

- **Fontes ao trocar de página:** quando o site é aberto direto do arquivo, o texto aparece por um instante na fonte reserva e os ícones ocupam mais espaço até a fonte deles carregar. Publicado (GitHub Pages), isso acontece quase só na primeira visita. Decisão de 06/11: manter.
- **Pontos de conteúdo das páginas fechadas** (decisão do líder em 06/11: mantemos como estão): o texto do Essência Moema igual ao do Alto dos Jardins (Projetos); os nomes de duas imagens e a coluna "Duração" (Serviços); o texto alternativo "Ilustração sobre…" nas fotos (Notícias); "Transparência" repetida e "Tecnologia Própria" ao lado do selo Superlógica (Quem Somos).
- **Ícones um pouco mais finos no header e no rodapé:** a fonte local de ícones usa um tamanho só (24). A versão variável seria bem mais pesada.
