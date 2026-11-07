# Relatório de teste — Serviços 3 (Gestão Operacional)

| | |
| --- | --- |
| **Responsável** | David |
| **Entregou para a 2ª fase?** | **Sim** |
| **Avaliação do líder (2ª entrega)** | **9 / 10** |
| **Situação** | **Fechada em 06/11/2026.** |
| **Arquivos finais** | `pages/servicos-3.html` + bloco `PÁGINA: servicos-3.html` do `css/style.css` (linhas 5076 a 5189) + foto do topo em `img/servicos-3/gestor-orientando-equipe.jpg` |
| **Antes e depois** | [antes-depois.md](antes-depois.md) |
| **Evidência W3C (HTML)** | [w3c-validator.pdf](w3c-validator.pdf) (06/11): validada |
| **Evidência W3C (CSS)** | [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) (06/11): o `css/style.css` inteiro validado no W3C CSS Validator |
| **Fora do escopo** | Header e footer (compartilhados, revisados à parte) |

---

## 1. Histórico

| Data | O que aconteceu |
| --- | --- |
| — | Versão no projeto: título "Gestão Operacional", uma frase de introdução, uma foto (`img/img1.png`, 1200 × 840 px, 1.255 KB), as seções "Benefícios", "Como funciona", "O que fazemos" (4 blocos feitos com tabelas de uma coluna) e "Escopo" (lista e tabela), e os botões "Solicitar orçamento" (verde) e "Voltar para serviços" (vermelho). O CSS ficava num `<style>` dentro do HTML e o menu do celular estava desligado |
| 06/11 | Primeira revisão completa. A página não veio pelo ClickUp; o "antes" é a versão que estava no projeto |
| 06/11 | Decisão do líder: o HTML enviado pela equipe fica como está (conteúdo, ordem e visual); mudam só as tags e o CSS |
| 06/11 | Tags: os 4 blocos de "O que fazemos", que eram tabelas de uma coluna, viraram `<article>` com `<h3>`, com o mesmo texto e o mesmo visual; as `<section>` sem título saíram; a tabela "O que está incluso" ganhou `<caption>` e `scope`; os botões verde e vermelho viraram os botões do site; o menu do celular voltou a funcionar |
| 06/11 | Imagem: `img/img1.png` (1.255 KB) virou `img/servicos-3/gestor-orientando-equipe.jpg` (120 KB). CSS no padrão do site e página dentro do `css/style.css` |
| 06/11 | O líder trouxe do git a versão nova do integrante, enviada em 04/11: mesmos textos e ordem, os 4 blocos de "O que fazemos" como cards, um `<style>` de 125 linhas no `<head>`, uma foto com caminho quebrado (`img/gestora-orientando-equipe.png`), o logo sem `srcset` e o `menu.js` comentado. O visual do `<style>` foi para o CSS da página, sem a tipografia |
| 06/11 | Padrão de tags do site, a pedido do líder: a foto da página foi para o topo `.ex-hero` ("Gestão Operacional", com a frase de introdução), o primeiro bloco virou o `.ex-cabecalho`, os rótulos "-- BENEFÍCIOS…" viraram `.ex-sobretitulo`, os 4 cards viraram `<article>`, a tabela ganhou `<caption>` e `scope` e os botões usam os botões do site |
| 06/11 | O CSS do site passou a ser um arquivo único e editável, o `css/style.css`, dividido em blocos. As regras da página ficam no bloco `PÁGINA: servicos-3.html` |
| 06/11 | Fonte da foto: nota no fim da página, "Foto do topo: Pixabay / gerado por IA." |
| 06/11 | Os botões "Solicitar orçamento" e "Voltar para serviços" desta página viraram o padrão do fim das outras páginas de serviço (Serviços 1 e Serviços 2) |
| 06/11 | Saiu o `<link rel="manifest">`. Nenhuma página do site liga o manifest |
| 06/11 | Aviso do W3C ("Article lacks heading"): o `<article>` que envolvia todo o conteúdo virou `<div class="conteudo">`, e a regra do CSS foi trocada junto (`main > .ex-container > article` passou a ser `.pagina-servicos-3 .conteudo`). Os cards continuam `<article>` com `<h3>` |
| 06/11 | Rodapé com o link "Orçamento de Hospedagem", na lista "Páginas Internas" e na linha do ©, e o menu "Docs" com o link para o painel do projeto. O `js/acessibilidade.js` passou a ser carregado no `<head>`, como em todas as páginas: o botão de acessibilidade aparece também aqui |
| 06/11 | Validação no W3C feita pelo líder: validada ([w3c-validator.pdf](w3c-validator.pdf)). No mesmo dia, o `css/style.css` inteiro foi validado no W3C CSS Validator ([`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf)) |
| 06/11 | Página **fechada** |

---

## 2. Requisitos do professor

OK = atende · ATENÇÃO = atende, mas pode melhorar · N/A = não se aplica a esta página

Os números de linha são do `pages/servicos-3.html`, a não ser quando a linha diz "do CSS" (aí são do `css/style.css`).

### HTML5 e semântica

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<header>`, `<nav>`, `<footer>` | OK | Compartilhados (linhas 20, 55 e 228) |
| `<main>` | OK | `<main>` da linha 96 à 225, com o topo, as quatro seções, os botões e a nota |
| `<section>` | OK | Topo (98), Benefícios (111), Como funciona (128), O que fazemos (144) e Escopo (177). As quatro do conteúdo têm `<h2>` ligado por `aria-labelledby` |
| `<article>` | OK | Os 4 cards de "O que fazemos" (linhas 152, 157, 164 e 169), cada um com `<h3>` |
| Listas | OK | `<ul>` em Benefícios (119) e em Escopo (183); `<ol>` em Como funciona (135) |
| Tabela | OK | "O que está incluso" (linha 190) com `<caption>` (191), `<thead>`, `<tbody>` e `scope="col"` nos títulos das colunas (194 e 195) |
| Cabeçalhos hierárquicos | OK | Um `<h1>` (102), quatro `<h2>` (114, 131, 147 e 180) e quatro `<h3>` nos cards. Nenhum nível pulado |
| Links funcionais | OK | "Solicitar orçamento" vai para `contato.html` e "Voltar para serviços" para `servicos.html` (linhas 217 e 218); os do menu e do rodapé funcionam, inclusive o "Orçamento de Hospedagem" (linhas 271 e 284) |

### Formulário e multimídia

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Formulário validado | N/A | É requisito da página de contato |
| `<video>`, `<audio>`, `<iframe>` | N/A | Não é obrigatório nesta página |

### Boas práticas

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Código validado no W3C (HTML) | OK | [w3c-validator.pdf](w3c-validator.pdf), de 06/11 |
| Imagens existem e o caminho está certo | OK | O logo 1x e 2x e a foto do topo (`img/servicos-3/gestor-orientando-equipe.jpg`, linha 5097 do CSS) existem |
| Imagens com `alt` | OK | As únicas `<img>` são os logos (linhas 53 e 232), com `alt="Grupo Êxito Condomínios"`. A foto do topo é fundo do CSS |
| Imagens otimizadas (até 500 KB) | OK | Foto do topo com 120 KB; logo com 7 KB (1x) e 20 KB (2x) |
| Imagens corretamente nomeadas | OK | Minúsculas, com hífen, na pasta da página e com nome que diz o que é |
| Logo nítido | OK | `<img>` do logo com `srcset` (1x e 2x) no header (linha 53) e no rodapé (linha 232) |
| Fonte de conteúdo não autoral | OK | Nota do fim (linha 222): "Foto do topo: Pixabay / gerado por IA." |
| Navegação funcional e coerente | OK | Abre pelo menu e marca "Serviços" com `aria-current="page"` (linhas 58 e 81). Menu do celular ligado (`js/menu.js`, linha 289) |
| Formatação adequada | **ATENÇÃO** | Títulos e rótulos escritos normalmente no HTML (as maiúsculas vêm do CSS). Só os títulos das colunas da tabela, "FRENTE" e "DESCRIÇÃO" (linhas 194 e 195), continuam digitados em maiúsculas. Não impede a entrega |
| Código sem sobras | OK | Sem `<section>` sem título e sem regras de CSS sem uso no bloco da página |

### Clareza e coerência

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Nome da empresa | OK | "Grupo Êxito Condomínios" no `<title>` (linha 6), no logo e no rodapé |
| Texto coerente com o tema | OK | Porteiros, zeladores, manutenção preventiva, fornecedores e plantão 24h |
| Conteúdo repetido | **ATENÇÃO** | Em "O que está incluso", a lista (linhas 183 a 189) e a tabela logo abaixo trazem quase os mesmos itens. Ficou assim pela decisão de manter o conteúdo da equipe. Não impede a entrega |
| Coerência com o resto do site | OK | Os botões do fim desta página são os mesmos da Serviços 1 e da Serviços 2 |

### CSS

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Usa só o `css/style.css` | OK | Linha 14: `<link rel="stylesheet" href="../css/style.css">` |
| CSS isolado com `.pagina-servicos-3` | OK | `<body class="pagina-servicos-3">` (linha 18) e todas as regras do bloco `PÁGINA: servicos-3.html` do `css/style.css` (linhas 5076 a 5189) com o prefixo, inclusive dentro do `@media` |
| Topo com o componente do site | OK | `<section class="ex-hero">` (linha 98). A página só define a foto de fundo (linhas 5096 a 5098 do CSS) |
| Cabeçalho com o componente do site | OK | `<div class="ex-cabecalho">` nas quatro seções (linhas 112, 129, 145 e 178), com rótulo `.ex-sobretitulo` e texto `.ex-subtitulo` |
| Largura do conteúdo | OK | Conteúdo dentro do container do site, `.ex-container` (linha 108) |
| Botões do site | OK | `.ex-botao--primario` e `.ex-botao--secundario` (linhas 217 e 218); a página só os coloca lado a lado no centro (linha 5166 do CSS) |
| Cores da paleta | OK | O bloco da página usa só `rgb(255, 255, 255)` e `rgb(226, 232, 240)`, ambas da paleta |
| Sem `var()` | OK | Nenhum `var()` no bloco da página |
| Mesmo padrão de texto do site | OK | O bloco da página não muda fonte, tamanho, peso, cor do texto nem maiúsculas. As variações usam componentes do site: rótulo (`.ex-sobretitulo`), texto de apoio (`.ex-subtitulo`) e nota (`.ex-nota`) |
| Sem `<style>` nem `style="..."` no HTML | OK | Nenhum |
| Responsivo | OK | `@media` 640 px (linha 5180 do CSS): no celular, um card embaixo do outro e botões mais próximos |
| CSS validado no W3C CSS Validator | OK | O `css/style.css` inteiro foi validado em 06/11: [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) |

### Resumo

| OK | ATENÇÃO | N/A |
| :---: | :---: | :---: |
| 32 | 2 | 2 |

Nenhum requisito do professor deixou de ser atendido. Os dois itens em ATENÇÃO (títulos da tabela em maiúsculas no HTML e lista repetida pela tabela em "O que está incluso") são melhorias que não impedem a entrega.
