# Relatório de teste — Serviços (vitrine)

| | |
| --- | --- |
| **Responsável** | João |
| **Entregou para a 2ª fase?** | **Sim** (versão enviada pelo ClickUp) |
| **Avaliação do líder (2ª entrega)** | **5 / 10** |
| **Situação** | **Fechada em 06/11/2026.** |
| **Arquivos finais** | `pages/servicos.html` + bloco `PÁGINA: servicos.html` do `css/style.css` (linhas 2485 a 2606) |
| **Antes e depois** | [antes-depois.md](antes-depois.md) (o "antes" é a versão enviada pelo ClickUp) |
| **Evidência W3C (HTML)** | [w3c-validator.pdf](w3c-validator.pdf): validada pelo líder em 06/11 |
| **Evidência W3C (CSS)** | `css/style.css` validado em [docs/testes/pages/css/w3c-validator.pdf](../css/w3c-validator.pdf) |
| **Fora do escopo** | Header e footer (compartilhados, revisados à parte) |

---

## 1. Histórico

| Data | O que aconteceu |
| --- | --- |
| — | Versão enviada pelo ClickUp: página com `<style>` dentro do HTML, fonte Georgia e cinco cores fora da paleta (verde `#1f6b4f`, `#1c2b26`, `#fbfaf7`, `#d9d6cc`, `#eef3ef`). Tinha menu e rodapé próprios, diferentes do resto do site. As imagens apontavam para o computador de quem fez (`C:\Users\joaov\OneDrive\...`) e não abriam em nenhum outro lugar. Os 9 links para as páginas de serviço iam para `servico-1.html`, `servico-2.html` e `servico-3.html`, que não existem. O conteúdo falava de finanças pessoais (investimentos, Imposto de Renda). Pontos bons: cada `<section>` tinha título `<h2>`, os cards usavam `<article>` com `<h3>`, e a tabela tinha `<caption>`, `<thead>` e `<th scope>` |
| 01/11 | Na reorganização do CSS do site, a página ganhou o header e o footer compartilhados, o CSS foi para um arquivo próprio da página, as imagens foram para `img/` e os links foram corrigidos. Nessa mudança, as duas seções perderam o título e entrou um erro de digitação no `alt` ("gesgão") |
| 01/11 | Primeira revisão completa: 8 requisitos do professor e 8 regras do site não atendidos |
| 01/11 | Conteúdo: os serviços passaram a ter o nome das páginas internas, na ordem do menu: **Gestão Administrativa** (`servicos-1.html`), **Gestão Financeira** (`servicos-2.html`) e **Gestão Operacional** (`servicos-3.html`). A tabela passou a falar de administração de condomínio, e o texto de cada link bate com a página de destino |
| 01/11 | HTML e CSS no padrão do site: título de volta nas seções, conteúdo no `.ex-container` (1200px), indentação de 4 espaços, CSS isolado com `.pagina-servicos`, sem `var()`, com o teal da paleta no lugar do verde e sem mudar a tipografia. A página passou a carregar só o `css/style.css` |
| 01/11 | Ajustes do líder: a página ganhou o topo `.ex-hero`. Os três cards de resumo saíram por repetirem a tabela, e os três cartazes saíram junto |
| 01/11 | Espaço abaixo do topo padronizado em **50px** em todas as páginas com topo. O espaço vem do componente `.ex-hero`, e a página não acrescenta outro |
| 01/11 | Foto do topo salva em `img/servicos/hero-servicos.jpg` (1280 × 854 px, 164 KB), com a nota "Foto do topo: Pixabay." no fim da página. Texto do topo: "Conheça nossas opções de serviços" |
| 01/11 | Validação no W3C: **sem erros e sem avisos** |
| 01/11 | Nota do líder: **5 / 10**. Página fechada pela primeira vez |
| 04/11 | Reaberta. Novo título do topo: "Serviços para administração de condomínios" |
| 04/11 | Seis cards de serviço acima da tabela, no modelo da home, e a tabela com 6 linhas. Entrou uma chamada para o site de imóveis do grupo |
| 04/11 | Os seis serviços deixaram de ser cards e viraram linhas com um número grande ("01" a "06"), para a página não ficar igual à home |
| 04/11 | Ajustes do líder: título "Como podemos ajudar" com um texto de introdução, números todos à esquerda, ícones retirados e chamada de imóveis com fundo azul-marinho |
| 04/11 | O líder colocou o cabeçalho padrão do site (`.ex-cabecalho`) abaixo do topo. O título ganhou o seu próprio `id` (`titulo-servicos`), ligado à seção |
| 06/11 | Faltava o `</div>` de fechamento da lista de serviços depois de um ajuste; foi recolocado |
| 06/11 | O `css/style.css` passou a ser o arquivo de CSS do grupo, editado direto. O CSS da página fica no bloco `PÁGINA: servicos.html` |
| 06/11 | O João reenviou a página pelo ClickUp (a mesma versão do começo). Decisão do líder: voltar ao layout dele (3 cards com imagem, a tabela de comparação e a chamada final), com os textos de condomínio. Os textos de finanças pessoais da versão dele não voltaram |
| 06/11 | Saíram a lista em linhas (números grandes e lista de itens) e a chamada para o site de imóveis. A tabela voltou a ter 3 linhas |
| 06/11 | As 3 imagens do João foram para a pasta da página (`img/servicos/gestao-financeira.jpg`, `planejamento-investimentos.jpg` e `consultoria-tributaria.jpg`) e aparecem no topo de cada card, cortadas pela parte de cima, sem distorcer. O bloco da página no `style.css` foi reescrito: cards com linha teal em cima, borda e sombra da paleta |
| 06/11 | Nota de fonte completa: "Foto do topo: Pixabay. Fotos dos serviços: Pixabay / gerado por IA." |
| 06/11 | Rodapé: link "Política de Privacidade" na linha do "© 2026" e link "Orçamento de Hospedagem" na lista "Páginas Internas" e na linha do "© 2026" |
| 06/11 | O `js/acessibilidade.js` passou a ser carregado no `<head>`, como em todas as páginas, e o `js/cookies.js` no fim do `<body>` |
| 06/11 | O líder validou a página no W3C ([w3c-validator.pdf](w3c-validator.pdf)) e o `css/style.css` completo ([docs/testes/pages/css/w3c-validator.pdf](../css/w3c-validator.pdf)) |
| 06/11 | Página **fechada** |

---

## 2. Requisitos do professor

OK = atende · ATENÇÃO = atende, mas pode melhorar · N/A = não se aplica a esta página

### HTML5 e semântica

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<header>`, `<nav>`, `<footer>` | OK | Compartilhados (linhas 22, 61 e 218) |
| `<main>` | OK | `<main>` da linha 103 à 215, com o topo, as duas seções, a chamada e a nota |
| `<section>` | OK | Topo (105), Serviços (122) e Comparação (168). As duas últimas ligadas ao título por `aria-labelledby` |
| `<article>` | OK | Os 3 cards de serviço (linhas 132, 143 e 154) |
| Tabela | OK | `<caption>` (172), `<thead>`/`<tbody>`, `<th scope="col">` no cabeçalho (175 a 178) e `<th scope="row">` em cada serviço (183, 191 e 198) |
| Cabeçalhos hierárquicos | OK | Um `<h1>` (109), `<h2>` (125), três `<h3>` nos cards (135, 146 e 157) e `<h2>` (169). Nenhum nível pulado |
| Links funcionais | OK | `servicos-1.html`, `servicos-2.html` e `servicos-3.html` nos cards (140, 151 e 162) e na tabela (183, 191 e 198); `contato.html` na chamada (210). Todos existem |
| Texto do link combina com a página de destino | OK | "Ver gestão administrativa", "Ver gestão financeira" e "Ver gestão operacional" nos cards; nome do serviço na tabela |

### Formulário e multimídia

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Formulário validado | N/A | É requisito da página de contato |
| `<video>`, `<audio>`, `<iframe>` | N/A | Não é obrigatório nesta página |

### Boas práticas

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Código validado no W3C (HTML) | OK | [w3c-validator.pdf](w3c-validator.pdf), validação do líder em 06/11 |
| Imagens existem e o caminho está certo | OK | As 3 imagens dos cards (linhas 133, 144 e 155) e a foto do topo (`img/servicos/hero-servicos.jpg`, linha 2505 do `style.css`) existem |
| Imagens com `alt` | OK | As 3 imagens dos cards têm `alt` que descreve o cartaz (linhas 134, 145 e 156). A foto do topo é fundo de CSS e decorativa |
| Imagens otimizadas (até 500 KB) | OK | Cards com 58 KB, 61 KB e 67 KB; foto do topo com 164 KB. As imagens declaram `width` e `height` |
| Imagens na pasta da página e bem nomeadas | OK | Todas em `img/servicos/`, em minúsculas e com hífen |
| Imagens dos cards | **ATENÇÃO** | São os cartazes da versão do ClickUp, de finanças pessoais; o corte mostra só a foto de cima, sem o texto. Os nomes dos arquivos são os temas antigos (o card da Gestão Administrativa usa `consultoria-tributaria.jpg`, e o da Gestão Operacional, `planejamento-investimentos.jpg`) |
| Logo nítido | OK | `<img>` do logo com `srcset` (1x e 2x) no header (linha 57) e no rodapé (linha 222) |
| Fonte de conteúdo não autoral | OK | Nota do fim (linha 213): "Foto do topo: Pixabay. Fotos dos serviços: Pixabay / gerado por IA." |
| Navegação funcional e coerente | OK | Abre pelo menu e marca "Serviços" com `aria-current="page"` (linhas 64 e 88) |
| Código organizado e indentado | OK | 4 espaços na página toda |
| Código sem sobras | OK | Cada regra do bloco da página tem elemento na página |

### Clareza e coerência

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Nome da empresa | OK | "Grupo Êxito Condomínios" no `<title>` (linha 7), no logo e no rodapé (linha 268) |
| Texto coerente com o tema | OK | Cards e tabela falam de cadastros, condôminos, documentos, previsão orçamentária, fornecedores, segurança e manutenção |
| Serviços batem com as páginas Serviços 1, 2 e 3 | OK | Gestão Administrativa, Gestão Financeira e Gestão Operacional, com o mesmo nome e na ordem do menu |
| Duração dos serviços na tabela | **ATENÇÃO** | As páginas internas não falam em prazo. A coluna "Duração" (linhas 188, 195 e 202) foi escrita a partir do texto de cada serviço |

### CSS

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Usa só o `css/style.css` | OK | Linha 16: `<link rel="stylesheet" href="../css/style.css">` |
| CSS isolado com `.pagina-servicos` | OK | `<body class="pagina-servicos">` (linha 20) e todas as regras do bloco `PÁGINA: servicos.html` (linhas 2485 a 2606 do `style.css`) com o prefixo |
| Topo com o componente do site | OK | `<section class="ex-hero">` (linha 105). A página só define a foto de fundo (linha 2504 do CSS) |
| Cabeçalho padrão abaixo do topo | OK | `.ex-cabecalho` (linha 124) com o `<h2>` e o subtítulo `.ex-subtitulo` |
| Cores da paleta | OK | As 4 cores do bloco são da paleta: `rgb(0, 104, 118)`, `rgb(255, 255, 255)`, `rgb(226, 232, 240)` e `rgba(6, 21, 45, 0.08)` |
| Sem `var()` | OK | Nenhum `var()` no bloco da página |
| Mesmo padrão de texto do site | OK | O CSS da página não muda fonte, tamanho, peso, altura da linha nem maiúsculas. A nota usa o componente `.ex-nota` (linha 213) |
| Sem `<style>` nem `style="..."` no HTML | OK | Nenhum |
| Responsivo | OK | Grade automática dos cards (linha 2527 do CSS): 3 lado a lado no computador e um embaixo do outro no celular. A tabela rola para o lado no celular (linhas 2581 a 2589) |
| CSS validado no W3C CSS Validator | OK | `css/style.css` validado em [docs/testes/pages/css/w3c-validator.pdf](../css/w3c-validator.pdf) |

### Resumo

| OK | ATENÇÃO | N/A |
| :---: | :---: | :---: |
| 31 | 2 | 2 |

Nenhum requisito do professor deixou de ser atendido. Os dois itens em ATENÇÃO (as imagens dos cards, que vieram dos cartazes de finanças pessoais, e a duração escrita a partir do texto dos serviços) são de conteúdo e não impedem a entrega.
