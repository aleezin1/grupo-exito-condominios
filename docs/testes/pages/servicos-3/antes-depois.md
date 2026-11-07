# Antes e depois — Serviços 3 (Gestão Operacional)

**Antes:** a versão nova do integrante, enviada pelo git em 04/11/2026 e trazida pelo líder em 06/11/2026. Não houve versão enviada pelo ClickUp. Onde a versão anterior do projeto era diferente, isso aparece na tabela.
**Depois:** a versão final, fechada em 06/11/2026 (`pages/servicos-3.html` + bloco `PÁGINA: servicos-3.html` do `css/style.css` + foto em `img/servicos-3/`).

O relatório com os requisitos do professor está em [servicos-3.md](servicos-3.md).

---

## Resumo

| Parte | Antes | Depois |
| --- | --- | --- |
| `<body>` | Sem classe | `<body class="pagina-servicos-3">` |
| CSS carregado | `css/paleta.css`, `css/layout.css`, a fonte Manrope do Google Fonts e um `<style>` de 125 linhas no `<head>` | Só o `css/style.css` |
| Topo da página | `<h1>` solto, uma frase em `<strong class="intro">` e a foto logo abaixo | Componente do site `.ex-hero`, com a foto de fundo |
| Conteúdo | Tudo dentro de um `<article>` sem título próprio | `<div class="conteudo">` dentro do container do site `.ex-container` (1200px) |
| Rótulos das seções | `<strong>` com dois tracinhos e maiúsculas digitadas ("-- BENEFÍCIOS DA GESTÃO OPERACIONAL") | `<span class="ex-sobretitulo">` com o texto normal |
| Cabeçalho das seções | Rótulo, `<h2>` e `<p>` soltos | Componente do site `.ex-cabecalho` |
| Cards de "O que fazemos" | `<section class="card">` com `<h3>` (na versão anterior do projeto, tabelas de uma coluna) | `<article class="card">` com `<h3>` |
| Tabela "O que está incluso" | Sem legenda e sem `scope`, com um comentário em cada linha e célula | `<caption>` e `scope="col"`, sem os comentários |
| Botões do fim | `.link1` e `.link2`, azul-marinho com fundo verde e vermelho ao passar o mouse (na versão anterior do projeto, verde e vermelho) | Botões do site `.ex-botao--primario` e `.ex-botao--secundario` |
| Foto | `img/gestora-orientando-equipe.png`, caminho quebrado (na versão anterior do projeto, `img/img1.png` com 1.255 KB) | `img/servicos-3/gestor-orientando-equipe.jpg`, 120 KB |
| Fonte da foto | Não indicada | Nota no fim da página |
| Logo | Sem `srcset` | Com `srcset` (1x e 2x) |
| Menu do celular | `js/menu.js` comentado | Ligado |
| Acessibilidade | `js/acessibilidade.js` comentado | Carregado no `<head>` |
| Manifest | `<link rel="manifest">` no `<head>` | Retirado |
| W3C | Não validado | HTML validado; `css/style.css` validado no W3C CSS Validator |

---

## 1. Estrutura do arquivo

### `<head>`

| Antes | Depois |
| --- | --- |
| `<link rel="manifest" href="../img/favicon/site.webmanifest">` | Retirado |
| 2 `preconnect` e 2 links do Google Fonts (Plus Jakarta Sans, Space Grotesk e Material Symbols) | Retirados; as fontes vêm pelo `css/style.css` |
| `<link rel="stylesheet" href="../css/paleta.css">` e `../css/layout.css` | `<link rel="stylesheet" href="../css/style.css">` |
| Bloco comentado com `acessibilidade.css`, `assistente.css` e `acessibilidade.js` | `<script src="../js/acessibilidade.js"></script>` |
| Mais um `preconnect` e o link da fonte Manrope | Retirados |
| `<style>` de 125 linhas | Retirado; o visual foi para o bloco da página no `css/style.css` |

### Header

| Antes | Depois |
| --- | --- |
| Comentário "estilo em css/layout.css" | "HEADER COMPARTILHADO (igual ao da home)", sem citar CSS |
| Logo `<img>` sem `srcset` nem tamanho | Logo com `srcset` (1x e 2x), `width="144"` e `height="52"` |

### Footer

| Antes | Depois |
| --- | --- |
| Comentário "estilo em css/layout.css" | "FOOTER COMPARTILHADO (igual ao da home)", sem citar CSS |
| Logo sem `srcset` | Logo com `srcset` (1x e 2x) |
| "Páginas Internas" sem o orçamento | Link "Orçamento de Hospedagem" na lista e na linha do © |
| — | Menu "Docs" com o link "Painel do projeto" |
| — | Link "Política de Privacidade" na linha do © |
| `menu.js` e `assistente.js` comentados | `<script src="../js/menu.js">` e `<script src="../js/cookies.js">` |

---

## 2. Estrutura do conteúdo

| Antes | Depois |
| --- | --- |
| `<body>` | `<body class="pagina-servicos-3">` |
| `<main>` | `<main>` |
| `  <article>` | — |
| `    <h1> Gestão Operacional </h1>` | `  <section class="ex-hero">` com `<span class="ex-hero__rotulo">Serviços</span>` e `<h1 class="ex-hero__titulo">Gestão Operacional</h1>` |
| `    <strong class="intro">` | `    <p class="ex-hero__texto">` |
| `    <img src="../img/gestora-orientando-equipe.png">` | Foto de fundo do `.ex-hero`, pelo CSS |
| — | `  <div class="ex-container">` + `<div class="conteudo">` |
| `    <section>` + `<strong> -- BENEFÍCIOS…</strong>` + `<h2>` + `<p>` | `    <section aria-labelledby="titulo-servicos-3">` + `<div class="ex-cabecalho">` com `.ex-sobretitulo`, `<h2>` e `.ex-subtitulo` |
| `    <section>` "Como funciona", com `<ol>` | Igual, com `aria-labelledby` e `.ex-cabecalho` |
| `    <section>` "O que fazemos", fechada antes dos cards | A seção envolve o cabeçalho e os cards |
| `    <div class="conteiner-flex">` + `<section class="card">` × 2, duas vezes | `<div class="conteiner-flex">` + `<article class="card">` × 2, duas vezes |
| `    <section>` "Escopo", com `<ul>` e `<table>` | Igual, com `aria-labelledby`, `.ex-cabecalho` e `<caption>` na tabela |
| `    <div class="conteiner-link-flex">` + 2 `<div>` com `.link1` e `.link2` | `<div class="conteiner-link-flex">` com os 2 `.ex-botao` direto dentro |
| — | `<p class="ex-nota nota-fonte">` |
| `  </article>` | `</div>` (`.conteudo`) |
| `</main>` | `</main>` |

### Um card de "O que fazemos"

**Antes (versão anterior do projeto):**

```html
<section>
    <table>
        <thead>
            <tr>
                <th> Fornecedores </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td> Contratação, acompanhamento e fiscalização dos prestadores de serviços. </td>
            </tr>
        </tbody>
    </table>
</section>
```

**Antes (versão do integrante, 04/11):**

```html
<section class="card">
    <h3>Fornecedores</h3>
    <p>Contratação, acompanhamento e fiscalização dos prestadores de serviços.</p>
</section>
```

**Depois:**

```html
<article class="card">
    <h3>Fornecedores</h3>
    <p>Contratação, acompanhamento e fiscalização dos prestadores de serviços.</p>
</article>
```

Tabela é para dados em linhas e colunas, e `<section>` precisa de título próprio. Um card que faz sentido sozinho é um `<article>`, com o nome no `<h3>`.

### A tabela "O que está incluso"

**Antes:**

```html
<table>
    <thead>
        <tr> <!-- Primeira linha da tabela -->
            <th> FRENTE </th> <!-- Titulo da primeira coluna-->
            <th> DESCRIÇÃO </th> <!-- Titulo da segunda coluna-->
        </tr>
    </thead>
```

**Depois:**

```html
<table>
    <caption>Frentes incluídas na gestão operacional</caption>
    <thead>
        <tr>
            <th scope="col">FRENTE</th>
            <th scope="col">DESCRIÇÃO</th>
        </tr>
    </thead>
```

O `<caption>` dá nome à tabela, e o `scope="col"` diz ao leitor de tela que cada `<th>` é o título de uma coluna.

---

## 3. Texto

O conteúdo dos textos continuou o mesmo. Mudaram a forma de escrever os rótulos, o rótulo novo do topo, a legenda da tabela e a nota do fim:

| Onde | Antes | Depois |
| --- | --- | --- |
| Rótulo do topo | — | `Serviços` (aparece em maiúsculas pelo CSS) |
| Frase de introdução | Em `<strong>`, logo abaixo do `<h1>` | Texto do topo: "Cuidamos da equipe, manutenção e dos fornecedores do dia a dia do condomínio." |
| Rótulos das seções | `-- BENEFÍCIOS DA GESTÃO OPERACIONAL`, `-- COMO FUNCIONA`, `-- O QUE FAZEMOS`, `-- ESCOPO` | `Benefícios da gestão operacional`, `Como funciona`, `O que fazemos`, `Escopo` (aparecem em maiúsculas pelo CSS) |
| Legenda da tabela | — | "Frentes incluídas na gestão operacional" |
| Texto alternativo da foto | "Gestora orientando a equipe" | A foto virou fundo do topo e não tem mais texto alternativo |
| Fim da página | — | "Foto do topo: Pixabay / gerado por IA." |

Os espaços que sobravam dentro das tags (`<h1> Gestão Operacional </h1>`, `<li> Gestão de porteiros e zeladores </li>`) saíram.

---

## 4. CSS

### Onde fica

| Antes | Depois |
| --- | --- |
| `<style>` de 125 linhas no `<head>` da página | Bloco `PÁGINA: servicos-3.html` do `css/style.css` (linhas 5076 a 5189) |
| Regras sem prefixo (`body`, `h1`, `strong`, `table`…) | Toda regra começa com `.pagina-servicos-3` |
| Foto como `<img>` no conteúdo | Foto de fundo do `.ex-hero` (linhas 5096 a 5098) |

### O que saiu para o padrão de tags

Estas regras mudavam a tipografia ou repetiam o que o site já tem. Saíram, e a página passou a seguir o padrão do site:

| Regra antes | O que fazia |
| --- | --- |
| `body` | Fundo `rgb(248, 250, 253)`, fonte Manrope, altura da linha 1.6 |
| `h1` | Cor `rgb(6, 21, 45)` e 50px |
| `h2` | Cor `rgb(6, 21, 45)` |
| `strong` | Bloco, 20px acima, cor `rgb(82, 96, 113)` (rótulos e introdução) |
| `article img` | Foto com cantos arredondados e margens |
| `th, td` e `tbody td` | Cores do texto da tabela |
| `.card h3` | Cor e tamanho de 1rem |
| `.card p` | Cor do texto |
| `.link1`, `.link2` e os `:hover` | Botões feitos à mão, com fundo verde e vermelho ao passar o mouse |

### O que mudou

| Regra | Antes | Depois |
| --- | --- | --- |
| Caixa do conteúdo | `article`: `max-width: 767px`, `padding: 20px` | `.pagina-servicos-3 .conteudo`: `padding: 0 20px 20px`, dentro do `.ex-container` (1200px) |
| Bordas da tabela e dos cards | `0.1px` | `1px` |
| `.card` | Sem espaço embaixo | `margin-bottom: 30px` |
| `.conteiner-link-flex` | Sem quebra de linha | `flex-wrap: wrap` |
| Legenda da tabela | — | `.pagina-servicos-3 main caption`: à esquerda, com espaço embaixo |
| Nota do fim | — | `.pagina-servicos-3 .nota-fonte`: centralizada, com espaço acima |
| Celular | Sem `@media` | `@media (max-width: 640px)`: um card embaixo do outro e 16px entre os botões |

### O que ficou

| Regra | Valores |
| --- | --- |
| Espaço entre as seções | `margin-bottom: 30px` |
| Tabela | Fundo branco, borda `rgb(226, 232, 240)`, cantos de 16px, largura total |
| Células | Borda `rgb(226, 232, 240)`, `padding: 10px`, texto à esquerda |
| `.conteiner-flex` | Dois cards por linha, 10px entre eles |
| `.card` | Fundo branco, borda `rgb(226, 232, 240)`, cantos de 16px |
| `.card h3` e `.card p` | Sem margem, `padding: 10px`, centralizados |
| `.conteiner-link-flex` | Botões lado a lado no centro, 50px entre eles |

---

## 5. Como fica na tela

| Elemento | Antes | Depois |
| --- | --- | --- |
| Topo | Título azul-marinho de 50px, frase em negrito e a foto (que não carregava) logo abaixo | Faixa com a foto de fundo, película azul-marinho, rótulo "Serviços" em ciano e título branco em maiúsculas |
| Largura do conteúdo | Coluna de 767px | Largura do site (1200px) |
| Rótulos das seções | Negrito cinza, com "--" na frente | Rótulo do site: pequeno, negrito, maiúsculas, teal |
| Cabeçalho das seções | Sem separação | Linha fina embaixo do texto de apoio |
| Títulos dos cards | 1rem | `h3` padrão do site |
| Botões do fim | Azul-marinho, verde e vermelho ao passar o mouse | "Solicitar orçamento" azul-marinho e "Voltar para serviços" branco com borda, em maiúsculas |
| Celular | Cards lado a lado | Um card embaixo do outro |
| Logo do header e do rodapé | Sem nitidez | Nítido (versões 1x e 2x) |
| Botão de acessibilidade | — | Aparece também aqui |
| Nota da fonte | — | Texto pequeno e centralizado no fim da página |
| Listas, cards e tabela | — | Mesmos textos e mesma ordem |
