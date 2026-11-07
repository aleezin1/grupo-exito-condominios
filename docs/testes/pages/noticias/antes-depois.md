# Antes e depois — Notícias

**Antes:** a página como estava no projeto em 04/11/2026. Não houve versão enviada pelo ClickUp.
**Depois:** a versão final, fechada em 06/11/2026 (`pages/noticias.html` + bloco "PÁGINA: noticias.html" do `css/style.css`).

O relatório com os requisitos do professor está em [noticias.md](noticias.md).

---

## Resumo

| Parte | Antes | Depois |
| --- | --- | --- |
| `<body>` | Sem classe | `<body class="pagina-noticias">` |
| CSS carregado | `css/paleta.css`, `css/layout.css`, duas fontes do Google e um `<style>` dentro do HTML | Só o `css/style.css` |
| `<main>` | `<main class="noticias">` com fundo, fonte e espaços próprios | `<main>` sem classe |
| Topo da página | `<h1>Notícias</h1>` e um parágrafo, sem foto | Componente do site `.ex-hero`, com foto |
| Largura do conteúdo | `.container` próprio (até 1250px) | Container do site `.ex-container` (1200px) |
| Títulos principais | 7 `<h1>`: um da página e um em cada matéria | Um `<h1>` só; matérias em `<h2>` |
| Troca entre lista e matéria | 7 botões de opção escondidos e rótulos "Leia mais" e "Voltar" | Links para `#materia-N` e `#noticias`, com `:target` |
| "Ver notícias mais antigas" | Texto com cara de link, que não levava a lugar nenhum | Retirado |
| Ilustrações | 12 imagens escritas dentro do HTML (`data:image/svg+xml;base64,...`), com cores fora da paleta | Arquivos em `img/noticias/`: 3 fotos e 3 ilustrações com as cores da paleta |
| Tamanho das imagens | Não declarado | `width` e `height` iguais ao arquivo |
| Grade dos cards | Colunas automáticas; podia sobrar card sozinho na última linha | 2 em cima e 3 embaixo no computador; sem card sozinho |
| Cores | Fora da paleta, em hexadecimal | Todas da paleta, em `rgb(...)` |
| Títulos | Até 56px, em cinza | Padrão das tags do site |
| Fonte das imagens | Não indicada | Nota no fim da página |
| Aviso de conteúdo fictício | Não tinha | Nota no fim da página |
| W3C | Não validado | Validado pelo líder em 06/11/2026 |

---

## 1. Estrutura do arquivo

### `<head>`

| Antes | Depois |
| --- | --- |
| `<link rel="manifest">` | Retirado |
| 2 `<link rel="preconnect">` e 2 fontes do Google | Retirados |
| `<link rel="stylesheet" href="../css/paleta.css">` | `<link rel="stylesheet" href="../css/style.css">` (linha 15) |
| `<link rel="stylesheet" href="../css/layout.css">` | — |
| Comentário com `acessibilidade.css` e `assistente.css` | Retirado |
| `<script src="../js/acessibilidade.js">` | `<script src="../js/acessibilidade.js">` (linha 16), logo depois do `style.css` |
| `<style>` com todo o CSS da página | Retirado; o CSS foi para o `css/style.css` |

### Header

| Antes | Depois |
| --- | --- |
| Comentário "estilo em css/layout.css, igual ao da home" | "HEADER COMPARTILHADO (igual ao da home)" |
| Logo sem `srcset`, sem `width` e `height` | Logo com `srcset` (1x e 2x), 144 × 52 |

### Footer

| Antes | Depois |
| --- | --- |
| Comentário "estilo em css/layout.css, igual ao da home" | "FOOTER COMPARTILHADO (igual ao da home)" |
| Logo sem `srcset` | Logo com `srcset` (1x e 2x) |
| "Páginas Internas" sem "Orçamento de Hospedagem" | Link "Orçamento de Hospedagem" na lista e na linha do © |
| `<script src="../js/menu.js">` e o `assistente.js` comentado | `menu.js` e `cookies.js` |

---

## 2. Estrutura do conteúdo

| Antes | Depois |
| --- | --- |
| `<main class="noticias">` | `<main>` |
| — | `<section class="ex-hero">` com rótulo, `<h1>` e texto |
| `<div class="container">` | `<div class="ex-container noticias-pagina">` |
| 7 × `<input type="radio" name="v">` | Retirados |
| — | `<div class="ex-cabecalho">` com `<h2 id="titulo-noticias">` e subtítulo |
| `<div class="lista-view">` | `<div class="lista-view" id="noticias">` |
| `  <h1>Notícias</h1>` e `<p class="intro">` | Foram para o topo `.ex-hero` |
| `  <article class="destaque">` | `  <article class="destaque">` |
| `  <div class="lista">` com 5 `<article class="card">` | Igual |
| `  <div class="rodape"><span>Ver notícias mais antigas</span></div>` | Retirado |
| `<div class="materia-view m1">` × 6 | `<div class="materia-view" id="materia-1">` × 6 |
| `  <label class="voltar" for="v0">` | `  <a class="link-seta link-voltar" href="#noticias">` |
| `    <h1>` em cada matéria | `    <h2>` em cada matéria |
| — | `<p class="ex-nota nota-fonte">` |

### Um card

**Antes:**

```html
<article class="card">
  <div class="capa"><img src="data:image/svg+xml;base64,..." alt="Ilustração sobre manutenção predial"></div>
  <div class="texto">
    <div><span class="categoria">Manutenção</span><span class="data">20/08/2026</span></div>
    <h3>Calendário de manutenção preventiva: o que não pode faltar</h3>
    <p>Elevadores, bombas e extintores: saiba os prazos para cada item.</p>
    <label class="leia-mais" for="v4">Leia mais</label>
  </div>
</article>
```

**Depois:**

```html
<article class="card">
    <div class="capa">
        <img src="../img/noticias/manutencao.svg" width="800" height="450"
            alt="Ilustração sobre manutenção predial">
    </div>
    <div class="texto">
        <div class="meta">
            <span class="ex-etiqueta">Manutenção</span>
            <time class="ex-nota" datetime="2026-08-20">20/08/2026</time>
        </div>
        <h3>Calendário de manutenção preventiva: o que não pode faltar</h3>
        <p>Elevadores, bombas e extintores: saiba os prazos para cada item.</p>
        <a class="link-seta" href="#materia-4"
            aria-label="Leia mais: Calendário de manutenção preventiva: o que não pode faltar">
            <span class="ex-sobretitulo">Leia mais</span>
            <span class="material-symbols-outlined ex-icone--pequeno"
                aria-hidden="true">arrow_forward</span>
        </a>
    </div>
</article>
```

O link leva para a matéria pelo endereço (`#materia-4`). Funciona pelo teclado, e o "voltar" do navegador volta para a lista. O `<time>` diz a data num formato que o navegador entende.

---

## 3. Texto

O texto das notícias e das matérias continuou o mesmo. Mudaram o topo, o cabeçalho e a nota nova:

| Onde | Antes | Depois |
| --- | --- | --- |
| Título da página | `<h1>Notícias</h1>` | Rótulo "Notícias" e `<h1>` "Notícias e artigos **sobre gestão condominial**" no topo |
| Texto de apoio | "Fique por dentro das novidades do mundo condominial." (abaixo do `<h1>`) | O mesmo texto, no topo |
| Cabeçalho da lista | — | "Confira agora as últimas notícias" e "Tudo sobre o mundo dos condomínios" |
| Títulos das matérias | `<h1>` | `<h2>`, com o mesmo texto |
| Link da lista | "+ Leia mais" | "Leia mais" com seta |
| Link da matéria | "← Voltar para notícias" | "Voltar para notícias" com seta |
| "Ver notícias mais antigas" | Na lista | Retirado |
| Fim da página | — | "Notícias fictícias, criadas para um projeto acadêmico. Ilustrações feitas por IA. Foto do topo: gerado por IA." |

---

## 4. Imagens

| Antes | Depois | Tamanho |
| --- | --- | --- |
| — | `hero-noticias.jpg` (foto do topo, 1280 × 885) | 498 KB |
| Ilustração de legislação dentro do HTML | `assembleias-virtuais.jpg` (512 × 279) | 50 KB |
| Ilustração de inadimplência dentro do HTML | `telemetria-predial.jpg` (512 × 279) | 44 KB |
| Ilustração de segurança dentro do HTML | `portaria-remota.svg` (800 × 450) | 1,2 KB |
| Ilustração de manutenção dentro do HTML | `manutencao.svg` (800 × 450) | 1,2 KB |
| Ilustração de convivência dentro do HTML | `equipe-executiva.jpg` (800 × 533) | 73 KB |
| Ilustração de sustentabilidade dentro do HTML | `sustentabilidade.svg` (800 × 450) | 1,2 KB |

Antes, cada desenho estava escrito duas vezes no HTML (no card e na matéria). Agora o card e a matéria apontam para o mesmo arquivo.

---

## 5. CSS

### Onde fica

| Antes | Depois |
| --- | --- |
| `<style>` dentro do `pages/noticias.html` | Bloco "PÁGINA: noticias.html" do `css/style.css` (linhas 3975 a 4262) |
| Regras com o prefixo `.noticias` (a classe do `<main>`) | Toda regra começa com `.pagina-noticias` (a classe do `<body>`) |
| Fundo, fonte e cor do texto definidos no `<main>` | Vêm do site |
| Troca de tela por `#v1:checked ~ .m1` (um seletor por matéria) | `.materia-view:target` e `:has(.materia-view:target)`, que valem para todas |

### O que saiu para o padrão das tags do site

| Antes | Depois |
| --- | --- |
| `.noticias { font-family: Arial, Helvetica, sans-serif; color: #333 }` | Fonte e cor do texto do site |
| `.noticias h1 { font-size: 56px; color: #7a8296 }` | `h1` do componente `.ex-hero` |
| `.noticias .intro { font-size: 20px }` | `.ex-hero__texto` |
| `.noticias .destaque h2 { font-size: 34px; color: #222 }` | `h2` do site |
| `.noticias .card h3 { font-size: 20px; color: #222 }` | `h3` do site |
| `.noticias .materia h1 { font-size: 38px }` | `h2` do site |
| `.noticias .destaque p`, `.card p` e `.materia p` com `font-size` e `line-height` | `p` do site |
| `.categoria` (fundo preto, 14px) | Componente `.ex-etiqueta` |
| `.data` (14px, cinza) | Componente `.ex-nota` |
| `.leia-mais` e `.voltar` (negrito, sublinhado) | Componente `.ex-sobretitulo` |
| Tamanhos de título no `@media` 800px | Vêm do site |

### O que mudou

| Antes | Uso | Depois |
| --- | --- | --- |
| `#e8effd` | Fundo da página | Fundo do site |
| `#333`, `#222`, `#7a8296` | Textos e títulos | Cores do padrão das tags |
| `#b9c8ee` → `#d6e0f7` | Fundo da capa | `rgb(214, 247, 255)` → `rgb(241, 245, 249)` |
| `#000` e `#fff` | Categoria | Componente `.ex-etiqueta` |
| `#fff` | Fundo dos cards, do destaque e da matéria | `rgb(255, 255, 255)` |
| — | Borda dos cards, do destaque e da matéria | `1px solid rgb(226, 232, 240)` e cantos de `1.5rem` |
| — | Borda e sombra ao passar o mouse | `rgba(0, 188, 212, 0.6)` e `rgba(6, 21, 45, 0.08)` |
| — | Contorno do foco do teclado | `rgb(0, 104, 118)` |
| `grid-template-columns: repeat(auto-fit, minmax(260px, 1fr))` | Grade dos cards | Grade de 6 trilhas: 2 cards em cima e 3 embaixo |
| — | Grade no tablet (`@media` 900px) | 1º card na linha inteira, os outros de 2 em 2 |
| — | Grade no celular (`@media` 640px) | Uma coluna |
| — | Espaço ao abrir a matéria | `scroll-margin-top: 140px`, para o começo da matéria ficar abaixo do menu fixo |

### O que ficou

| Regra | Valor |
| --- | --- |
| Destaque | Grade `1.2fr 1fr`, capa de `340px`, texto com `36px` de espaço |
| Cards | Capa de `180px`, texto com `22px` de espaço, "Leia mais" sempre embaixo |
| Matéria | Até `900px` de largura, capa de `340px`, texto com `36px` de espaço |
| `@media` 800px | Destaque em uma coluna; capas de `220px`; texto com `24px` de espaço |

---

## 6. Como fica na tela

| Elemento | Antes | Depois |
| --- | --- | --- |
| Topo | Título cinza de 56px sobre fundo azul bem claro | Foto com película azul-marinho, rótulo, título e texto |
| Fundo da página | Azul bem claro | Fundo do site |
| Cards e destaque | Caixas brancas sem borda | Borda fina, cantos arredondados, borda ciano e sombra leve ao passar o mouse |
| Grade dos cards | Colunas automáticas | 2 + 3 no computador; 1 + 2 + 2 no tablet; 1 coluna no celular |
| Categoria | Etiqueta preta | Etiqueta do site |
| "Leia mais" e "Voltar" | Texto preto ou cinza, sublinhado | Rótulo do site com seta que anda ao passar o mouse |
| Matéria aberta | Abria pelos botões escondidos | Abre pelo link; o "voltar" do navegador volta para a lista |
| Logo do header e do rodapé | Sem nitidez | Nítido (versões 1x e 2x) |
| Nota de conteúdo fictício | — | Texto pequeno e centralizado no fim da página |
| Textos das notícias e das matérias | — | Iguais |
