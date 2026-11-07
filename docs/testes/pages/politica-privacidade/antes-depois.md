# Antes e depois — Política de Privacidade

**Antes:** a versão enviada pelo Guilherme pelo ClickUp, na 2ª fase.
**Depois:** a versão final, fechada em 06/11/2026 (`pages/politica-privacidade.html` + bloco `PÁGINA: politica-privacidade.html` do `css/style.css` + foto do topo em `img/politica-privacidade/`).

O relatório com os requisitos do professor está em [politica-privacidade.md](politica-privacidade.md).

---

## Resumo

| Parte | Antes | Depois |
| --- | --- | --- |
| Início do arquivo | Uma linha de texto solta antes do `<!DOCTYPE html>` ("Arquivo do Código da página Politicas De Privacidade -") | Começa direto pelo `<!DOCTYPE html>` |
| `<body>` | Sem classe | `<body class="pagina-politica-privacidade">` |
| CSS | `<style>` dentro do HTML | Só o `css/style.css`, com as regras no bloco `PÁGINA: politica-privacidade.html` |
| Variáveis | `:root` com 12 variáveis e `var()` em todas as regras | Nenhuma: cores escritas em `rgb(...)` |
| Fonte e tamanhos | Segoe UI e tamanhos próprios para `h1`, `h2` e `h3` | Padrão das tags do site |
| Header e rodapé | Próprios, com um menu de 4 itens diferente do resto do site | Header e footer compartilhados do site |
| Links | `index.html` e `contato.html` sem o `../`; `privacidade.html` e `termos.html` não existem | Todos funcionando |
| Topo da página | Sem o topo do site | Componente do site `.ex-hero`, com foto |
| E-mail e telefone | Escritos como texto | Links `mailto:` e `tel:` |
| Acesso à página | Nenhuma página levava até ela | Link no rodapé de todas as páginas e no aviso de cookies |
| Fonte da foto | — | Nota no fim da página |
| W3C | Não validado | HTML validado; `css/style.css` validado no W3C CSS Validator |

---

## 1. Estrutura do arquivo

### `<head>`

| Antes | Depois |
| --- | --- |
| Linha de texto solta antes do `<!DOCTYPE html>` | Retirada |
| `<style>` com o CSS da página | `<link rel="stylesheet" href="../css/style.css">` |
| — | `<meta name="description">`, `<meta name="robots" content="noindex, nofollow">`, `theme-color` e os ícones do site (favicon) |
| — | `<script src="../js/acessibilidade.js">`: o botão de acessibilidade do site |

### Header e footer

| Antes | Depois |
| --- | --- |
| Header próprio, com menu de 4 itens | Header compartilhado: faixa de contato, logo nítido (1x e 2x), menu do site com 8 itens, botão "Falar com Consultor" e menu do celular |
| Links `index.html` e `contato.html` sem o `../` | Links com o caminho certo a partir de `pages/` |
| Rodapé próprio, com links para `privacidade.html` e `termos.html`, que não existem | Footer compartilhado: unidades, "Páginas Internas" (com "Orçamento de Hospedagem"), menu "Docs" e a linha do "© 2026" com os links "Política de Privacidade" e "Orçamento de Hospedagem" |
| — | `js/menu.js` (menu do celular) e `js/cookies.js` (aviso de cookies) no fim do `<body>` |

---

## 2. Estrutura do conteúdo

O conteúdo foi organizado assim:

```text
<main>
  <section class="ex-hero">                 topo com foto
    rótulo "Privacidade", <h1> "Política de Privacidade" e texto
  <div class="ex-container">                largura do site (1200px)
    <div class="documento">
      <section>  1. Coleta de Dados na Gestão Condominial
        <div class="ex-cabecalho">          <h2> + subtítulo .ex-subtitulo
        <h3> 1.1 Dados Cadastrais e Financeiros + <p>
        <h3> 1.2 Uso da Tecnologia + <p>
      <section>  2. Compartilhamento e Segurança
        <h2> + <p>
      <section>  3. Atendimento e Direitos dos Titulares
        <h2> + <p> + <ul class="contatos"> (e-mail, telefone, Contato)
    <p class="ex-nota nota-fonte">          fonte da foto do topo
```

| Antes | Depois |
| --- | --- |
| Um `<h1>` | O `<h1 class="ex-hero__titulo">Política de Privacidade</h1>`, no topo com foto |
| Três `<h2>` e dois `<h3>` | Os mesmos três `<h2>` e dois `<h3>`; cada seção ligada ao seu `<h2>` por `aria-labelledby` |
| — | Título e texto de abertura da seção 1 no cabeçalho padrão do site (`.ex-cabecalho`) |
| E-mail e telefone escritos como texto | `<ul class="contatos">` com `<a href="mailto:…">`, `<a href="tel:…">` e o link "Contato Oficial" para `contato.html#proposta-form` |
| — | `<p class="ex-nota nota-fonte">` com a fonte da foto |

O texto do documento ficou primeiro dentro de um `<article class="documento">`. O W3C avisou "Article lacks heading", porque os títulos ficam nas seções de dentro. Ele virou `<div class="documento">`.

---

## 3. Texto

O texto das três seções ficou como o Guilherme escreveu. Entraram só os textos do topo e a nota:

| Onde | Antes | Depois |
| --- | --- | --- |
| Rótulo do topo | — | `Privacidade` (aparece em maiúsculas pelo CSS) |
| Título do topo | — | "Política de Privacidade" |
| Texto do topo | — | "Não comercializamos nem compartilhamos dados pessoais com terceiros para fins publicitários." |
| Lista de contato | E-mail e telefone escritos como texto | Rótulos "E-mail:", "Telefone e WhatsApp:" e "Página de Suporte:", com os dados como links |
| Fim da página | — | "Foto do topo: Pixabay / gerado por IA." |

---

## 4. CSS

### Onde fica

| Antes | Depois |
| --- | --- |
| `<style>` dentro do `pages/politica-privacidade.html` | Bloco `PÁGINA: politica-privacidade.html` do `css/style.css` (linhas 5511 a 5580) |
| Regras sem prefixo | Toda regra começa com `.pagina-politica-privacidade` |
| `:root` com 12 variáveis | Nenhuma variável; cores da paleta em `rgb(...)` |

### O que saiu para o padrão das tags

| Antes | Depois |
| --- | --- |
| Fonte Segoe UI | Fonte do site, do bloco GLOBAL |
| Tamanhos próprios de `h1`, `h2` e `h3` | Tamanhos do padrão das tags do site |
| `h3` em teal | Cor padrão do `h3` (o teal só seria permitido sobre fundo escuro) |
| Header, menu e rodapé estilizados na página | Estilos do header e do footer compartilhados |

### O que a página define

| Regra | O que faz |
| --- | --- |
| `.ex-hero` (linha 5530 do CSS) | Só a foto de fundo do topo |
| `.documento` (linha 5535 do CSS) | Centraliza o documento. O `max-width: 760px` está comentado, então o texto ocupa a largura do container (1200px) |
| `.documento section + section` | 40px entre as seções |
| `.documento section > h2` | Linha fina embaixo dos títulos das seções 2 e 3, na cor Borda `rgb(226, 232, 240)` |
| `.documento h3` e `h3 + p` | Espaço acima dos subtítulos 1.1 e 1.2 |
| `.contatos` (linha 5562 do CSS) | Caixa branca `rgb(255, 255, 255)` com borda `rgb(226, 232, 240)`, borda esquerda de 4px em Teal `rgb(0, 104, 118)`, cantos arredondados e lista sem marcadores |
| `.nota-fonte` (linha 5577 do CSS) | Nota do fim com até 760px, centralizada, e espaço em cima e embaixo |

### O que ficou

As cores da versão enviada já eram da paleta. O que mudou foi a forma de escrever: saíram as variáveis e as cores ficaram em `rgb(...)`.

---

## 5. Como fica na tela

| Elemento | Antes | Depois |
| --- | --- | --- |
| Topo | Header próprio | Header do site e topo com a foto de um cadeado sobre código, película azul, rótulo, título e texto |
| Seção 1 | — | Cabeçalho padrão do site: título, texto de apoio e linha fina embaixo |
| Seções 2 e 3 | — | Título com linha fina embaixo, como o cabeçalho da seção 1 |
| Largura do texto | — | Largura do container do site (1200px) |
| Lista de contato | E-mail e telefone sem link | Caixa clara com borda teal à esquerda, um item por linha, com links |
| Nota do fim | — | Texto pequeno, centralizado, com a fonte da foto |
| Rodapé | Próprio | Rodapé do site, com o link "Política de Privacidade" |
| Botão de acessibilidade | — | Aparece no canto da tela, como em todas as páginas |
