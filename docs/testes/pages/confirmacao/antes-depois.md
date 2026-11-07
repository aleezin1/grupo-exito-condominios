# Antes e depois — Confirmação

**Antes:** a página como estava no projeto antes de 06/11/2026 (`pages/confirmacao.html` + `css/confirmacao.css`). Não houve versão enviada pelo ClickUp: é uma página de apoio do site.
**Depois:** a versão final, fechada em 06/11/2026 (`pages/confirmacao.html` + bloco `PÁGINA: confirmacao.html` do `css/style.css`).

O relatório com os requisitos do professor está em [confirmacao.md](confirmacao.md).

---

## Resumo

| Parte | Antes | Depois |
| --- | --- | --- |
| `<body>` | `<body class="ex-pagina">` | `<body class="pagina-confirmacao">` |
| CSS carregado | 4 arquivos (`paleta.css`, `layout.css`, `componentes.css`, `confirmacao.css`) + 2 folhas do Google Fonts | Só o `css/style.css` |
| `<main>` | `<main class="confirmacao">` | `<main>` sem classe |
| Espaço do título | `style="margin-top: 0.75rem;"` no HTML | Regra no CSS da página |
| Textos | Tamanhos, pesos e fontes definidos no CSS da página | Componentes do site (`.ex-numero`, `.ex-etiqueta`, `.ex-sobretitulo`, `.ex-nota`) |
| Cores | Variáveis (`var()`), `#fff`, `#94a3b8` e, na impressão, `#ccc`, `#000` e `#fff` | Todas da paleta, em `rgb(...)` |
| CSS isolado | Regras sem prefixo | Toda regra começa com `.pagina-confirmacao` |
| Impressão | Escondia também o assistente virtual | Esconde só o que existe: menu, rodapé, botões e o botão de acessibilidade |
| Logo | Sem `srcset` | Nítido (1x e 2x) |
| Rodapé | Sem "Orçamento de Hospedagem" e sem "Docs" | Com os dois |
| W3C | Não validado | HTML fora da validação, por decisão do líder; `css/style.css` validado no W3C CSS Validator |

---

## 1. Estrutura do arquivo

### `<head>`

| Antes | Depois |
| --- | --- |
| `<link rel="manifest" href="../img/favicon/site.webmanifest">` | Retirado |
| 2 `<link rel="preconnect">` e 2 folhas do Google Fonts (textos e ícones) | Retirados: as fontes vêm do `css/style.css` |
| `paleta.css` e `layout.css` | Retirados |
| Comentário com `acessibilidade.css` e `assistente.css` desligados | Retirado |
| `<script src="../js/acessibilidade.js">` | Igual (a página já carregava) |
| `componentes.css` e `confirmacao.css` | Retirados |
| — | `<link rel="stylesheet" href="../css/style.css">` |

O resto do `<head>` continuou igual: `<title>` "Solicitação recebida | Grupo Êxito Condomínios", descrição, `noindex`, cor do tema e ícones.

### Header e footer

| Antes | Depois |
| --- | --- |
| Comentários "estilo em css/layout.css" | "HEADER COMPARTILHADO (igual ao da home)" e "FOOTER COMPARTILHADO (igual ao da home)" |
| Logo sem `srcset` | Logo com `srcset` 1x e 2x, `width="144"` e `height="52"` |
| Rodapé: "Páginas Internas" sem "Orçamento de Hospedagem" | Com "Orçamento de Hospedagem", na lista e na linha do ©, ao lado de "Política de Privacidade" |
| — | Menu "Docs" com o link "Painel do projeto" |

### Scripts

| Antes | Depois |
| --- | --- |
| `js/menu.js` | Igual |
| Comentário com `assistente.js` desligado | Retirado |
| Código da página que mostra os dados | Igual, mais uma linha: os rótulos do resumo (`<dt>`) recebem a classe `.ex-sobretitulo` |
| — | `js/cookies.js` |

---

## 2. Estrutura do conteúdo

A ordem e as tags continuaram as mesmas. Mudaram só classes:

| Antes | Depois |
| --- | --- |
| `<main class="confirmacao">` | `<main>` |
| `<h1 class="ex-titulo" … style="margin-top: 0.75rem;">` | `<h1 class="ex-titulo confirmacao__titulo">` |
| `<strong class="confirmacao__protocolo-numero">` | `<strong class="ex-numero confirmacao__protocolo-numero">` |
| `<p class="confirmacao__aviso">` | `<p class="ex-nota confirmacao__aviso">` |
| `<span class="confirmacao__passo-numero">` × 4 | `<span class="ex-etiqueta confirmacao__passo-numero">` × 4 |
| `<span class="confirmacao__passo-descricao">` × 4 | `<span class="ex-nota confirmacao__passo-descricao">` × 4 |
| `<span class="confirmacao__prazo">` × 3 | `<span class="ex-etiqueta confirmacao__prazo">` × 3 |
| `<p class="confirmacao__contato">` | `<p class="ex-nota confirmacao__contato">` |
| `<dt>` do resumo sem classe | `<dt class="ex-sobretitulo">` (criado pelo código da página) |

Ficaram iguais: o cartão em `<section>` com o `<h1>`, o "visto" em SVG com `aria-hidden="true"`, o protocolo com o botão "Copiar", o resumo em `<dl>`, os três botões, o aviso de projeto acadêmico e os "Próximos passos" em `<aside>` com `<h2>` e uma `<ol>` de 4 etapas.

---

## 3. Texto

Nenhum texto da página mudou. O que mudou foi o rodapé compartilhado, com o link "Orçamento de Hospedagem" e o menu "Docs".

---

## 4. CSS

### Onde fica

| Antes | Depois |
| --- | --- |
| `css/confirmacao.css`, carregado junto com outros 3 arquivos | Bloco `PÁGINA: confirmacao.html` do `css/style.css` (linhas 5192 a 5509) |
| Regras sem prefixo (`.confirmacao__cartao`, `.ex-header` na impressão…): valiam para qualquer página que carregasse o arquivo | Toda regra começa com `.pagina-confirmacao`, inclusive dentro do `@media print` |
| `.confirmacao` no `<main>` | `.pagina-confirmacao main` |
| Dependia de `paleta.css` e `componentes.css` | Cores escritas direto em `rgb(...)` |

### O que saiu para o padrão de tags e os componentes do site

| Elemento | Antes (no CSS da página) | Depois |
| --- | --- | --- |
| Número do protocolo | Fonte técnica, 26px, negrito, espaçamento de letras | `.ex-numero` |
| Botão "Copiar" | 11px | Tamanho do botão do site |
| Rótulos do resumo (`dt`) | Fonte técnica, 10px, negrito, maiúsculas | `.ex-sobretitulo` |
| Valores do resumo (`dd`) | 14px, peso 600 | Padrão do site |
| Aviso do fim do cartão | 12px | `.ex-nota` |
| Título "Próximos passos" | 22px, negrito | `h2` do site |
| Número das etapas | Fonte técnica, 13px, negrito | `.ex-etiqueta` |
| Nome das etapas (`strong`) | 15px | Padrão do site |
| Descrição das etapas | 13px | `.ex-nota` |
| Prazo das etapas | Fonte técnica, 10px, negrito, maiúsculas | `.ex-etiqueta` |
| Contato no fim da coluna | 13px; link com peso 600 | `.ex-nota` |

O bloco da página não muda mais fonte, tamanho, peso nem espaçamento das letras.

### O que mudou

| Antes | Uso | Depois (paleta) |
| --- | --- | --- |
| `var(--cor-ciano-eletrico-rgb)` / `var(--cor-ciano-eletrico)` | Brilho do fundo, rótulo e números da coluna, prazo, links | `rgb(0, 188, 212)` / `rgba(0, 188, 212, …)` |
| `var(--cor-fundo)` | Fundo da página | `rgb(248, 250, 253)` |
| `var(--cor-superficie)` | Fundo do cartão e do resumo | `rgb(255, 255, 255)` |
| `var(--cor-borda)` | Bordas | `rgb(226, 232, 240)` |
| `var(--sombra-card)` | Sombra do cartão | `0 16px 36px rgba(6, 21, 45, 0.08)` |
| `var(--cor-sucesso)` | "Visto" e etapa feita | `rgb(16, 185, 129)` |
| `var(--cor-teal-rgb)` / `var(--cor-ciano-suave-rgb)` | Caixa tracejada do protocolo | `rgba(0, 104, 118, 0.45)` / `rgba(214, 247, 255, 0.45)` |
| `var(--cor-navy-profundo)` | Fundo dos próximos passos | `rgb(6, 21, 45)` |
| `var(--cor-texto-invertido)`, `#fff` | Texto claro | `rgb(255, 255, 255)` |
| `#94a3b8` | Descrição das etapas e contato | `rgba(255, 255, 255, 0.7)` |
| `rgb(255 255 255 / …)` | Linha, bolinhas e divisória da coluna | `rgba(255, 255, 255, …)` |
| `var(--raio-card)`, `var(--raio-grande)`, `var(--raio-pilula)` | Cantos arredondados | `1.5rem`, `1rem`, `9999px` |
| `word-break: break-word` | Valor longo do resumo | `overflow-wrap: anywhere` |

### O que ficou

* A grade de duas colunas a partir de 960px e de uma coluna no celular.
* O cartão com 2.5rem de espaço (1.5rem até 640px).
* O "visto" desenhado aos poucos, com a animação `confirmacao-traco`.
* A caixa tracejada do protocolo, o resumo em duas colunas a partir de 640px e o campo longo ocupando a linha inteira.
* A coluna azul-marinho com a linha vertical ligando as etapas e a bolinha verde na etapa feita.
* A regra `[hidden]` que esconde o protocolo e o botão "Copiar" quando a página abre sem envio.

Entraram só duas regras pequenas: o espaço do título (antes no `style="..."` do HTML) e, na bolinha das etapas, `box-sizing` e `padding: 0`, para a `.ex-etiqueta` caber no círculo de 32px.

### Impressão ("Salvar comprovante")

| Antes | Depois |
| --- | --- |
| Escondia `.ex-header`, `.ex-rodape`, botões, `.ga-botao`, `.ga-painel` (assistente) e `.ac-botao`, `.ac-painel` (acessibilidade), sem prefixo | Esconde menu, rodapé, botões e o botão de acessibilidade, com o prefixo `.pagina-confirmacao`. O assistente saiu do site e da regra |
| Borda `#ccc`, fundo `#fff`, texto `#000` | Borda `rgb(226, 232, 240)`, fundo `rgb(255, 255, 255)`, texto `rgb(6, 21, 45)` (azul-marinho) |
| Fundo da página e sombras retirados | Igual |

---

## 5. Como fica na tela

| Elemento | Antes | Depois |
| --- | --- | --- |
| Número do protocolo | 26px | `.ex-numero`: 32px (26px no celular) |
| Rótulos do resumo | 10px | `.ex-sobretitulo`: 11px, maiúsculas |
| Título "Próximos passos" | 22px | `h2` do site: 32px |
| Número e prazo das etapas | 13px e 10px | `.ex-etiqueta`: 11px |
| Descrição das etapas e contato | 13px, cinza-azulado | `.ex-nota`: 12px, branco mais suave |
| Logo do header e do rodapé | Sem nitidez | Nítido (versões 1x e 2x) |
| Comprovante impresso | Preto sobre branco, bordas cinza | Azul-marinho sobre branco, bordas da paleta |
| Cartão, "visto", caixa do protocolo, botões e coluna azul-marinho | — | Iguais |
