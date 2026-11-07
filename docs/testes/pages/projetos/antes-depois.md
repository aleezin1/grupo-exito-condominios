# Antes e depois — Projetos

**Antes:** o material enviado pelo Felipe Gabriel pelo ClickUp em 06/11/2026 (uma página inicial e três subpáginas).
**Depois:** a versão final, fechada em 06/11/2026 (`pages/projetos.html` + bloco `PÁGINA: projetos.html` do `css/style.css`).

O relatório com os requisitos do professor está em [projetos.md](projetos.md).

---

## Resumo

| Parte | Antes | Depois |
| --- | --- | --- |
| Arquivos | 4 páginas: `index.html`, `gestaofinanceira.html`, `gestaooperacional.html` e `gestaoadministrativa.html` | Uma página só: `pages/projetos.html` |
| Links | Para `../src/…`, uma pasta que não existe no projeto | Sem links quebrados; a página abre pelo menu do site |
| Header e footer | Próprios, com o logo `img/logoempresa.png`, que não existe | Header e footer do site, com o logo nítido (1x e 2x) |
| `<body>` | Sem classe; o `<footer>` ficava fora do `<body>` | `<body class="pagina-projetos">`, com o footer dentro |
| Conteúdo principal | O `<main>` só tinha os títulos; os cards ficavam numa `<section>` sem título, depois dele | Tudo dentro de `<main>`: topo, cabeçalho, três áreas e nota |
| Títulos | Dois `<h1>` em cada arquivo (o do header e o do conteúdo) | Um `<h1>` (no topo), `<h2>` para o cabeçalho e as áreas, `<h3>` em cada card |
| Cards | 9 projetos espalhados em 3 subpáginas | 9 `<article>` em 3 seções, com o resultado em destaque |
| Imagens | 9 PNG de cerca de 2 MB cada, com espaço, acento e maiúscula no nome | 9 JPG de 149 a 173 KB em `img/projetos/`, com nome descritivo |
| `alt` | "Projeto 1", "Projeto 2"… | Descreve a arte: portaria, resultado e depoimento |
| CSS | `style.css` próprio, com Arial, cores fora da paleta e regras soltas | Só o `css/style.css`, com o bloco isolado `.pagina-projetos` |
| Aviso de conteúdo fictício | Não tinha | Nota no fim da página |
| Fonte das imagens | Não indicada | "Imagens: Pixabay / gerado por IA. Foto do topo: Pixabay / gerado por IA." |
| W3C | Não validado | Validado pelo líder em 06/11/2026 |

---

## 1. Estrutura do arquivo

### `<head>`

| Antes | Depois |
| --- | --- |
| Um `<head>` em cada um dos 4 arquivos, carregando o `style.css` do envio | Um `<head>` só, com `<title>` "Projetos \| Grupo Êxito Condomínios" e `description` |
| — | Ícones do site (favicon) e `robots` "noindex, nofollow" (projeto acadêmico) |
| CSS do envio | Só `<link rel="stylesheet" href="../css/style.css">` (linha 15) |
| — | `<script src="../js/acessibilidade.js"></script>` (linha 16), como em todas as páginas |

### Header

| Antes | Depois |
| --- | --- |
| Header próprio, com `<h1>` e o logo `img/logoempresa.png` (arquivo que não existe) | Header compartilhado do site (linhas 21 a 100) |
| Sem menu do site | Menu com "Projetos" marcado por `aria-current="page"` e menu do celular funcionando (`js/menu.js`) |

### Footer

| Antes | Depois |
| --- | --- |
| Footer próprio, fora do `<body>` | Footer compartilhado do site (linhas 308 a 362), dentro do `<body>` |
| — | Lista "Páginas internas" com "Orçamento de Hospedagem" (linha 352) |
| — | Linha do "© 2026" com "Política de Privacidade" e "Orçamento de Hospedagem" (linha 358) |

---

## 2. Estrutura do conteúdo

| Antes | Depois |
| --- | --- |
| `index.html` com 3 cards que levavam às subpáginas | — (as três áreas estão na mesma página) |
| — | `<main>` |
| — | `<section class="ex-hero">`: rótulo "Projetos", `<h1>` "Projetos para **administração de condomínios**" e texto |
| — | `<div class="ex-container">` (largura do site, 1200px) |
| — | `<section class="projetos-intro">` com `.ex-cabecalho`: `<h2>` "Aqui estão os projetos" e subtítulo |
| `gestaofinanceira.html` | `<section class="area" id="financeira">` com `<h2>` "Gestão Financeira" |
| `gestaooperacional.html` | `<section class="area" id="operacional">` com `<h2>` "Gestão Operacional" |
| `gestaoadministrativa.html` | `<section class="area" id="administrativa">` com `<h2>` "Gestão Administrativa" |
| 3 projetos por subpágina, numa `<section>` sem título fora do `<main>` | `<div class="grade-projetos">` com 3 `<article class="projeto">` em cada área |
| — | `<p class="ex-nota nota-fonte">` no fim |
| — | `</main>` |

### Um card de projeto (depois)

```html
<article class="projeto">
    <img src="../img/projetos/alto-dos-jardins.jpg" width="1200" height="675"
        alt="Card do Condomínio Alto dos Jardins: portaria com palmeiras e prédios ao fundo, ...">
    <div class="projeto__texto">
        <h3>Alto dos Jardins</h3>
        <p><span class="ex-sobretitulo">O que o cliente queria:</span> Reduzir a inadimplência ...</p>
        <p><span class="ex-sobretitulo">O que foi feito:</span> Implantação de uma nova política de cobrança ...</p>
        <p class="projeto__resultado"><span class="ex-etiqueta">Resultado</span>
            <strong>Redução de 40% na inadimplência em 6 meses.</strong></p>
    </div>
</article>
```

`<article>` diz que cada card é um conteúdo completo, e o `<h3>` dá o nome do condomínio dentro da área.

As âncoras das áreas (`#financeira`, `#operacional` e `#administrativa`) são usadas pelos cards de projeto da home, que levam direto à área certa.

---

## 3. Texto

Os textos dos projetos são os enviados. Mudaram só estes pontos:

| Onde | Antes | Depois |
| --- | --- | --- |
| Nome do condomínio | "Alto dos jardins" | "Alto dos Jardins" |
| Nome do condomínio | "Parque Villa Lobos" | "Parque Villa-Lobos" |
| Essência Moema, "O que foi feito" | Dois textos colados; o primeiro era cópia do texto da Alameda das Quaresmeiras | Só o segundo: "Implementação de novos processos de cobrança e acompanhamento financeiro mais próximo." |
| Título do topo | — | "Projetos para administração de condomínios" |
| Cabeçalho | — | "Aqui estão os projetos" / "que fizemos para alguns clientes" |
| Fim da página | — | "Projetos e resultados fictícios, criados para um projeto acadêmico. Imagens: Pixabay / gerado por IA. Foto do topo: Pixabay / gerado por IA." |

---

## 4. Imagens

| Antes | Depois |
| --- | --- |
| 9 PNG de cerca de 2 MB cada | 9 JPG de 1200 × 675 px (o `caminho-do-sol.jpg` tem 1200 × 676), de 149 a 173 KB |
| Nomes com espaço, acento e maiúscula ("financeiro_ Alto dos Jardins.png") e um erro de digitação ("adminstrativa_") | `alto-dos-jardins.jpg`, `parque-villa-lobos.jpg`, `mirante-de-pinheiros.jpg`, `essencia-moema.jpg`, `alameda-das-quaresmeiras.jpg`, `patio-itaim.jpg`, `caminho-do-sol.jpg`, `reserva-da-cantareira.jpg` e `vila-das-hortensias.jpg` |
| Pasta do envio | `img/projetos/` |
| `alt` "Projeto 1", "Projeto 2"… | `alt` que descreve a arte |
| — | `width` e `height` com o tamanho real de cada imagem |
| — | Foto do topo `img/projetos/hero.jpg` (312 KB), aplicada pelo CSS |

---

## 5. CSS

### Onde fica

| Antes | Depois |
| --- | --- |
| `style.css` próprio do envio | Bloco `PÁGINA: projetos.html` do `css/style.css` (linhas 2610 a 2719) |
| Regras soltas (`body`, `header`, `footer`): valiam para qualquer página | Toda regra começa com `.pagina-projetos` |
| — | Topo com o componente `.ex-hero` do site; a página só define a foto de fundo |

### O que saiu para o padrão de tags

| Antes | Depois |
| --- | --- |
| `font-family: Arial` | Fonte do site, que vem do bloco GLOBAL |
| Regras soltas de `body`, `header` e `footer` | `h1`, `h2` e `h3` no padrão do site; o bloco não muda nenhuma tipografia |
| — | Rótulos "O que o cliente queria" e "O que foi feito" com o componente `.ex-sobretitulo` |
| — | "Resultado" com o componente `.ex-etiqueta` |
| — | Cabeçalho com `.ex-cabecalho` e `.ex-subtitulo`; nota com `.ex-nota` |

### O que mudou

| Antes | Depois |
| --- | --- |
| `#172b44` e `white`, fora da paleta | Só cores da paleta, em `rgb(...)`: branco `rgb(255, 255, 255)`, Borda `rgb(226, 232, 240)`, Superfície variante `rgb(241, 245, 249)`, Teal `rgb(0, 104, 118)` e sombra `rgba(6, 21, 45, 0.08)` |
| Posições fixas (`margin-left: 600px` no título) | Grade (`.grade-projetos`): 1 coluna no celular e 3 a partir de 900px |
| — | Card (`.projeto`) com borda, cantos de 1.5rem e sombra |
| — | Foto do card com 210px de altura e `object-fit: cover` |
| — | "Resultado" (`.projeto__resultado`) numa caixa clara com faixa teal à esquerda, sempre no pé do card |
| — | Áreas com 60px de espaço entre elas e `scroll-margin-top: 140px`, para o título não ficar embaixo do header fixo ao chegar pela âncora |
| — | Nota do fim com 60px de espaço acima e centralizada |

### O que ficou

| Regra | Observação |
| --- | --- |
| `.pagina-projetos .atalhos` | Saiu em 06/11, junto com os atalhos para as áreas, que a página não tem mais |

---

## 6. Como fica na tela

| Elemento | Antes | Depois |
| --- | --- | --- |
| Navegação entre áreas | Clicar num card e abrir outra página | Rolar a página: as três áreas ficam uma embaixo da outra |
| Topo | Header próprio com `<h1>` | Foto do topo com película, rótulo "Projetos" e título com destaque |
| Título | Empurrado para o lado por `margin-left: 600px` | Alinhado ao conteúdo, na largura do site |
| Cards no computador | — | Três lado a lado em cada área, com a mesma altura e o "Resultado" alinhado no pé |
| Cards no celular | — | Um embaixo do outro. A arte é cortada nas laterais pela altura fixa; o texto importante está repetido no card |
| Logo do header e do rodapé | Imagem que não existia | Nítido (versões 1x e 2x) |
| Nota de conteúdo fictício e fonte | — | Texto pequeno e centralizado no fim da página |
| Botão de acessibilidade | — | No canto da tela, como em todo o site |
