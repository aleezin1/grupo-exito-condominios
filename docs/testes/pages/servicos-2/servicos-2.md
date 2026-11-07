# Relatório de teste — Serviços 2 (Gestão Financeira)

| | |
| --- | --- |
| **Responsável** | Felipe Dias |
| **Entregou para a 2ª fase?** | **Sim** |
| **Avaliação do líder (2ª entrega)** | **7 / 10** |
| **Situação** | **Fechada em 06/11/2026.** |
| **Arquivos finais** | `pages/servicos-2.html` + bloco `PÁGINA: servicos-2.html` do `css/style.css` (linhas 4991 a 5073) + foto do topo `img/servicos-2/analise-financeira.jpg` |
| **Antes e depois** | [antes-depois.md](antes-depois.md) |
| **Evidência W3C (HTML)** | [w3c-validator.pdf](w3c-validator.pdf): validada pelo líder em 06/11 |
| **Evidência W3C (CSS)** | `css/style.css` validado em [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) (06/11) |
| **Fora do escopo** | Header e footer (compartilhados, revisados à parte) |

---

## 1. Histórico

| Data | O que aconteceu |
| --- | --- |
| — | Versão no projeto: página com fundo escuro, o título "Gestão Financeira", a seção "Da análise à decisão" com uma foto (`img/img.png`), um segundo título "Soluções completas para a gestão condominial", seis cards com todos os serviços do grupo e um formulário "Entre em contato conosco" |
| 06/11 | Primeira revisão. A página não tinha `<main>`, tinha dois `<h1>`, atributos antigos (`type="square"`, `height="350px"`) e `<br>` para dar espaço. O formulário não tinha campos obrigatórios e o `formulario.js` estava comentado. A foto tinha 1.974 KB e não tinha fonte. O CSS carregava 4 arquivos separados, sem prefixo, com sombras em preto e mudando tamanhos de texto |
| 06/11 | Decisão do líder: o HTML enviado pela equipe fica como está (conteúdo, ordem, os 6 cards e o formulário); mudam só as tags e o CSS |
| 06/11 | Tags: `<main>` em volta do conteúdo; o segundo `<h1>` ("Soluções completas para a gestão condominial") virou `<h2>` e os títulos dos cards viraram `<h3>`; saíram `type="square"`, `height="350px"` e os `<br>` (o efeito foi para o CSS) |
| 06/11 | Formulário: nome, e-mail e telefone obrigatórios; telefone com a mesma máscara da Contato; `formulario.js` ligado |
| 06/11 | Imagem: `img/img.png` (1536 × 1024 px, 1.974 KB) virou `img/servicos-2/analise-financeira.jpg` (1200 × 800 px, 135 KB). Regras mortas saíram do CSS. A página passou a carregar só o `css/style.css`, com CSS isolado em `.pagina-servicos-2` |
| 06/11 | Padrão de tags do site, mantendo os textos e a ordem da equipe: a foto da página foi para o topo `.ex-hero` ("Gestão Financeira"), "Da análise à decisão" virou o `.ex-cabecalho` e os cards viraram `<article>`. A frase do topo foi tirada da descrição da página, porque ela não tinha introdução |
| 06/11 | Conteúdo da página: os seis cards com todos os serviços do grupo deram lugar a quatro cards só sobre a gestão financeira ("Soluções que garantem uma gestão financeira eficiente", "Mais controle e segurança para as finanças do seu condomínio", "Como funciona nossa gestão financeira" e "Como funciona nosso planejamento financeiro"). Saíram o título "Soluções completas para a gestão condominial" e o formulário. O formulário oficial do site fica na Contato |
| 06/11 | Botões do fim iguais aos da Serviços 3: "Solicitar orçamento" (vai para a Contato) e "Voltar para serviços", centralizados, com 50px entre eles no computador e 16px no celular. O HTML já estava certo; entrou a regra de CSS que coloca os botões lado a lado no centro |
| 06/11 | A nota da foto passou a usar a cor padrão do `.ex-nota` e ficou legível no fundo claro. Corrigidos os pontos duplos em "financeiras.." e "condomínio..". Saíram do bloco da página as regras vazias e as do formulário, que a página não tem mais |
| 06/11 | Rodapé: o link "Orçamento de Hospedagem" entrou na lista "Páginas internas" e na linha do ©. O `js/acessibilidade.js` passou a ser carregado no `<head>`, como em todas as páginas |
| 06/11 | Ajuste do líder: saiu o `aria-labelledby="titulo-solucoes"` da área de soluções, que apontava para um `id` que não existe |
| 06/11 | Aviso do W3C ("Section lacks heading"): a `<section class="solucoes">`, que só agrupa os cards, virou `<div class="solucoes">`. A aparência não mudou |
| 06/11 | Decisão do líder sobre o conteúdo: os quatro cards ficam como estão, com três na primeira linha e o quarto sozinho, centralizado, na segunda linha no computador |
| 06/11 | Rodapé com o menu "Docs" (link "Painel do projeto") |
| 06/11 | Validada pelo líder no W3C ([w3c-validator.pdf](w3c-validator.pdf)). No mesmo dia, o `css/style.css` inteiro foi validado no W3C CSS Validator ([`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf)). Página **fechada** |
| 06/11 | Limpeza no fechamento: saiu o `<script>` do `formulario.js`, que a página não usa mais (ela não tem formulário), e um espaço sobrando na tag da seção de análise |

---

## 2. Requisitos do professor

OK = atende · ATENÇÃO = atende, mas pode melhorar · N/A = não se aplica a esta página

Os números de linha são do `pages/servicos-2.html`, a não ser quando a linha diz "do CSS" (aí são do `css/style.css`).

### HTML5 e semântica

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<header>`, `<nav>`, `<footer>` | OK | Compartilhados (linhas 22, 61 e 186) |
| `<main>` | OK | `<main>` da linha 103 à 183, com o topo, a seção "Da análise à decisão", os cards, os botões e a nota |
| `<section>` | OK | Topo (105) e "Da análise à decisão" (118), cada uma com título. Os cards ficam num `<div class="solucoes">` (127), porque essa área não tem título próprio |
| `<article>` | OK | Os 4 cards (linhas 129, 139, 149 e 160), cada um com o seu `<h3>` |
| Listas | OK | Cada card tem uma `<ul class="lista-quadrado">` (131, 141, 151 e 162) |
| Cabeçalhos hierárquicos | OK | Um `<h1>` (109), `<h2>` (120) e quatro `<h3>` nos cards (130, 140, 150 e 161). Nenhum nível pulado |
| Links funcionais | OK | "Solicitar orçamento" leva a `contato.html` e "Voltar para serviços" a `servicos.html` (linhas 176 e 177); os do menu e do rodapé funcionam, inclusive o "Orçamento de Hospedagem" (232 e 246) |

### Formulário e multimídia

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Formulário validado | N/A | É requisito da página de contato. Esta página não tem formulário |
| `<video>`, `<audio>`, `<iframe>` | N/A | Não é obrigatório nesta página |

### Boas práticas

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Código validado no W3C (HTML) | OK | [w3c-validator.pdf](w3c-validator.pdf), validação do líder em 06/11 |
| Imagens existem e o caminho está certo | OK | A foto do topo (`img/servicos-2/analise-financeira.jpg`, linha 5012 do CSS) e o logo (1x e 2x) existem |
| Imagens com `alt` | OK | O logo do header (57) e do rodapé (190) têm `alt`. A foto do topo é fundo de CSS |
| Imagens otimizadas (até 500 KB) | OK | Foto do topo com 135 KB (1200 × 800 px) |
| Imagens corretamente nomeadas | OK | Minúsculas, com hífen, nome que diz o que é, na pasta `img/servicos-2/` |
| Logo nítido | OK | `<img>` do logo com `srcset` (1x e 2x) no header (linha 57) e no rodapé (linha 190) |
| Fonte de conteúdo não autoral | OK | Nota do fim (linha 181): "Foto do topo: Gerado por IA." |
| Navegação funcional e coerente | OK | Abre pelo menu e marca "Serviços" com `aria-current="page"` (linhas 64 e 88) |
| Menu do celular e aviso de cookies | OK | `js/menu.js` (251) e `js/cookies.js` (253) carregados |
| Acessibilidade | OK | `js/acessibilidade.js` no `<head>` (linha 17) |
| Código sem sobras no CSS | OK | Sem regras vazias nem regras de formulário no bloco da página |

### Clareza e coerência

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Nome da empresa | OK | "Grupo Êxito Condomínios" no `<title>` (linha 7), no `alt` do logo e no © do rodapé |
| Texto coerente com o tema | OK | Os quatro cards falam só da gestão financeira do condomínio: boletos, prestação de contas, inadimplência, conciliação bancária, fundo de reserva e previsão orçamentária |
| Ortografia | OK | "financeiras." (142 e 165), sem o ponto duplo |
| Organização dos cards | OK | Três cards na primeira linha (128 a 158) e o quarto sozinho, centralizado, na segunda (159 a 170). Ficou assim por decisão do líder |

### CSS

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Usa só o `css/style.css` | OK | Linha 16: `<link rel="stylesheet" href="../css/style.css">` |
| CSS isolado com `.pagina-servicos-2` | OK | `<body class="pagina-servicos-2">` (linha 20) e todas as regras do bloco `PÁGINA: servicos-2.html` (linhas 4991 a 5073 do CSS) com o prefixo, inclusive dentro do `@media` |
| Topo com o componente do site | OK | `<section class="ex-hero">` (linha 105). A página só define a foto de fundo (linha 5011 do CSS) |
| Componentes do site | OK | `.ex-container` (116), `.ex-cabecalho` (119), `.ex-subtitulo` (121), `.ex-botao` (176 e 177) e `.ex-nota` (181) |
| Cores da paleta | OK | As 3 cores do bloco são da paleta: `rgb(226, 232, 240)`, `rgb(255, 255, 255)` e `rgba(6, 21, 45, 0.08)` |
| Sem `var()` | OK | Nenhum `var()` no bloco da página |
| Mesmo padrão de texto do site | OK | O CSS da página não muda fonte, tamanho, peso, altura da linha nem maiúsculas. A nota usa a cor do `.ex-nota` |
| Sem `<style>` nem `style="..."` no HTML | OK | Nenhum |
| Sem fontes externas além das do site | OK | Nenhum link para o Google Fonts |
| Responsivo | OK | Cards com `flex: 0 1 360px` e quebra de linha (linha 5031 do CSS): três por linha no computador, um embaixo do outro no celular. `@media` 640 px para os botões (5069) |
| CSS validado no W3C CSS Validator | OK | `css/style.css` validado em [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) |

### Resumo

| OK | ATENÇÃO | N/A |
| :---: | :---: | :---: |
| 33 | 0 | 2 |

Todos os requisitos do professor que valem para esta página foram atendidos.
