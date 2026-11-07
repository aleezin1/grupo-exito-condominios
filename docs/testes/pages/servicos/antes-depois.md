# Antes e depois — Serviços (vitrine)

**Antes:** a versão enviada pelo João pelo ClickUp para a 2ª fase.
**Depois:** a versão final, fechada em 06/11/2026 (`pages/servicos.html` + bloco `PÁGINA: servicos.html` do `css/style.css`).

O relatório com os requisitos do professor está em [servicos.md](servicos.md).

---

## Resumo

| Parte | Antes | Depois |
| --- | --- | --- |
| Tema | Finanças pessoais ("organizar o **seu** dinheiro", investimentos, Imposto de Renda) | Administração de condomínios |
| Serviços | Gestão financeira, Planejamento de investimentos, Consultoria tributária | Gestão Administrativa, Gestão Financeira e Gestão Operacional: o mesmo nome das páginas internas, na ordem do menu |
| Links para as páginas de serviço | 9 links para `servico-1.html`, `servico-2.html` e `servico-3.html`, que não existem | 6 links para `servicos-1.html`, `servicos-2.html` e `servicos-3.html` (um em cada card e um em cada linha da tabela), com o nome da página de destino |
| Header e footer | Próprios: um menu com 4 links e um rodapé só com "Contato" | Os do site, iguais em todas as páginas |
| `<title>` | "Serviços" | "Serviços \| Grupo Êxito Condomínios", com `<meta name="description">` |
| `<body>` | Sem classe | `<body class="pagina-servicos">` |
| CSS | `<style>` dentro do HTML | Só o `css/style.css` |
| Topo da página | `<h1>` e um parágrafo soltos | Componente do site `.ex-hero`, com foto |
| Título dos cards | `<h2>Resumo dos serviços</h2>` | Cabeçalho do site (`.ex-cabecalho`): "Como podemos ajudar" e um texto de apoio |
| Cards | 3 `<article>` com imagem, `<h3>`, texto e link | Os mesmos 3 `<article>`, com os textos de condomínio |
| Imagens | 3 cartazes com caminho do computador de quem fez (`C:\Users\joaov\...`), que não abriam em nenhum outro lugar, mostrados com 72 × 72 px | Os mesmos 3 cartazes em `img/servicos/`, na largura do card, cortados sem distorcer; mais a foto do topo |
| Fonte das imagens | Não indicada | Nota no fim da página |
| Fonte do texto | Georgia | A do site (Plus Jakarta Sans) |
| Cores | 5 fora da paleta e 4 variáveis no `:root` | Todas da paleta, em `rgb(...)` |
| Largura do conteúdo | Até 960px (`60rem`) | Container do site `.ex-container` (1200px) |
| W3C | Não validado | Validado em 06/11 |

---

## 1. Estrutura do arquivo

| Parte | Antes | Depois |
| --- | --- | --- |
| `<head>` | `<title>Serviços</title>` e um `<style>` com 60 linhas | `<title>`, `<meta name="description">`, `<meta name="robots">`, `<meta name="theme-color">`, os favicons, o `css/style.css` e o `js/acessibilidade.js` |
| Header | `<header>` com `<nav>` e `<ul>` de 4 links | Header do site (`.ex-header`): barra de contato, logo nítido (1x e 2x), menu com "Serviços" marcado (`aria-current="page"`) e menu do celular |
| Footer | `<footer>` com um link de contato | Footer do site (`.ex-rodape`): logo, endereços, "Páginas Internas" (com o "Orçamento de Hospedagem") e a linha do "© 2026" com os links "Política de Privacidade" e "Orçamento de Hospedagem" |
| JavaScript no fim do `<body>` | — | `js/menu.js` (menu do celular) e `js/cookies.js` (aviso de cookies) |

---

## 2. Estrutura do conteúdo

| Antes | Depois |
| --- | --- |
| `<body>` | `<body class="pagina-servicos">` |
| `<main>` | `<main>` |
| `  <h1>Nossos serviços</h1>` e `<p>` | `  <section class="ex-hero">` com rótulo, `<h1 class="ex-hero__titulo">` e `<p class="ex-hero__texto">` |
| — | `  <div class="ex-container">` |
| `  <section aria-labelledby="titulo-resumo">` | `    <section class="servicos" aria-labelledby="titulo-servicos">` |
| `    <h2>Resumo dos serviços</h2>` | `      <div class="ex-cabecalho">` com `<h2 id="titulo-servicos">Como podemos ajudar</h2>` e `<p class="ex-subtitulo">` |
| — | `      <div class="servicos-grade">` |
| `    <article class="servico">` × 3 (imagem, `<h3>`, `<p>`, link) | `        <article class="servico">` × 3 (imagem, `<h3>`, `<p>`, link) |
| `  <section class="tabela-wrapper" aria-labelledby="titulo-comparacao">` | `    <section class="servicos-comparacao" aria-labelledby="titulo-comparacao">` |
| `    <h2>Qual serviço é o ideal para você?</h2>` | `      <h2 id="titulo-comparacao">Qual serviço é o ideal para você?</h2>` |
| `    <table>` | `      <div class="tabela-wrapper">` com a `<table>` dentro (a tabela rola para o lado no celular) |
| `  <p class="chamada">` | `    <p class="chamada">` |
| — | `    <p class="ex-nota nota-fonte">` |

A página manteve o que já estava certo no envio: cada seção com título, os cards em `<article>` com `<h3>` e a tabela com `<caption>`, `<thead>`/`<tbody>`, `<th scope="col">` no cabeçalho e `<th scope="row">` no nome de cada serviço.

### O topo

**Antes:**

```html
<h1>Nossos serviços</h1>
<p>Três formas de organizar o seu dinheiro. Veja o que cada uma entrega e escolha a que resolve o seu problema agora.</p>
```

**Depois:**

```html
<section class="ex-hero">
    <div class="ex-hero__pelicula"></div>
    <div class="ex-hero__conteudo">
        <span class="ex-hero__rotulo">Serviços</span>
        <h1 class="ex-hero__titulo">Serviços para
            <strong>administração de condomínios</strong>
        </h1>
        <p class="ex-hero__texto">
            Conheça nossas opções de serviços
        </p>
    </div>
</section>
```

O topo é o mesmo componente das outras páginas. A foto de fundo fica no CSS da página, e o espaço de 50px até o conteúdo vem do próprio componente.

### Um card (depois)

```html
<article class="servico">
    <img src="../img/servicos/gestao-financeira.jpg" width="510" height="1024"
        alt="Cartaz com uma calculadora, um caderno com a lista receitas, despesas, metas e resultados e uma caneta sobre a mesa">
    <h3>Gestão Financeira</h3>
    <p>
        Elaboração e acompanhamento da previsão orçamentária, pagamentos, vencimentos, cobrança
        administrativa, balancetes e prestação de contas.
    </p>
    <a href="servicos-2.html">Ver gestão financeira</a>
</article>
```

A imagem declara o tamanho real do arquivo (`width` e `height`), e o `alt` descreve o que o cartaz mostra.

---

## 3. Texto

| Onde | Antes | Depois |
| --- | --- | --- |
| Topo | "Nossos serviços" + "Três formas de organizar o seu dinheiro. Veja o que cada uma entrega e escolha a que resolve o seu problema agora." | "Serviços para **administração de condomínios**" + "Conheça nossas opções de serviços" |
| Título dos cards | "Resumo dos serviços" | "Como podemos ajudar" + "Conheça nossas principais especialidades e como podemos fazer a diferença no seu dia a dia." |
| Cards | Gestão financeira, Planejamento de investimentos e Consultoria tributária, com textos de finanças pessoais | **Gestão Administrativa**: "Gerenciamento de cadastros, atendimento aos condôminos, organização documental, comunicados, apoio ao síndico e acompanhamento de demandas." · **Gestão Financeira**: "Elaboração e acompanhamento da previsão orçamentária, pagamentos, vencimentos, cobrança administrativa, balancetes e prestação de contas." · **Gestão Operacional**: "Acompanhamento das rotinas operacionais, fornecedores, segurança, manutenção preventiva e necessidades do condomínio." |
| Links dos cards | Para `servico-1.html`, `servico-2.html` e `servico-3.html` | "Ver gestão administrativa", "Ver gestão financeira" e "Ver gestão operacional" |
| Tabela, linha 1 | **Gestão financeira**: "Quem gasta mais do que planeja ou tem dívidas" · "Orçamento e relatório mensal" · "Contínuo, mensal" | **Gestão Administrativa**: "Síndicos que precisam de apoio com cadastros, documentos, comunicados e demandas" · "Cadastros em dia, atendimento aos condôminos, documentos organizados, comunicados e acompanhamento de demandas" · "Contínuo, com acompanhamento mensal" |
| Tabela, linha 2 | **Planejamento de investimentos**: "Quem já sobra dinheiro e quer fazê-lo render" · "Carteira personalizada por objetivo" · "3 encontros, com revisão anual" | **Gestão Financeira**: "Síndicos que querem mais clareza, segurança e agilidade nas decisões" · "Previsão orçamentária, pagamentos e vencimentos, cobrança administrativa, balancetes e prestação de contas" · "Contínuo, com acompanhamento da previsão orçamentária" |
| Tabela, linha 3 | **Consultoria tributária**: "Autônomos, MEIs e quem tem várias fontes de renda" · "Análise fiscal e declaração revisada" · "Pontual, uma vez por ano" | **Gestão Operacional**: "Condomínios que precisam de fornecedores, segurança e manutenção organizados" · "Acompanhamento das rotinas operacionais, dos fornecedores, da segurança e da manutenção preventiva" · "Contínuo, com plantão para emergências 24h" |
| Fim da página | "Não sabe qual serviço escolher? Fale com a gente." | Igual, mais a nota "Foto do topo: Pixabay. Fotos dos serviços: Pixabay / gerado por IA." |

Os textos novos dos cards e da tabela foram tirados do que as páginas Serviços 1, 2 e 3 já dizem.

---

## 4. Imagens

| Antes | Depois | Card |
| --- | --- | --- |
| `C:\Users\joaov\OneDrive\Imagens\WhatsApp Image 2026-09-24 at 12.52.04.jpeg` | `img/servicos/consultoria-tributaria.jpg` (499 × 1024, 58 KB) | Gestão Administrativa |
| `C:\Users\joaov\OneDrive\Imagens\WhatsApp Image 2026-09-24 at 12.52.03.jpeg` | `img/servicos/gestao-financeira.jpg` (510 × 1024, 61 KB) | Gestão Financeira |
| `C:\Users\joaov\OneDrive\Imagens\Acer\WhatsApp Image 2026-09-24 at 12.52.03.jpeg` | `img/servicos/planejamento-investimentos.jpg` (522 × 1023, 67 KB) | Gestão Operacional |
| — | `img/servicos/hero-servicos.jpg` (1280 × 854, 164 KB, da Pixabay) | Foto do topo |

Os cartazes são verticais e cheios de texto. Antes apareciam com 72 × 72 px, o que esticava a imagem e deixava o texto ilegível. Agora ocupam a largura do card com 240px de altura, cortados pela parte de cima, sem distorcer.

A foto do topo é um fundo de CSS e decorativa, por isso não tem `alt`. Se ela não carregar, o topo aparece com o fundo azul-marinho do componente.

---

## 5. CSS

### Onde fica

| Antes | Depois |
| --- | --- |
| `<style>` com 60 linhas dentro do HTML | Bloco `PÁGINA: servicos.html` do `css/style.css` (linhas 2485 a 2606) |
| Regras sem prefixo: valiam para a página inteira, inclusive header e footer | Toda regra começa com `.pagina-servicos` |

### O que saiu para o padrão de tags do site

| Antes (no `<style>` da página) | Depois |
| --- | --- |
| Regras de tag soltas (`*`, `body`, `header`, `main`, `footer`, `nav ul`, `a`, `h1`, `h2`, `h3`, `table`, `caption`, `th`, `td`) | O padrão das tags no bloco GLOBAL do `style.css`, igual em todo o site |
| Fonte Georgia no `body` | Plus Jakarta Sans, a do site |
| Tamanhos próprios para `h1` (2rem), `h2` (1.6rem), `h3` (1.3rem) e para a legenda da tabela | Nenhum: o CSS da página não muda a tipografia |
| Links verdes | Links no padrão do site |
| Bordas e cabeçalho da tabela | Padrão das tabelas do site |
| `header, main, footer { max-width: 60rem }` | `.ex-container` (1200px) |

### O que mudou

| Antes | Uso | Depois (paleta) |
| --- | --- | --- |
| `#1c2b26` (`--texto`) | Texto | Padrão do site: `rgb(71, 85, 105)` no texto e `rgb(6, 21, 45)` nos títulos |
| `#fbfaf7` (`--fundo`) | Fundo da página | Padrão do site: `rgb(248, 250, 253)` |
| `#d9d6cc` (`--borda`) | Bordas | Padrão do site nas tabelas; borda do card em `rgb(226, 232, 240)` |
| `#eef3ef` | Fundo do cabeçalho da tabela | Padrão do site: `rgb(241, 245, 249)` |
| `#1f6b4f` (`--destaque`, verde) | Links, contorno de foco e borda de cima dos cards | Teal `rgb(0, 104, 118)` na linha de cima dos cards e no contorno de foco; links no padrão do site |
| Imagem com 72 × 72 px | Imagem do card | `width: 100%`, `height: 240px`, `object-fit: cover` e `object-position: top` |

### O que ficou no bloco da página

* A foto de fundo do topo (linha 2504).
* O espaço de baixo do conteúdo (linha 2511) e o contorno de foco dos links (linha 2516).
* A grade dos cards, com quantos couberem na largura, cada um com no mínimo 16rem (linha 2525).
* O card: fundo branco, borda, linha teal em cima, cantos arredondados e sombra (linha 2531); a imagem (linha 2545); os espaços do título e do texto; o link sempre no pé do card (linha 2564).
* O espaço entre os cards e a tabela (linha 2572), a rolagem da tabela no celular (linha 2581) e a largura mínima da tabela (linha 2587).
* A legenda da tabela alinhada à esquerda (linha 2591), o espaço da chamada (linha 2597) e o alinhamento da nota da fonte (linha 2603).

---

## 6. Como fica na tela

| Elemento | Antes | Depois |
| --- | --- | --- |
| Topo | Título e texto simples, sem fundo | Faixa com foto, película azul-marinho, rótulo ciano e título em duas linhas |
| Fonte | Georgia (com serifa) | Plus Jakarta Sans, a do site todo |
| Título dos cards | `<h2>` com tamanho próprio | Cabeçalho do site, com título e texto de apoio |
| Cards | Imagem de 72 × 72 px esticada | Cartaz na largura do card, sem distorcer; linha teal em cima, borda, sombra e cantos arredondados; o link fica sempre no pé do card |
| Cards no celular | — | Um embaixo do outro |
| Links | Verdes | Teal da paleta |
| Tabela | Bordas bege e cabeçalho verde-claro | Bordas e cabeçalho no padrão das tabelas do site; rola para o lado no celular |
| Largura | Até 960px | Até 1200px, igual às outras páginas |
| Header e footer | Uma lista de links e um link de contato | Os do site, com logo nítido (versões 1x e 2x) |
| Nota da fonte | — | Texto pequeno e centralizado no fim da página |
