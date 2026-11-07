# Relatório de teste — Projetos

| | |
| --- | --- |
| **Responsável** | Felipe Gabriel |
| **Entregou para a 2ª fase?** | **Sim** (arquivos enviados pelo ClickUp em 06/11/2026) |
| **Avaliação do líder (2ª entrega)** | **6 / 10** |
| **Situação** | **Fechada em 06/11/2026.** |
| **Arquivos finais** | `pages/projetos.html` + bloco `PÁGINA: projetos.html` do `css/style.css` + imagens em `img/projetos/` |
| **Antes e depois** | [antes-depois.md](antes-depois.md) |
| **Evidência W3C (HTML)** | [w3c-validator.pdf](w3c-validator.pdf): validada pelo líder em 06/11/2026 |
| **Evidência W3C (CSS)** | `css/style.css` validado em [docs/testes/pages/css/w3c-validator.pdf](../css/w3c-validator.pdf) |
| **Fora do escopo** | Header e footer (compartilhados, revisados à parte) |

---

## 1. Histórico

| Data | O que aconteceu |
| --- | --- |
| 04/11 | Ao montar o `css/style.css`, vimos que o CSS da Projetos tinha sido colado direto nele, com regras sem prefixo que afetavam as outras páginas (a regra de `img` deixava os logos com 600px de altura). O CSS voltou para o bloco da página, com o prefixo `.pagina-projetos` em toda regra |
| — | Antes do envio, a `pages/projetos.html` tinha o header, o footer e o topo `.ex-hero` do site, mas o conteúdo estava vazio |
| 06/11 | Envio pelo ClickUp: uma página inicial (`index.html`) com 3 cards (Gestão Financeira, Operacional e Administrativa) que levavam a 3 subpáginas (`gestaofinanceira.html`, `gestaooperacional.html` e `gestaoadministrativa.html`), cada uma com 3 projetos (imagem, nome do condomínio, "O que o cliente queria", "O que foi feito" e "Resultado"). Vieram também 9 imagens e um `style.css` próprio |
| 06/11 | Primeira revisão do material enviado. Decisão do líder: juntar tudo na `projetos.html`, no padrão de tags e de CSS do site |
| 06/11 | Página montada: o topo que já existia (com "administração de condomínios" corrigido), o `.ex-cabecalho` "Aqui estão os projetos" e uma seção por área (Financeira, Operacional e Administrativa), cada uma com os 3 projetos em cards. Os textos são os enviados; foram corrigidos "Alto dos Jardins" e "Parque Villa-Lobos". No Essência Moema havia dois "O que foi feito" colados, e o primeiro era cópia do texto da Alameda das Quaresmeiras: ficou só o segundo, que combina com o projeto |
| 06/11 | As 9 imagens viraram JPG em `img/projetos/` (1200 × 675 px, de cerca de 2 MB para cerca de 160 KB cada), com nome descritivo (`alto-dos-jardins.jpg`…) e `alt` que descreve a arte. Os links para a pasta `src/`, que não existe no projeto, saíram. O menu do celular foi religado. Nota no fim: projetos e resultados fictícios |
| 06/11 | Saíram do projeto a pasta com o envio e as cópias soltas da página inicial dele, junto com as imagens grandes que só elas usavam |
| 06/11 | A home passou a mostrar 3 desses projetos, um de cada área (Alto dos Jardins, Alameda das Quaresmeiras e Reserva da Cantareira), com os mesmos textos e imagens. Cada card leva direto à área na Projetos (`#financeira`, `#operacional` e `#administrativa`) |
| 06/11 | Fonte das imagens na nota do fim: "Imagens: Pixabay / gerado por IA. Foto do topo: Pixabay / gerado por IA." |
| 06/11 | Rodapé: o link "Orçamento de Hospedagem" entrou na lista "Páginas internas" e na linha do "© 2026" |
| 06/11 | O `js/acessibilidade.js` passou a ser carregado no `<head>`, logo depois do `style.css`, como em todas as páginas do site |
| 06/11 | Validação no W3C (HTML) feita pelo líder: [w3c-validator.pdf](w3c-validator.pdf). O `css/style.css` também foi validado. Página **fechada** |
| 06/11 | Limpeza no fechamento: saiu do CSS a regra `.atalhos`, dos atalhos que a página não tem mais, e o comentário do HTML deixou de citá-los |

---

## 2. Requisitos do professor

OK = atende · ATENÇÃO = atende, mas pode melhorar · N/A = não se aplica a esta página

### HTML5 e semântica

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<header>`, `<nav>`, `<footer>` | OK | Compartilhados (linhas 21, 60 e 308) |
| `<main>` | OK | `<main>` da linha 101 à 305, com o topo, as quatro seções e a nota |
| `<section>` | OK | Topo (103), cabeçalho (120), Gestão Financeira (129), Gestão Operacional (187) e Gestão Administrativa (243). As seções de conteúdo têm `aria-labelledby` ligado ao título |
| `<article>` | OK | Os 9 cards de projeto (linhas 134, 151, 168, 192, 209, 226, 248, 265 e 282) |
| Cabeçalhos hierárquicos | OK | Um `<h1>` (107), `<h2>` do cabeçalho (122) e das três áreas (130, 188 e 244) e um `<h3>` em cada card. Nenhum nível pulado |
| Links funcionais | OK | O conteúdo não tem links; os do menu e do rodapé funcionam. As áreas têm `id` (`financeira`, `operacional` e `administrativa`), usados pelos cards da home |

### Formulário e multimídia

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Formulário validado | N/A | É requisito da página de contato |
| `<video>`, `<audio>`, `<iframe>` | N/A | Não é obrigatório nesta página |

### Boas práticas

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Código validado no W3C (HTML) | OK | [w3c-validator.pdf](w3c-validator.pdf), validação do líder em 06/11/2026 |
| Imagens existem e o caminho está certo | OK | As 9 imagens dos cards, o logo (1x e 2x) e a foto de fundo do topo (`img/projetos/hero.jpg`, no CSS) existem |
| Imagens com `alt` | OK | Todas as imagens têm `alt`. Nos cards, o `alt` descreve a arte (portaria, resultado e depoimento que aparecem nela) |
| Imagens otimizadas (até 500 KB) | OK | Fotos dos cards de 149 a 173 KB; foto do topo, 312 KB |
| Imagens corretamente nomeadas | OK | Em `img/projetos/`, minúsculas, com hífen e o nome do condomínio (`alto-dos-jardins.jpg`, `vila-das-hortensias.jpg`…) |
| `width` e `height` nas imagens | OK | Todas declaram o tamanho. O `caminho-do-sol.jpg` tem 1200 × 676 px, e o HTML declara esse valor (linha 249) |
| Logo nítido | OK | `<img>` do logo com `srcset` (1x e 2x) no header (linha 56) e no rodapé (linha 312) |
| Fonte de conteúdo não autoral | OK | Nota do fim (linhas 300 a 303): "Imagens: Pixabay / gerado por IA. Foto do topo: Pixabay / gerado por IA." |
| Navegação funcional e coerente | OK | Abre pelo menu e marca "Projetos" com `aria-current="page"` (linhas 65 e 89). O rodapé tem o link "Orçamento de Hospedagem" (linhas 352 e 358) |
| Formatação adequada | OK | Títulos escritos normalmente no HTML; rótulos dos cards com `.ex-sobretitulo` e "Resultado" com `.ex-etiqueta` |
| Imagens dos cards no celular | ATENÇÃO | As artes têm texto dentro. Com a altura fixa de 210px (linha 2665 do CSS), um pedaço das laterais fica cortado. O texto importante está repetido no card |
| Código sem sobras | OK | Nenhuma regra sem uso no bloco: a regra `.atalhos`, dos atalhos que a página não tem mais, saiu em 06/11 |

### Clareza e coerência

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Nome da empresa | OK | "Grupo Êxito Condomínios" no `<title>` (linha 7) e na `description` (linha 8) |
| Texto coerente com o tema | OK | 9 casos de condomínios (inadimplência, portaria, processos administrativos), com o que o cliente queria, o que foi feito e o resultado |
| Projetos e resultados fictícios | OK | A nota da linha 301 diz: "Projetos e resultados fictícios, criados para um projeto acadêmico." |

### CSS

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Usa só o `css/style.css` | OK | Linha 15: `<link rel="stylesheet" href="../css/style.css">` |
| CSS isolado com `.pagina-projetos` | OK | `<body class="pagina-projetos">` (linha 19) e todas as regras do bloco `PÁGINA: projetos.html` (linhas 2610 a 2719 do CSS) com o prefixo |
| Topo com o componente do site | OK | `<section class="ex-hero">` (linha 103). A página só define a foto de fundo (linhas 2627 a 2629 do CSS) |
| Cores da paleta | OK | As 5 cores do bloco são da paleta: branco, Borda `rgb(226, 232, 240)`, Superfície variante `rgb(241, 245, 249)`, Teal `rgb(0, 104, 118)` e a sombra navy `rgba(6, 21, 45, 0.08)` |
| Sem `var()` | OK | Nenhum `var()` no bloco da página nem no `style.css` |
| Mesmo padrão de texto do site | OK | O bloco não muda fonte, tamanho, peso, altura da linha nem maiúsculas. As variações usam componentes do site: `.ex-cabecalho`, `.ex-subtitulo`, `.ex-sobretitulo`, `.ex-etiqueta` e `.ex-nota` |
| Sem `<style>` nem `style="..."` no HTML | OK | Nenhum |
| Responsivo | OK | Um card por linha no celular e três lado a lado a partir de 900px (`@media` da linha 2715 do CSS) |
| CSS validado no W3C CSS Validator | OK | `css/style.css` validado: [docs/testes/pages/css/w3c-validator.pdf](../css/w3c-validator.pdf) |

### Resumo

| OK | ATENÇÃO | N/A |
| :---: | :---: | :---: |
| 29 | 1 | 2 |

Nenhum requisito do professor deixou de ser atendido. O item em ATENÇÃO (corte lateral das artes no celular) não impede a entrega: o texto importante está repetido no card.
