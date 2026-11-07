# Relatório de teste — Política de Privacidade

| | |
| --- | --- |
| **Responsável** | Guilherme (Guilherme Santos Peixoto Muniz, RGM 46924507) |
| **Entregou para a 2ª fase?** | **Sim** (versão enviada pelo ClickUp) |
| **Avaliação do líder (2ª entrega)** | **5 / 10** |
| **Situação** | **Fechada em 06/11/2026.** |
| **Arquivos finais** | `pages/politica-privacidade.html` + bloco `PÁGINA: politica-privacidade.html` do `css/style.css` (linhas 5511 a 5580) + foto do topo em `img/politica-privacidade/` |
| **Antes e depois** | [antes-depois.md](antes-depois.md) |
| **Evidência W3C (HTML)** | [w3c-validator.pdf](w3c-validator.pdf) (06/11): página validada |
| **Evidência W3C (CSS)** | [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) (06/11): o `css/style.css` inteiro validado no W3C CSS Validator |
| **Fora do escopo** | Header e footer (compartilhados, revisados à parte) |

---

## 1. Histórico

| Data | O que aconteceu |
| --- | --- |
| — | Versão enviada pelo ClickUp: página com um `<style>` próprio (12 variáveis no `:root`, fonte Segoe UI e tamanhos próprios para `h1`, `h2` e `h3`), header, menu de 4 itens e rodapé próprios, e três seções: "Coleta de Dados na Gestão Condominial" (com 1.1 e 1.2), "Compartilhamento e Segurança" e "Atendimento e Direitos dos Titulares", com e-mail, telefone e link para a Contato |
| 06/11 | Primeira revisão. A versão enviada tinha bom texto, ligado ao tema, com o nome da empresa e os contatos certos. Mas tinha uma linha de texto solta antes do `<!DOCTYPE html>`, CSS dentro do HTML, variáveis, fonte própria, links sem o `../` e links para páginas que não existem (`privacidade.html` e `termos.html`). Nenhuma página do site levava até ela |
| 06/11 | Página no padrão do site: saíram a linha solta, o `<style>`, o menu e o rodapé próprios; entraram o header e o footer do site, o topo `.ex-hero`, o `.ex-cabecalho` com a seção 1 e o conteúdo numa coluna de leitura. O texto das três seções ficou como o Guilherme escreveu. E-mail e telefone viraram links, e a lista de contato ficou numa caixa com borda teal |
| 06/11 | CSS no bloco `PÁGINA: politica-privacidade.html`, no fim do `css/style.css`: regras com `.pagina-politica-privacidade`, cores da paleta, sem variáveis e sem tipografia. O `h3` ficou com a cor padrão (o teal do original só seria permitido sobre fundo escuro). Foi a primeira página a entrar já com o `css/style.css` como arquivo editável |
| 06/11 | O link "Política de Privacidade" entrou no rodapé de todas as páginas, ao lado do "© 2026", e no aviso de cookies do site. O Guilherme entrou na seção "Equipe do projeto" da Contato |
| 06/11 | Nota da fonte da foto do topo: "Foto do topo: Pixabay / gerado por IA." |
| 06/11 | O líder colocou a foto do topo: `img/politica-privacidade/hero-politica-privacidade.jpg` (1280 × 853 px, 208 KB, um cadeado sobre código, do Pixabay) |
| 06/11 | Rodapé com o link "Orçamento de Hospedagem", na lista "Páginas Internas" e na linha do ©. O `js/acessibilidade.js` passou a ser carregado no `<head>`, como em todas as páginas: o botão de acessibilidade aparece também aqui |
| 06/11 | Aviso do W3C ("Article lacks heading"): o `<article class="documento">` que envolvia o texto virou `<div class="documento">`. O CSS usa só a classe, então a aparência não mudou |
| 06/11 | Rodapé com o menu "Docs", com o link "Painel do projeto" |
| 06/11 | Ajuste do líder: o `max-width: 760px` do `.documento` foi comentado no CSS. O texto passou a ocupar a largura do container do site (1200px) |
| 06/11 | Validação no W3C feita pelo líder ([w3c-validator.pdf](w3c-validator.pdf)). No mesmo dia, o `css/style.css` inteiro foi validado no W3C CSS Validator ([`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf)). Página **fechada** |
| 06/11 | Ajuste do líder: o texto passou a ocupar a largura do conteúdo (`max-width` do `.documento` comentado). A nota do fim acompanhou a mesma largura, e os comentários do HTML e do CSS foram corrigidos |

---

## 2. Requisitos do professor

OK = atende · ATENÇÃO = atende, mas pode melhorar · N/A = não se aplica a esta página

Os números de linha são do `pages/politica-privacidade.html`, a não ser quando a linha diz "do CSS" (aí são do `css/style.css`).

### HTML5 e semântica

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<header>`, `<nav>`, `<footer>` | OK | Compartilhados (linhas 21, 60 e 171) |
| `<main>` | OK | `<main>` da linha 101 à 168, com o topo, o documento e a nota |
| `<section>` | OK | Topo (103) e as três seções do documento (120, 139 e 147), cada uma com título e ligada a ele por `aria-labelledby` |
| `<article>` | N/A | O texto é um documento único, sem partes independentes. O envoltório é `<div class="documento">` (linha 117) |
| Cabeçalhos hierárquicos | OK | Um `<h1>` (107), `<h2>` nas linhas 122, 140 e 148 e `<h3>` nas linhas 128 e 132. Nenhum nível pulado |
| Links funcionais | OK | E-mail com `mailto:` (154), telefone com `tel:` (156) e "Contato Oficial" para o formulário da Contato (157). Os do menu e do rodapé funcionam, inclusive "Orçamento de Hospedagem" (217 e 230) e "Painel do projeto" (224) |

### Formulário e multimídia

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Formulário validado | N/A | É requisito da página de contato |
| `<video>`, `<audio>`, `<iframe>` | N/A | Não é obrigatório nesta página |

### Boas práticas

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Código validado no W3C (HTML) | OK | [w3c-validator.pdf](w3c-validator.pdf), de 06/11 |
| Imagens existem e o caminho está certo | OK | A foto do topo (`img/politica-privacidade/hero-politica-privacidade.jpg`, linha 5531 do CSS) e o logo 1x e 2x existem |
| Imagens com `alt` | OK | As duas imagens do HTML (logo do header e do rodapé) têm `alt`. A foto do topo é fundo de CSS |
| Imagens otimizadas (até 500 KB) | OK | Foto do topo com 208 KB (1280 × 853 px); logo com 7 KB (1x) e 20 KB (2x) |
| Imagens corretamente nomeadas | OK | Minúsculas, com hífen, numa pasta com o nome da página |
| Logo nítido | OK | `<img>` do logo com `srcset` (1x e 2x) no header (linha 57) e no rodapé (linha 176) |
| Fonte de conteúdo não autoral | OK | Nota do fim (linhas 164 a 166): "Foto do topo: Pixabay / gerado por IA." O texto da política é do Guilherme |
| Navegação funcional e coerente | OK | A página não está no menu principal. Ela abre pelo link "Política de Privacidade" no rodapé de todas as páginas (linha 230) e pelo aviso de cookies (`js/cookies.js`, linha 236) |
| E-mail e telefone como links | OK | `mailto:` (154) e `tel:` (156): abrem o programa de e-mail e o telefone |
| Formatação adequada | OK | Títulos escritos normalmente; seções 2 e 3 com linha fina embaixo do título, como o cabeçalho da seção 1; lista de contato numa caixa com borda teal |
| Largura do texto | OK | Por decisão do líder, o texto ocupa a largura do conteúdo (1200px): o `max-width` do `.documento` (linha 5536 do CSS) e o da nota do fim (linha 5578) ficam comentados. Os comentários do HTML (linha 116) e do CSS (linha 5534) descrevem isso |
| Código sem sobras | OK | Sem regras de CSS sem uso no bloco da página |

### Clareza e coerência

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Nome da empresa | OK | "Grupo Êxito Condomínios" no `<title>` (linha 7), na descrição (linha 8), no texto da seção 1 (linha 123) e no logo |
| Texto coerente com o tema | OK | Tratamento de dados na administração de condomínios: boletos, assembleias, cadastros e leituras de água e gás |
| Dados de contato iguais aos do site | OK | `contato@grupoexitocondominios.com.br` e (11) 2564-9963, os mesmos do header e da Contato |
| Coerência com o resto do site | OK | O aviso de cookies e o rodapé levam até a página; o link "Contato Oficial" leva ao formulário da Contato |

### CSS

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Usa só o `css/style.css` | OK | Linha 15: `<link rel="stylesheet" href="../css/style.css">` |
| CSS isolado com `.pagina-politica-privacidade` | OK | `<body class="pagina-politica-privacidade">` (linha 19) e todas as regras do bloco `PÁGINA: politica-privacidade.html` do `css/style.css` (linhas 5511 a 5580) com o prefixo |
| Topo com o componente do site | OK | `<section class="ex-hero">` (linha 103). A página só define a foto de fundo (linha 5531 do CSS) |
| Cabeçalho com o componente do site | OK | `<div class="ex-cabecalho">` (linha 121), com o subtítulo `.ex-subtitulo` (linha 123) |
| Cores da paleta | OK | As três cores do bloco são da paleta, em `rgb(...)`: Borda `rgb(226, 232, 240)`, branco `rgb(255, 255, 255)` e Teal `rgb(0, 104, 118)` |
| Sem `var()` | OK | Nenhum `var()` no bloco da página |
| Mesmo padrão de texto do site | OK | O bloco da página não muda fonte, tamanho, peso, altura da linha nem maiúsculas. Ficam só largura, espaços, bordas e a caixa de contato. A nota usa o componente do site `.ex-nota` (linha 164) |
| Sem `<style>` nem `style="..."` no HTML | OK | Nenhum |
| Responsivo | OK | O bloco não precisa de `@media`: o texto corre numa coluna só, e o topo, o cabeçalho e o container são componentes do site, que já se ajustam ao celular |
| CSS validado no W3C CSS Validator | OK | O `css/style.css` inteiro foi validado em 06/11: [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) |

### Resumo

| OK | ATENÇÃO | N/A |
| :---: | :---: | :---: |
| 31 | 0 | 3 |

Todos os requisitos do professor que valem para esta página foram atendidos.
