# Antes e depois — Quem Somos

**Antes:** o que veio pelo ClickUp (`quem-somos-clickup.html`, enviado pelo Anthony).
**Depois:** a versão final, fechada em 01/11/2026 e com o registro atualizado em 06/11/2026 (`pages/quem-somos.html` + bloco `PÁGINA: quem-somos.html` do `css/style.css`).

O relatório com os requisitos do professor está em [quem-somos.md](quem-somos.md).

---

## Resumo

| Parte | Antes (ClickUp) | Depois (final) |
| --- | --- | --- |
| Arquivo | Página solta, sem ligação com o resto do site | Página do site, com o mesmo `<head>`, header e footer das outras |
| `<title>` | "Quem Somos \| Grupo Êxito **Imóveis**" | "Quem Somos \| Grupo Êxito **Condomínios**" |
| Metas, favicon, fontes | Não tinha | `description`, `robots`, `theme-color`, favicon e as fontes do projeto (via `style.css`) |
| Header e footer | Não tinha | Os compartilhados do site, com "Quem Somos" marcado no menu |
| Menu do celular (`menu.js`) | Não tinha | Tem |
| CSS | Bloco `<style>` dentro do HTML (cerca de 170 linhas) | Bloco `PÁGINA: quem-somos.html` do `css/style.css`, o arquivo único de CSS do site |
| Topo da página | Título "Quem Somos" e subtítulo centralizados, no fundo claro | Topo com foto de ponta a ponta (componente `.ex-hero`): rótulo "Quem somos", título "Grupo Êxito Condomínios — conheça mais sobre o grupo." e o texto "Gestão que gera tranquilidade." sobre a foto |
| Conteúdo principal | `<div class="container">` (até 1000px) | `<main>` com o conteúdo dentro de um `.ex-container` (largura-base do site, 1200px) |
| Blocos | Só `<div>` e 1 `<section>` | 2 `<section>` (Valores e Diferenciais), cada uma com título |
| Nome da empresa no texto | "Grupo Êxito **Imóveis**" (2 vezes) | "Grupo Êxito **Condomínios**" |
| Visão | "administração **imobiliária**" | "administração **condominial**" |
| Fonte | Arial | Plus Jakarta Sans (a fonte do projeto) |
| Cores | Da paleta, com 1 sombra preta | Todas da paleta |
| Multimídia | Não tinha | Vídeo local `assets/video.mp4` (`<video controls>` com capa), apresentado como um especialista da empresa, com aviso de que é ilustrativo e crédito ao autor original |
| Fonte da foto do topo | — | Nota "Foto do topo: Pixabay." no fim da página |
| W3C | Não validado | HTML sem erros (validado de novo em 06/11) e `css/style.css` validado no W3C CSS Validator |

---

## 1. Estrutura do arquivo

**Antes:** o arquivo tinha só o básico do `<head>` e o conteúdo. Aberto sozinho, aparecia sem menu, sem rodapé e sem as fontes do site.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quem Somos | Grupo Êxito Imóveis</title>
    <style>
        /* ... cerca de 170 linhas de CSS ... */
    </style>
</head>
<body>
    <div class="container">
        <!-- conteúdo -->
    </div>
</body>
```

**Depois:** o mesmo padrão de todas as páginas do site.

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quem Somos | Grupo Êxito Condomínios</title>
    <meta name="description" content="Conheça a história, a missão e os valores do Grupo Êxito, ...">
    <meta name="robots" content="noindex, nofollow">
    <meta name="theme-color" content="#06152d">
    <link rel="icon" href="../favicon.ico" sizes="any">
    <!-- ... ícones ... -->
    <link rel="stylesheet" href="../css/style.css">
    <script src="../js/acessibilidade.js"></script>
</head>
<body class="pagina-quem-somos">
    <header class="ex-header"> <!-- menu compartilhado --> </header>
    <main>
        <section class="ex-hero"> <!-- topo com foto --> </section>
        <div class="ex-container"> <!-- conteúdo --> </div>
    </main>
    <footer class="ex-rodape"> <!-- rodapé compartilhado --> </footer>
    <script src="../js/menu.js"></script>
    <script src="../js/cookies.js"></script>
</body>
```

---

## 2. Estrutura do conteúdo

| Antes (ClickUp) | Depois (final) |
| --- | --- |
| `<div class="container">` | `<main>` |
| — | `  <section class="ex-hero">` **(novo: topo com foto)** |
| — | `    <span class="ex-hero__rotulo">Quem somos</span>` |
| `  <h1>Quem Somos</h1>` | `    <h1 class="ex-hero__titulo">Grupo Êxito Condomínios <strong>conheça mais sobre o grupo.</strong></h1>` |
| `  <p class="subtitulo">` | `    <p class="ex-hero__texto">Gestão que gera tranquilidade.</p>` |
| — | `  <div class="ex-container">` (o resto do conteúdo, até 1200px) |
| — | `    <div class="ex-cabecalho">` **(novo: cabeçalho padrão abaixo do topo)** |
| `  <div class="destaque">` (3 parágrafos de apresentação) | Retirada da página |
| `  <h2>Nossa Missão</h2>` + `<p>` | `  <h2>Nossa Missão</h2>` + `<p>` |
| `  <h2>Nossa Visão</h2>` + `<p>` | `  <h2>Nossa Visão</h2>` + `<p>` |
| `  <h2>Nossos Valores</h2>` | `  <h2>Nossos Valores</h2>` |
| `  <div class="valores">` | `  <section class="valores">` |
| `    <div class="valor">` × 3 | `    <div class="valor">` × 3 |
| — | `  <section class="video-especialista">` **(nova)** |
| — | `    <h2>Um especialista explica</h2>` + `<p>` |
| — | `    <figure>` com `<video>` + `<figcaption>` |
| `  <section class="diferenciais">` | `  <section class="diferenciais">` |
| `    <div class="lista-diferenciais">` | `    <div class="lista-diferenciais">` |
| `      <div class="diferencial">` × 4 | `      <div class="diferencial">` × 4 |
| — | `  <p class="nota-fonte">Foto do topo: Pixabay.</p>` **(nova)** |
| `</div>` | `</main>` |

A caixa `.destaque` chegou a virar `<section>`, mas o W3C avisou "Section lacks heading": toda `<section>` precisa de um título, e essa caixa não tem. Como ela é só uma caixa de apresentação, sem título próprio, voltou a ser `<div>`.

---

## 3. Texto

| Onde | Antes (ClickUp) | Depois (final) |
| --- | --- | --- |
| `<title>` | Quem Somos \| Grupo Êxito **Imóveis** | Quem Somos \| Grupo Êxito **Condomínios** |
| 1º parágrafo | O **Grupo Êxito Imóveis** atua na administração de condomínios… | O **Grupo Êxito Condomínios** atua na administração de condomínios… |
| Nossa Visão | Ser reconhecido como um grupo de referência em gestão e **administração imobiliária**, destacando-se… | Ser reconhecido como um grupo de referência em **administração condominial**, destacando-se… |
| Título dos diferenciais | Por que escolher o Grupo Êxito **Imóveis**? | Por que escolher o Grupo Êxito **Condomínios**? |

O resto do texto (subtítulo, 2º e 3º parágrafos, Missão, valores e diferenciais) ficou igual ao que veio do ClickUp.

---

## 4. Vídeo do especialista (novo)

Não veio no ClickUp. Foi acrescentado ao fechar a página (01/11), primeiro como `<iframe>` do YouTube. Em 06/11 passou a ser um vídeo do próprio site, em `assets/video.mp4`, com capa.

```html
<section class="video-especialista">
    <h2>Um especialista explica</h2>
    <p>Neste vídeo, um especialista explica o que é administração condominial ...</p>
    <figure>
        <video controls preload="metadata" poster="../img/quem-somos/capa-video-especialista.jpg"
               width="1280" height="720">
            <source src="../assets/video.mp4" type="video/mp4">
            <p>Seu navegador não reproduz vídeo. <a href="../assets/video.mp4">Baixe o vídeo</a>.</p>
        </video>
        <figcaption>
            Vídeo ilustrativo: nesta página ele representa um especialista do Grupo Êxito Condomínios,
            que é uma empresa fictícia criada para um projeto acadêmico. O vídeo original é de
            Felipe Lima, do canal Manutenção Predial (assistir no YouTube), e é usado aqui só para
            fins educacionais.
        </figcaption>
    </figure>
</section>
```

- **Na história do site:** o vídeo faz o papel de um especialista do Grupo Êxito Condomínios explicando o assunto.
- **Na legenda:** fica claro que isso é ficção e de quem é o vídeo de verdade, como o professor pede para conteúdo que não é do grupo.
- **Capa:** antes de tocar, aparece um quadro do próprio vídeo (`poster`).
- **No CSS:** o vídeo ocupa a largura toda do conteúdo, no formato 16:9, com fundo azul-marinho enquanto carrega, com a mesma borda, o mesmo raio e a mesma sombra dos cards. A legenda é menor (14px), na cor de texto secundário `rgb(82, 96, 113)`.

---

## 5. CSS

### Onde fica

| Antes (ClickUp) | Depois (final) |
| --- | --- |
| `<style>` dentro do HTML | Bloco `PÁGINA: quem-somos.html` do `css/style.css` (linhas 2110 a 2293) |
| Valia para qualquer coisa na página, inclusive `body`, `h1`, `h2` e `p` soltos | Toda regra começa com `.pagina-quem-somos`, então só vale nesta página, mesmo com o site inteiro num arquivo só |
| A página carregava o próprio CSS | A página carrega só o `css/style.css`, que tem o bloco global, o header, o footer e um bloco para cada página |

### O que saiu (agora vem do padrão das tags, no bloco global do `css/style.css`)

| Regra que veio do ClickUp | Por que saiu |
| --- | --- |
| `body { font-family: Arial; color; background-color; margin: 0; line-height }` | A fonte, as cores e o espaçamento do `body` são iguais em todo o site |
| `h1 { font-size: 48px; color: navy }` | Tamanho e cor do `<h1>` são iguais em todo o site. Ficou só o `text-align: center` da página |
| `h2 { font-size: 30px; color: teal }` | Tamanho e cor do `<h2>` são iguais em todo o site. Ficaram só os espaços acima e abaixo |
| `p { font-size: 17px; color }` | Tamanho e cor do texto são iguais em todo o site |
| No `@media` do celular: `h1 { 36px }` e `h2 { 26px }` | O padrão do site já diminui os títulos no celular |

### O que mudou

| Regra | Antes (ClickUp) | Depois (final) |
| --- | --- | --- |
| Todas | `.destaque { … }` | `.pagina-quem-somos .destaque { … }` (o mesmo para todas as regras, inclusive as do `@media`) |
| Sombra dos cards de diferenciais | `rgba(0, 0, 0, 0.08)` (preto, fora da paleta) | `rgba(6, 21, 45, 0.08)` (navy da paleta, igual às outras sombras) |

### O que ficou igual

`.destaque`, `.valores`, `.valor` (com o efeito ao passar o mouse), `.diferenciais`, `.descricao-diferenciais`, `.lista-diferenciais`, `.diferencial` (com o efeito ao passar o mouse) e o `@media (max-width: 700px)` dos cards. Todas as cores continuam sendo as da paleta, escritas em `rgb(...)`.

### Como isso aparece na tela

| Elemento | Antes (ClickUp) | Depois (final) |
| --- | --- | --- |
| Fonte | Arial | Plus Jakarta Sans |
| Título do topo | "Quem Somos", 48px, navy, centralizado no fundo claro | "Grupo Êxito Condomínios — conheça mais sobre o grupo.", branco, em maiúsculas, sobre a foto do topo, com o rótulo "Quem somos" em ciano acima |
| Títulos Missão, Visão, Valores | 30px, **teal** | 32px, **navy** (o mesmo dos outros títulos do site) |
| Parágrafos | 17px | 16px (mesma cor) |
| Título e cards dos diferenciais | Faixa navy, título branco, cards brancos | Igual |
| Cards de valores e diferenciais | Brancos, título teal, sobem ao passar o mouse | Brancos, título no `h3` padrão do site (azul-marinho), sobem ao passar o mouse |
| Legenda do vídeo e nota da foto | — | Nota do site (`.ex-nota`): 12px, cinza-azulado |
| Logo do header e do rodapé | Sem nitidez | Nítido (versões 1x e 2x) |
| Fundo da página | `rgb(248, 250, 253)` | Igual, menos o topo, que tem uma foto da Pixabay (`img/quem-somos/hero-reuniao-condominio.jpg`, 234 KB) com película azul-marinho |
| Espaço do topo até o conteúdo | — | 50px, também no celular (padrão de todas as páginas com topo) |
| Caixa de apresentação (3 parágrafos sobre a empresa) | Logo abaixo do título | Não aparece mais: o líder retirou da página |
| Largura do conteúdo | Até 1000px | Até 1200px |
