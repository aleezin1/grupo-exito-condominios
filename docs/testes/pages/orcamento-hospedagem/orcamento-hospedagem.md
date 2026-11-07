# Relatório de teste — Orçamento de hospedagem

| | |
| --- | --- |
| **Responsável** | Grupo |
| **Entregou para a 2ª fase?** | — (página nova, feita a partir da planilha de 14/10) |
| **Avaliação do líder (2ª entrega)** | _ / 10 (a definir pelo líder) |
| **Situação** | **Fechada em 06/11/2026.** |
| **Arquivos finais** | `pages/orcamento-hospedagem.html` + bloco `PÁGINA: orcamento-hospedagem.html` do `css/style.css` (linhas 5583 a 5730) + prints em `img/orcamento-hospedagem/` + relatório em PDF em `docs/hospedagem/orcamento-hospedagem-dominio.pdf` |
| **Antes e depois** | [antes-depois.md](antes-depois.md) |
| **Evidência W3C (HTML)** | Fica fora da validação, por decisão do líder (06/11) |
| **Evidência W3C (CSS)** | [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) (06/11): o `css/style.css` inteiro validado no W3C CSS Validator |
| **Fora do escopo** | Header e footer (compartilhados, revisados à parte) |

---

## 1. Histórico

| Data | O que aconteceu |
| --- | --- |
| 14/10 | Planilha `docs/hospedagem/orcamento-hospedagem-dominio.xlsx`, com três hospedagens (HostGator, Hostinger e Umbler). Preços, espaço e planos copiados dos prints das páginas de planos (`hostgator.png`, `hostinger.png` e `umbler.png`). Só tinha o domínio `.com.br`, e a conclusão não escolhia um plano |
| 06/11 | O orçamento virou uma página do site, no padrão das outras: topo `.ex-hero` sem foto (fica o fundo azul-marinho do componente), cabeçalho `.ex-cabecalho`, um card por hospedagem com o print e a tabela de recursos, a tabela comparativa do primeiro ano, os domínios e a conclusão do grupo. As regras ficaram no bloco da página no `css/style.css` |
| 06/11 | Dados que faltavam na planilha, consultados nos sites das empresas e no Registro.br: SSL e suporte dos três provedores, largura de banda da Hostinger Single (100 GB) e os domínios `.net.br` (R$ 40,00 por ano) e `.com` (R$ 0,01 no 1º ano, R$ 94,99 na renovação). A HostGator e a Umbler não informam a largura de banda; a página diz isso em vez de inventar um número |
| 06/11 | Link "Orçamento de Hospedagem" no rodapé de todas as páginas, na linha do © |
| 06/11 | Cópia da página em PDF, em A4 deitado, para a tabela comparativa caber inteira: `docs/hospedagem/orcamento-hospedagem-dominio.pdf` |
| 06/11 | A conclusão passou a dizer qual plano o grupo escolheu: o Hostinger Single. Link "Orçamento de Hospedagem" também na lista "Páginas Internas" do rodapé de todas as páginas. PDF gerado de novo |
| 06/11 | A página passou a se chamar `pages/orcamento-hospedagem.html`, com hífen, como os outros arquivos do site (antes era `orcamento_hospedagem.html`). Mudaram junto os links do rodapé, a classe do `<body>` (`pagina-orcamento-hospedagem`) e o bloco do `css/style.css`. PDF gerado de novo |
| 06/11 | A conclusão passou a justificar a escolha: custo-benefício (R$ 111,88 no primeiro ano, com o `.com.br` no Registro.br), domínio, escalabilidade (Premium, Unlimited e Cloud Startup) e o aviso do contrato de 48 meses. PDF gerado de novo |
| 06/11 | O `js/acessibilidade.js` passou a ser carregado no `<head>`, como em todas as páginas: o botão de acessibilidade aparece também aqui |
| 06/11 | Decisão do líder: esta página fica fora da validação do W3C. No mesmo dia, o `css/style.css` inteiro foi validado no W3C CSS Validator ([`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf)) |
| 06/11 | Nota de fonte no fim da página: "Imagens: prints das páginas de planos da HostGator, da Hostinger e da Umbler, feitos pelo grupo em 14/10/2026." |
| 06/11 | Rodapé com o menu "Docs", logo abaixo de "Páginas Internas", com o link "Painel do projeto" |
| 06/11 | Página **fechada** |
| 06/11 | O parágrafo "Atenção" da conclusão ganhou a classe `.conclusao__atencao` (caixa branca com a borda esquerda âmbar), que já estava no CSS |

---

## 2. Requisitos do professor

OK = atende · ATENÇÃO = atende, mas pode melhorar · N/A = não se aplica a esta página

Os números de linha são do `pages/orcamento-hospedagem.html`, a não ser quando a linha diz "do CSS" (aí são do `css/style.css`).

### Orçamento de hospedagem e domínio

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Página `orcamento-hospedagem.html` no site | OK | `pages/orcamento-hospedagem.html`, com link no rodapé de todas as páginas: lista "Páginas Internas" (linha 596) e linha do © (linha 609) |
| Relatório em PDF em `docs/` | OK | `docs/hospedagem/orcamento-hospedagem-dominio.pdf`, cópia da página em A4 deitado |
| Três opções de hospedagem | OK | Um `<article>` por empresa: HostGator (137), Hostinger (199) e Umbler (274) |
| Espaço em disco | OK | HostGator 100 GB NVMe (165); Hostinger 10 GB SSD no Single e 20 GB SSD no Premium (240 e 241); Umbler 10 GB SSD na opção de R$ 39 e 1 GB na de R$ 29 (298) |
| Largura de banda | OK | Hostinger Single: 100 GB (245). HostGator: "Não informada no site; o plano indica até 80 mil visitas por mês" (169). Umbler: "Não informada no site" (303). Hostinger Premium: "—" (246), porque o dado não foi confirmado |
| SSL | OK | HostGator "Grátis em todos os planos" (173); Hostinger "Grátis e ilimitado em todos os planos" (250); Umbler "Grátis (Let's Encrypt)" (307) |
| Suporte | OK | HostGator 24 horas por chat e ticket (177); Hostinger 24 horas por chat em português (254); Umbler pelo painel do cliente (311) |
| Três domínios com extensões diferentes | OK | Tabela de domínios (486 a 516): `.com.br` e `.net.br` no Registro.br (R$ 40,00 por ano) e `.com` na Hostinger (R$ 0,01 no 1º ano, R$ 94,99 na renovação) |
| Tabela comparativa | OK | Tabela do primeiro ano (338 a 475): 12 planos, com preço por mês, domínio grátis, hospedagem, domínio, total em 12 meses e contrato |
| Destaque do menor custo | OK | Linha do Hostinger Single com a classe `linha-destaque` e a etiqueta "Menor custo" (384 a 393), e a frase de resumo (477): "Hostinger Single, R$ 111,88" |
| Escolha final | OK | "O Hostinger Single é o escolhido." (527) |
| Justificativa: custo-benefício | OK | Linha 528: menor custo no primeiro ano, R$ 71,88 de hospedagem mais R$ 40,00 de domínio, total R$ 111,88; 10 GB de espaço para um site de cerca de 20 MB, 100 GB de largura de banda, SSL grátis e suporte 24 horas |
| Justificativa: domínio | OK | Linha 532: `.com.br` no Registro.br, por R$ 40,00 por ano, porque o Single não inclui domínio |
| Justificativa: escalabilidade | OK | Linha 535: Premium (3 sites, 20 GB), Unlimited (50 GB, CDN e suporte prioritário) e Cloud Startup (100 GB), sem trocar de empresa |
| Aviso do contrato | OK | Linha 538: o preço promocional vale para o contrato de 48 meses, pago de uma vez (R$ 287,52); depois, renova a R$ 23,99 por mês |

### HTML5 e semântica

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<header>`, `<nav>`, `<footer>` | OK | Compartilhados (linhas 22, 61 e 550) |
| `<main>` | OK | `<main>` da linha 103 à 547 |
| `<section>` | OK | Topo (105), cabeçalho (123), hospedagens (133), comparativo (331), domínios (482) e conclusão (523). As seções de conteúdo têm `aria-labelledby` ligado ao próprio título |
| `<article>` | OK | Os 3 cards de hospedagem (137, 199 e 274), cada um com o seu `<h3>` |
| Cabeçalhos hierárquicos | OK | Um `<h1>` (109), `<h2>` (126, 134, 332, 483 e 524) e três `<h3>` nos cards (139, 201 e 276). Nenhum nível pulado |
| Links funcionais | OK | O conteúdo não tem links; os do menu e do rodapé funcionam, inclusive o menu "Docs" (linhas 600 a 605) |

### Tabelas acessíveis

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<caption>` | OK | As 5 tabelas têm título: linhas 147, 209, 284, 339 e 487 |
| `<thead>` e `scope` | OK | Cabeçalhos das colunas com `scope="col"` e da linha com `scope="row"` em todas as tabelas |
| Rolagem no celular | OK | Cada tabela fica numa caixa `.tabela-rolagem` com `role="region"`, `aria-label` e `tabindex="0"` (linhas 144, 206, 281, 336 e 485), que rola para o lado sem rolar a página. Regra na linha 5629 do CSS |

### Formulário e multimídia

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Formulário validado | N/A | É requisito da página de contato |
| `<video>`, `<audio>`, `<iframe>` | N/A | Não é obrigatório nesta página |

### Boas práticas

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Código validado no W3C (HTML) | N/A | Fica fora da validação, por decisão do líder (06/11) |
| Imagens existem e o caminho está certo | OK | Os três prints em `img/orcamento-hospedagem/` (`print-hostgator.png`, `print-hostinger.png` e `print-umbler.png`, linhas 141, 203 e 278) e o logo 1x e 2x existem |
| Imagens com `alt` | OK | Cada print diz de qual empresa é e a data da consulta, por exemplo "Print da página de planos da HostGator, consultada em 14/10/2026" |
| Imagens otimizadas (até 500 KB) | OK | Prints de 106 KB (Umbler), 173 KB (HostGator) e 203 KB (Hostinger) |
| Imagens corretamente nomeadas | OK | Minúsculas, com hífen e nome que diz o que é |
| Tamanho das imagens declarado | OK | `width` e `height` nos três prints |
| Logo nítido | OK | `<img>` do logo com `srcset` (1x e 2x) no header (linha 57) e no rodapé (linha 554) |
| Fonte de conteúdo não autoral | OK | Nota do fim (linhas 543 e 544): "Imagens: prints das páginas de planos da HostGator, da Hostinger e da Umbler, feitos pelo grupo em 14/10/2026." |
| Topo | OK | O topo não tem foto: fica o fundo azul-marinho do componente `.ex-hero` (linha 105) |
| Navegação funcional e coerente | OK | A página abre pelo rodapé de qualquer página do site |

### Clareza e coerência

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Nome da empresa | OK | "Grupo Êxito Condomínios" no `<title>` (linha 7), na descrição (linha 9), no título do cabeçalho (linha 126) e no logo |
| Texto coerente com o tema | OK | Quanto custa publicar o site do grupo, com os números dos prints e da consulta de 06/11 |
| Nomes dos planos da Umbler | OK | A nota da linha 325 avisa que "Elástico 29", "Elástico 39"... são nomes dados pelo grupo a partir do preço, não nomes oficiais |
| Contas da tabela comparativa | OK | Preço por mês × 12, mais R$ 40,00 do `.com.br` quando o plano não tem domínio grátis, como explica a linha 333 |

### CSS

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Usa só o `css/style.css` | OK | Linha 16: `<link rel="stylesheet" href="../css/style.css">` |
| CSS isolado com `.pagina-orcamento-hospedagem` | OK | `<body class="pagina-orcamento-hospedagem">` (linha 20) e todas as regras do bloco `PÁGINA: orcamento-hospedagem.html` do `css/style.css` (linhas 5583 a 5730) com o prefixo, inclusive dentro do `@media` |
| Topo com o componente do site | OK | `<section class="ex-hero">` (linha 105), sem foto de fundo |
| Cabeçalho com o componente do site | OK | `<div class="ex-cabecalho">` (linha 124), com `.ex-sobretitulo` e `.ex-subtitulo` |
| Cards com o componente do site | OK | `ex-card` nos três cards e `ex-etiqueta` no rótulo de cada um |
| Cores da paleta | OK | Todas as cores do bloco da página são da paleta, em `rgb(...)`: Teal `rgb(0, 104, 118)`, Ciano suave `rgb(214, 247, 255)` (linha destacada, linha 5693 do CSS), Borda `rgb(226, 232, 240)` e branco |
| Código sem sobras | OK | Toda regra do bloco é usada pela página. A caixa do "Atenção" usa a `.conclusao__atencao` (linhas 5706 a 5712 do CSS) |
| Sem `var()` | OK | Nenhum `var()` no bloco da página |
| Mesmo padrão de texto do site | OK | O bloco da página não muda fonte, tamanho, peso nem altura da linha. Tem só espaços, caixas, bordas e a rolagem das tabelas |
| Sem `<style>` nem `style="..."` no HTML | OK | Nenhum |
| Responsivo | OK | Tabelas com largura mínima (`.tabela-larga` 56rem e `.tabela-media` 36rem, linhas 5640 e 5644 do CSS) que rolam dentro da caixa; `@media` 800 px (linha 5722 do CSS) põe o print em cima da tabela em cada card |
| CSS validado no W3C CSS Validator | OK | O `css/style.css` inteiro foi validado em 06/11: [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) |

### Resumo

| OK | ATENÇÃO | N/A |
| :---: | :---: | :---: |
| 49 | 0 | 3 |

Nenhum requisito do professor deixou de ser atendido. A validação do HTML no W3C fica fora desta página por decisão do líder.
