# Antes e depois — Clientes

**Antes:** a página como estava no projeto em 01/11/2026. Não houve versão enviada pelo ClickUp.
**Depois:** a versão final, fechada em 01/11/2026 e com registro atualizado em 06/11/2026 (`pages/clientes.html` + bloco `PÁGINA: clientes.html` do `css/style.css` + imagens em `img/clientes/`).

O relatório com os requisitos do professor está em [clientes.md](clientes.md).

---

## Resumo

| Parte | Antes | Depois |
| --- | --- | --- |
| `<body>` | Sem classe | `<body class="pagina-clientes">` |
| CSS carregado | 4 arquivos (`global.css`, `layout/header.css`, `layout/footer.css`, `page/clientes.css`) | Só o `css/style.css` |
| Conteúdo principal | As 3 seções soltas no `<body>` | Dentro de `<main>` |
| Largura do conteúdo | `.container` próprio da página (90%, até 1200px) | Container do site `.ex-container` (1200px) |
| Topo da página | Classes próprias da página (`.hero`, `.hero-overlay`, `.section-label`…) | Componente do site `.ex-hero`, que outras páginas podem usar |
| Cards de clientes | `<div class="cliente-card">` | `<article class="cliente-card">` |
| Depoimentos | `<div>` com `<p>` e `<div>` da pessoa | `<figure>` com `<blockquote>` e `<figcaption>` |
| Títulos | Digitados em MAIÚSCULAS no HTML | Escritos normalmente. Os `h2` seguem o padrão do site (32px, letras normais); o topo e os cards aparecem em maiúsculas pelo CSS |
| Aspas decorativas | Lidas pelo leitor de tela | `aria-hidden="true"` |
| Cores | 16 fora da paleta, 5 variáveis próprias no `:root` e 10 `var()` | Todas da paleta, em `rgb(...)` |
| Textos pequenos | 10 px | 12 px |
| Foto do Jardins | 990 KB | 86 KB |
| Fotos das pessoas | 765 × 1024 px (até 168 KB) | 200 × 200 px (até 10 KB) |
| Nomes das imagens | Com `_` e um nome errado (`armazen_mundo_empresarial.jpg` era o Empresarial Pinheiros) | Com `-` e nomes certos |
| Fonte das fotos | Não indicada | Nota no fim da página |
| Aviso de conteúdo fictício | Não tinha | Nota no fim da página |
| W3C | Não validado | HTML sem erros; `css/style.css` validado no W3C CSS Validator |

---

## 1. Estrutura da página

| Antes | Depois |
| --- | --- |
| `<body>` | `<body class="pagina-clientes">` |
| — | `<main>` |
| `<section class="hero">` | `<section class="ex-hero">` |
| `  <div class="hero-overlay">` | `  <div class="ex-hero__pelicula">` |
| `  <div class="container hero-content">` | `  <div class="ex-hero__conteudo">` |
| `    <div class="section-label"><span>NOSSOS CLIENTES</span></div>` | `    <span class="ex-hero__rotulo">Clientes</span>` |
| `    <h1>EMPRESAS E CONDOMÍNIOS <strong>…</strong></h1>` | `    <h1 class="ex-hero__titulo">Empresas e condomínios <strong>…</strong></h1>` |
| `    <p>` | `    <p class="ex-hero__texto">` |
| `<section class="clientes">` | `<section class="clientes">` |
| `  <h2 class="titulo">CONDOMÍNIOS E EMPRESAS…</h2>` | `  <div class="ex-cabecalho">` com `<h2 id="titulo-clientes">Fazem parte da nossa história.</h2>` |
| `  <div class="cliente-card">` × 4 | `  <article class="cliente-card">` × 4 |
| `<section class="depoimentos">` | `<section class="depoimentos">` |
| `  <div class="faixa-depoimentos"><span>DEPOIMENTOS</span></div>` | Retirada |
| `  <h2 class="titulo">O QUE NOSSOS CLIENTES DIZEM…</h2>` | `  <h2>O que nossos clientes dizem…</h2>` |
| `  <div class="depoimento-card">` × 3 | `  <figure class="depoimento-card">` × 3 |
| — | `<p class="nota-ficticio">` |
| — | `</main>` |

### Um depoimento

**Antes:**

```html
<div class="depoimento-card">
    <div class="aspas">“</div>
    <p>A gestão financeira melhorou muito depois que contratamos o Grupo Êxito...</p>
    <div class="cliente-info">
        <div class="avatar"><img src="../img/clientes/joao.jpg" alt="Foto de João Pedro"></div>
        <div><strong>João Pedro</strong><span>Síndico do Ed. Aurora</span></div>
    </div>
</div>
```

**Depois:**

```html
<figure class="depoimento-card">
    <div class="aspas" aria-hidden="true">“</div>
    <blockquote>
        <p>A gestão financeira melhorou muito depois que contratamos o Grupo Êxito...</p>
    </blockquote>
    <figcaption class="cliente-info">
        <div class="avatar"><img src="../img/clientes/joao.jpg" alt="Foto de João Pedro"></div>
        <div><strong>João Pedro</strong><span>Síndico do Ed. Aurora</span></div>
    </figcaption>
</figure>
```

`<blockquote>` diz que o texto é uma citação, e `<figcaption>` diz de quem ela é.

---

## 2. Texto

O conteúdo dos textos continuou o mesmo, menos o topo, que ficou mais curto, e o título da seção de clientes. Mudaram também a forma de escrever os títulos e a nota nova:

| Onde | Antes | Depois |
| --- | --- | --- |
| Rótulo do topo | `NOSSOS CLIENTES` | `Clientes` (aparece em maiúsculas pelo CSS) |
| Texto do topo | "Construímos parcerias de longo prazo com empresas e condomínios que valorizam qualidade, transparência e compromisso em cada projeto." | "Construímos parcerias de longo prazo." |
| Título do topo | `EMPRESAS E CONDOMÍNIOS QUE CONFIAM NO NOSSO TRABALHO.` | `Empresas e condomínios que confiam no nosso trabalho.` (idem) |
| Título da seção de clientes | `CONDOMÍNIOS E EMPRESAS…` | "Fazem parte da nossa história.", no cabeçalho padrão do site (`.ex-cabecalho`) |
| Títulos das seções (`h2`) | Em maiúsculas, 30px | Normais, 32px, no padrão do site (iguais aos da Quem Somos) |
| Títulos dos cards (`h3`) | Em maiúsculas, 17px | `h3` padrão do site: 20px, letras normais |
| Fim da página | — | "Clientes e depoimentos fictícios, criados para um projeto acadêmico. Fotos ilustrativas: geradas por inteligência artificial e de banco de imagens." |

Com o texto escrito normalmente, o leitor de tela lê as palavras em vez de soletrar letra por letra.

---

## 3. Imagens

| Antes | Depois | Tamanho antes → depois |
| --- | --- | --- |
| `condominio_jardins.jpg` (1408 × 768) | `condominio-jardins.jpg` (800 × 436) | 990 KB → 86 KB |
| `condominio_aurora.jpg` | `condominio-aurora.jpg` | 198 KB (igual) |
| `condominio_vila_verde.jpg` | `condominio-vila-verde.jpg` | 196 KB (igual) |
| `armazen_mundo_empresarial.jpg` | `empresarial-pinheiros.jpg` | 237 KB (igual) |
| `joao.jpg` (765 × 1024) | `joao.jpg` (200 × 200) | 100 KB → 7 KB |
| `marina.jpg` (765 × 1024) | `mariana.jpg` (200 × 200) | 168 KB → 10 KB |
| `carlos.jpg` (765 × 1024) | `carlos.jpg` (200 × 200) | 102 KB → 8 KB |
| `logoempesa.png` (não usada) | Apagada | 419 KB → 0 |

---

## 4. CSS

### Onde fica

| Antes | Depois |
| --- | --- |
| `css/page/clientes.css`, carregado junto com outros 3 arquivos | Bloco `PÁGINA: clientes.html` do `css/style.css` (linhas 2296 a 2482) |
| Regras sem prefixo: valiam para qualquer página que carregasse o arquivo | Toda regra começa com `.pagina-clientes` |
| `* { margin: 0; padding: 0 }`: num arquivo único, zeraria as margens do site inteiro | `.pagina-clientes main * { … }`: só o conteúdo desta página |
| CSS do topo dentro da página | Componente `.ex-hero` no CSS do site; a página só define a foto de fundo |

### Cores

| Antes | Uso | Depois (paleta) |
| --- | --- | --- |
| `#062b4f` (`--azul-escuro`) | Títulos, nomes | `rgb(6, 21, 45)` |
| `#123e68` (`--azul`) | Faixa "Depoimentos" (depois retirada), tipo do card | `rgb(14, 56, 103)` |
| `#19c4d3` (`--turquesa`) | Rótulo, destaque do título, aspas | `rgb(0, 188, 212)` |
| `#607080` (`--cinza`) | Subtítulo | `rgb(82, 96, 113)` |
| `rgba(4, 40, 73)`, `rgba(7, 50, 86)`, `rgba(8, 55, 90)` | Película sobre a foto do topo | `rgba(6, 21, 45)`, `rgba(10, 30, 59)`, `rgba(14, 56, 103)` |
| `#f0f5f8` | Texto do topo | `rgb(241, 245, 249)` |
| `#f5f9fc` | Fundo do card de cliente | `rgb(248, 250, 253)` |
| `#edf2f6` | Borda do card | `rgb(226, 232, 240)` |
| `#edf5fa` | Fundo da seção Depoimentos | `rgb(241, 245, 249)` |
| `#40566d` | Texto do depoimento | `rgb(71, 85, 105)` |
| `#718294` | Cargo de quem deu o depoimento | `rgb(82, 96, 113)` |
| `rgba(0, 30, 60, 0.10)`, `rgba(0, 40, 80, 0.04)` | Sombras | `rgba(6, 21, 45, 0.10)`, `rgba(6, 21, 45, 0.04)` |
| `white` | Fundos e textos claros | `rgb(255, 255, 255)` |

### Como isso aparece na tela

| Elemento | Antes | Depois |
| --- | --- | --- |
| Película sobre a foto do topo | Azul | Um pouco mais escura e azulada (navy da paleta) |
| Fundo da seção Depoimentos | Azul bem claro | Cinza-azulado claro |
| Tipo do card ("Condomínio") | 10 px, maiúsculas, azul | Rótulo do site (`.ex-sobretitulo`): 11px, negrito, maiúsculas, teal |
| Cargo no depoimento | 10 px | Nota do site (`.ex-nota`): 12px |
| Faixa azul "Depoimentos" | Faixa azul com o rótulo "DEPOIMENTOS" acima do título da seção | Retirada: a seção começa direto pelo título "O que nossos clientes dizem…" |
| Logo do header e do rodapé | Sem nitidez (imagem 4 vezes maior que o espaço) | Nítido (versões 1x e 2x) |
| Nota de conteúdo fictício | — | Texto pequeno e centralizado no fim da página |
| Topo, títulos, cards e depoimentos | — | Iguais |
