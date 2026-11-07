# Antes e depois — Serviços 1 (Gestão Administrativa)

**Antes:** a página como estava no projeto em 06/11/2026, e o reenvio do Arthur pelo ClickUp no mesmo dia.
**Depois:** a versão final, fechada em 06/11/2026 (`pages/servicos-1.html` + bloco `PÁGINA: servicos-1.html` do `css/style.css`).

O relatório com os requisitos do professor está em [servicos-1.md](servicos-1.md).

---

## Resumo

| Parte | Antes | Depois |
| --- | --- | --- |
| `<body>` | Sem classe | `<body class="pagina-servicos-1">` |
| CSS carregado | 4 arquivos separados, com comentários citando os arquivos. No reenvio: Google Fonts, `style.css` com caminho errado e um CSS próprio | Só o `css/style.css` |
| Início do arquivo (reenvio) | Marcadores de conflito do git no `<head>` (`<<<<<<<`, `=======`, `>>>>>>>`) | Sem marcadores |
| Conteúdo principal | Num `<div class="container">` solto | Dentro de `<main>` |
| Largura do conteúdo | `.container` próprio da página | Container do site `.ex-container` (1200px) |
| Topo da página | O `<h1>` dentro de uma caixa | Componente do site `.ex-hero`, com foto |
| Seções | Só uma `<section>`, com o `<h1>`. "Benefícios", "Como Funciona" e "O que está incluso?" soltos | "Detalhes do serviço" e "O que está incluso?", cada uma numa `<section>` com título |
| Benefícios e Como funciona | Listas soltas | Dois cards em `<article>` |
| Tabela | `<thread>` no lugar de `<thead>`, `border` e `cellspacing`, sem `<caption>` e sem `scope` | `<thead>`, `<caption>`, `scope="col"` e `scope="row"` |
| Atributos fora do HTML5 | `text align`, `border`, `cellspacing` | Nenhum |
| Espaços no HTML | `<p></p>` vazio e `<br>` | Espaços vêm do CSS |
| Links do fim | "Solicite um orçamento" e "Voltar para os serviços" | Botões do site "Solicitar orçamento" e "Voltar para serviços", centralizados, iguais aos da Serviços 3 |
| Menu do celular | `menu.js` comentado: o menu não abria | Funciona |
| Foto | `img/reuniao.jfif` (663 × 461 px), na raiz de `img/`, no conteúdo. No reenvio, apontava para esse arquivo, que já não existia | Foto do topo `img/servicos-1/hero-servicos-1.jpg` (663 × 461 px, 58 KB). Sem foto no conteúdo |
| Fonte das fotos | Não indicada | "Foto do topo: gerado por IA." |
| Ortografia | "administratica" e "Acessoria jurídica" | "administrativa" e "Assessoria jurídica" |
| Rodapé | Sem o link do orçamento de hospedagem | Link "Orçamento de Hospedagem" em "Páginas internas" e na linha do © |
| Acessibilidade | Sem o `js/acessibilidade.js` | `js/acessibilidade.js` no `<head>` |
| W3C | Não validado | Validado pelo líder em 06/11 |

---

## 1. Estrutura do arquivo

### `<head>`

| Antes | Depois |
| --- | --- |
| 4 `<link>` de CSS, com comentário acima | `<link rel="stylesheet" href="../css/style.css">` |
| Reenvio: marcadores de conflito do git, Google Fonts e CSS próprio | Saíram |
| — | `<script src="../js/acessibilidade.js"></script>` |

### Header

| Antes | Depois |
| --- | --- |
| Header compartilhado, com comentário citando o arquivo de CSS | Header compartilhado, com "Serviços" marcado com `aria-current="page"` no menu e no menu do celular |
| `<script src="../js/menu.js">` comentado | `js/menu.js` carregado no fim do `<body>`: o menu do celular abre |

### Footer

| Antes | Depois |
| --- | --- |
| Footer compartilhado, com comentário citando o arquivo de CSS | Footer compartilhado |
| — | "Orçamento de Hospedagem" na lista "Páginas internas", depois de "Fale Conosco" |
| — | "Orçamento de Hospedagem" na linha do ©, ao lado da Política de Privacidade |

---

## 2. Estrutura do conteúdo

| Antes | Depois |
| --- | --- |
| `<body>` | `<body class="pagina-servicos-1">` |
| — | `<main>` |
| `<div class="container">` | `<section class="ex-hero">` (topo com foto) |
| `  <section>` com o `<h1>` | `  <h1 class="ex-hero__titulo">Gestão Administrativa</h1>` |
| `  <p>` (1º parágrafo) | `  <p class="ex-hero__texto">` |
| — | `<div class="ex-container">` |
| `  <p>` (2º parágrafo) | `  <section class="detalhes">` com `<div class="ex-cabecalho">`: `<h2>Detalhes do serviço</h2>` e `<p class="ex-subtitulo">` |
| `  <img src="../img/reuniao.jfif">` | Saiu do conteúdo |
| `  <h2>Benefícios</h2>` e lista | `    <article class="servico">` com `<h3>Benefícios</h3>` e `<ul>` |
| `  <h2>Como Funciona</h2>` e lista | `    <article class="servico">` com `<h3>Como funciona</h3>` e `<ol>` |
| `  <h2 text align="center">O que está incluso?</h2>` | `  <section class="incluso">` com `<h2>O que está incluso?</h2>` |
| `  <table border="1" cellspacing="1">` | `    <table>` dentro de `<div class="tabela-wrapper">` |
| — | `      <caption>Itens incluídos na Gestão Administrativa</caption>` |
| `    <thread>` | `      <thead>` |
| `<th>` sem `scope` | `      <th scope="col">` no cabeçalho e `<th scope="row">` na 1ª coluna |
| `  <p></p>` e `<br>` | Saíram |
| Links "Solicite um orçamento" e "Voltar para os serviços" | `  <div class="conteiner-link-flex">` com dois `.ex-botao` |
| — | `  <p class="ex-nota nota-fonte">Foto do topo: gerado por IA.</p>` |
| — | `</main>` |

### A tabela

**Antes** (registrado na revisão de 06/11):

```html
<h2 text align="center">O que está incluso?</h2>
<table border="1" cellspacing="1">
    <thread>
        ...
    </thread>
```

**Depois:**

```html
<h2 id="titulo-incluso">O que está incluso?</h2>
<div class="tabela-wrapper">
    <table aria-labelledby="titulo-incluso">
        <caption>Itens incluídos na Gestão Administrativa</caption>
        <thead>
            <tr>
                <th scope="col">Item</th>
                <th scope="col">Descrição</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">Atas e documentos</th>
                <td>Organização e arquivamento digital</td>
            </tr>
            ...
```

`<caption>` diz do que a tabela trata, e `scope` diz ao leitor de tela se o cabeçalho vale para a coluna ou para a linha.

---

## 3. Texto

O conteúdo dos textos continuou o do Arthur. Mudaram a ortografia, os botões do fim e a nota nova:

| Onde | Antes | Depois |
| --- | --- | --- |
| 2º parágrafo | "organização administratica" | "organização administrativa" |
| Lista "Benefícios" | "Acessoria jurídica" | "Assessoria jurídica básica" |
| Título da 2ª lista | "Como Funciona" | "Como funciona" |
| Topo | Só o título | Rótulo "Serviços", título "Gestão Administrativa" e o 1º parágrafo da introdução |
| Título da seção | — | "Detalhes do serviço", com o 2º parágrafo embaixo |
| Botão de orçamento | "Solicite um orçamento" (depois "Solicite um orçamento sem compromisso.") | "Solicitar orçamento" |
| Botão de voltar | "Voltar para os serviços" (depois "← Voltar para os serviços") | "Voltar para serviços" |
| Fim da página | — | "Foto do topo: gerado por IA." |

---

## 4. CSS

### Onde fica

| Antes | Depois |
| --- | --- |
| 4 arquivos separados, carregados pela página | Bloco `PÁGINA: servicos-1.html` dentro do `css/style.css` (linhas 4869 a 4987) |
| Reenvio: CSS próprio e Google Fonts | Saíram |
| Regras sem prefixo (`.container`, `.botao`, `table`…): valiam para qualquer página | Toda regra começa com `.pagina-servicos-1` |

### O que saiu para o padrão de tags do site

| Antes | Depois |
| --- | --- |
| CSS da página mudando tamanhos de texto | Sem tipografia na página: fonte, tamanhos e cores de `h1`, `h2`, `h3`, `p` e da tabela vêm do bloco GLOBAL |
| `.container` próprio | `.ex-container` do site (1200px) |
| `.botao` próprio | `.ex-botao` (primário e secundário) |
| Bordas e cabeçalho da tabela na página | Padrão das tags da tabela no bloco GLOBAL |
| Topo montado na página | Componente `.ex-hero`; a página só define a foto de fundo |
| Regras do layout anterior (`.retangulo`, `.titulo-incluso`) | Saíram |

### O que mudou

| Regra | O que faz |
| --- | --- |
| `.ex-hero` (4889) | Foto de fundo `img/servicos-1/hero-servicos-1.jpg` |
| `main .ex-container` (4895) | Espaço de baixo do conteúdo (1.5rem); os 50px de cima vêm do `.ex-hero` |
| `main a:focus-visible` (4900) | Contorno teal de 3px no foco do teclado |
| `.servicos-grade` (4909) | Grade automática dos cards, mínimo 16rem: 2 lado a lado no computador, um embaixo do outro no celular |
| `.servico` (4916) | Card branco, borda cinza-clara, linha teal de 3px em cima, cantos de 0.75rem e sombra navy |
| `.incluso` (4939) | 4rem de espaço entre os cards e a tabela |
| `.tabela-wrapper` (4948) | A tabela rola para o lado no celular; largura mínima de 20rem |
| `caption` (4959) | Legenda alinhada à esquerda, com espaço até a tabela |
| `.conteiner-link-flex` (4967) | Botões no centro, 50px entre eles; 16px no celular (`@media` 640 px, linha 4983) |
| `.nota-fonte` (4977) | Nota centralizada no fim |

### O que ficou

* A regra `.foto`, feita para a foto da reunião no conteúdo, saiu em 06/11: a foto da reunião passou a ser a foto do topo.

### Cores

| Cor (paleta) | Uso |
| --- | --- |
| `rgb(0, 104, 118)` | Linha de cima dos cards e contorno do foco |
| `rgb(226, 232, 240)` | Borda dos cards |
| `rgb(255, 255, 255)` | Fundo dos cards |
| `rgba(6, 21, 45, 0.08)` | Sombra dos cards |

---

## 5. Como fica na tela

| Elemento | Antes | Depois |
| --- | --- | --- |
| Topo | Título dentro de uma caixa | Faixa com foto, película azul-marinho, rótulo "Serviços", título e o 1º parágrafo |
| Logo do header e do rodapé | — | Nítido (versões 1x e 2x) |
| "Detalhes do serviço" | — | Título e subtítulo no padrão do site |
| Foto da reunião | No conteúdo | Não aparece no conteúdo |
| Benefícios e Como funciona | Listas soltas, sem card | Dois cards brancos com linha teal em cima, lado a lado no computador |
| Tabela | Bordas do atributo `border` | Bordas e cabeçalho do padrão do site, legenda em cima, rolagem para o lado no celular |
| Botões do fim | Links de texto | Dois botões centralizados, iguais aos da Serviços 3 |
| Menu do celular | Não abria | Abre e fecha |
| Nota de fonte | — | Texto pequeno e centralizado no fim da página |
