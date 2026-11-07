# Antes e depois — Contato

**Antes:** a página como estava no projeto antes da revisão de 04/11/2026. Não houve versão enviada pelo ClickUp. O código citado como "antes" é o da versão guardada no repositório (`pages/contato.html` e `css/contato.css`).
**Depois:** a versão final, fechada em 06/11/2026 (`pages/contato.html` + bloco `PÁGINA: contato.html` do `css/style.css` + `js/formulario.js` + `img/contato/hero-contato.jpg`).

O relatório com os requisitos do professor está em [contato.md](contato.md).

---

## Resumo

| Parte | Antes | Depois |
| --- | --- | --- |
| `<body>` | Sem classe | `<body class="pagina-contato">` |
| CSS carregado | `paleta.css`, `layout.css` e `contato.css`, mais as fontes do Google Fonts | Só o `css/style.css` (as fontes ficam em `css/fonts/`) |
| JavaScript | Só o `js/menu.js`; `formulario.js` e `acessibilidade.js` comentados | `acessibilidade.js` no `<head>`; `menu.js`, `formulario.js` e `cookies.js` no fim |
| Topo da página | `<h1>` "Fale conosco" e um parágrafo, sem foto | Componente do site `.ex-hero`, com a foto `hero-contato.jpg` |
| Largura do conteúdo | `main` com até 900px | Container do site `.ex-container` (1200px) |
| Canais de contato | 3 `<div>` (telefone, e-mail, endereço) e o horário numa linha solta | 6 `<article>` em cards: telefone e WhatsApp, e-mail, horário, matriz, filial e redes sociais |
| Dados de contato | De outra empresa ("Grupo Êxito Imóveis") | Os mesmos do header e do footer, iguais em todo o site |
| Formulário | 6 campos, 2 sem `required`, sem `date` e `number`, assuntos de imobiliária | 9 campos, todos com `required`, com `email`, `tel` + `pattern`, `number` e `date`; assuntos de condomínio |
| Envio | `formulario.js` desligado: a confirmação abria sem o resumo | Os dados aparecem na confirmação |
| Telefone | Sem máscara e sem `pattern` | Máscara enquanto a pessoa digita, e `pattern` no envio |
| Integrantes do grupo | Não apareciam | Seção "Equipe do projeto" com os 12 integrantes |
| Fonte da foto | — | Nota no fim da página |
| Cores | Verde-petróleo e cobre, fora da paleta, com 5 variáveis no `:root` e 10 `var()` | Todas da paleta, em `rgb(...)` |
| W3C | Não validado | HTML sem erros; `css/style.css` validado no W3C CSS Validator |

---

## 1. Estrutura do arquivo

### `<head>`

| Antes | Depois |
| --- | --- |
| Indentação misturada (2 e 4 espaços) | 4 espaços no arquivo todo |
| Descrição "Fale com o Grupo Êxito por telefone…" | "Fale com o Grupo Êxito Condomínios por telefone…" |
| `site.webmanifest`, dois `preconnect` e duas folhas do Google Fonts | Saíram: as fontes vêm do `css/style.css` |
| `css/paleta.css`, `css/layout.css` e `css/contato.css` | Só `../css/style.css` (linha 15) |
| `acessibilidade.css`, `assistente.css` e `acessibilidade.js` comentados | `../js/acessibilidade.js` (linha 16) |

### Header

| Antes | Depois |
| --- | --- |
| Comentário "estilo em css/layout.css" | Comentário sem citar arquivo de CSS |
| Logo `<img>` sem `srcset` | Logo com `srcset` (1x e 2x), `width` e `height` |
| Menu, botão "Falar com Consultor" e dados do topo | Iguais |

### Footer

| Antes | Depois |
| --- | --- |
| Comentário "estilo em css/layout.css" | Comentário sem citar arquivo de CSS |
| Logo sem `srcset` | Logo com `srcset` (1x e 2x) |
| Lista "Páginas Internas" sem o orçamento | Com o link "Orçamento de Hospedagem" |
| — | Menu "Docs", com o link "Painel do projeto" |
| Linha do © só com o texto | Com os links "Política de Privacidade" e "Orçamento de Hospedagem" |
| JavaScript: `menu.js`; `assistente.js` e `formulario.js` comentados | `menu.js`, `formulario.js` e `cookies.js` |

---

## 2. Estrutura do conteúdo

| Antes | Depois |
| --- | --- |
| `<body>` | `<body class="pagina-contato">` |
| `<main>` | `<main>` |
| `<section class="fale-conosco">` com `<h1>` e `<p>` | `<section class="ex-hero">` com rótulo, `<h1>` e texto |
| — | `<div class="ex-container">` |
| `<section class="canais">` | `<section class="canais" aria-labelledby="titulo-contato">` |
| — | `  <div class="ex-cabecalho">` com `<h2>` e subtítulo |
| `  <div class="canal">` × 3, cada um com `<h2>` | `  <article class="ex-card canal">` × 6, cada um com ícone e `<h3>` |
| `<p class="horario">` | Card "Horário de atendimento" |
| `<section class="formulario">` com `<h2>` e `<form>` | `<section class="proposta">`: vantagens à esquerda e o card do formulário à direita |
| `<section class="redes">` com `<h2>` e lista | Card "Redes sociais", dentro dos canais |
| — | `<section class="equipe">` com `<h2>` e a lista dos integrantes |
| — | `<p class="ex-nota nota-fonte">` com a fonte da foto |

### Um canal de contato

**Antes:**

```html
<div class="canal">
  <h2>Telefone e WhatsApp</h2>
  <p><a href="tel:+551127247755">Ligue: (11) 2724-7755</a></p>
  <p>
    <a href="https://wa.me/551127247755" target="_blank" rel="noopener">
      Clique aqui para falar pelo WhatsApp
    </a>
  </p>
</div>
```

**Depois:**

```html
<article class="ex-card canal">
    <span class="canal__icone">
        <span class="material-symbols-outlined ex-icone--teal" aria-hidden="true">call</span>
    </span>
    <h3>Telefone e WhatsApp</h3>
    <p><a href="tel:1125649963">(11) 2564-9963</a></p>
    <a class="ex-botao ex-botao--whatsapp" href="https://wa.me/551125649963" target="_blank"
        rel="noopener" aria-label="Conversar pelo WhatsApp (abre em outra aba)">
        <span class="material-symbols-outlined ex-icone--pequeno" aria-hidden="true">chat</span>
        <span>Conversar pelo WhatsApp</span>
    </a>
</article>
```

Cada canal é um `<article>`, e o título dele passou a ser `<h3>`, abaixo do `<h2>` da seção.

---

## 3. Texto

| Onde | Antes | Depois |
| --- | --- | --- |
| Título da página | "Fale conosco" (em maiúsculas pelo CSS) | Rótulo "Contato" e título "Fale com o Grupo Êxito **Condomínios**" |
| Texto do topo | "Entre em contato conosco pelo canal de comunicação de sua preferência. Preencha o formulário abaixo ou nos contate pelo telefone ou WhatsApp." | "Atendimento por telefone, WhatsApp, e-mail ou formulário." |
| Título dos canais | — | "Escolha o canal mais prático para você", com subtítulo para síndicos, conselheiros e moradores |
| Telefone | (11) 2724-7755 | (11) 2564-9963 |
| WhatsApp | "Clique aqui para falar pelo WhatsApp" | Botão "Conversar pelo WhatsApp" |
| E-mail | `contato@grupoexitoimoveis.com.br` | `contato@grupoexitocondominios.com.br` |
| Endereço | R. Serra de Botucatu, 878 - Conj 1503, Vila Gomes Cardim, São Paulo | Matriz: R. Gonçalo Ferreira, 164, Sala 3, Mogi das Cruzes / SP. Filial: Av. Rio das Pedras, 3.409, São Paulo / SP |
| Horário | "Horário de atendimento: Segunda a Sexta, das 9h às 17h." (em itálico) | Card "Horário de atendimento": "Segunda a Sexta, das 9h às 17h." |
| Instagram | `grupoexito.imoveis` | `grupoexito.condominios` |
| Facebook | Página "Grupo Êxito Imóveis" | `grupoexitocondominios` |
| Título do formulário | "Preencha o formulário" | "Solicitar Proposta Sob Medida", com "Pronto para transformar a gestão do seu condomínio?" e três vantagens ao lado |
| Botão | "Enviar" | "SOLICITAR PROPOSTA PERSONALIZADA" |
| Equipe | — | "Equipe do projeto": "Este site é um projeto acadêmico de Engenharia de Software. Cada integrante do grupo cuidou de uma página:" e os 12 nomes |
| Fim da página | — | "Foto do topo: Pixabay / gerado por IA." |

Os dados de contato são de uma empresa real. Por decisão do líder, ficam no site, iguais em todas as páginas.

---

## 4. Formulário

| Campo | Antes | Depois |
| --- | --- | --- |
| `<form>` | `action="confirmacao.html"`, `data-confirmacao="Fale conosco"`, `id="proposta-form"` | Mesmo `action` e `id`; `data-confirmacao="Proposta personalizada"` |
| Nome | `text`, sem `required` | "Nome Completo *": `text`, `required`, `autocomplete="name"` |
| E-mail | `email`, `required` | "E-mail Corporativo ou Pessoal *": `email`, `required`, `autocomplete="email"` |
| Telefone | `tel`, sem `required` e sem `pattern` | "WhatsApp / Telefone *": `tel`, `required`, `pattern`, `maxlength="15"`, `inputmode="numeric"` e máscara |
| Condomínio | — | "Condomínio & Cidade *": `text`, `required` |
| Unidades | — | "Nº de Unidades / Apartamentos *": `number`, `min="1"`, `max="2000"`, `required` |
| Papel | — | "Seu Papel no Condomínio *": `<select>` com a primeira opção vazia "Selecione o seu papel", `required` |
| Canal de preferência | `<select>` (e-mail, telefone, WhatsApp), `required` | Saiu: os canais estão nos cards acima do formulário |
| Assunto | Comprar, alugar, vender ou administrar imóvel e outras informações | Proposta de administração, boleto ou taxa condominial, assembleias, manutenção ou ocorrência e outros assuntos. Primeira opção vazia "Selecione o assunto" |
| Data | — | "Melhor data para retorno *": `date`, `required`, sem datas que já passaram |
| Mensagem | `textarea`, `required` | `textarea`, `required` |
| Rótulos | `<label for>` em todos os campos | `<label for>` em todos os campos, com a classe `.ex-rotulo` |

### `js/formulario.js`

| Antes | Depois |
| --- | --- |
| Não era carregado pela página (linha comentada) | Carregado no fim da página |
| Guardava os campos no navegador e abria a confirmação | Igual |
| — | Data mínima: o campo de data começa no dia de hoje |
| — | A data aparece na confirmação como dd/mm/aaaa |
| — | Máscara do telefone: fixo `(11) 2564-9963` e celular `(11) 98765-4321`, ao digitar, colar (com ou sem +55) e apagar |

---

## 5. CSS

### Onde fica

| Antes | Depois |
| --- | --- |
| `css/contato.css` (153 linhas), carregado junto com `paleta.css` e `layout.css` | Bloco `PÁGINA: contato.html` do `css/style.css` (linhas 4458 a 4867) |
| Regras sem prefixo (`*`, `body`, `main`, `a`, `label`, `input`, `button`…): valiam para qualquer página que carregasse o arquivo | Toda regra começa com `.pagina-contato` |
| Sem foto no topo | A página só define a foto de fundo do `.ex-hero` (linhas 4483 a 4485) |

### O que saiu para o padrão do site

As regras abaixo deixaram a página. Hoje quem cuida disso é o bloco GLOBAL e os componentes do `css/style.css`, iguais em todo o site.

| Antes (`css/contato.css`) | Depois |
| --- | --- |
| `body`: fonte Georgia (serifada), cor do texto e fundo | Padrão das tags no bloco GLOBAL |
| `h1, h2`: cor verde-petróleo | Padrão das tags |
| `a` e `a:hover`: verde-petróleo e cobre | Padrão das tags |
| `.canal h2` e `.redes h2` com `font-size: 1.15rem` | `<h3>` padrão do site |
| `.fale-conosco h1` em maiúsculas | Componente `.ex-hero` |
| `main` com `max-width: 900px` | Container do site `.ex-container` (1200px) |
| `label`, `input`, `select`, `textarea` | Componentes `.ex-rotulo` e `.ex-campo` |
| `button` | Componente `.ex-botao` |
| `.formulario` (caixa branca com borda) e `.canal` (borda de cima) | Componente `.ex-card` |

### Cores

| Antes | Uso | Depois |
| --- | --- | --- |
| `#0f4c4a` (`--cor-principal`) | Títulos, links, botão, borda dos canais | Saiu (títulos e links no padrão do site) |
| `#b5651d` (`--cor-destaque`) | Hover dos links, contorno do foco | Contorno do foco em `rgb(0, 104, 118)` |
| `#1f2a2a` (`--cor-texto`) | Texto | Saiu (padrão do site) |
| `#f3f5f4` (`--cor-fundo`) | Fundo da página | Saiu (padrão do site) |
| `#c9d3d1` (`--cor-borda`) | Bordas | `rgb(226, 232, 240)` |
| `#fff` | Fundo do formulário e dos campos | `rgb(255, 255, 255)` |
| `#0b3937` | Hover do botão | Saiu (componente `.ex-botao`) |
| — | Caixa do ícone, brilhos e sombras | `rgb(214, 247, 255)`, `rgb(241, 245, 249)`, `rgb(16, 185, 129)`, `rgba(0, 188, 212, …)`, `rgba(214, 247, 255, 0.4)` e `rgba(6, 21, 45, …)` |

### O que mudou

* Canais: de `flex` com `flex-wrap` para `grid`, com 1 coluna no celular, 2 a partir de 640px e 3 a partir de 1024px.
* Formulário: campos em 1 coluna no celular e 2 a partir de 640px; mensagem e botão ocupam as duas colunas.
* Proposta: texto e formulário um embaixo do outro; lado a lado a partir de 1024px, com brilhos desfocados no fundo.
* Equipe: integrantes em caixinhas brancas, de 1 a 4 colunas.
* Âncora `#proposta-form`: quem chega pelo botão "Falar com Consultor" para 240px acima do formulário (linha 4758).

### O que ficou

* A ideia dos canais lado a lado, que descem para a linha de baixo no celular.
* Os links das redes sociais lado a lado, sem bolinha (`.canal__redes`, como era o `.redes ul`).
* O contorno de 3px no foco do teclado, agora com o teal da paleta.
* O rótulo em cima de cada campo.

---

## 6. Como fica na tela

| Elemento | Antes | Depois |
| --- | --- | --- |
| Topo | Título "FALE CONOSCO" em verde-petróleo, sem foto | Foto com película azul-marinho, rótulo "Contato" e título com "Condomínios" em destaque |
| Fonte do texto | Georgia (serifada) | A do site (Plus Jakarta Sans e Space Grotesk) |
| Fundo da página | Cinza-esverdeado claro | O do site |
| Canais | Três blocos de texto com uma linha verde em cima | Seis cards brancos com ícone em caixinha ciano-clara |
| WhatsApp | Link de texto | Botão do WhatsApp |
| Formulário | Caixa branca com campos em 1 coluna e botão verde "Enviar" | Card branco com borda ciano, campos em 2 colunas e botão azul-marinho com seta; vantagens ao lado |
| Equipe | — | Lista de caixinhas brancas com o nome e o link da página de cada integrante |
| Nota da fonte | — | Texto pequeno e centralizado no fim da página |
| Logo do header e do rodapé | Sem `srcset` | Nítido (versões 1x e 2x) |
