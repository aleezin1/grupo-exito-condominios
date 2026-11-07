# Relatório de teste — Notícias

| | |
| --- | --- |
| **Responsável** | Enzo |
| **Entregou para a 2ª fase?** | **Não** (nenhuma versão enviada pelo ClickUp) |
| **Avaliação do líder (2ª entrega)** | **4 / 10** |
| **Situação** | **Fechada em 06/11/2026.** |
| **Arquivos finais** | `pages/noticias.html` + bloco "PÁGINA: noticias.html" do `css/style.css` |
| **Antes e depois** | [antes-depois.md](antes-depois.md) |
| **Evidência W3C (HTML)** | [w3c-validator.pdf](w3c-validator.pdf): validada pelo líder em 06/11/2026 (versão final) |
| **Evidência W3C (CSS)** | `css/style.css` validado em [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) |
| **Fora do escopo** | Header e footer (compartilhados, revisados à parte) |

---

## 1. Histórico

| Data | O que aconteceu |
| --- | --- |
| 04/11 | Primeira revisão. A página não veio pelo ClickUp; o "antes" é a versão que estava no projeto. Ela tinha a lista de notícias (um destaque e cinco cards) e as seis matérias completas na mesma página. A troca entre a lista e a matéria usava 7 botões de opção (`<input type="radio">`) escondidos e rótulos (`<label>`) "Leia mais" e "Voltar" |
| 04/11 | Problemas encontrados: 7 `<h1>` (um da página e um em cada matéria), troca de tela que não funcionava pelo teclado nem com o "voltar" do navegador, um falso link "Ver notícias mais antigas", ilustrações escritas dentro do HTML (`data:image/svg+xml;base64,...`) com cores fora da paleta, CSS dentro de um `<style>` no HTML, cores fora da paleta e títulos de até 56px |
| 04/11 | Página no padrão do site e dentro do `css/style.css`: topo `.ex-hero` ("Notícias e artigos sobre gestão condominial"), um `<h1>` só (as matérias passaram para `<h2>`), CSS isolado com `.pagina-noticias`, cores da paleta, tipografia pelos componentes do site e largura de 1200px |
| 04/11 | A troca entre a lista e a matéria continua sem JavaScript, mas agora com links de verdade: "Leia mais" leva a `#materia-N`, a matéria aparece com `:target` e "Voltar para notícias" leva a `#noticias`. Os 7 botões de opção escondidos e o "Ver notícias mais antigas" saíram |
| 04/11 | As ilustrações viraram arquivos em `img/noticias/`, com as cores da paleta. Os cards e o destaque ganharam borda, cantos arredondados e o efeito ao passar o mouse, como os cards do site. A categoria virou etiqueta e a data, nota (`<time>`) |
| 04/11 | Nota no fim da página avisando que as notícias são fictícias e indicando a fonte das imagens |
| 04/11 | Ajustes do líder: foto do topo em `img/noticias/hero-noticias.jpg`; a notícia em destaque passou a usar a foto `img/noticias/assembleias-virtuais.jpg`; a nota passou a dizer "Ilustrações feitas por IA. Foto do topo: gerado por IA." |
| 04/11 | O líder colocou o cabeçalho padrão do site (`.ex-cabecalho`) abaixo do topo: "Confira agora as últimas notícias", com o `id="titulo-noticias"` |
| 06/11 | Limpeza da pasta de imagens: saíram as três ilustrações que a página não usava mais |
| 06/11 | A grade dos cards deixou de ter card sozinho. No computador ficam 2 cards em cima e 3 embaixo; no tablet, o 1º ocupa a linha inteira e os outros ficam de 2 em 2; no celular, um embaixo do outro |
| 06/11 | As fotos passaram a declarar no `width` e no `height` o tamanho real de cada arquivo |
| 06/11 | O `js/acessibilidade.js` passou a ser carregado no `<head>`, logo depois do `style.css`. Antes a linha estava comentada |
| 06/11 | Rodapé: link "Orçamento de Hospedagem" na lista "Páginas Internas" e na linha do © |
| 06/11 | Validação no W3C pelo líder: [w3c-validator.pdf](w3c-validator.pdf). Página **fechada** |

---

## 2. Requisitos do professor

OK = atende · N/A = não se aplica a esta página

### HTML5 e semântica

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<header>`, `<nav>`, `<footer>` | OK | Compartilhados (linhas 21, 60 e 428) |
| `<main>` | OK | `<main>` da linha 102 à 425, sem classe |
| `<section>` | OK | O topo é `<section class="ex-hero">` (linha 104), com o `<h1>` na linha 108. A lista e as matérias ficam em `<div>` |
| `<article>` | OK | 12 `<article>`: o destaque (132), os 5 cards (156, 177, 198, 219 e 240) e as 6 matérias (269, 295, 321, 347, 373 e 398) |
| Cabeçalhos hierárquicos | OK | Um `<h1>` (108); `<h2>` no cabeçalho (126), no destaque (142) e nas 6 matérias; `<h3>` nos 5 cards. Nenhum nível pulado |
| Links funcionais | OK | "Leia mais" é um link para `#materia-1` a `#materia-6` (linhas 146 a 252); a matéria aparece com `:target`. "Voltar para notícias" leva a `#noticias` (linha 265 e seguintes). Funciona sem JavaScript, pelo teclado e com o "voltar" do navegador |

### Formulário e multimídia

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Formulário validado | N/A | É requisito da página de contato |
| `<video>`, `<audio>`, `<iframe>` | N/A | Não é obrigatório nesta página |

### Boas práticas

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Código validado no W3C (HTML) | OK | [w3c-validator.pdf](w3c-validator.pdf), validação do líder em 06/11/2026 |
| Imagens existem e o caminho está certo | OK | As 6 imagens das notícias e a foto do topo (`img/noticias/hero-noticias.jpg`, no CSS) existem em `img/noticias/` |
| Imagens com `alt` | OK | As 12 imagens do conteúdo têm `alt` ("Ilustração sobre…") |
| Imagens na pasta da página | OK | `img/noticias/`: `assembleias-virtuais.jpg`, `telemetria-predial.jpg`, `equipe-executiva.jpg`, `portaria-remota.svg`, `manutencao.svg` e `sustentabilidade.svg` |
| Tamanho declarado das imagens | OK | `width` e `height` iguais ao arquivo: 512 × 279 (`assembleias-virtuais.jpg` e `telemetria-predial.jpg`), 800 × 533 (`equipe-executiva.jpg`) e 800 × 450 (as 3 ilustrações) |
| Imagens otimizadas (até 500 KB) | OK | Ilustrações de 1,2 KB; fotos de 44 a 73 KB; foto do topo com 498 KB, dentro do limite |
| Cores das ilustrações | OK | Só cores da paleta |
| Logo nítido | OK | `<img>` do logo com `srcset` (1x e 2x) no header (linhas 56 a 58) e no rodapé (linhas 432 a 434) |
| Fonte de conteúdo não autoral | OK | Nota do fim (linhas 420 a 423): "Ilustrações feitas por IA. Foto do topo: gerado por IA." |
| Navegação funcional e coerente | OK | Abre pelo menu e marca "Notícias" com `aria-current="page"` (linhas 66 e 90) |
| Botão de acessibilidade | OK | `js/acessibilidade.js` carregado no `<head>` (linha 16) |
| Código organizado e indentado | OK | 4 espaços na página toda |

### Clareza e coerência

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Nome da empresa | OK | "Grupo Êxito Condomínios" no `<title>` (linha 7), no `alt` do logo e no rodapé (linha 478) |
| Texto coerente com o tema | OK | Legislação, inadimplência, portaria remota, manutenção preventiva, convivência e economia nas áreas comuns |
| Notícias fictícias | OK | A nota da linha 421 diz: "Notícias fictícias, criadas para um projeto acadêmico." |

### CSS

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Usa só o `css/style.css` | OK | Linha 15: `<link rel="stylesheet" href="../css/style.css">` |
| CSS isolado com `.pagina-noticias` | OK | `<body class="pagina-noticias">` (linha 19) e todas as regras do bloco "PÁGINA: noticias.html" (linhas 3975 a 4262 do `css/style.css`) com o prefixo |
| Topo com o componente do site | OK | `<section class="ex-hero">` (linha 104). A página só define a foto de fundo (linha 3996 do CSS) |
| Largura do conteúdo | OK | Container do site: `<div class="ex-container noticias-pagina">` (linha 123) |
| Cores da paleta | OK | As 7 cores do bloco são da paleta, em `rgb(...)` |
| Sem `var()` | OK | Nenhum `var()` no bloco da página |
| Mesmo padrão de texto do site | OK | O CSS da página não muda fonte, tamanho, peso, altura da linha nem maiúsculas. Categoria em `.ex-etiqueta`, data em `.ex-nota` (`<time>`), links com `.ex-sobretitulo`, cabeçalho em `.ex-cabecalho` (linha 125) |
| Sem `<style>` nem `style="..."` no HTML | OK | Nenhum |
| Troca de tela sem JavaScript | OK | `.materia-view:target` (linha 4164 do CSS) mostra a matéria e `:has(.materia-view:target)` (linha 4169) esconde a lista |
| Responsivo | OK | Grade de 6 trilhas no computador (linha 4096 do CSS); `@media` 900px (linha 4217), 640px (linha 4233) e 800px (linha 4244) |
| CSS validado no W3C CSS Validator | OK | `css/style.css` validado em [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) |

### Resumo

| OK | N/A |
| :---: | :---: |
| 32 | 2 |

Todos os requisitos do professor que valem para esta página foram atendidos.
