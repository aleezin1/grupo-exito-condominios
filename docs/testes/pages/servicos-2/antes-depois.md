# Antes e depois — Serviços 2 (Gestão Financeira)

**Antes:** a página como estava no projeto em 06/11/2026. Não houve versão enviada pelo ClickUp. O conteúdo é o mesmo da versão salva no git em 14/10/2026.
**Depois:** a versão final, fechada em 06/11/2026 (`pages/servicos-2.html` + bloco `PÁGINA: servicos-2.html` do `css/style.css` + `img/servicos-2/analise-financeira.jpg`).

O relatório com os requisitos do professor está em [servicos-2.md](servicos-2.md).

---

## Resumo

| Parte | Antes | Depois |
| --- | --- | --- |
| `<body>` | `<body class="fundo-escuro">` | `<body class="pagina-servicos-2">` |
| CSS carregado | 4 arquivos separados, com comentário acima | Só o `css/style.css` |
| Conteúdo principal | Solto no `<body>` | Dentro de `<main>` |
| Largura do conteúdo | `.container` próprio da página | Container do site `.ex-container` (1200px) |
| Topo da página | Um `<h1>` centralizado sobre o fundo escuro | Componente do site `.ex-hero`, com foto |
| Títulos | Dois `<h1>`; os títulos dos cards em `<h2>` | Um `<h1>`, um `<h2>` e os títulos dos cards em `<h3>` |
| Cards | Seis `<section class="card">` com todos os serviços do grupo | Quatro `<article class="card">` só sobre a gestão financeira |
| Atributos fora do HTML5 | `<ul type="square">` e `height="350px"` | Nenhum (o marcador quadrado vem do CSS) |
| Espaços no HTML | `<br>` | Espaços vêm do CSS |
| Formulário | "Entre em contato conosco", sem campos obrigatórios e com o `formulario.js` comentado | Saiu. O formulário oficial do site fica na Contato |
| Fim da página | O formulário | Botões do site "Solicitar orçamento" e "Voltar para serviços", iguais aos da Serviços 3 |
| Foto | `img/img.png` (1536 × 1024 px, 1.974 KB), na raiz de `img/`, no conteúdo | Foto do topo `img/servicos-2/analise-financeira.jpg` (1200 × 800 px, 135 KB) |
| Fonte da foto | Não indicada | "Foto do topo: Gerado por IA." |
| Cores | Sombras em preto `rgba(0, 0, 0, 0.08)` | Todas da paleta, em `rgb(...)` |
| Rodapé | Sem o link do orçamento de hospedagem e sem o menu "Docs" | Link "Orçamento de Hospedagem" e menu "Docs" |
| Acessibilidade | Sem o `js/acessibilidade.js` | `js/acessibilidade.js` no `<head>` |
| W3C | Não validado | Validado pelo líder em 06/11; `css/style.css` validado no W3C CSS Validator |

---

## 1. Estrutura do arquivo

### `<head>`

| Antes | Depois |
| --- | --- |
| 4 `<link>` de CSS, com comentário acima | `<link rel="stylesheet" href="../css/style.css">` (linha 16) |
| — | `<script src="../js/acessibilidade.js"></script>` (linha 17) |

### Header

| Antes | Depois |
| --- | --- |
| Header compartilhado, com comentário citando o arquivo de CSS | Header compartilhado, com "Serviços" marcado com `aria-current="page"` no menu e no menu do celular |
| Logo sem `srcset` | Logo com `srcset` (1x e 2x) |

### Footer

| Antes | Depois |
| --- | --- |
| Footer compartilhado, com comentário citando o arquivo de CSS | Footer compartilhado |
| — | "Orçamento de Hospedagem" na lista "Páginas internas", depois de "Fale Conosco" |
| — | "Orçamento de Hospedagem" na linha do ©, ao lado da Política de Privacidade |
| — | Menu "Docs", com o link "Painel do projeto" |
| `formulario.js` comentado | `js/menu.js` e `js/cookies.js` carregados no fim do `<body>` (o `formulario.js` saiu junto com o formulário) |

---

## 2. Estrutura do conteúdo

| Antes | Depois |
| --- | --- |
| `<body class="fundo-escuro">` | `<body class="pagina-servicos-2">` |
| — | `<main>` |
| `<h1>Gestão Financeira</h1>` solto | `<section class="ex-hero">` com rótulo, `<h1 class="ex-hero__titulo">Gestão Financeira</h1>` e `<p class="ex-hero__texto">` |
| `<br>` `<br>` | Saíram |
| — | `<div class="ex-container">` |
| `<section class="container">` com a foto e "Da análise à decisão" | `  <section class="secao-analise">` com `<div class="ex-cabecalho">`: `<h2>Da análise à decisão</h2>` e `<p class="ex-subtitulo">` |
| `  <img src="../img/img.png" height="350px" width="400px">` | Saiu do conteúdo: virou a foto do topo |
| `<section>` com o 2º `<h1>` "Soluções completas para a gestão condominial" | Saiu |
| `<div class="cards">` × 2 | `  <div class="solucoes">` com `<div class="cards">` × 2 |
| `  <section class="card">` × 6, com `<h2>` | `    <article class="card">` × 4 (três na 1ª linha, um na 2ª), com `<h3>` |
| `    <ul type="square">` | `      <ul class="lista-quadrado">` |
| `<form class="formulario">` | Saiu |
| — | `  <div class="conteiner-link-flex">` com dois `.ex-botao` |
| — | `  <p class="ex-nota nota-fonte">Foto do topo: Gerado por IA.</p>` |
| — | `</main>` |

### Um card

**Antes:**

```html
<section class="card">
    <h2>Gestão Financeira:</h2>
    <ul type="square">
        <li>Elaboração e acompanhamento da previsão orçamentária;</li>
        <li>pagamentos vencimentos; </li>
        <li>cobrança administrativa;</li>
        <li>balancetes e prestação de contas.</li>
    </ul>
</section>
```

**Depois:**

```html
<article class="card">
    <h3>Como funciona nossa gestão financeira</h3>
    <ul class="lista-quadrado">
        <li>Diagnóstico da situação financeira do condomínio.</li>
        <li>Organização e controle das receitas e despesas.</li>
        <li>Fechamento mensal e conciliação bancária.</li>
        <li>Envio da prestação de contas aos síndicos e condôminos.</li>
    </ul>
</article>
```

Cada card faz sentido sozinho, por isso é um `<article>` com o seu título. O marcador quadrado saiu do atributo `type` e foi para o CSS.

---

## 3. Texto

| Onde | Antes | Depois |
| --- | --- | --- |
| Topo | Só o título "Gestão Financeira" | Rótulo "Serviços", título "Gestão Financeira" e a frase "Previsão orçamentária, cobrança, balancetes e prestação de contas transparente para o seu condomínio.", tirada da descrição da página |
| "Da análise à decisão" | Título e parágrafo ao lado da foto | Mesmo título e mesmo parágrafo, no cabeçalho padrão do site (`.ex-cabecalho`) |
| 2º título | "Soluções completas para a gestão condominial" | Saiu |
| Cards | Seis cards com todos os serviços do grupo ("Gestão de Recursos Humanos:", "Gestão Administrativa:", "Gestão Financeira:", "Gestão Operacional:", "Departamento Jurídico:" e "Assembleias e Tecnologia:"), com títulos terminando em ":" e frases cortadas ("Nas rotinas de colaboradores documentos;", "pagamentos vencimentos;") | Quatro cards sobre a gestão financeira: "Soluções que garantem uma gestão financeira eficiente", "Mais controle e segurança para as finanças do seu condomínio", "Como funciona nossa gestão financeira" e "Como funciona nosso planejamento financeiro" |
| Pontuação | "financeiras.." e "condomínio.." | Um ponto só |
| Fim da página | Formulário "Entre em contato conosco" | Botões "Solicitar orçamento" e "Voltar para serviços" |
| Nota | — | "Foto do topo: Gerado por IA." |

---

## 4. Imagem

| Antes | Depois | Tamanho antes → depois |
| --- | --- | --- |
| `img/img.png` (1536 × 1024 px), no conteúdo, com `alt="pessoas analisando documentos"` | `img/servicos-2/analise-financeira.jpg` (1200 × 800 px), foto de fundo do topo | 1.974 KB → 135 KB |

---

## 5. CSS

### Onde fica

| Antes | Depois |
| --- | --- |
| 4 arquivos separados, carregados pela página | Bloco `PÁGINA: servicos-2.html` dentro do `css/style.css` (linhas 4991 a 5073) |
| Regras sem prefixo (`.container`, `.cards`, `.card`, `p`…): valiam para qualquer página | Toda regra começa com `.pagina-servicos-2` |

### O que saiu para o padrão de tags do site

| Antes | Depois |
| --- | --- |
| CSS da página mudando tamanhos e cores de texto (`.card h2`, `.card ul`, `p` em branco) | Sem tipografia na página: fonte, tamanhos e cores de `h1`, `h2`, `h3`, `p` e listas vêm do bloco GLOBAL |
| Fundo da página inteira azul-escuro (`#00245d`) | Topo `.ex-hero` com película azul-marinho; conteúdo no fundo claro do site |
| `.container` e `.texto-centralizado` próprios | `.ex-container` do site (1200px) e `.ex-cabecalho` |
| `.formulario` e `.botao` próprios | Saíram com o formulário; os botões do fim são o `.ex-botao` |
| Regras sem uso (`h4`, `.footer`, `.rodape-final`, `.titulo_*`, `.container_header`) | Saíram |
| Regras vazias | Saíram |

### O que mudou

| Regra | O que faz |
| --- | --- |
| `.ex-hero` (5011) | Foto de fundo `img/servicos-2/analise-financeira.jpg` |
| `main .ex-container` (5017) | Espaço de baixo do conteúdo (40px); os 50px de cima vêm do `.ex-hero` |
| `.cards` (5022) | Cards lado a lado no centro, 35px entre eles, quebrando linha quando não cabem |
| `.card` (5031) | Card branco de até 360px (três por linha nos 1200px), borda cinza-clara, cantos de 8px e sombra navy |
| `.card h3` (5042) | Sem margem em cima e 25px até a lista |
| `.lista-quadrado` (5048) | Marcador quadrado (antes era o atributo `type="square"`) |
| `.conteiner-link-flex` (5054) | Botões no centro, 50px entre eles; 16px no celular (`@media` 640 px, linha 5069) |
| `.nota-fonte` (5063) | Nota centralizada no fim; texto e cor vêm do `.ex-nota` |

### O que ficou

* Os valores do grupo de cards: 35px entre os cards, 30px de margem, quebra de linha, e nos cards 30px de espaço interno, cantos de 8px e altura mínima de 250px.
* O marcador quadrado nas listas, agora pelo CSS.

### Cores

| Antes | Uso | Depois (paleta) |
| --- | --- | --- |
| `#0c0b0b` | Borda dos cards | `rgb(226, 232, 240)` |
| `white` | Fundo dos cards | `rgb(255, 255, 255)` |
| `rgba(0, 0, 0, 0.08)` | Sombra dos cards | `rgba(6, 21, 45, 0.08)` |

---

## 6. Como fica na tela

| Elemento | Antes | Depois |
| --- | --- | --- |
| Fundo | Azul-escuro na página inteira | Topo com foto e película azul-marinho; conteúdo em fundo claro |
| Topo | Título branco centralizado | Faixa com foto, rótulo "Serviços", título e a frase da descrição |
| Logo do header e do rodapé | — | Nítido (versões 1x e 2x) |
| "Da análise à decisão" | Faixa azul com a foto à esquerda e o texto ao lado | Título e subtítulo no padrão do site, sem foto |
| Cards | Seis cards de borda quase preta, em duas linhas de três | Quatro cards brancos de borda cinza-clara e sombra suave: três na primeira linha e o quarto sozinho, centralizado, na segunda. No celular, um embaixo do outro |
| Fim da página | Formulário branco com botão azul | Dois botões centralizados, iguais aos da Serviços 3 |
| Nota de fonte | — | Texto pequeno, centralizado e legível no fim da página |
| Botão de acessibilidade | Não aparecia | Aparece no canto da tela |
