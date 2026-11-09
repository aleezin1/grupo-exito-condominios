# Diário de Bordo — Grupo Êxito Condomínios

Diário do grupo, em ordem de data: **o que fizemos**, **o que decidimos**, **o que aprendemos** e **as dificuldades**. Cada data tem uma entrada só.

No fim estão o resumo do diário de cada integrante, as decisões do projeto e as palavras que aprendemos.

---

## 28/09 — Começo do projeto

**O que fizemos**

* Criamos o repositório do projeto no GitHub.

**O que decidimos**

* O site é de uma administradora de condomínios, o **Grupo Êxito Condomínios**.
* Todo o conteúdo é **fictício** (textos, números, clientes e notícias), só para estudo.
* Usamos apenas **HTML, CSS e JavaScript**, que é o que estamos aprendendo.

---

## 29/09 — Estrutura e divisão das páginas

**O que fizemos**

* Criamos as pastas `css/`, `js/`, `img/` e `pages/`, com as primeiras imagens e o logo.
* Escrevemos o primeiro README, com as regras do grupo.
* Colocamos o mesmo menu (header) e o mesmo rodapé (footer) em todas as páginas.

**O que decidimos**

* Cada integrante fica responsável por **uma página**, e as tarefas ficam no **ClickUp**.
* A Home fica na raiz (`index.html`) e as outras páginas em `pages/`.
* Todo o site usa **uma paleta de cores só** e o mesmo menu, para não parecer vários sites diferentes.

---

## 30/09 — Caminhos dos arquivos

**O que fizemos**

* Corrigimos links do menu das páginas internas que estavam com o caminho errado.

**O que aprendemos**

* Uma página dentro de `pages/` precisa "voltar uma pasta" com `../` para achar os arquivos da raiz, como `../css/style.css` e `../img/logo-grupo-exito-header.png`.

**O que decidimos**

* Antes de enviar uma alteração, cada um testa todos os links da sua página.

---

## 14/10 — Praticando Git

**O que fizemos**

* Várias pessoas do grupo mexeram no projeto e enviaram alterações pelo Git pela primeira vez: uma linha da `servicos-1.html` saiu e voltou, o título de uma página mudou e voltou ao original, e um arquivo de teste foi criado e apagado.
* Criamos a pasta `docs/`, com o README, o diário de bordo e um material de apoio sobre Git.

**O que aprendemos**

* Errar no Git não é o fim do mundo: dá para ver o que mudou e desfazer.
* Fazer `git pull` antes de começar evita conflitos.
* Mensagem de commit clara ajuda: "fix: corrige título da página de serviços" diz o que mudou e onde.

**O que decidimos**

* Arquivos de teste não vão para o repositório.
* Antes de mexer em algo que não é da sua página, avisar o grupo.

---

## 01/11 — CSS organizado e identidade visual

**O que fizemos**

* Salvamos as fontes do site (Plus Jakarta Sans, Space Grotesk e os ícones Material Symbols) em `css/fonts/`, para não depender do Google Fonts.
* Deixamos o header e o footer iguais em todas as páginas e criamos um padrão para os títulos, parágrafos e links do site inteiro.
* Criamos o `css/style.css`, um arquivo só com o CSS do site, dividido em blocos: global, header, footer e um bloco para cada página.
* Criamos os componentes compartilhados com o prefixo `.ex-` (topo com foto, botões, cards, etiquetas e a nota de fonte), com largura de conteúdo de 1200px.
* Colocamos o vídeo na página Quem Somos e criamos o painel `docs/paginas.html`, com o andamento de cada página.

**O que decidimos**

* A entrega final tem **um único arquivo de CSS**, como o professor pede.
* Cada página tem uma classe no `<body>` (`pagina-<nome>`), e toda regra do bloco dela começa com essa classe.
* As cores são escritas em `rgb(...)`, copiadas da tabela da paleta do README.

**O que aprendemos**

* Pôr a classe da página na frente da regra (`.pagina-faq img`) faz a regra valer só naquela página, mesmo com o CSS do site todo num arquivo só.
* Uma regra com classe (`.hero h1`) ganha de uma regra só com a tag (`h1`).
* São dois validadores: o HTML vai no validator.w3.org e o CSS no jigsaw.w3.org/css-validator.

**Dificuldades**

* Várias páginas tinham classes com o mesmo nome (`.container`, `.botao`). No mesmo arquivo, uma página estragava a outra, até colocarmos o prefixo da página.
* O `url()` de uma imagem no CSS é relativo ao arquivo `.css`, então os caminhos mudaram quando o CSS foi para o `style.css`.

---

## 04/11 — Home, Notícias, FAQ e Contato no `style.css`

**O que fizemos**

* Levamos para o `style.css` o CSS da Home, da Notícias, da FAQ e da Contato.
* Os integrantes da Serviços 3, da Projetos e da Notícias escreveram o diário das suas páginas (resumo no fim deste documento).

**O que aprendemos**

* `<input type="radio">` com `<label for>` e o seletor `:checked` troca o que aparece na tela só com CSS. A Notícias e a FAQ usam esse recurso.

---

## 06/11 — Todas as páginas no `style.css`, orçamento e validações

**O que fizemos**

* Levamos para o `style.css` as páginas Serviços 1, 2 e 3. A partir daí, todas as páginas carregam só esse arquivo.
* O Guilherme entrou no grupo com a página **Política de Privacidade**, e colocamos o **aviso de cookies**, com link para ela.
* Colocamos o **botão de acessibilidade** em todas as páginas.
* Colocamos na Home os mapas dos dois endereços da empresa.
* Colocamos a nota de fonte das imagens no fim das páginas.
* Fizemos o **orçamento de hospedagem e domínio**: comparamos HostGator, Hostinger e Umbler e três domínios, criamos a página `orcamento-hospedagem.html` e colocamos o link no rodapé.
* Validamos as páginas no W3C e salvamos os PDFs em `docs/testes/pages/<pagina>/`.

**O que decidimos**

* Hospedagem no **Hostinger Single** com domínio **.com.br** no Registro.br: R$ 111,88 no primeiro ano, o menor custo, e dá para passar a um plano maior se o site crescer.
* O `style.css` passa a ser o arquivo de CSS editado pelo grupo. Os arquivos separados ficam em `css/legado/`, só como registro.

**Dificuldades**

* No W3C, apareceram erros como `<section>` sem título e `<article>` usado em conteúdo que não é independente. Trocamos por `<div>` onde não havia título.

---

## 07/11 — Documentação

**O que fizemos**

* Atualizamos o README e o rodapé do site.
* Os integrantes da Serviços 1, da Serviços 2 e da FAQ escreveram o diário das suas páginas.
* Salvamos o diário de bordo também em `.docx` e `.pdf`.

---

## 08/11 — Ajustes finais e conferência da entrega

**O que fizemos**

* Colocamos a nota de fonte das imagens na Clientes e na Serviços.
* Colocamos o aviso de cookies na Serviços 1.
* Na Serviços 2, o título principal passou a ser `<h1>`.
* Corrigimos o espaçamento da Notícias.
* Colocamos a equipe do projeto (nome, RGM e página de cada integrante) no fim da Contato.
* Validamos de novo as páginas no W3C e atualizamos os PDFs.
* Na Contato, deixamos o telefone, o WhatsApp, o e-mail e o Instagram iguais aos do resto do site.
* Na FAQ, trocamos as seis primeiras perguntas, que eram sobre compra e aluguel de imóveis, por perguntas sobre condomínio: o que está incluído na administração, cálculo da taxa, atraso no pagamento, manutenção preventiva, prestação de contas e condomínios atendidos.
* Juntamos as variáveis de cor das páginas num `:root` só, no BLOCO GLOBAL, e trocamos as cores da Clientes que tinham ficado sem valor pelas cores mais próximas da paleta.
* As regras da Contato e da Clientes que não começavam com a classe da página passaram a começar com `.pagina-contato` e `.pagina-clientes`. Assim, o CSS de uma página não muda mais as outras.
* Levamos o CSS da Clientes para o bloco da página no `style.css`.
* Trocamos as cores que não eram da paleta pela cor mais próxima dela. Títulos ficaram em azul-marinho, textos em cinza, e as sombras passaram a usar o azul-marinho transparente em vez de preto. O `:root` ficou com uma linha para cada variável, só com cores da paleta.
* Tiramos dos blocos de página as mudanças de fonte: família, peso, estilo, tamanho, altura da linha e espaçamento entre letras. Agora títulos e textos usam só o padrão das tags do BLOCO GLOBAL, igual em todas as páginas.
* Colocamos no BLOCO GLOBAL uma regra para os campos de formulário usarem a mesma fonte da página.
* Levamos o CSS que ficava dentro da Serviços 3 para o bloco da página no `style.css`. Agora nenhuma página tem `<style>`.
* Na Serviços 3, a página passou a usar a foto em `.jpg` (120 KB) no lugar da `.png` de 1,2 MB, que apagamos, e ganhou a nota de fonte da foto.
* Nas páginas de Projetos, colocamos um `<h2>` entre o `<h1>` e os cards, para os títulos seguirem a ordem h1 → h2 → h3.
* Na Serviços 2, tiramos um `</div>` sobrando, trocamos o botão com um link dentro por um link só e passamos o `type="square"` da lista para o CSS. Também tiramos um item repetido da lista.
* Corrigimos três erros que o W3C CSS Validator apontou no `style.css`: um `10 px` com espaço na FAQ e dois `align-items` com valor inválido na Serviços 2.
* Movemos a foto do topo da Home para `img/home/` e apagamos as imagens que nenhuma página usava.
* Refizemos o README e simplificamos este diário, com uma entrada por data.

---

## Diário de cada página

Cada integrante escreveu o diário da sua página. O diário completo fica na pasta da página, em `docs/testes/pages/<pagina>/diario-de-bordo.md`.

### Quem Somos — Anthony Gabriel Pereira dos Santos

* **Fez:** a abertura da página, Missão, Visão e Valores (transparência, excelência e confiança), os cartões com efeito ao passar o mouse e a seção "Por que escolher o Grupo Êxito Condomínios?", com quatro diferenciais. Depois levou a página para o padrão do site, com o vídeo e o CSS fora do HTML.
* **Aprendeu:** a organizar os arquivos, a manter o mesmo padrão visual entre as páginas e a usar media queries.
* **Dificuldades:** chegar a um visual que o agradasse, posicionar os cartões e acertar os caminhos das imagens, do vídeo e dos scripts.

### Serviços — João Vitor Rocha Silva

* **Fez:** a página com `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`, um `<h1>` e títulos em ordem, cartões em CSS Grid e a tabela comparativa com `<caption>`, `<thead>` e `scope`.
* **Aprendeu:** a função de cada tag semântica, a ordem dos títulos e o uso de caminho relativo e `alt` nas imagens.
* **Dificuldades:** um `>` sobrando que aparecia como texto, um erro de digitação no `alt` e imagens com caminho do próprio computador.

### Serviços 1 — Gestão Administrativa — Arthur Kassab Dias

* **Fez:** o conteúdo do serviço (documentos, atas, contratos e processos), os benefícios, os passos de "Como funciona" e a tabela "O que está incluso?".
* **Corrigiu:** `<thread>` para `<thead>`, atributo inválido, `<br>` e parágrafos vazios usados como espaço e erros de digitação.
* **Aprendeu:** a hierarquia dos títulos e que uma grade com `auto-fit` organiza os cards no computador e no celular sem media query.

### Serviços 2 — Gestão Financeira — Felipe Dias Gomes

* **Fez:** a página em cinco etapas: planejamento, HTML, CSS, testes no navegador e revisão do código.
* **Aprendeu:** a importância do planejamento e de testar a página.
* **Dificuldades:** alinhar os elementos e ajustar espaçamentos e responsividade. Resolveu com `display: flex`, `justify-content`, `align-items` e `gap`.

### Serviços 3 — Gestão Operacional — David Oliveira dos Santos

* **Fez:** trocou tabelas de uma célula só por `<h3>` + `<p>` nos cards, trocou a regra `img` por `article img` (ela mudava os logos do header e do footer), passou as cores para a paleta e renomeou a imagem `img1.png` para um nome que diz o que ela mostra.
* **Aprendeu:** `<table>` é para dados de tabela; um seletor genérico pode mexer na parte dos colegas; o que é uma branch.
* **Dificuldades:** erros pequenos de digitação em atributos, que não dão aviso.

### Clientes — Gabriel da Silva

* **Fez:** separou o conteúdo por parte da página, escolheu as imagens e montou a introdução, os clientes e os depoimentos, organizados em colunas.
* **Aprendeu:** que o cabeçalho e o rodapé dão continuidade ao site.
* **Dificuldades:** os links para as outras páginas só puderam ser feitos depois que elas ficaram prontas.

### Projetos — Felipe Gabriel Evangelista Alexandrias

* **Fez:** dividiu os projetos em três áreas (Financeira, Operacional e Administrativa), cada uma numa página com três projetos: o que o cliente queria, o que foi feito e o resultado. Na página principal, três cards com imagem levam a cada área, e cada área tem um link para voltar.
* **Aprendeu:** a usar `<a>` em imagens, Flexbox, transições, sombras e `:hover`.

### Notícias — Enzo Veríssimo

* **Fez:** a vitrine com a notícia em destaque, os cards e as matérias completas, com as cores da paleta. A troca entre a lista e as matérias funciona só com CSS.
* **Aprendeu:** o recurso do `<input type="radio">` com `:checked`, e a diferença entre `<article>` (cada notícia) e `<section>` (partes da página).

### FAQ — Evandro Araujo Costa

* **Fez:** as perguntas e respostas, que abrem e fecham ao clicar, o topo com foto e a caixa "Qualquer dúvida?" com o botão do WhatsApp.
* **Aprendeu:** que a classe do `<body>` limita o estilo à página e para que servem `aria-current` e `aria-hidden`.
* **Dificuldades:** adaptar o CSS que tinha às classes do HTML novo.

### Política de Privacidade — Guilherme Santos Peixoto Muniz

* **Fez:** completou um código que estava cortado, colocou as tags semânticas, organizou os títulos e trocou a paleta verde pela paleta do grupo.
* **Aprendeu:** que a ordem dos títulos ajuda os leitores de tela, e a deixar a página responsiva com `clamp` e Flexbox.
* **Dificuldades:** o código de partida precisou ser completado antes de qualquer outra mudança.

---

## Decisões do projeto

| Decisão | Motivo |
| --- | --- |
| Só HTML, CSS e JavaScript | É o que estamos aprendendo |
| Cada integrante cuida de uma página | Todos praticam e o trabalho fica dividido |
| Uma paleta e o mesmo menu e rodapé em todas as páginas | O site fica com a mesma cara em todas as páginas |
| Fontes dentro do projeto (`css/fonts/`) | Não depender do Google Fonts |
| Um único `css/style.css`, com um bloco por página | O professor pede um só arquivo de CSS |
| Regras de cada página começando com `.pagina-<nome>` | Uma página não estraga a outra |
| Nota de fonte no fim de cada página | O professor pede a indicação da fonte |
| Botão de acessibilidade e aviso de cookies em todas as páginas | O site inteiro funciona do mesmo jeito |
| Hostinger Single com domínio `.com.br` | Menor custo no primeiro ano e espaço para crescer |

---

## Palavras que aprendemos

* **Repositório:** a "pasta" do projeto guardada no GitHub, com todo o histórico de alterações.
* **Commit:** um "salvamento" no Git, com uma mensagem dizendo o que mudou.
* **Pull (`git pull`):** traz para o seu computador as alterações dos colegas.
* **Push (`git push`):** envia as suas alterações para o GitHub.
* **Branch:** uma cópia paralela do projeto, para trabalhar sem atrapalhar os outros.
* **Header e footer:** a parte de cima (logo e menu) e a parte de baixo (rodapé) do site.
* **Paleta de cores:** a lista de cores que o site usa.
* **Caminho relativo:** o endereço de um arquivo a partir de onde você está, como `../img/logo.png`.
* **Validador W3C:** site que confere se o HTML e o CSS estão escritos do jeito certo.
* **README:** o documento que explica o projeto e as regras do grupo.
