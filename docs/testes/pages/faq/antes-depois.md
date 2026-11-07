# Antes e depois — FAQ (Perguntas Frequentes)

**Antes:** a página como estava no projeto em 04/11/2026. Não houve versão enviada pelo ClickUp.
**Depois:** a versão final, fechada em 06/11/2026 (`pages/faq.html` + bloco `PÁGINA: faq.html` do `css/style.css`).

O relatório com os requisitos do professor está em [faq.md](faq.md).

---

## Resumo

| Parte | Antes | Depois |
| --- | --- | --- |
| Tema | Imobiliária (visita a imóvel, ITBI, aluguel, anunciar imóvel) | Administração de condomínio |
| Perguntas | 6 | 10 |
| Abrir e fechar | Botão de opção escondido (`<input type="radio">`) com `<label>`; não funcionava pelo teclado | `<details>` e `<summary>`: abre e fecha pelo teclado, sem JavaScript |
| `<body>` | Sem classe | `<body class="pagina-faq">` |
| CSS | `css/page/faq.css` com regras soltas, que valiam para o site todo | Bloco `PÁGINA: faq.html` do `css/style.css`, toda regra com `.pagina-faq` |
| Topo da página | Imagem `img/f1.png` no conteúdo, acima do título | Componente do site `.ex-hero`, com a foto de fundo |
| Bloco abaixo do topo | Só o `<h1>` "Perguntas Frequentes" | Componente do site `.ex-cabecalho` (título e texto de apoio) |
| Caixa "Qualquer dúvida?" | Dentro da `<ul>` (HTML inválido), só com o link | Bloco próprio, fundo azul-marinho, texto e botão do WhatsApp do site |
| Largura do conteúdo | Até 1000px | Container do site `.ex-container` (1200px) |
| Cores | Fora da paleta | Todas da paleta, em `rgb(...)` |
| Foto | `img/f1.png`, 1200 × 1200 px, 1.680 KB | `img/faq/hero-faq.jpg`, 1200 × 800 px, 109 KB |
| Fonte da foto | Não indicada | Nota no fim da página: "Foto do topo: Pixabay." |
| W3C | Não validado | Validado pelo líder em 06/11 |

---

## 1. Estrutura do arquivo

### `<head>`

| Antes | Depois |
| --- | --- |
| CSS em arquivos separados (`css/global.css` e `css/page/faq.css`) | Só `<link rel="stylesheet" href="../css/style.css">` (linha 15) |
| Sem o script de acessibilidade | `<script src="../js/acessibilidade.js"></script>` (linha 16) |

### Header

| Antes | Depois |
| --- | --- |
| Header compartilhado | Igual, com "FAQ" marcado por `aria-current="page"` no menu e no menu do celular (linhas 67 e 91) |
| "Falar com Consultor" com o link errado | Leva a `contato.html#proposta-form` (linhas 71 e 93) |

### Footer

| Antes | Depois |
| --- | --- |
| Lista "Páginas internas" terminando em "Fale Conosco" | Mais o link "Orçamento de Hospedagem" (linha 358) |
| Linha do © só com o texto | Mais os links "Política de Privacidade" e "Orçamento de Hospedagem" (linha 364) |
| Só o `js/menu.js` no fim | `js/menu.js` e `js/cookies.js` (aviso de cookies), linhas 369 e 370 |

---

## 2. Estrutura do conteúdo

| Antes | Depois |
| --- | --- |
| `<main>` | `<main>` |
| `<div class="perguntas-frequentes">` | — |
| `  <img src="../img/f1.png" alt="imobiliária">` | `<section class="ex-hero">` (a foto vem do CSS) |
| `  <h1>Perguntas Frequentes</h1>` | `  <h1 class="ex-hero__titulo">Perguntas frequentes <strong>…</strong></h1>` |
| — | `<div class="ex-container">` |
| — | `  <section class="perguntas" aria-labelledby="titulo-perguntas">` |
| — | `    <div class="ex-cabecalho">` com `<h2>` e `<p class="ex-subtitulo">` |
| `  <ul class="faq">` | `    <div class="lista-perguntas">` |
| `    <li>` com `<input type="radio">`, `<label>` e `<div class="resposta">` × 6 | `      <details class="pergunta">` com `<summary>` e `<div class="resposta">` × 10 |
| `    <section class="contato">` (dentro da `<ul>`) | `  <section class="duvida">` (fora da lista) |
| — | `  <p class="ex-nota nota-fonte">` |
| `</main>` | `</main>` |

### Uma pergunta

**Antes:**

```html
<li>
    <input type="radio" name="acordeon" id="primeiro">
    <label for="primeiro"><span>01</span> Como faço para agendar uma visita?</label>
    <div class="resposta">
    <p>Escolha o imóvel desejado e entre em contato conosco...</p>
    </div>
</li>
```

**Depois:**

```html
<details class="pergunta" open>
    <summary>
        <span class="ex-etiqueta">01</span>
        <h3>Como funciona a transição de administradora para o condomínio?</h3>
        <span class="material-symbols-outlined ex-icone--teal sinal" aria-hidden="true">add</span>
    </summary>
    <div class="resposta">
        <p>Nossa equipe jurídica e contábil assume integralmente o processo de migração...</p>
        ...
    </div>
</details>
```

`<details>` e `<summary>` já abrem e fecham sozinhos, pelo mouse e pelo teclado. A pergunta virou um `<h3>`, e o ícone "+" fica escondido do leitor de tela.

---

## 3. Texto

| Onde | Antes | Depois |
| --- | --- | --- |
| Topo | `<h1>` "Perguntas Frequentes" | Rótulo "FAQ", título "Perguntas frequentes **sobre a administração**" e texto "Respostas diretas." |
| Abaixo do topo | — | Título "Dúvidas sobre a administração" e o texto "Encontre respostas imediatas sobre migração de administradora, controle financeiro, tecnologia e aspectos jurídicos da sua gestão." |
| Perguntas 01 a 05 | Agendar visita, custos além do imóvel, aluguel, anunciar imóvel e avaliação de imóveis | As 5 da FAQ da home: transição de administradora, conta bancária, aplicativo e boletos, assembleias virtuais e tempo de resposta |
| Pergunta 06 | Disponibilidade de imóveis para visita | Papel do síndico |
| Perguntas 07 a 10 | — | Prestação de contas, cobrança de taxas atrasadas, pedido de manutenção ou ocorrência e serviços incluídos (com link para a Serviços) |
| Caixa "Qualquer dúvida?" | Só o link "Fale conosco" | "Não achou a sua pergunta? Fale com a nossa equipe pelo WhatsApp." e o botão "Fale conosco" |
| Fim da página | — | "Foto do topo: Pixabay." |

A palavra "imobiliária", que aparecia numa pergunta e no `alt` da imagem, saiu da página.

---

## 4. CSS

### Onde fica

| Antes | Depois |
| --- | --- |
| `css/page/faq.css`, carregado junto com o CSS compartilhado | Bloco `PÁGINA: faq.html` do `css/style.css` (linhas 4265 a 4454) |
| Regras sem prefixo: valiam para qualquer página que carregasse o arquivo | Toda regra começa com `.pagina-faq` |
| `* { margin: 0; padding: 0 }`: zeraria as margens do site inteiro | Saiu |
| `img { width: 100% }`: esticava todas as imagens, inclusive o logo | Saiu |
| `main { min-height: 100vh }` | Saiu |
| Regra quebrada `padding: 10px 10 px 20px` | Saiu |

### O que saiu para o padrão das tags e os componentes do site

| Antes (na página) | Depois (padrão do site) |
| --- | --- |
| Fonte `'outfit'` em tudo | Fontes do site, no bloco GLOBAL |
| `<h1>` com `3rem` | Título do topo `.ex-hero__titulo` |
| Pergunta no `<label>` com 18px e peso 500 | `<h3>` padrão do site |
| Número da pergunta numa caixa preta (`#000`) | Componente `.ex-etiqueta` |
| Resposta com cor `#535353` e altura de linha 32px | `<p>`, `<ul>` e `<li>` padrão do site |
| Link "Fale conosco" simples | Botão do site `.ex-botao--whatsapp` |
| — | Texto de apoio em `.ex-subtitulo` e nota em `.ex-nota` |
| — | Cabeçalho `.ex-cabecalho`, criado nesta página e usado por todas as outras (bloco GLOBAL, linhas 383 a 406) |

### O que mudou

| Antes | Depois |
| --- | --- |
| Abrir e fechar com `input[type=radio]:checked` e `max-height` | `<details>`; a regra `.pergunta[open]` marca a pergunta aberta |
| Sinal "+" e "−" com `::before` | Ícone "+" num círculo ciano-claro, que gira 45° e vira "x" quando abre (linhas 4360 a 4374) |
| Fundo da página `#E9F0FE` | Fundo padrão do site |
| Número aberto em `#304B80` | Borda ciano na pergunta aberta e ao passar o mouse, com sombra suave (linhas 4323 a 4330) |
| Sem contorno de foco | Contorno teal `rgb(0, 104, 118)` nos links e nas perguntas ao usar o teclado (linhas 4299 a 4303) |
| Caixa "Qualquer dúvida?" sem estilo próprio | Fundo azul-marinho `rgb(6, 21, 45)`, título branco e texto `rgb(241, 245, 249)` (linhas 4402 a 4424) |
| Sem regra para celular | `@media (max-width: 640px)` (linha 4434): menos espaço nas caixas e o botão do WhatsApp na largura toda |

### O que ficou

* Cada pergunta numa caixa branca, uma embaixo da outra.
* O número da pergunta antes do texto, de 01 em diante.
* Um sinal "+" para mostrar que a pergunta abre.
* Só uma foto na página, agora como foto do topo.

---

## 5. Como fica na tela

| Elemento | Antes | Depois |
| --- | --- | --- |
| Topo | Imagem quadrada da recepção de um prédio, acima do título | Faixa de topo com a mesma foto ao fundo, película azul e o título por cima, igual às outras páginas |
| Abaixo do topo | — | Título "Dúvidas sobre a administração", texto de apoio e uma linha fina embaixo |
| Perguntas | Faixas brancas com o número numa caixa preta | Caixas brancas de cantos arredondados, número em etiqueta e o "+" num círculo ciano-claro. A primeira já começa aberta |
| Pergunta aberta | O número ficava azul | Borda ciano, sombra suave e o "+" vira "x" |
| Teclado | As perguntas não abriam | Tab chega em cada pergunta, com contorno visível, e Enter abre e fecha |
| Caixa "Qualquer dúvida?" | Título e link soltos no fim da lista | Faixa azul-marinho com o texto à esquerda e o botão verde do WhatsApp à direita |
| Celular | — | Caixas com menos espaço interno e o botão do WhatsApp na largura toda |
| Nota da foto | — | Texto pequeno e centralizado no fim da página |
