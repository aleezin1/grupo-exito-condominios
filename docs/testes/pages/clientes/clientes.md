# Relatório de teste — Clientes

| | |
| --- | --- |
| **Responsável** | Gabriel |
| **Entregou para a 2ª fase?** | **Não** (nenhuma versão enviada pelo ClickUp) |
| **Avaliação do líder (2ª entrega)** | **7 / 10** |
| **Situação** | **Fechada em 01/11/2026.** Registro atualizado em 06/11/2026 |
| **Arquivos finais** | `pages/clientes.html` + bloco `PÁGINA: clientes.html` do `css/style.css` (linhas 2296 a 2482) + imagens em `img/clientes/` |
| **Antes e depois** | [antes-depois.md](antes-depois.md) |
| **Evidência W3C (HTML)** | [w3c-validator.pdf](w3c-validator.pdf) (06/11): **sem erros** |
| **Evidência W3C (CSS)** | [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) (06/11): o `css/style.css` inteiro validado no W3C CSS Validator |
| **Fora do escopo** | Header e footer (compartilhados, revisados à parte) |

---

## 1. Histórico

| Data | O que aconteceu |
| --- | --- |
| 01/11 | Primeira revisão. A página não veio pelo ClickUp; o "antes" é a versão que estava no projeto. Ela tinha bom conteúdo, mas não tinha `<main>`, o CSS não estava isolado e tinha 16 cores fora da paleta, uma foto passava de 500 KB e as fotos não tinham fonte |
| 01/11 | Correções: `<main>`; CSS isolado com `.pagina-clientes`, sem `:root` e sem `var()`; as 16 cores trocadas pela paleta; página carregando só o `css/style.css` |
| 01/11 | Semântica: cards de clientes em `<article>`; depoimentos em `<figure>` com `<blockquote>` e `<figcaption>`; aspas decorativas escondidas do leitor de tela |
| 01/11 | Textos: títulos escritos normalmente no HTML (as maiúsculas vêm do CSS); rótulos de 10 px passaram para 12 px |
| 01/11 | Imagens: `condominio-jardins.jpg` de 990 KB para 86 KB; fotos das pessoas reduzidas para 200 × 200 px; nomes de arquivo corrigidos; `logoempesa.png`, que não era usada, apagada |
| 01/11 | Nota no fim da página avisando que clientes e depoimentos são fictícios e indicando a fonte das fotos (geradas por inteligência artificial e de banco de imagens) |
| 01/11 | Validação no W3C: **sem erros e sem avisos** |
| 01/11 | O topo da página virou o componente `.ex-hero`, para ser reaproveitado em outras páginas. O visual continuou o mesmo |
| 01/11 | Nova validação no W3C, já com o topo `.ex-hero`: **sem erros e sem avisos** |
| 01/11 | Conferida pelo líder no computador e no celular. Nota **7 / 10**. Página **fechada** |
| 01/11 | Largura-base do site padronizada em 1200px: as seções passaram a usar o container do site (`.ex-container`). Os fundos continuam de ponta a ponta |
| 01/11 | Os comentários do HTML deixaram de citar arquivos de CSS (header, topo e footer). Mudaram só comentários e espaços em branco |
| 01/11 | Ajustes do líder no topo: rótulo "Clientes" e texto mais curto ("Construímos parcerias de longo prazo.") |
| 01/11 | Títulos de seção no padrão do site: os dois `<h2>` perderam a classe `.titulo`, que os deixava em maiúsculas e com 30px. Agora seguem o `h2` do site: 32px (26px no celular), letras normais |
| 01/11 | Mesmo padrão de texto em todas as páginas: os nomes dos clientes (Jardins, Aurora…) passaram para o `h3` padrão (20px, letras normais); o tipo do cliente passou para o rótulo do site (`.ex-sobretitulo`); subtítulo, texto e nome dos depoimentos, cargo e nota passaram a usar componentes do site. O CSS da página não muda mais nenhuma tipografia |
| 01/11 | Logo do header e do rodapé nítido: versões no tamanho certo (1x 144 × 52 px e 2x 288 × 104 px) com `srcset`. Antes a imagem era 4 vezes maior que o espaço e ficava sem nitidez |
| 01/11 | Ajuste do líder: a faixa azul "Depoimentos" acima do título da seção de depoimentos foi retirada do HTML, e as regras dela saíram do CSS |
| 01/11 | Nova validação no W3C, com o padrão de texto, o logo nítido e sem a faixa: **sem erros e sem avisos** |
| 01/11 | Espaço do topo até a seção de clientes padronizado em **50px**, igual em todas as páginas com topo. O espaço vem do componente `.ex-hero`, por dentro da seção, então o fundo branco continua encostado no topo |
| 04/11 | Cabeçalho padrão abaixo do topo: a seção de clientes passou a abrir com o componente `.ex-cabecalho` (título "Fazem parte da nossa história.", texto de apoio e linha fina embaixo), com `id="titulo-clientes"` ligando o título à seção. Saíram do CSS da página as regras que mudavam o espaço do título e do texto |
| 06/11 | O CSS do site passou a ser um arquivo único e editável, o `css/style.css`, dividido em blocos. As regras da página ficam no bloco `PÁGINA: clientes.html`. Os arquivos separados usados durante o desenvolvimento foram para `css/legado/` e não são carregados por nenhuma página |
| 06/11 | A home passou a mostrar os mesmos clientes, fotos e depoimentos desta página, com os mesmos textos alternativos. O site não se contradiz mais |
| 06/11 | Rodapé com o link "Orçamento de Hospedagem", na lista "Páginas internas" e na linha do ©. O `js/acessibilidade.js` passou a ser carregado no `<head>`, como em todas as páginas: o botão de acessibilidade aparece também aqui |
| 06/11 | Nova validação no W3C feita pelo líder: **sem erros** ([w3c-validator.pdf](w3c-validator.pdf)). No mesmo dia, o `css/style.css` inteiro foi validado no W3C CSS Validator ([`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf)) |

---

## 2. Requisitos do professor

OK = atende · ATENÇÃO = atende, mas pode melhorar · N/A = não se aplica a esta página

Os números de linha são do `pages/clientes.html`, a não ser quando a linha diz "do CSS" (aí são do `css/style.css`).

### HTML5 e semântica

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<header>`, `<nav>`, `<footer>` | OK | Compartilhados (linhas 22, 61 e 262) |
| `<main>` | OK | `<main>` da linha 103 à 259, com as três seções e a nota |
| `<section>` | OK | Topo (105), Clientes (121) e Depoimentos (167), cada uma com título |
| `<article>` | OK | Os 4 cards de clientes (linhas 131, 139, 147 e 155) |
| Depoimentos | OK | Cada um é `<figure>` com `<blockquote>` (o texto) e `<figcaption>` (quem disse), nas linhas 178, 203 e 228 |
| Cabeçalhos hierárquicos | OK | Um `<h1>` (110), `<h2>` (125), quatro `<h3>` nos cards e `<h2>` (171). Nenhum nível pulado |
| Links funcionais | OK | O conteúdo não tem links; os do menu e do rodapé funcionam, inclusive o "Orçamento de Hospedagem" (linhas 306 e 312) |

### Formulário e multimídia

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Formulário validado | N/A | É requisito da página de contato |
| `<video>`, `<audio>`, `<iframe>` | N/A | Não é obrigatório nesta página |

### Boas práticas

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Código validado no W3C (HTML) | OK | [w3c-validator.pdf](w3c-validator.pdf), de 06/11: **sem erros** |
| Imagens existem e o caminho está certo | OK | As imagens da página em `img/clientes/` (`condominio-jardins.jpg`, `condominio-aurora.jpg`, `condominio-vila-verde.jpg`, `empresarial-pinheiros.jpg`, `joao.jpg`, `mariana.jpg` e `carlos.jpg`), o logo 1x e 2x e a foto de fundo do topo (`img/clientes/background-cond.jpg`, linha 2335 do CSS) existem |
| Imagens com `alt` | OK | Todas as imagens têm `alt` |
| Texto do `alt` das fotos de pessoas | **ATENÇÃO** | "Foto de João Pedro", "Foto de Mariana Santos" e "Foto de Carlos Lima" repetem o nome escrito logo ao lado, e o leitor de tela lê o nome duas vezes. Não impede a entrega |
| Imagens otimizadas (até 500 KB) | OK | Todas abaixo de 240 KB. `condominio-jardins.jpg` tem 86 KB; as fotos das pessoas, de 7 a 10 KB; o logo, 7 KB (1x) e 20 KB (2x) |
| Imagens corretamente nomeadas | OK | Minúsculas, com hífen e nome que diz o que é |
| Logo nítido | OK | `<img>` do logo com `srcset` (1x e 2x) no header (linha 57) e no rodapé (linha 266) |
| Fonte de conteúdo não autoral | OK | Nota do fim (linhas 255 a 258): "Fotos ilustrativas: geradas por inteligência artificial e de banco de imagens." |
| Navegação funcional e coerente | OK | Abre pelo menu e marca "Clientes" com `aria-current="page"` (linhas 65 e 89) |
| Formatação adequada | OK | Títulos escritos normalmente no HTML; títulos de seção e dos cards no padrão do site; aspas decorativas com `aria-hidden="true"` |
| Código sem sobras | OK | Sem regras de CSS sem uso no bloco da página |

### Clareza e coerência

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Nome da empresa | OK | "Grupo Êxito" no 1º depoimento (linha 185); "Grupo Êxito Condomínios" no `<title>` (linha 7) e no logo |
| Texto coerente com o tema | OK | Condomínios, síndicos e empresas |
| Clientes e depoimentos fictícios | OK | A nota da linha 256 diz: "Clientes e depoimentos fictícios, criados para um projeto acadêmico." |
| Coerência com o resto do site | OK | A home mostra os mesmos clientes, fotos e depoimentos desta página |

### CSS

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Usa só o `css/style.css` | OK | Linha 16: `<link rel="stylesheet" href="../css/style.css">` |
| CSS isolado com `.pagina-clientes` | OK | `<body class="pagina-clientes">` (linha 20) e todas as regras do bloco `PÁGINA: clientes.html` do `css/style.css` (linhas 2296 a 2482) com o prefixo, inclusive dentro dos dois `@media` |
| Topo com o componente do site | OK | `<section class="ex-hero">` (linha 105). A página só define a foto de fundo (linha 2335 do CSS) |
| Cabeçalho com o componente do site | OK | `<div class="ex-cabecalho">` (linha 124), com o subtítulo `.ex-subtitulo` (linha 126) |
| Cores da paleta | OK | Todas as cores do bloco da página são da paleta, em `rgb(...)` |
| Sem `var()` | OK | Nenhum `var()` no bloco da página |
| Mesmo padrão de texto do site | OK | O bloco da página não muda fonte, tamanho, peso, altura da linha nem maiúsculas. As variações usam componentes do site: subtítulo (`.ex-subtitulo`), tipo do cliente (`.ex-sobretitulo`), aspas (`.ex-aspas`), texto do depoimento (`.ex-citacao`), nome (`.ex-autor`), cargo e nota (`.ex-nota`) |
| Sem `<style>` nem `style="..."` no HTML | OK | Nenhum |
| Responsivo | OK | `@media` 900 px (linha 2467 do CSS) e 600 px (linha 2478 do CSS). Conferido pelo líder no celular |
| CSS validado no W3C CSS Validator | OK | O `css/style.css` inteiro foi validado em 06/11: [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) |

### Resumo

| OK | ATENÇÃO | N/A |
| :---: | :---: | :---: |
| 31 | 1 | 2 |

Nenhum requisito do professor deixou de ser atendido. O item em ATENÇÃO (texto do `alt` das fotos de pessoas) é uma melhoria de acessibilidade que não impede a entrega.
