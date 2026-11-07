# Relatório de teste — Quem Somos

| | |
| --- | --- |
| **Responsável** | Anthony |
| **Entregou para a 2ª fase?** | **Sim** (versão enviada pelo ClickUp) |
| **Avaliação do líder (2ª entrega)** | **7 / 10** |
| **Situação** | **Fechada em 01/11/2026.** Registro atualizado em 06/11/2026 |
| **Arquivos finais** | `pages/quem-somos.html` + bloco `PÁGINA: quem-somos.html` do `css/style.css` (linhas 2110 a 2293) |
| **Como foi enviado** | Pelo ClickUp. Veja o que veio e o que virou em [antes-depois.md](antes-depois.md) |
| **Evidência W3C (HTML)** | [w3c-validator.pdf](w3c-validator.pdf), de 06/11: **sem erros** |
| **Evidência W3C (CSS)** | [docs/testes/pages/css/w3c-validator.pdf](../css/w3c-validator.pdf): o `css/style.css` inteiro validado no W3C CSS Validator em 06/11 |
| **Fora do escopo** | Header e footer (compartilhados, revisados à parte) |

---

## 1. Histórico

| Data | O que aconteceu |
| --- | --- |
| 01/11 | Chegou pelo ClickUp como página solta: só `<style>` + conteúdo, sem `<head>` completo, header e footer. Trouxe as cores da paleta e a seção nova "Por que escolher o Grupo Êxito?" |
| 01/11 | Integrada ao `quem-somos.html` original: ficaram o `<head>`, o header, o footer e o `menu.js` do original; entraram o conteúdo e o CSS do ClickUp |
| 01/11 | O `<style>` saiu do HTML e foi para um arquivo de CSS da página. A fonte e as cores de `body`, `h1`–`h3` e `p` passaram a seguir o padrão das tags do site |
| 01/11 | O HTML ganhou `<main>` e `<section>` (Valores e Diferenciais) |
| 01/11 | O CSS foi isolado com `.pagina-quem-somos` e a página passou a carregar só o `css/style.css` (a primeira do site) |
| 01/11 | A sombra preta dos cards de diferenciais virou navy da paleta |
| 01/11 | O W3C deu o aviso "Section lacks heading" na caixa `.destaque`; ela voltou a ser `<div>` |
| 01/11 | Texto corrigido: "Grupo Êxito Imóveis" → "Grupo Êxito Condomínios" e "administração imobiliária" → "administração condominial". Cópia `quem-somos-clickup.html` apagada |
| 01/11 | Nova validação no W3C: **sem erros e sem avisos** |
| 01/11 | Linha `<link rel="manifest">` retirada do `<head>`, para o console não mostrar erro de CORS quando a página é aberta direto do arquivo. Página **fechada** |
| 01/11 | Seção nova "Um especialista explica", com o vídeo do YouTube "Saiba o que é Administração Condominial" (canal Manutenção Predial, de Felipe Lima) dentro de um `<iframe>`. Na página, o vídeo representa um especialista da empresa. A legenda deixa claro que isso é ilustrativo, que a empresa é fictícia e de quem é o vídeo original, com link |
| 01/11 | Nova validação no W3C, já com o vídeo: **sem erros e sem avisos**. Avaliação do líder: **7 / 10** |
| 01/11 | Largura-base do site padronizada em 1200px: o conteúdo passou de 1000px para 1200px. A caixa de Diferenciais, os cards e o vídeo continuam iguais |
| 01/11 | Topo com foto (componente `.ex-hero`, o mesmo da Clientes), de ponta a ponta da tela. O conteúdo passou para dentro de um `.ex-container`. Os comentários do HTML deixaram de citar arquivos de CSS |
| 01/11 | Ajustes do líder: rótulo "Quem somos", título "Grupo Êxito Condomínios — conheça mais sobre o grupo." e texto "Gestão que gera tranquilidade."; a caixa de apresentação (`.destaque`) foi para depois dos Valores; foto do topo trocada por uma da **Pixabay** |
| 01/11 | Foto do topo otimizada: de 1920 × 1156 px e 698 KB para 1600 × 963 px e **234 KB**. Nota "Foto do topo: Pixabay." no fim da página. Espaço do topo até o primeiro título fixado em **60px** (40px no celular) |
| 01/11 | Mesmo padrão de texto em todas as páginas: os títulos dos cards de Valores e Diferenciais passaram de teal para o `h3` padrão (azul-marinho); a legenda do vídeo e a nota da foto passaram a usar o componente de nota do site (`.ex-nota`, 12px). O CSS da página não muda mais nenhuma tipografia |
| 01/11 | Logo do header e do rodapé nítido: versões no tamanho certo (1x 144 × 52 px e 2x 288 × 104 px) com `srcset`. Antes a imagem era 4 vezes maior que o espaço e ficava sem nitidez |
| 01/11 | Ajuste do líder: a caixa de apresentação (`.destaque`, 3 parágrafos) foi **comentada** no HTML e não aparece mais na página |
| 01/11 | Nova validação no W3C, com o padrão de texto, o logo nítido e a caixa de apresentação comentada: **sem erros e sem avisos** |
| 01/11 | Limpeza: o trecho comentado da caixa de apresentação saiu do HTML, e a regra `.destaque` saiu do CSS |
| 01/11 | Espaço do topo até o primeiro título padronizado em **50px** (também no celular), igual em todas as páginas com topo. O espaço passou a vir do componente `.ex-hero`; a página só tira a margem de cima do primeiro título |
| 01/11 | Ajuste do líder: o vídeo passou a ocupar a largura toda do conteúdo (antes ia até 800px) |
| 06/11 | O CSS do site passou a ser um arquivo único e editável, o `css/style.css`, dividido em blocos. As regras da página ficam no bloco `PÁGINA: quem-somos.html`; os arquivos de CSS separados foram para `css/legado/`, só como registro |
| 06/11 | A foto do topo foi para a pasta da página: `img/quem-somos/hero-reuniao-condominio.jpg`, com o caminho trocado no CSS |
| 06/11 | O vídeo do especialista passou a ser um arquivo do site: o `<iframe>` do YouTube virou `<video controls preload="metadata">` com o arquivo `assets/video.mp4` (1 min 12 s, 1280 × 720) e a capa `img/quem-somos/capa-video-especialista.jpg` (145 KB, um quadro do próprio vídeo) no `poster`. O vídeo é o mesmo, então a legenda com o crédito ao Felipe Lima (canal Manutenção Predial) e o link para o YouTube continuam. Agora ele toca sem depender do YouTube |
| 06/11 | Rodapé: link "Orçamento de Hospedagem" na lista "Páginas internas" e na linha do ©, como em todas as páginas |
| 06/11 | Botão de acessibilidade: o `js/acessibilidade.js` passou a ser carregado no `<head>`, como em todas as páginas |
| 06/11 | Nova validação da página no W3C, pelo líder: **sem erros** ([w3c-validator.pdf](w3c-validator.pdf)). O `css/style.css` inteiro também foi validado no W3C CSS Validator ([docs/testes/pages/css/w3c-validator.pdf](../css/w3c-validator.pdf)) |
| 06/11 | Cabeçalho padrão logo abaixo do topo (`.ex-cabecalho`): título "Administramos por você e facilitamos a sua vida" e texto de apoio "Pare de perder tempo com burocracias." |
| 06/11 | O `<h2>` do cabeçalho passou a ter `id="titulo-quem-somos"` (estava com o `id` da Clientes) |

---

## 2. Requisitos do professor

OK = atende · ATENÇÃO = atende, mas pode melhorar · N/A = não se aplica a esta página

Os números de linha são do `pages/quem-somos.html`; os do CSS são do `css/style.css`.

### HTML5 e semântica

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<header>`, `<nav>`, `<footer>` | OK | Compartilhados (linhas 22, 61 e 291) |
| `<main>` | OK | `<main>` da linha 104 à 288: o topo com foto de ponta a ponta e o conteúdo num `.ex-container` de 1200px (linha 121) |
| `<section>` | OK | Topo (linha 107), Valores (147), Vídeo do especialista (183) e Diferenciais (215), cada uma com título |
| `<article>` | **ATENÇÃO** | A página não usa `<article>`. O site como um todo usa (index, noticias, servicos, clientes), então o requisito do site está cumprido |
| Cabeçalhos hierárquicos | OK | Um `<h1>` no topo (linha 111); `<h2>` no cabeçalho (125), em Missão (130), Visão (138), Valores (145), "Um especialista explica" (185) e Diferenciais (217); `<h3>` em cada card. Nenhum nível pulado |
| Links funcionais | OK | O conteúdo só tem o link do vídeo original na legenda (linha 204) e o de baixar o vídeo (196); os do menu e do rodapé funcionam, inclusive o "Orçamento de Hospedagem" (linhas 335 e 341) |

### Formulário e multimídia

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Formulário validado | N/A | É requisito da página de contato |
| `<video>` com `poster` e `controls` | OK | Vídeo local `assets/video.mp4` dentro de `<figure>` (linha 192): `<video controls preload="metadata">` (linha 194) com capa `img/quem-somos/capa-video-especialista.jpg` no `poster` e um link para baixar o vídeo, caso o navegador não reproduza |

### Boas práticas

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Código validado no W3C (HTML) | OK | [w3c-validator.pdf](w3c-validator.pdf), de 06/11: **sem erros** |
| Imagens existem e o caminho está certo | OK | Foto do topo `img/quem-somos/hero-reuniao-condominio.jpg` (linha 2131 do CSS), capa do vídeo e logo (1x e 2x) existem |
| Imagens com `alt` | OK | O logo do header (linha 57) e do rodapé (linha 295) tem `alt`. A foto do topo é fundo de CSS (decorativa) |
| Imagens otimizadas (até 500 KB) | OK | Foto do topo: 1600 × 963 px, 234 KB. Capa do vídeo: 145 KB. Logo: 1x 7 KB e 2x 19 KB |
| Logo nítido | OK | `<img>` do logo com `srcset` (1x e 2x) no header e no rodapé |
| Navegação funcional e coerente | OK | A página abre pelo menu e marca "Quem Somos" com `aria-current="page"` (linhas 63 e 87) |
| Formatação adequada | OK | Títulos, parágrafos e cards bem separados; 50px do topo até o primeiro título (padrão do componente `.ex-hero`); títulos dos cards no `h3` padrão do site |
| Código sem sobras | OK | Sem trechos comentados de conteúdo antigo no HTML e sem regras de CSS sem uso |
| Fonte de conteúdo não autoral | OK | Foto do topo: nota "Foto do topo: Pixabay." (linha 284). Vídeo: fonte na `<figcaption>` (linhas 199–207), com autor (Felipe Lima), canal (Manutenção Predial), link para o original e aviso de que ele é ilustrativo. O texto é autoral |
| Acessibilidade | OK | `js/acessibilidade.js` carregado no `<head>` (linha 17), como em todas as páginas |

### Clareza e coerência

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Nome da empresa | OK | "Grupo Êxito Condomínios" no topo (linha 111) e nos Diferenciais (217), igual ao `<title>`, ao menu e ao rodapé |
| Texto coerente com o tema | OK | Visão (linha 141): "referência em administração condominial" |
| Sem repetição | **ATENÇÃO** | O diferencial "Transparência nas Informações" (linha 255) repete o valor "Transparência" (linha 151) |
| Sem contradição | **ATENÇÃO** | "Tecnologia **Própria** de Gestão" (linha 242) contradiz o selo "SUPERLÓGICA HUB" do rodapé, que é um sistema de outra empresa |

### CSS

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Usa só o `css/style.css` | OK | Linha 16: `<link rel="stylesheet" href="../css/style.css">` |
| Topo com o componente do site | OK | `<section class="ex-hero">` (linha 107), o mesmo da Clientes. A página só define a foto de fundo (linha 2131 do CSS) |
| Cabeçalho abaixo do topo (`.ex-cabecalho`) | OK | Linhas 124 a 127, com o `<h2 id="titulo-quem-somos">` (o `id` tem o nome da própria página) |
| CSS isolado com `.pagina-quem-somos` | OK | `<body class="pagina-quem-somos">` (linha 20), e todas as regras do bloco `PÁGINA: quem-somos.html` (linhas 2110 a 2293 do CSS) começam com o prefixo |
| Cores da paleta | OK | As 20 cores escritas no bloco da página são da paleta, todas em `rgb(...)` ou `rgba(...)` |
| Sem `var()` | OK | Nenhum `var()` no bloco da página |
| Mesmo padrão de texto do site | OK | O bloco da página não muda fonte, tamanho, peso, altura da linha nem maiúsculas. A legenda do vídeo e a nota da foto usam o componente de nota do site (`.ex-nota`) |
| Sem `<style>` nem `style="..."` no HTML | OK | Nenhum |
| Responsivo | OK | O vídeo ocupa a largura toda e mantém o formato 16:9 (`aspect-ratio`, linha 2194 do CSS). O `@media (max-width: 700px)` (linha 2275 do CSS) coloca os cards um embaixo do outro e diminui os espaços |
| CSS validado no W3C CSS Validator | OK | [docs/testes/pages/css/w3c-validator.pdf](../css/w3c-validator.pdf): o `css/style.css` inteiro, de 06/11 |

### Resumo

| OK | ATENÇÃO | N/A |
| :---: | :---: | :---: |
| 28 | 3 | 1 |

Nenhum requisito do professor deixou de ser atendido. Os três itens em ATENÇÃO são melhorias de qualidade que não impedem a entrega: `<article>` e os dois textos dos diferenciais.
