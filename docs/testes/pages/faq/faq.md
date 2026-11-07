# Relatório de teste — FAQ (Perguntas Frequentes)

| | |
| --- | --- |
| **Responsável** | Evandro |
| **Entregou para a 2ª fase?** | **Não** (nenhuma versão enviada pelo ClickUp) |
| **Avaliação do líder (2ª entrega)** | **6 / 10** |
| **Situação** | **Fechada em 06/11/2026.** |
| **Arquivos finais** | `pages/faq.html` + bloco `PÁGINA: faq.html` do `css/style.css` (linhas 4265 a 4454) |
| **Antes e depois** | [antes-depois.md](antes-depois.md) |
| **Evidência W3C (HTML)** | [w3c-validator.pdf](w3c-validator.pdf): página validada pelo líder em 06/11 (versão final) |
| **Evidência W3C (CSS)** | `css/style.css` validado em [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) |
| **Fora do escopo** | Header e footer (compartilhados, revisados à parte) |

---

## 1. Histórico

| Data | O que aconteceu |
| --- | --- |
| — | Versão no projeto: uma imagem (`img/f1.png`), o título "Perguntas Frequentes" e 6 perguntas em lista. Cada uma abria e fechava com um botão de opção escondido (`<input type="radio">`) e um rótulo (`<label>`). No fim da lista, uma caixa "Qualquer dúvida?" com um link para o WhatsApp |
| 04/11 | Primeira revisão. O conteúdo inteiro era de imobiliária (visita a imóvel, ITBI, aluguel, anunciar imóvel), a caixa "Qualquer dúvida?" estava dentro da `<ul>` (HTML inválido), as perguntas não abriam pelo teclado e o CSS tinha regras soltas que valiam para o site todo, como uma que zerava as margens de tudo e outra que deixava todas as imagens com 100% de largura, inclusive o logo |
| 04/11 | Conteúdo: as 6 perguntas de imobiliária saíram e entraram as 5 perguntas sobre condomínio da FAQ da home, com as mesmas respostas. A palavra "imobiliária" saiu da página |
| 04/11 | Página no padrão do site: topo com foto (`.ex-hero`), cada pergunta em `<details>`/`<summary>` (abre e fecha pelo teclado, sem JavaScript), caixa "Qualquer dúvida?" fora da lista e com o botão do WhatsApp do site, CSS isolado com `.pagina-faq`, cores da paleta e tipografia do site |
| 04/11 | A foto da página (a recepção de um prédio) virou a foto do topo: de `img/f1.png` (1200 × 1200 px, 1.680 KB) para `img/faq/hero-faq.jpg` (1200 × 800 px, 109 KB). Link "Falar com Consultor" do header corrigido para `contato.html#proposta-form` |
| 04/11 | O bloco logo abaixo do topo (rótulo, título "Dúvidas sobre a administração" e texto de apoio) virou o componente do site `.ex-cabecalho`, que passou a ser o primeiro bloco abaixo do topo em todas as páginas. O modelo ficou no README |
| 04/11 | Ajuste do líder: a caixa "Qualquer dúvida?" passou a ter fundo azul-marinho, com o título em branco e o texto em cinza bem claro, para ficar legível |
| 04/11 | Fonte da foto do topo: Pixabay. Entraram mais 5 perguntas sobre administração de condomínio (06 a 10): o papel do síndico, a prestação de contas, a cobrança de taxas atrasadas, como pedir manutenção ou registrar ocorrência e os serviços incluídos na administração. Agora são 10 |
| 06/11 | O `css/style.css` passou a ser o arquivo de CSS editado pelo grupo. O CSS da página fica no bloco `PÁGINA: faq.html` |
| 06/11 | Rodapé: entraram os links "Política de Privacidade" e "Orçamento de Hospedagem" na linha do ©, e "Orçamento de Hospedagem" na lista "Páginas internas". O aviso de cookies (`js/cookies.js`) passou a ser carregado no fim da página |
| 06/11 | O `js/acessibilidade.js` passou a ser carregado no `<head>`, logo depois do `style.css`. O botão de acessibilidade aparece também nesta página |
| 06/11 | O líder validou a página no W3C ([w3c-validator.pdf](w3c-validator.pdf)). O `css/style.css` também foi validado ([`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf)) |
| 06/11 | Página **fechada** |
| 06/11 | Ponto final na nota "Foto do topo: Pixabay.", igual às outras páginas |

---

## 2. Requisitos do professor

OK = atende · ATENÇÃO = atende, mas pode melhorar · N/A = não se aplica a esta página

### HTML5 e semântica

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<header>`, `<nav>`, `<footer>` | OK | Compartilhados (linhas 21, 60 e 314) |
| `<main>` | OK | `<main>` da linha 101 à 311, com o topo, as perguntas, a caixa "Qualquer dúvida?" e a nota |
| `<section>` com título | OK | Topo (103, `<h1>`), Perguntas (119, `<h2>` no `.ex-cabecalho`, ligado por `aria-labelledby`) e "Qualquer dúvida?" (294, `<h2>`) |
| `<article>` | N/A | As perguntas são itens de uma lista de dúvidas, não blocos independentes |
| Cabeçalhos hierárquicos | OK | Um `<h1>` (107), dois `<h2>` (121 e 296) e uma pergunta em `<h3>` dentro de cada `<summary>`. Nenhum nível pulado |
| Perguntas que abrem e fecham | OK | 10 `<details>` com `<summary>` (linhas 128 a 289), a primeira aberta (`open`). Funciona sem JavaScript e pelo teclado |
| Links funcionais | OK | O "Falar com Consultor" do header leva a `contato.html#proposta-form`. A pergunta 10 tem um link para `servicos.html` (linha 286). O botão do WhatsApp abre em outra aba, com `rel="noopener"` e um `aria-label` que avisa isso (linhas 299 e 300) |

### Formulário e multimídia

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Formulário validado | N/A | É requisito da página de contato |
| `<video>`, `<audio>`, `<iframe>` | N/A | Não é obrigatório nesta página |

### Boas práticas

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Código validado no W3C (HTML) | OK | [w3c-validator.pdf](w3c-validator.pdf), validação do líder em 06/11 (versão final) |
| Imagens existem e o caminho está certo | OK | Foto do topo em `img/faq/hero-faq.jpg`, ligada no CSS (linha 4288 do `style.css`). O logo 1x e 2x também existem |
| Imagens otimizadas (até 500 KB) | OK | Foto do topo com 1200 × 800 px e 109 KB (antes 1.680 KB) |
| Imagens corretamente nomeadas e na pasta da página | OK | `img/faq/hero-faq.jpg` |
| Imagens com `alt` | OK | A foto do topo é fundo de CSS e decorativa. O conteúdo não tem `<img>`; o logo do header e do rodapé tem `alt="Grupo Êxito Condomínios"` |
| Logo nítido | OK | `<img>` do logo com `srcset` (1x e 2x) no header (linha 56) e no rodapé (linha 318) |
| Fonte de conteúdo não autoral | OK | Nota no fim da página (linhas 307 a 309): "Foto do topo: Pixabay." |
| Navegação funcional e coerente | OK | Abre pelo menu e marca "FAQ" com `aria-current="page"` (linhas 67 e 91) |
| Formatação adequada | OK | Ícones de abrir e fechar com `aria-hidden="true"`; contorno de foco do teclado nos links e nas perguntas |
| Código organizado e indentado | OK | 4 espaços na página toda |

### Clareza e coerência

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Texto coerente com o tema | OK | 10 perguntas sobre administração de condomínio: as 5 da FAQ da home (transição de administradora, conta bancária, aplicativo e boletos, assembleias virtuais e tempo de resposta) e 5 novas (papel do síndico, prestação de contas, cobrança de atrasados, pedidos de manutenção e serviços incluídos) |
| Nome da empresa | OK | A página não usa "imobiliária". "Grupo Êxito Condomínios" no `<title>` (linha 7), no logo e no rodapé (linha 364) |

### CSS

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Usa só o `css/style.css` | OK | Linha 15: `<link rel="stylesheet" href="../css/style.css">` |
| CSS isolado com `.pagina-faq` | OK | `<body class="pagina-faq">` (linha 19) e todas as regras do bloco `PÁGINA: faq.html` com o prefixo, sem `*`, `img` e `main` soltos |
| Topo com o componente do site | OK | `<section class="ex-hero">` (linha 103). A página só define a foto de fundo (linhas 4287 a 4289 do `style.css`) |
| Cabeçalho abaixo do topo | OK | Componente `.ex-cabecalho` (linha 120), no bloco GLOBAL do `style.css` (linhas 383 a 406) |
| Largura do conteúdo | OK | Todo o conteúdo depois do topo fica no container do site, `.ex-container` (linha 115) |
| Cores da paleta | OK | Todas da paleta, em `rgb(...)` e `rgba(...)` |
| Sem `var()` | OK | Nenhum `var()` no bloco da página nem no `style.css` |
| Mesmo padrão de texto do site | OK | O bloco da página não muda fonte, tamanho, peso nem maiúsculas. Número da pergunta em `.ex-etiqueta`, texto de apoio em `.ex-subtitulo`, botão em `.ex-botao--whatsapp` e nota em `.ex-nota` |
| Sem `<style>` nem `style="..."` no HTML | OK | Nenhum |
| Responsivo | OK | `@media (max-width: 640px)` (linha 4434 do `style.css`): menos espaço dentro das caixas e o botão do WhatsApp na largura toda |
| Código sem sobras | OK | Sem `min-height: 100vh` e sem a regra quebrada `10 px` |
| CSS validado no W3C CSS Validator | OK | `css/style.css` validado em [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) |

### Resumo

| OK | ATENÇÃO | N/A |
| :---: | :---: | :---: |
| 30 | 0 | 3 |

Todos os requisitos do professor que se aplicam à página são atendidos.
