# Relatório de teste — Serviços 1 (Gestão Administrativa)

| | |
| --- | --- |
| **Responsável** | Arthur |
| **Entregou para a 2ª fase?** | **Não** (nenhuma versão enviada pelo ClickUp) |
| **Avaliação do líder (2ª entrega)** | **7 / 10** |
| **Situação** | **Fechada em 06/11/2026.** |
| **Arquivos finais** | `pages/servicos-1.html` + bloco `PÁGINA: servicos-1.html` do `css/style.css` (linhas 4869 a 4987) |
| **Antes e depois** | [antes-depois.md](antes-depois.md) |
| **Evidência W3C (HTML)** | [w3c-validator.pdf](w3c-validator.pdf): validada pelo líder em 06/11 |
| **Evidência W3C (CSS)** | `css/style.css` validado em [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) |
| **Fora do escopo** | Header e footer (compartilhados, revisados à parte) |

---

## 1. Histórico

| Data | O que aconteceu |
| --- | --- |
| — | Versão no projeto: título "Gestão Administrativa", dois parágrafos, uma foto (`img/reuniao.jfif`), as listas "Benefícios" e "Como Funciona", a tabela "O que está incluso?" e os links "Solicite um orçamento" e "Voltar para os serviços" |
| 06/11 | Primeira revisão. A página não tinha `<main>`, usava `<thread>` no lugar de `<thead>`, tinha atributos que o HTML5 não aceita, o menu do celular desligado, a foto em `.jfif` e dois erros de digitação. O CSS carregava 4 arquivos separados, sem prefixo e mudando tamanhos de texto |
| 06/11 | Decisão do líder: o HTML enviado pela equipe fica como está (conteúdo, ordem e visual); mudam só as tags e o CSS |
| 06/11 | Tags: `<main>` em volta do conteúdo; `<thread>` virou `<thead>`; saíram os atributos `text align`, `border` e `cellspacing`, o `<p></p>` vazio e os `<br>` usados para dar espaço; a tabela ganhou `<caption>` e `scope`; os links do fim passaram a usar o botão do site. Corrigidos "administratica" e "Acessoria". O menu do celular voltou a funcionar |
| 06/11 | Imagem: `img/reuniao.jfif` virou `img/servicos-1/reuniao-equipe.jpg` (663 × 461 px, 58 KB). A página passou a carregar só o `css/style.css`, com CSS isolado em `.pagina-servicos-1` |
| 06/11 | Padrão de tags do site, mantendo os textos e a ordem da equipe: topo `.ex-hero`, cabeçalho `.ex-cabecalho`, "O que está incluso?" numa `<section>` e os botões do site |
| 06/11 | O Arthur reenviou a página pelo ClickUp. O envio tinha marcadores de conflito do git no `<head>` (`<<<<<<<`, `=======` e `>>>>>>>`), Google Fonts, o `style.css` com caminho errado, um CSS próprio e a foto antiga (`reuniao.jfif`), que já não existia |
| 06/11 | A página passou a usar o layout e os textos do Arthur no padrão do site: topo `.ex-hero` com o 1º parágrafo, `.ex-cabecalho` "Detalhes do serviço" com o 2º, os cards "Benefícios" e "Como funciona" com linha teal em cima e a tabela com `<caption>` e as linhas em `<th scope="row">`. O bloco `PÁGINA: servicos-1.html` do `style.css` foi reescrito, e as regras do layout anterior (`.retangulo`, `.titulo-incluso`) saíram. A nota "Foto do topo: gerado por IA." continua |
| 06/11 | Foto do topo `img/servicos-1/hero-servicos-1.jpg` (663 × 461 px, 58 KB) colocada pelo líder |
| 06/11 | Botões do fim iguais aos da Serviços 3: "Solicitar orçamento" (vai para a Contato) e "Voltar para serviços", centralizados, com 50px entre eles no computador e 16px no celular. Saíram os textos "Solicite um orçamento sem compromisso." e "← Voltar para os serviços" |
| 06/11 | Rodapé: o link "Orçamento de Hospedagem" entrou na lista "Páginas internas" e na linha do ©, ao lado da Política de Privacidade |
| 06/11 | O `js/acessibilidade.js` passou a ser carregado no `<head>`, como em todas as páginas |
| 06/11 | Validada pelo líder no W3C ([w3c-validator.pdf](w3c-validator.pdf)). Página **fechada** |
| 06/11 | Limpeza no fechamento: saiu do CSS a regra `.foto` (a foto da reunião passou a ser a foto do topo); os comentários do topo foram corrigidos e a nota passou a dizer "Foto do topo: gerado por IA." |

---

## 2. Requisitos do professor

OK = atende · ATENÇÃO = atende, mas pode melhorar · N/A = não se aplica a esta página

### HTML5 e semântica

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<header>`, `<nav>`, `<footer>` | OK | Compartilhados (linhas 20, 55 e 182) |
| `<main>` | OK | `<main>` da linha 96 à 179, com o topo, as duas seções, os botões e a nota |
| `<section>` | OK | Topo (98), Detalhes do serviço (110) e O que está incluso? (141). As duas últimas com `aria-labelledby` ligado ao título |
| `<article>` | OK | Os cards "Benefícios" (118) e "Como funciona" (128) |
| Listas | OK | "Benefícios" em `<ul>` (120) e "Como funciona" em `<ol>` (130), porque são passos em ordem |
| Tabela | OK | `<caption>` (145), `<thead>` (146), `<th scope="col">` (148 e 149) e `<th scope="row">` nas linhas (154, 158 e 162) |
| Cabeçalhos hierárquicos | OK | Um `<h1>` (102), `<h2>` (112), dois `<h3>` nos cards (119 e 129) e `<h2>` (142). Nenhum nível pulado |
| Links funcionais | OK | "Solicitar orçamento" leva a `contato.html` e "Voltar para serviços" a `servicos.html` (linhas 172 e 173); os do menu e do rodapé funcionam |

### Formulário e multimídia

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Formulário validado | N/A | É requisito da página de contato |
| `<video>`, `<audio>`, `<iframe>` | N/A | Não é obrigatório nesta página |

### Boas práticas

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Código validado no W3C (HTML) | OK | [w3c-validator.pdf](w3c-validator.pdf), validação do líder em 06/11 |
| Imagens existem e o caminho está certo | OK | A foto do topo (`img/servicos-1/hero-servicos-1.jpg`, no CSS, linha 4890) e o logo (1x e 2x) existem |
| Imagens com `alt` | OK | O logo do header (53) e do rodapé (186) têm `alt`. A foto do topo é fundo de CSS |
| Imagens otimizadas (até 500 KB) | OK | Foto do topo com 58 KB |
| Imagens corretamente nomeadas | OK | Minúsculas, com hífen, na pasta `img/servicos-1/` |
| Logo nítido | OK | `<img>` do logo com `srcset` (1x e 2x) no header (linha 53) e no rodapé (linha 186) |
| Fonte de conteúdo não autoral | OK | Nota do fim (linha 177): "Foto do topo: gerado por IA." |
| Navegação funcional e coerente | OK | Abre pelo menu e marca "Serviços" com `aria-current="page"` (linhas 58 e 81) |
| Menu do celular e aviso de cookies | OK | `js/menu.js` (234) e `js/cookies.js` (235) carregados |
| Acessibilidade | OK | `js/acessibilidade.js` no `<head>` (linha 15); contorno teal no foco do teclado dos links do conteúdo (linha 4900 do CSS) |
| Código sem sobras | OK | Nenhuma regra sem uso no bloco: a regra `.foto` e os comentários que ainda falavam da foto da reunião no conteúdo foram ajustados em 06/11, quando ela passou a ser a foto do topo |

### Clareza e coerência

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Nome da empresa | OK | "Grupo Êxito Condomínios" no `<title>` (linha 6), no `alt` do logo e no © do rodapé |
| Texto coerente com o tema | OK | Documentos, atas, contratos, fornecedores e reuniões do condomínio |
| Ortografia | OK | "organização administrativa" (113) e "Assessoria jurídica básica" (124) |

### CSS

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Usa só o `css/style.css` | OK | Linha 14: `<link rel="stylesheet" href="../css/style.css">` |
| CSS isolado com `.pagina-servicos-1` | OK | `<body class="pagina-servicos-1">` (linha 18) e todas as regras do bloco com o prefixo |
| Topo com o componente do site | OK | `<section class="ex-hero">` (linha 98). A página só define a foto de fundo (linha 4889 do CSS) |
| Componentes do site | OK | `.ex-cabecalho` (111), `.ex-subtitulo` (113), `.ex-container` (108), `.ex-botao` (172 e 173) e `.ex-nota` (177) |
| Cores da paleta | OK | As 4 cores do bloco são da paleta: `rgb(0, 104, 118)`, `rgb(226, 232, 240)`, `rgb(255, 255, 255)` e `rgba(6, 21, 45, 0.08)` |
| Sem `var()` | OK | Nenhum `var()` no bloco da página |
| Mesmo padrão de texto do site | OK | O CSS da página não muda fonte, tamanho, peso, altura da linha nem maiúsculas. A tabela usa o padrão das tags do bloco GLOBAL |
| Sem `<style>` nem `style="..."` no HTML | OK | Nenhum |
| Sem fontes externas além das do site | OK | Nenhum link para o Google Fonts |
| Responsivo | OK | Cards em grade automática (mínimo 16rem, linha 4909 do CSS), tabela que rola para o lado no celular (4948) e `@media` 640 px para os botões (4983) |
| CSS validado no W3C CSS Validator | OK | `css/style.css` validado em [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) |

### Resumo

| OK | ATENÇÃO | N/A |
| :---: | :---: | :---: |
| 33 | 0 | 2 |

Todos os requisitos do professor que valem para esta página foram atendidos.
