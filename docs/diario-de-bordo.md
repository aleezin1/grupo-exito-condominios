# Diário de Bordo — Grupo Êxito Condomínios

Este é o diário de bordo do nosso grupo.

Aqui anotamos, em ordem de data, **o que fizemos**, **o que decidimos** e **por que decidimos**. A ideia é que qualquer pessoa do grupo (ou o professor) consiga entender como o projeto chegou até aqui.

Como todos nós estamos começando, escrevemos de um jeito simples. Se algum termo for novo para você, procure no final do documento, na parte **Palavras que aprendemos**.

---

## 28/09 — Começo do projeto

**O que fizemos**

* Criamos o repositório do projeto no GitHub.

**O que decidimos**

* O projeto vai ser um site institucional de uma administradora de condomínios, a **Grupo Êxito Condomínios**.
* Tudo no site é **fictício**: textos, números, clientes e notícias. É só para estudo.
* Vamos usar apenas **HTML, CSS e JavaScript**, que é o que estamos aprendendo na faculdade.

**Por quê?**

Um site institucional tem várias páginas parecidas (início, quem somos, serviços, contato...). Assim, cada pessoa do grupo pode ficar com uma página.

---

## 29/09 — Estrutura inicial e divisão das páginas

**O que fizemos**

* Criamos as pastas do projeto: `css/`, `js/`, `img/` e `pages/`.
* Adicionamos as primeiras imagens e o logo.
* Escrevemos o primeiro README com as regras do grupo.
* Colocamos o mesmo menu (header) e o mesmo rodapé (footer) em todas as páginas.

**O que decidimos**

* Somos **11 integrantes** e cada um fica responsável por **uma página**.
* As tarefas de cada página ficam no **ClickUp**.
* A página inicial fica na raiz (`index.html`) e as outras páginas ficam dentro de `pages/`.
* As cores ficam todas em um único arquivo: `css/paleta.css`.
* O menu e o rodapé ficam no arquivo `css/layout.css`, e todo mundo usa o mesmo.

**Por quê?**

Se cada pessoa escolhesse suas próprias cores e seu próprio menu, o site ia parecer 11 sites diferentes. Com uma paleta e um menu só, o site fica com a mesma cara em todas as páginas.

---

## 30/09 — Arrumando o menu

**O que fizemos**

* Corrigimos o menu nas páginas internas. Alguns links não funcionavam porque o caminho estava errado.

**O que aprendemos**

Uma página dentro de `pages/` precisa "voltar uma pasta" para achar os arquivos da raiz. Por isso usamos `../`:

```html
<!-- No index.html (raiz) -->
<link rel="stylesheet" href="css/paleta.css">

<!-- Dentro de pages/ -->
<link rel="stylesheet" href="../css/paleta.css">
```

**O que decidimos**

* Antes de enviar qualquer alteração, cada um **testa todos os links** da sua página.



## 14/10 — Dia de praticar Git

**O que fizemos**

Foi o primeiro dia em que várias pessoas do grupo mexeram no projeto e enviaram alterações pelo Git:

* alguém removeu uma linha da página `servicos-1.html`, e depois ela foi colocada de volta;
* o título de uma página foi alterado, e depois voltou ao título original;
* foi criado um arquivo de teste (`teste.css`), e depois ele foi apagado.

**O que aprendemos**

* Errar no Git **não é o fim do mundo**: dá para ver o que mudou e desfazer.
* O comando `git pull` antes de começar evita muitos problemas, porque traz as alterações dos colegas.
* Mensagens de commit claras ajudam muito. "Mudança do título" é melhor do que "alteração", mas "fix: corrige título da página de serviços" é ainda melhor, porque diz **onde** foi a mudança.

**O que decidimos**

* Arquivos de teste não devem ser enviados para o repositório.
* Antes de mexer em algo que **não é da sua página**, avise o grupo.
* Criamos a pasta `docs/` para guardar a documentação do projeto:
  * `README.md` — as regras e o guia do projeto;
  * `giti-para-iniciantes.pdf` — material de apoio sobre Git;
  * `diario-de-bordo.md` — este diário.
* Atualizamos o README:
  * tiramos os ícones, para ficar mais fácil de ler;
  * a paleta de cores agora mostra os valores em `rgb(...)`, que é mais fácil para quem está começando;
  * tiramos as explicações dos recursos que foram removidos.

---

## 01/11 — Organizando o CSS e as fontes

**O que fizemos**

* Juntamos tudo o que é compartilhado em um arquivo só: `css/global.css` (fontes, paleta, base, header/footer e componentes `.ex-*`). Os antigos `paleta.css`, `layout.css` e `componentes.css` foram apagados.
* Cada página ganhou o seu arquivo em `css/page/`, com o mesmo nome do `.html` (ex.: `faq.html` → `css/page/faq.css`).
* Tiramos os blocos `<style>` de dentro das páginas e os atributos `style="..."`. Agora tudo fica nos arquivos `.css`, com uma classe.
* Acessibilidade, assistente, efeitos e loading foram para `css/components/`.
* Baixamos as fontes (Plus Jakarta Sans, Space Grotesk, Material Symbols, Poppins e Manrope) para `css/fonts/`. As páginas não carregam mais nada do Google Fonts.
* Apagamos o `style.css` vazio da raiz e tiramos os comentários de JavaScript e CSS que não eram usados.

**O que decidimos**

* Toda página carrega, nesta ordem: `global.css`, depois os `components/` que usar, depois o `page/<pagina>.css`.
* Os ícones usam a versão **fixa** do Material Symbols (peso 400, sem preenchimento), que é bem mais leve.

**Por quê?**

Com os arquivos separados por página, cada integrante sabe exatamente qual arquivo é o seu e não corre o risco de mexer no CSS de outra pessoa. Com as fontes dentro do projeto, o site funciona igual mesmo sem internet ou se o Google mudar alguma coisa.

**O que aprendemos**

* Um `url()` dentro de um `.css` é relativo ao **arquivo .css**, não à página. Por isso a imagem de fundo da página Clientes passou de `../img/...` para `../../img/...` quando o arquivo foi para `css/page/`.

---

## 01/11 — Header e footer separados e padrão das tags

**O que fizemos**

* Tiramos o header e o footer de dentro do `global.css`. Agora eles ficam em `css/layout/header.css` e `css/layout/footer.css`. O visual deles não mudou.
* Criamos o **padrão das tags** no `global.css` (seção 3): `body`, `h1`, `h2`, `h3`, `p`, `a`, `img`, listas e tabelas com a fonte Plus Jakarta Sans e as cores da paleta.
* Tiramos dos CSS das páginas as regras soltas que trocavam a fonte (Arial, Georgia, Segoe UI, Poppins, Manrope), a cor e o tamanho de `body`, `h1`, `h2`, `h3`, `p` e `a`.
* Onde o texto ficava branco sobre fundo escuro (Serviços 1 e 2, Projetos, Clientes, Fale Conosco), demos a cor clara pela classe da seção, para nenhum título escuro ficar em cima de fundo escuro.
* Trocamos algumas cores que estavam fora da paleta (`#00245d`, `#1677d2`, `#1c587f`, `#0066cc`) pela cor mais parecida da paleta.
* Apagamos as fontes Poppins e Manrope de `css/fonts/`, porque nenhuma página usa mais.

**O que decidimos**

* Toda página carrega, nesta ordem: `global.css`, `layout/header.css`, `layout/footer.css`, os `components/` que usar e, por último, o `page/<pagina>.css`.
* O CSS de página não redefine `body`, `h1`–`h3`, `p` e `a` soltos. Se precisar de algo diferente, usa uma classe ou o nome da seção (ex.: `.diferenciais h2`).
* Cada arquivo de layout tem um bloquinho de "proteção" igual (`.ex-header *` e `.ex-rodape *`). Repetimos esse bloco pequeno de propósito, para cada arquivo funcionar sozinho.

**Por quê?**

O professor pede uma **identidade visual unificada**. Antes, cada página tinha uma fonte e um tamanho de título diferentes, e a fonte do projeto só aparecia no menu e no rodapé. Agora o site inteiro usa a mesma fonte, os mesmos tamanhos de título e as mesmas cores.

**Dificuldades**

* Quando o título passou a ser escuro por padrão, alguns títulos que antes eram brancos (porque herdavam a cor da caixa azul) ficaram escuros em cima do azul. Tivemos que procurar página por página e dar a cor branca pela classe da seção.

**O que aprendemos**

* Uma regra com classe (`.hero h1`) ganha de uma regra só com a tag (`h1`), não importa a ordem dos arquivos. É por isso que o padrão das tags não estraga o menu nem os botões.

---

## 01/11 — Um único `style.css` para a entrega final

**O que fizemos**

* Criamos o `css/style.css`, que junta os nossos arquivos de CSS em um só.
* Geramos o primeiro `css/style.css`, com os padrões do site: `global.css` + `layout/header.css` + `layout/footer.css`, cerca de 1.250 linhas.
* No relatório de testes, o item 1.2 passou a contar quantas páginas já usam só o `style.css`, e o item novo 7.10 conta quantas páginas já têm o CSS isolado.

**O que decidimos**

* A entrega final vai ter **um único arquivo de CSS**, como o professor pede.
* Durante o desenvolvimento, continuamos editando os arquivos separados. O `style.css` é montado juntando esses arquivos, e **ninguém edita ele direto**.
* Vamos ajustar o site **página por página**. Quando uma página fica pronta, ela entra no `style.css` e passa a carregar só ele (`<link rel="stylesheet" href="../css/style.css">`). As que ainda não foram ajustadas continuam com os arquivos separados.
* Para entrar no `style.css`, a página precisa ter o CSS **isolado**: `<body class="pagina-<nome>">` e toda regra do `css/page/<nome>.css` começando com `.pagina-<nome>`.

**Por quê?**

Se juntássemos os arquivos do jeito que estão, uma página ia estragar a outra. Hoje 11 classes têm o mesmo nome em páginas diferentes (`.container` aparece em 6 páginas, `.botao` em 3) e 9 páginas usam regras soltas como `img` e `table`. Num arquivo só, a regra da última página valeria para o site inteiro. Com o prefixo `.pagina-<nome>`, cada regra só vale na sua página.

Montar o arquivo sempre na mesma ordem, a partir dos arquivos originais, evita esquecer alguma parte e deixa o `style.css` sempre igual a eles.

**Dificuldades**

* O `url()` de um `.css` é relativo ao arquivo. Quando o CSS de `css/page/` vai para `css/style.css`, o caminho da imagem muda de `../../img/...` para `../img/...`. Na hora de juntar, ajustamos esse caminho.

**O que aprendemos**

* **Escopo:** pôr uma classe na frente de todas as regras (`.pagina-faq img`) faz a regra valer só dentro daquela página, mesmo com o CSS do site inteiro no mesmo arquivo.

---

## 01/11 — Quem Somos é a primeira página no `style.css`

**O que fizemos**

* Ajustamos o HTML da página Quem Somos: o conteúdo agora fica dentro de `<main>`, e os blocos de destaque, valores e diferenciais viraram `<section>`.
* Trocamos a classe do `<body>` de `quem-somos` para `pagina-quem-somos`.
* Colocamos `.pagina-quem-somos` na frente de todas as regras de `css/page/quem-somos.css`, inclusive as de dentro do `@media`.
* Juntamos o CSS da página ao `css/style.css` (agora com cerca de 1.410 linhas).
* No `<head>` da página, os 4 `<link>` de CSS viraram um só: `<link rel="stylesheet" href="../css/style.css">`.
* Conferimos todas as cores do CSS da página com a paleta: 25 de 26 estavam certas. A sombra dos cards de diferenciais usava preto (`rgba(0, 0, 0, 0.08)`) e passou a usar o navy da paleta (`rgba(6, 21, 45, 0.08)`), igual às outras sombras.
* O relatório de testes ganhou o item **7.11**, que lista toda cor fora da paleta em todos os arquivos `.css`. A partir de agora, toda página atualizada passa por essa conferência.

**O que decidimos**

* A Quem Somos foi a primeira página porque já tinha passado pela revisão do ClickUp (`docs/testes/pages/quem-somos/`). Ela serve de exemplo para as próximas.
* O CSS dela continua sendo editado em `css/page/quem-somos.css`. Depois de qualquer mudança, é preciso atualizar o `style.css` também.

**Por quê?**

Assim a página já está no formato da entrega final (um arquivo de CSS só), e o resto do site continua funcionando com os arquivos separados enquanto as outras páginas são ajustadas.

**Dificuldades**

* O W3C Validator deu o aviso "Section lacks heading" na caixa de apresentação (`.destaque`), que tínhamos transformado em `<section>`. Toda `<section>` precisa ter um título (`h2`–`h6`). Como essa caixa é só a apresentação do `<h1>` logo acima e não precisa de título, voltamos ela para `<div>`. O visual não mudou, porque o CSS usa a classe `.destaque`.
* Para não acontecer de novo, o relatório de testes (item 7.1) passou a avisar quando uma `<section>` não tem título.
* Corrigimos o texto ("Grupo Êxito Imóveis" virou "Grupo Êxito Condomínios" e "administração imobiliária" virou "administração condominial") e apagamos a cópia `quem-somos-clickup.html`, que não era mais usada. A página passou de novo no W3C sem erros e sem avisos e não aparece em nenhuma falha do relatório de testes. Ficou um detalhe: "condomínios" com minúscula no primeiro parágrafo.
* Combinamos que a validação do CSS no W3C (o `css/style.css`) vai ser feita **uma vez só, no fim do projeto**, quando todas as páginas estiverem no `style.css`.
* Corrigimos o último detalhe ("condomínios" com minúscula no primeiro parágrafo) e definimos o nome oficial: **Grupo Êxito Condomínios**, sempre com maiúsculas. Nunca "Grupo Êxito Imóveis". A regra está no topo do README. No resto do site, o nome antigo só sobrou na página de contato: o e-mail `contato@grupoexitoimoveis.com.br` e o Instagram `grupoexito.imoveis`.
* **Aprendemos** que o erro de CORS do `site.webmanifest` no console aparece porque a página foi aberta direto do arquivo (`file:///...`). O navegador não deixa carregar o manifest assim. Com o Live Server (`http://127.0.0.1...`), o erro some. Não é problema do código. Mesmo assim, **tiramos a linha `<link rel="manifest">` das 14 páginas e do modelo do README**: o site não precisa dela, e assim o console fica limpo mesmo quando o professor abrir os arquivos direto. Os ícones da aba continuam funcionando, porque vêm das outras linhas do `<head>`.
* **A página Quem Somos está fechada.** Só falta a validação do CSS, que fica para o fim do projeto.
* Depois de colocar o vídeo do especialista, validamos a página de novo no W3C: **sem erros e sem avisos**. O líder deu a nota **7 / 10** para a entrega da Quem Somos na 2ª fase.
* Ao fechar a página, deixamos na pasta `docs/testes/pages/quem-somos/` só o que está de fato na página: o relatório (`quem-somos.md`) com o histórico e os requisitos do professor, a evidência do W3C e um arquivo novo, `antes-depois.md`, que mostra o que veio pelo ClickUp e o que virou. **Decidimos** fazer esse "antes e depois" para toda página que for fechada.
* Depois da correção, a página passou no W3C **sem erros e sem avisos**. A evidência está em `docs/testes/pages/quem-somos/w3c-validator.pdf`. O relatório da página (`docs/testes/pages/quem-somos/quem-somos.md`) lista o que falta para fechar: corrigir "Imóveis" → "Condomínios", apagar a cópia do ClickUp e validar o CSS.

**O que aprendemos**

* `<section>` é para um bloco que tem um assunto e um título. Caixa só visual, sem título, é `<div>`.
* Pôr `.pagina-quem-somos` na frente de uma regra deixa ela um pouco mais "forte" (mais específica). Aqui isso não mudou nada no visual, porque as regras da página já ganhavam do padrão das tags.

---

## 01/11 — Vídeo na página Quem Somos

**O que fizemos**

* Colocamos na Quem Somos uma seção nova, "Um especialista explica", entre os valores e os diferenciais. Ela tem um vídeo do YouTube (`<iframe>`) sobre o que é administração condominial.
* O vídeo usa o endereço `youtube-nocookie.com`, que só guarda cookies quando a pessoa dá o play. O `<iframe>` tem `title` (para leitores de tela) e `loading="lazy"` (só carrega quando chega perto na tela).
* No CSS (`css/page/quem-somos.css`), o vídeo ocupa a largura toda até 800px, fica sempre no formato 16:9 (`aspect-ratio`) e tem a mesma borda, cantos e sombra dos cards da página. Depois atualizamos o `css/style.css`.

**O que decidimos**

* Na página, o vídeo aparece como se fosse um especialista do Grupo Êxito Condomínios. Isso é **ficção**: a legenda (`<figcaption>`) avisa que a empresa é fictícia, de um projeto acadêmico, e diz de quem é o vídeo de verdade (Felipe Lima, canal Manutenção Predial), com link para o original no YouTube.

**Por quê?**

* O professor pede um `<iframe>` (vídeo ou mapa). Até agora o único estava na `adm-contato.html`, que não tem link no site: o professor não ia achar. A Quem Somos tem link no menu.
* O vídeo é de outra pessoa, então a fonte precisa aparecer na página, como o professor pede.

---

## 01/11 — Na 2ª entrega o CSS vale nota

**O que decidimos**

* Estamos na **2ª entrega**, que é a final, e nela o **CSS vale nota**. O arquivo que vale é o `css/style.css`, um só para o site inteiro.
* No relatório de testes, os itens de CSS deixaram de ser "atenção" e passaram a ser **falha**: o 1.2 (todas as páginas usando só o `style.css`), o 7.10 (CSS de cada página isolado) e o 7.11 (cores da paleta). O item 9.3 agora pede a validação do `style.css` no W3C CSS Validator.

**Dificuldades**

* Na hora de validar a página Quem Somos, o HTML foi enviado para o validador **de CSS** (ou com a opção "check as CSS" marcada). Apareceram erros como "Style sheets should not include HTML syntax", que não eram problema da página.

**O que aprendemos**

* São dois validadores diferentes: o HTML (`.html`) vai no https://validator.w3.org e o CSS (`.css`) vai no https://jigsaw.w3.org/css-validator. No validador de CSS, os avisos sobre variáveis (`var(--cor-...)`) são normais.

---

## 01/11 — Cores das páginas em `rgb(...)`, sem `var()`

**O que decidimos**

* No CSS das páginas (`css/page/`), as cores são escritas em **`rgb(...)`**, copiadas da tabela da paleta no README. Exemplo: `color: rgb(0, 104, 118);`, e não `color: var(--cor-teal);`.
* A fonte também vai pelo nome: `font-family: "Plus Jakarta Sans", system-ui, sans-serif;`.
* As variáveis (`var(--...)`) continuam só nos arquivos compartilhados: `global.css`, `layout/` e `components/`.
* A página não tem `:root` nem variáveis próprias (`--minha-cor`).

**O que fizemos**

* Escrevemos a regra no README e na lista de pendências (item 12.11).
* O relatório de testes ganhou o item **7.12**, que lista as páginas que ainda usam `var()`. Hoje são 10. A Quem Somos já está certa: usa só `rgb(...)`.

**Por quê?**

Com o `rgb(...)` escrito direto, quem abre o CSS da página vê na hora qual é a cor, sem precisar procurar o nome da variável no `global.css`. É o mesmo formato da tabela da paleta, então fica fácil copiar e conferir. Assim fica mais simples para todo o grupo, que está começando no CSS.

---

## 01/11 — Clientes é a segunda página no `style.css`

**O que fizemos**

* Seguimos o relatório de testes da página (`docs/testes/pages/clientes/clientes.md`).
* No HTML (`pages/clientes.html`): as três `<section>` (topo, clientes e depoimentos) ficaram dentro de um `<main>`; o `<body>` ganhou a classe `pagina-clientes`; os cards de clientes viraram `<article>`; cada depoimento virou `<figure>`, com o texto dentro de `<blockquote>` e a pessoa dentro de `<figcaption>`; as aspas decorativas ganharam `aria-hidden="true"`; e a indentação foi arrumada (4 espaços, sem linhas vazias soltas).
* Os títulos e rótulos estavam digitados em MAIÚSCULAS no HTML. Escrevemos normal ("Empresas e condomínios...") e colocamos `text-transform: uppercase` no CSS. Na tela continua tudo em maiúsculas.
* No CSS (`css/page/clientes.css`): todas as regras começam com `.pagina-clientes`, inclusive dentro dos dois `@media`; saiu o `:root` com as 5 cores próprias da página; as 16 cores fora da paleta foram trocadas pelas da paleta (tabela da seção 3.3 do relatório); e não sobrou nenhum `var()`.
* Os textos de 10px (tipo do card e cargo de quem deu o depoimento) passaram para 12px.
* No fim do `<main>` entrou uma nota discreta: "Clientes e depoimentos fictícios, criados para um projeto acadêmico. Fotos ilustrativas."
* O CSS da página entrou no `css/style.css` e os 4 `<link>` de CSS viraram um só.
* Imagens: a `condominio_jardins.jpg` tinha 990 KB (1408 × 768 px) para aparecer num card de 180px de altura. Reduzimos para 800 × 436 px, JPG qualidade 80: ficou com 86 KB. As fotos das pessoas (765 × 1024 px, até 168 KB) viraram quadrados de 200 × 200 px (recorte do centro), com menos de 11 KB cada. Usamos a biblioteca Pillow do Python, que já estava instalada.
* Os nomes das imagens passaram a usar `-` em vez de `_`, como o resto do site, e dois nomes errados foram corrigidos: `armazen_mundo_empresarial.jpg` virou `empresarial-pinheiros.jpg` e `marina.jpg` virou `mariana.jpg`. Apagamos a `logoempesa.png` (419 KB), que nenhuma página usava.

**O que decidimos**

* O CSS antigo tinha um `* { margin: 0; padding: 0; }`. Dentro do `style.css`, ele zeraria as margens do site **inteiro**. Não deu para só apagar: os títulos e parágrafos da página contam com a margem zerada (o `<h1>` e os `<h2>` teriam a margem padrão do navegador e o visual mudaria). Então ele virou `.pagina-clientes main *`, que só vale para o conteúdo desta página.
* Não inventamos de onde vieram as fotos. A nota ficou só com "Fotos ilustrativas" até o grupo confirmar a fonte.

**Por quê?**

* O `<main>` e o CSS isolado são requisitos para a entrega final. `<figure>` + `<blockquote>` + `<figcaption>` é a forma certa de marcar uma citação com o nome de quem disse.
* Título digitado em maiúsculas pode ser soletrado pelo leitor de tela. Com o `text-transform`, o texto continua normal no HTML e só a aparência muda.

**Dificuldades**

* No depoimento, o `flex: 1` que deixava o nome da pessoa sempre no rodapé do card estava no `<p>`. Com o `<blockquote>` em volta do `<p>`, ele precisou passar para o `<blockquote>`.

**O que aprendemos**

* Uma regra com `*` dentro de um arquivo que junta várias páginas é perigosa: ela vale para tudo. É preciso prender ela na página (`.pagina-clientes main *`).
* Uma imagem não precisa ser maior que o espaço onde aparece. Diminuir a foto de 990 KB para 86 KB deixa a página bem mais rápida, sem diferença na tela.

---

## 01/11 — Clientes: fonte das fotos e W3C

**O que fizemos**

* O grupo confirmou de onde vieram as fotos da página Clientes: algumas foram **geradas por inteligência artificial** e outras são de **banco de imagens**. A nota do fim da página agora diz isso: "Fotos ilustrativas: geradas por inteligência artificial e de banco de imagens."
* A página passou no W3C **sem erros e sem avisos**.

**Por quê?**

O professor pede a indicação da fonte de todo conteúdo que não é do grupo. Fotos de pessoas com nome e cargo, sem aviso, podiam parecer clientes de verdade.

---

## 01/11 — Hero da Clientes virou componente

**O que fizemos**

* O topo (hero) da página Clientes virou o componente `.ex-hero` no `css/global.css` (seção 4), com as partes `.ex-hero__pelicula`, `.ex-hero__conteudo`, `.ex-hero__rotulo`, `.ex-hero__titulo` e `.ex-hero__texto`.
* A Clientes passou a usar o componente. No `css/page/clientes.css` sobrou só a foto de fundo; as regras `.hero`, `.hero-overlay`, `.hero-content` e `.section-label` saíram.
* O README ganhou o HTML pronto para copiar e explica como trocar a foto.

**O que decidimos**

* A foto de fundo não fica no componente: cada página põe a sua no próprio CSS. Sem foto, o fundo é azul-marinho.
* O componente define as margens do título, do texto e do rótulo, para não depender do `.pagina-clientes main *` que zera tudo na Clientes.

**Por quê?**

O grupo gostou do topo da Clientes e quer usar o mesmo nas outras páginas. Com o componente, cada página copia o HTML e só escolhe a foto.

**O que aprendemos**

* Evitamos escrever `url(...)` dentro de comentários do `.css`: na hora de juntar o `style.css`, o caminho do comentário também muda e fica errado. Por isso o exemplo da foto ficou no README e no `clientes.css`, não no comentário do `global.css`.

---

## 01/11 — Página Clientes fechada

**O que fizemos**

* O líder conferiu a página Clientes no computador e no celular e deu a nota **7 / 10** para a entrega. O Gabriel não mandou versão pelo ClickUp, então o trabalho partiu da página que já estava no projeto.
* Fizemos a última conferência: todas as imagens existem, têm `alt` e estão abaixo de 240 KB; o caminho da foto de fundo está certo; todas as seções têm título; nenhuma classe ficou sem uso.
* Na pasta `docs/testes/pages/clientes/` ficaram o relatório final (`clientes.md`), o PDF do W3C e o `antes-depois.md`, que mostra como a página estava e como ficou.

**O que aprendemos**

* No `alt` de uma foto de pessoa que já tem o nome escrito do lado, "Foto de João Pedro" repete a informação. Numa próxima revisão, essas fotos podem ter `alt=""`.

---

## 01/11 — Página com o andamento das páginas

**O que fizemos**

* Criamos a `docs/paginas.html`, um painel do grupo com o link de todas as páginas do site, na ordem do menu, com o responsável, o status, se entregou na 2ª fase, a nota do líder e o relatório de cada uma.
* Hoje o painel mostra **2 de 13 páginas fechadas**: Quem Somos e Clientes.

**O que decidimos**

* O painel fica em `docs/`, fora do site: não entra no menu e não aparece no Google (`noindex`).
* Ele não tem CSS próprio. Usa só o `style.css`, com o padrão das tabelas e as etiquetas `.ex-etiqueta` do `global.css` para o status.
* "Fechada" quer dizer revisada, validada no W3C e com nota do líder. "Aberta" quer dizer que ainda está em revisão.

**Por quê?**

Com muitas páginas em revisão ao mesmo tempo, o grupo precisava de um lugar só para ver o que já está pronto e abrir cada página com um clique.

**Decisões depois de olhar o painel**

* A ordem do painel fica como está: as subpáginas Serviços 1, 2 e 3 logo depois da vitrine de Serviços, e Clientes em seguida.
* A `adm-contato.html` (Fale Conosco com mapas) **não faz parte do projeto**. Ela saiu do painel e dos testes, e o painel passou a mostrar **2 de 12 páginas fechadas**. A página de contato do site é a `contato.html`.
* Alguns nomes de página não batem entre a tabela de equipe do README e o menu ("Contatos" × "Contato", "Clientes — Projetos" × "Projetos"). Isso fica para o fim do projeto.

---

## 01/11 — Largura-base de 1200px

**O que fizemos**

* O header, o footer e o conteúdo das páginas passaram a ter a mesma largura máxima, **1200px**, com o mesmo respiro lateral (`1.5rem`). Antes o header e o footer iam até 1280px, a Clientes até 1200px e a Quem Somos até 1000px.
* O `.ex-container` do `global.css` virou o container-base do site. O topo com foto (`.ex-hero`) também usa os mesmos valores.
* Na Clientes, as seções passaram a usar o `.ex-container` no lugar do `.container` próprio. Na Quem Somos, o `<main>` passou a ser o `.ex-container` e o conteúdo foi de 1000px para 1200px.
* Aproveitamos para trocar as cores do header e do footer que estavam fora da paleta pelas mais próximas da paleta.

**O que decidimos**

* As seções são "vazadas": o fundo vai de ponta a ponta da tela e só o conteúdo fica dentro do `.ex-container`.
* As outras páginas passam para a largura-base quando forem revisadas.

**Por quê?**

Com larguras diferentes, o logo, o texto das páginas e as colunas do rodapé começavam em lugares diferentes, e o site parecia desalinhado.

**Depois de ver no navegador**

* O líder preferiu o menu e o rodapé mais largos: o header e o footer voltaram para **1280px**. O conteúdo das páginas e o topo com foto continuam em **1200px**.
* O topo com foto (`.ex-hero`) passou a ter as cores escritas em `rgb(...)`, sem `var()`, igual ao CSS das páginas. Como ele vai ser copiado para outras páginas, fica mais fácil de ler.

---

## 01/11 — Topo com foto na Quem Somos e comentários do HTML

**O que fizemos**

* A Quem Somos ganhou o topo com foto (`.ex-hero`), igual ao da Clientes, com a foto `img/hero-reuniao-condominio.jpg`. O título "Quem Somos" e a frase "Gestão que gera tranquilidade..." passaram para dentro do topo.
* O `<main>` da Quem Somos deixou de ser o `.ex-container`: o topo vai de ponta a ponta da tela e o resto do conteúdo ficou num `<div class="ex-container">` logo abaixo, com os mesmos espaços de antes.
* Tiramos dos comentários do HTML da Quem Somos e da Clientes as menções aos arquivos de CSS separados.

**O que decidimos**

* Os comentários do HTML não citam os arquivos de CSS separados (`global.css`, `layout/`, `css/page/...`). Eles são só a nossa organização interna; quem abre a página vê apenas o `style.css`. Os nomes desses arquivos ficam só dentro do CSS. A regra vale para as páginas fechadas e para cada página que for sendo fechada.

**Por quê?**

Com o `<main class="ex-container">`, o topo ficava preso em 1200px, e sem a regra da foto no CSS da página ele aparecia só azul-marinho. Já os comentários citavam arquivos que a página nem carrega mais, o que confunde quem lê o código.

**Ajustes depois da revisão**

* A foto do topo é da **Pixabay**. Ela tinha 697 KB (acima do limite de 500 KB): reduzimos para 1600 px de largura, com a mesma proporção, e ela ficou com 234 KB. No fim da página colocamos uma nota discreta com a fonte ("Foto do topo: Pixabay."), no mesmo estilo da nota da Clientes.
* O título do topo tinha uma frase que veio da Clientes e não combinava com a página. Agora é "Grupo Êxito Condomínios — conheça mais sobre o grupo.", com "Gestão que gera tranquilidade." logo abaixo.
* O espaço entre o fim do topo e o primeiro título ("Nossa Missão") ficou em 60px no computador e 40px no celular. Quem dá esse espaço é a margem de cima do primeiro título; o espaço entre os outros títulos continua o mesmo.
* O comentário que explica a caixa de apresentação voltou para cima dela.

---

## 01/11 — Sem variáveis no CSS do site

**O que fizemos**

* Trocamos todos os `var(--...)` do `global.css`, do `layout/header.css` e do `layout/footer.css` pelo valor que cada um representava: as cores em `rgb(...)` e `rgba(...)`, as fontes pelo nome, e os raios, as sombras e o gradiente escritos por extenso.
* Tiramos o bloco `:root` com as variáveis do `global.css`. No lugar dele ficou um comentário com a lista das cores da paleta e das duas fontes, só para consulta.
* Como as outras páginas usavam essas variáveis, fizemos a mesma troca no CSS da Confirmação, Contato, Projetos, Serviços 1, 2 e 3, Adm Contato e Home v2 e nos recursos de acessibilidade e assistente. Só trocamos as variáveis; o resto desses arquivos continua igual.
* A home antiga (`index-v2.html`) usa Tailwind, e a configuração dele lê as cores da paleta em variáveis (`--cor-...-rgb`). Essas cores foram para o começo do CSS dela (`css/page/index-v2.css`), que não entra no `style.css`. A configuração do Tailwind ficou como estava.
* Conferimos valor por valor: cada troca ficou com exatamente a mesma cor, fonte, raio ou sombra de antes, então o site continua com a mesma aparência.

**O que decidimos**

* Nenhum CSS do site usa `var()` nem define variáveis da paleta. A paleta fica na tabela do README e no comentário da seção "2. PALETA" do `global.css`.
* As cores do Tailwind da home antiga e as variáveis próprias de algumas páginas (Contato, Serviços, Adm Contato, Home v2) e as dos efeitos e da tela de carregamento ficam por enquanto. Elas são revistas quando cada página for trabalhada.

**Por quê?**

Antes a regra "sem `var()`" valia só para o CSS das páginas. Agora o `style.css` final fica todo com valores diretos, e quem lê qualquer parte dele já vê a cor de verdade, sem precisar procurar a variável no começo do arquivo.

---

## 01/11 — Títulos de seção iguais em todas as páginas

**O que fizemos**

* Os títulos de seção (`h2`) da Clientes estavam em maiúsculas e com 30px, por causa de uma classe própria da página (`.titulo`). Na Quem Somos eles seguiam o padrão do site: 32px e letras normais. Tiramos o `.titulo` e agora as duas páginas usam o mesmo `h2`.

**O que decidimos**

* O `h2` é igual em todas as páginas. A página só pode mudar o espaçamento dele e a cor quando o fundo for escuro (por exemplo, branco sobre o azul-marinho). A regra está no README.

**Por quê?**

O professor avalia a identidade visual única. Com cada página mudando o título do seu jeito, o site parecia feito por pessoas diferentes.

---

## 01/11 — Mesmo padrão de texto em todas as páginas

**O que fizemos**

* Na Quem Somos e na Clientes, tiramos do CSS das páginas tudo o que mudava a tipografia (tamanho, peso, altura da linha, espaçamento de letras e maiúsculas).
* Os textos que eram diferentes viraram componentes do `global.css`, iguais para o site todo: `.ex-nota` (texto pequeno cinza), `.ex-aspas`, `.ex-citacao` e `.ex-autor` (depoimentos). Também passamos a usar os que já existiam: `.ex-sobretitulo` (rótulo pequeno em maiúsculas) e `.ex-subtitulo` (texto abaixo do título).
* A nota do fim da Quem Somos, a legenda do vídeo, a nota da Clientes e o cargo de quem deu o depoimento usam agora o mesmo `.ex-nota`.
* Os títulos dos cards (Valores e Diferenciais da Quem Somos, nomes dos clientes) passaram a usar o `h3` normal do site. Na Quem Somos eles deixaram de ser teal e ficaram azul-marinho; na Clientes deixaram de ser em maiúsculas e ficaram um pouco maiores.
* O rótulo da faixa "Depoimentos" e o tipo de cada cliente ("Condomínio", "Edifício") usam o mesmo rótulo pequeno. Na faixa, que é azul, a página só deixa ele branco.
* No padrão das tags acrescentamos o `strong` (negrito, peso 700). O `span` não ganhou regra: ele herda tudo de quem está em volta.
* Juntamos o CSS de novo no `style.css` e rodamos os testes: as duas páginas não aparecem mais no item 7.13.

**O que decidimos**

* `h1`, `h2`, `h3`, `a`, `p`, `span` e `strong` têm sempre o mesmo padrão. O CSS da página não muda a tipografia de nada.
* A página só pode mudar a cor desses textos, e só quando estão sobre fundo escuro (branco ou ciano da paleta). Espaçamento, layout, bordas, fundos e sombras continuam na página.
* Texto diferente é componente do `global.css`. Antes de criar um novo, procuramos um que já exista.
* As outras páginas seguem a regra quando forem revisadas.

**Por quê?**

A regra do `h2` resolveu os títulos, mas cada página ainda tinha a sua nota, o seu rótulo e o seu texto pequeno, cada um com um tamanho. Com um componente só para cada coisa, o site fica com a mesma cara em todas as páginas, que é o que o professor avalia.

---

## 01/11 — Logo nítido

**O que aconteceu**

* O logo do header aparecia sem nitidez, meio "lavado", e só ficava nítido quando passávamos o mouse em cima.
* A causa: a imagem do logo tinha 512×185 pixels, mas aparece com só 46 pixels de altura (52 no celular). O navegador precisava reduzir a imagem quase 4 vezes e, nessa redução, ela perdia a nitidez. No hover o logo cresce um pouquinho (efeito de zoom) e o navegador redesenha a imagem de outro jeito, por isso ela ficava nítida.
* No celular havia mais um motivo: o logo era centralizado com `transform`, que às vezes deixa a imagem em "meio pixel" e borra o desenho.

**O que fizemos**

* Criamos duas versões do logo já no tamanho em que ele aparece: `logo-grupo-exito-header.png` (144×52, para telas comuns) e `logo-grupo-exito-header@2x.png` (288×104, o dobro, para telas de alta densidade, como as dos celulares). As duas mantêm o fundo transparente.
* No header e no rodapé de todas as páginas, o `<img>` do logo passou a usar `srcset`: o navegador escolhe sozinho a versão certa para a tela. Também colocamos `width` e `height`, que ajudam o navegador a reservar o espaço do logo antes de a imagem carregar.
* No celular, trocamos a centralização com `transform` por `margin: 0 auto`. O logo continua no meio da barra e o botão ☰ continua à direita.
* O efeito de zoom no hover continua igual.
* Juntamos o CSS de novo no `style.css` e rodamos os testes.

**O que decidimos**

* Imagem pequena na tela (logo, ícone) deve ter um arquivo do tamanho em que aparece, mais uma versão com o dobro do tamanho para telas de alta densidade.
* O mesmo par de imagens serve para o header e para o rodapé, sem criar mais arquivos.

**Por quê?**

Quando a imagem é muito maior que o espaço onde aparece, o navegador reduz e ela perde a nitidez, além de pesar mais para carregar. Com a imagem no tamanho certo, o logo fica nítido e o arquivo fica bem menor (de 34,5 KB para 7,4 KB na versão comum).

---

## 01/11 — Quem Somos e Clientes validadas de novo

**O que fizemos**

* Depois do padrão de texto e do logo nítido, as duas páginas passaram de novo no W3C **sem erros e sem avisos**.
* Na Quem Somos, a caixa de apresentação (três parágrafos sobre a empresa) saiu da página. Na Clientes, saiu a faixa azul "Depoimentos" que ficava acima do título da seção.
* O painel `docs/paginas.html` ganhou a coluna **"O que falta"**.

**O que decidimos**

* Toda página que ainda não está completa aparece no painel com o que falta, inclusive as fechadas que têm alguma pendência. Hoje a Quem Somos ainda precisa confirmar o vídeo no site publicado.

**O que aprendemos**

* Quando um trecho sai da página, o CSS dele também precisa sair. As regras da caixa de apresentação e da faixa "Depoimentos" tinham ficado sobrando; apagamos as duas, junto com o trecho comentado da caixa de apresentação no HTML.

---

## 01/11 — Revisão da página Serviços

**O que fizemos**

* Começamos a revisão da Serviços (vitrine). O "antes" é a versão que o João enviou pelo ClickUp, guardada como `pages/servicos-clickup.html` até a página fechar.
* Conferimos a página contra os requisitos do professor e as regras do site e escrevemos o relatório em `docs/testes/pages/servicos/servicos.md`. O painel `docs/paginas.html` agora mostra o que falta nela.
* Nos testes, a cópia do ClickUp ficou de fora: ela não é uma página do site e aparecia como página órfã, com links e imagens quebrados.
* Corrigimos o teste de tipografia (item 7.13). Ele só via uma propriedade de fonte quando ela começava a linha e deixava passar regras escritas numa linha só, como `.servico h2 { font-size: 1.3rem; }`. Com a correção, a Serviços e a Notícias passaram a aparecer no item.

**O que encontramos**

* O maior problema é o conteúdo. A página fala de finanças pessoais ("organizar o seu dinheiro", investimentos, Imposto de Renda), e os nomes dos serviços não batem com as páginas para onde levam: "Gestão financeira" abre a Gestão Administrativa, por exemplo.
* As três imagens são cartazes com texto, no formato de story de celular, que aparecem com 72 px de largura. O texto delas fica ilegível, e elas também falam de finanças pessoais.
* Na reorganização do CSS, as duas seções perderam o título. A versão do ClickUp tinha títulos e estava mais correta nesse ponto.
* O CSS ainda não segue as regras do `style.css`: não está isolado, usa uma cor verde fora da paleta e `var()`, muda o tamanho de alguns textos e limita o conteúdo a 960px.

**Próximo passo**

* O líder decide com o João o novo conteúdo. Depois aplicamos as correções do relatório, validamos no W3C e a página entra no `style.css`.

---

## 01/11 — Serviços é a terceira página no `style.css`

**O que fizemos**

* Os três serviços passaram a ter o nome das páginas internas, na ordem do menu: Gestão Administrativa, Gestão Financeira e Gestão Operacional. A abertura, os cards e a tabela agora falam de condomínio, com o que essas páginas já dizem, e cada link leva para a página com o mesmo nome.
* Os títulos das duas seções voltaram, como estavam na versão do ClickUp, e os nomes dos serviços voltaram a ser `<h3>`.
* Mantivemos os três cartazes, mas com nomes que dizem o que mostram (por exemplo, `servicos-gestao-financeira.jpg`) e um `alt` que descreve cada um.
* O CSS da página ficou isolado com `.pagina-servicos`, sem `var()`, com o teal da paleta no lugar do verde e sem mudar a tipografia. O conteúdo passou a usar o `.ex-container` (1200px).
* A página passou a carregar só o `css/style.css`. Nos testes, ela não aparece mais em nenhum item com problema.

**O que decidimos**

* Na vitrine, o nome de cada serviço é igual ao da página interna dele.
* As imagens ficam como estão. Falta descobrir de onde vieram, para indicar a fonte na página.

**Próximo passo**

* Confirmar com o João a fonte das imagens e a duração da Gestão Financeira, decidir se a página ganha o topo com foto, validar no W3C e dar a nota.

---

## 01/11 — Topo com foto em todas as páginas e espaço de 50px

**O que fizemos**

* A Serviços ganhou o topo com foto (`.ex-hero`), igual ao da Quem Somos e da Clientes. Os três cards de resumo saíram, porque repetiam a tabela, e os três cartazes saíram junto. O CSS dos cards também saiu.
* Padronizamos em **50px** o espaço entre o topo e o primeiro conteúdo. Antes eram 60px na Quem Somos e na Clientes (40px no celular, na Quem Somos) e cerca de 24px na Serviços. Agora o espaço vem do próprio componente, no `global.css`, e as páginas deixaram de ter regra própria para isso.
* O caminho da foto do topo da Serviços já está no CSS: `img/servicos/hero-servicos.jpg`. Enquanto a foto não chega, o topo aparece com o fundo azul-marinho do componente, e o relatório de testes acusa o arquivo faltando no item 7.9.

**O que decidimos**

* As páginas usam o topo com foto.
* Abaixo do topo, o espaço é sempre de 50px e vem do componente. A página não acrescenta outro espaço.
* Cada página guarda as suas imagens em `img/<pagina>/`. Na raiz de `img/` fica só o que é do site todo, como o logo. A foto da Quem Somos continua na raiz por enquanto, porque a home antiga também usa essa imagem.
* As imagens que ficaram sem uso, como os três cartazes da Serviços, vão ser apagadas no fim do projeto.

**O que aprendemos**

* A foto do topo é um fundo de CSS, e fundo de CSS não tem `alt`. Por isso ela precisa ser decorativa: o que importa no topo fica escrito no HTML. Se o arquivo falhar, aparece a cor de fundo do componente no lugar.
* O espaço fica **por dentro** do primeiro elemento depois do topo (`padding`). Assim, numa seção com fundo branco, o branco encosta no topo, sem uma faixa de outra cor no meio.

---

## 01/11 — Foto do topo da Serviços e vídeo da Quem Somos

**O que fizemos**

* A Serviços ganhou a foto do topo (`img/servicos/hero-servicos.jpg`, 164 KB, da Pixabay), com a nota "Foto do topo: Pixabay." no fim da página. O texto do topo agora é "Conheça nossas opções de serviços".
* Na Quem Somos, o vídeo passou a ocupar a largura toda do conteúdo; antes ia só até 800px. A mudança foi feita direto no `style.css` e depois levada para o arquivo da página, para não se perder na próxima montagem.
* Com a foto no lugar, o teste 7.9 voltou a passar.

**O que decidimos**

* A foto do topo da Quem Somos vai para `img/quem-somos/` no fim do projeto, junto com a decisão sobre a `index-v2.html`, que também usa essa imagem.

---

## 01/11 — Página Serviços fechada

**O que fizemos**

* A Serviços passou no W3C **sem erros e sem avisos**, e o PDF está em `docs/testes/pages/servicos/w3c-validator.pdf`.
* O líder deu a nota **5 / 10** e a página foi fechada. É a terceira página fechada, depois da Quem Somos e da Clientes.
* Registramos em `docs/testes/pages/servicos/antes-depois.md` como a página estava na versão enviada pelo ClickUp e como ficou.

**O que ficou**

* Só um detalhe de conteúdo: confirmar com o João a duração da Gestão Financeira na tabela, já que a página Serviços 2 não fala em prazo.

---

## 04/11 — Home nova sem Tailwind, dentro do `style.css`

**O que fizemos**

* A home completa (a antiga `index-v2.html`) passou a ser a `index.html`. A home simples que existia antes virou `index-v3.html` e fica só como referência, fora do site e dos testes.
* Tiramos o Tailwind do projeto: o carregamento do framework pela internet, o arquivo de configuração dele e as cerca de 700 classes prontas da home. Cada parte da página ganhou uma classe com nome que diz o que é (`.inicio`, `.metricas`, `.servicos`, `.noticias`, `.faq`, `.proposta`…), escrita no `css/page/index.css` com o prefixo `.pagina-index`.
* A home passou a usar o mesmo header e o mesmo footer das outras páginas, as cores da paleta em `rgb(...)` e os componentes de texto do site. O visual ficou bem parecido com o anterior.
* Criamos componentes novos no `global.css`: `.ex-numero` (números em destaque) e os tamanhos e cores de ícone (`.ex-icone--pequeno`, `--grande`, `--ciano`, `--teal`, `--navy`). Eles estão na tabela de componentes do README.
* Os componentes de efeitos, tela de carregamento, acessibilidade e assistente entraram no `style.css` com as cores da paleta e sem variáveis. No alto contraste, o preto virou azul-marinho e o amarelo virou o âmbar da paleta.
* No formulário de proposta da home, os dois campos de seleção ficaram obrigatórios e o telefone ganhou o formato `(11) 98765-4321`.
* Ao montar o `style.css`, vimos que o CSS da Projetos tinha sido colado direto nele, e o `css/page/projetos.css` estava vazio. Algumas regras sem prefixo já estavam afetando as outras páginas: a regra de `img`, por exemplo, deixava os logos com 600px de altura. Devolvemos o CSS para o arquivo da Projetos, com o prefixo `.pagina-projetos` em toda regra.
* Com tudo isso, os testes passaram de 14 para 17 itens OK.

**O que decidimos**

* O site não usa nenhum framework de CSS: todo o estilo é escrito à mão nos arquivos do projeto.
* Mudança feita direto no `style.css` precisa voltar para o arquivo da página; senão, ela some na próxima montagem.

**O que aprendemos**

* Um framework pronto deixa o HTML cheio de classes que só dizem a aparência (`text-sm`, `bg-white`…). Com classes que dizem o que é cada parte, o HTML fica mais fácil de ler, e o CSS segue a mesma paleta e os mesmos textos do resto do site.

---

## 04/11 — Serviços com seis cards e chamada de imóveis

**O que fizemos**

* Reabrimos a página Serviços. Ela ganhou, acima da tabela, os cards de serviço no mesmo modelo da home, agora seis: Gestão de Recursos Humanos, Gestão Administrativa, Gestão Financeira, Gestão Operacional, Departamento Jurídico e Assembleias e Tecnologia. Os textos seguem o site do grupo.
* Na Serviços, os cards mostram a lista de itens de cada serviço. Na home, essa lista continua escondida.
* A tabela de comparação passou a ter os seis serviços. Os que ainda não têm página própria levam para a página de contato.
* Entrou uma chamada curta para o site de imóveis do grupo, com o botão "Ver imóveis", que abre em outra aba.
* Uma linha da home (`width: 100%` no rótulo do topo) tinha sido mudada direto no `style.css`. Levamos a mudança para o `css/page/index.css` antes de montar o arquivo de novo.

**O que decidimos**

* Para a Serviços ficar igual à home, os cards usam as mesmas regras de CSS da home, copiadas com o prefixo da página.
* A Serviços precisa passar de novo no W3C e receber a conferência do líder antes de fechar outra vez.

**Depois, no mesmo dia**

* Para a Serviços não ficar igual à home, os seis serviços deixaram de ser cards e viraram linhas alternadas: um número grande ("01" a "06") ocupa um terço da linha e o conteúdo ocupa o resto, com o número à esquerda numa linha e à direita na seguinte. No celular, o número fica em cima. O conteúdo de cada serviço não mudou.
* O número grande virou o componente `.ex-numero--grande` no `global.css`, porque o CSS da página não pode mudar o tamanho do texto.
* A alternância é feita só no CSS. No HTML, o número vem sempre antes do conteúdo, para o leitor de tela ler na ordem certa. O número é decorativo e o leitor de tela pula, porque o título do serviço já diz qual é.

**Ajustes do líder**

* O líder ajustou a Serviços direto no `style.css`: o título passou a ser "Como podemos ajudar", com um texto de introdução; os números ficaram todos à esquerda; os ícones dos serviços saíram; e a chamada de imóveis ganhou fundo azul-marinho com texto branco.
* Levamos essas mudanças para os arquivos de cada página antes de montar o `style.css` de novo, para não se perderem. Uma regra da Quem Somos tinha ficado sem o prefixo da página e passaria a valer no site todo; ela virou uma regra do componente do topo no `global.css`: o primeiro título logo depois do topo fica sem espaço em cima e com 15px até o texto.

**O que aprendemos**

* O `style.css` é montado a partir dos arquivos separados. O que for editado direto nele some na próxima montagem, a não ser que alguém leve a mudança para o arquivo da página. Até o fim do projeto, o lugar de editar é o `css/page/<pagina>.css`; no fim, o `style.css` passa a ser o arquivo editável.

---

## 04/11 — Notícias entra no `style.css`

**O que fizemos**

* Revisamos a página Notícias (do Enzo) e a levamos para o `style.css`. Ela ganhou o topo com foto, a largura de 1200px, as cores da paleta e os textos no padrão do site.
* A página tinha sete títulos principais (`<h1>`): um dela e um em cada matéria. Agora tem um só, e as matérias usam `<h2>`.
* A lista e as matérias continuam na mesma página e sem JavaScript, mas a troca agora é feita com links de verdade: "Leia mais" leva para a matéria e "Voltar para notícias" volta para a lista. Antes eram botões escondidos que não funcionavam pelo teclado nem com o botão "voltar" do navegador.
* As seis ilustrações, que estavam escritas dentro do HTML, viraram arquivos em `img/noticias/`, com as cores da paleta.
* O falso link "Ver notícias mais antigas", que não levava a lugar nenhum, saiu.
* Colocamos uma nota no fim da página avisando que as notícias são fictícias e que as ilustrações foram feitas pelo grupo.

**O que falta**

* A foto do topo (`img/noticias/hero-noticias.jpg`) e a fonte dela. Enquanto isso, o topo aparece com o fundo azul-marinho e o teste 7.9 acusa o arquivo faltando.
* Decidir se os cards ficam 3 por linha ou se entra uma sexta notícia, porque hoje a quinta fica sozinha na segunda linha.
* Validar no W3C, conferir no computador e no celular e dar a nota.

**O que aprendemos**

* Dá para mostrar e esconder partes da página sem JavaScript usando links para um `id` (`#materia-1`) e o seletor `:target` do CSS. Com link de verdade, a página funciona pelo teclado e o histórico do navegador também.

---

## 04/11 — FAQ entra no `style.css`

**O que fizemos**

* Revisamos a página de Perguntas Frequentes (do Evandro). O maior problema era o conteúdo: as seis perguntas eram de imobiliária (visita a imóvel, ITBI, aluguel, anunciar imóvel), fora do tema do site. Elas saíram e entraram as cinco perguntas sobre condomínio que já estavam na home, com as mesmas respostas.
* Cada pergunta passou a usar `<details>` e `<summary>`, que abrem e fecham sozinhos, pelo teclado também, sem JavaScript. Antes eram botões escondidos que não funcionavam pelo teclado.
* A caixa "Qualquer dúvida?" estava dentro da lista de perguntas, o que é HTML inválido. Ela virou um bloco próprio, com o botão do WhatsApp do site.
* A foto da página (a recepção de um prédio) virou a foto do topo e foi otimizada: de 1,7 MB para 109 KB, em `img/faq/hero-faq.jpg`.
* O CSS da página tinha regras soltas, como uma que zerava as margens de tudo e outra que deixava todas as imagens com 100% de largura, inclusive o logo. Agora toda regra vale só para a FAQ.
* Na Notícias, o líder colocou a foto do topo e completou a nota: as ilustrações e a foto foram geradas por IA.

**O que aprendemos**

* Para perguntas que abrem e fecham, o HTML já tem `<details>` e `<summary>`. Não precisa de JavaScript nem de truques com botões escondidos.

---

## 04/11 — Cabeçalho padrão abaixo do topo

**O que fizemos**

* O bloco que fica logo abaixo do topo da FAQ (rótulo "Central de dúvidas", título e texto de apoio) virou um componente do site, o `.ex-cabecalho`, no `global.css`.
* Na FAQ, a caixa "Qualquer dúvida?" ganhou fundo azul-marinho, com o título branco e o texto em cinza bem claro, para ficar legível.

**O que decidimos**

* Toda página tem, logo abaixo do topo, o mesmo cabeçalho: rótulo pequeno, título e texto de apoio, com o componente `.ex-cabecalho`. O modelo fica no README.

**Depois, no mesmo dia**

* O líder colocou o cabeçalho na Clientes, na Serviços e na Notícias, com uma linha fina embaixo. Na Clientes, ele ficou sem espaços, porque a página zera as margens de tudo (`main * { margin: 0 }`). Reforçamos as regras do componente para ele ganhar desse tipo de regra e ficar igual em todas as páginas, e tiramos da Clientes e da Serviços as regras que mudavam o espaço do título e do texto.
* O título copiado da FAQ levou junto o `id="titulo-perguntas"`. Na Serviços, isso deixava a seção sem o título ligado a ela. Cada página ganhou o seu `id` (`titulo-clientes`, `titulo-servicos`, `titulo-noticias`).
* Na Serviços, o primeiro serviço deixou de ter a linha fina em cima, porque ela já vem do cabeçalho.
* A FAQ ganhou mais cinco perguntas sobre administração de condomínio: o papel do síndico, a prestação de contas, a cobrança de taxas atrasadas, como pedir manutenção e o que está incluído na administração. Agora são dez.
* O teste de fonte (item 7.7) só procurava palavras como "fonte" e "crédito" e não reconhecia notas como "Foto do topo: Pixabay". Ele passou a reconhecer também "foto do topo", "fotos ilustrativas", os bancos de imagem e "gerado por IA".

---

## 04/11 — Contato entra no `style.css` e recebe o formulário da home

**O que fizemos**

* Revisamos a página Contato (do Pablo). Ela ainda tinha os dados de outra empresa (telefone, e-mail, endereço e redes do "Grupo Êxito Imóveis") e assuntos de imobiliária no formulário. Agora os dados são os mesmos do header e do footer, e os assuntos são de condomínio.
* O formulário "Solicitar Proposta Sob Medida" saiu da home e veio para a Contato, que é o lugar dele. Os botões "Falar com Consultor" de todas as páginas já levavam para cá.
* O formulário ganhou os campos que o enunciado pede: número de unidades (`number`) e melhor data para retorno (`date`), além de assunto e mensagem.
* O telefone ganhou uma máscara no `js/formulario.js`: o número é formatado enquanto a pessoa digita, para fixo e celular. Antes o campo só aceitava o número já escrito com parênteses e traço, e quem digitava só os números não conseguia enviar.
* O `formulario.js`, que estava desligado na Contato, foi ligado: a tela de confirmação volta a mostrar os dados enviados.
* Entrou a seção "Equipe do projeto", com os 11 integrantes e a página de cada um, como o enunciado pede.
* Com isso, os testes subiram para 18 itens OK. Passaram o 2.3 (integrantes), o 5.1 (`date` e `number`) e o 7.12 (nenhum CSS usa variáveis).

**O que falta**

* A foto do topo (`img/contato/hero-contato.jpg`) e a fonte dela; enquanto isso o teste 7.9 acusa o arquivo faltando.
* O nome completo de cada integrante.
* Conferir o formulário no navegador, validar no W3C e dar a nota.

**O que aprendemos**

* O `pattern` só confere o formato na hora de enviar; ele não ajuda a pessoa a digitar. A máscara formata o número enquanto a pessoa digita, e o `pattern` continua como a última conferência.

---

## 06/11 — Serviços 1, 2 e 3 entram no `style.css`

**O que fizemos**

* Revisamos as três páginas internas de serviço: Gestão Administrativa (do Arthur), Gestão Financeira (do Felipe Dias) e Gestão Operacional (do David).
* Decisão do líder: o HTML que cada integrante enviou fica como está, com o mesmo conteúdo, a mesma ordem e o mesmo visual. Mudaram só as tags e o CSS.
* Nas tags, as páginas ganharam `<main>`, ficaram com um título principal (`<h1>`) só e perderam os atributos que o HTML5 não aceita (`border`, `cellspacing`, `text align`, `type="square"`). Os blocos da Gestão Operacional que eram tabelas viraram `<article>`, e as tabelas ganharam legenda.
* O formulário da Gestão Financeira ganhou campos obrigatórios, a mesma máscara de telefone da Contato e o `formulario.js`, que leva os dados para a confirmação.
* As três fotos viraram JPG na pasta de cada página. As da Gestão Financeira e da Gestão Operacional caíram de 1,9 MB e 1,2 MB para cerca de 130 KB.
* O menu do celular, que estava desligado na Serviços 1 e na Serviços 3, voltou a funcionar.
* Na página Serviços, a lista de serviços tinha ficado sem o `</div>` de fechamento depois de um ajuste; recolocamos.
* Com isso, os testes subiram para 23 itens OK. Só a Confirmação ainda não está no `style.css`.

**O que falta**

* A fonte das fotos das três páginas, a validação no W3C e as notas.

**Depois, no mesmo dia**

* O líder trouxe do git a versão nova da Gestão Operacional, feita pelo integrante. O conteúdo era o mesmo, mas a página tinha voltado com o CSS dentro do HTML, uma foto com caminho quebrado e o menu do celular desligado. Levamos o visual para o arquivo de CSS da página e corrigimos o resto.
* As três páginas receberam o padrão de tags do site, mantendo os textos e a ordem da equipe: topo com foto, cabeçalho logo abaixo, rótulos de seção com o componente do site, cards em `<article>` e os botões do site. Na Gestão Financeira e na Gestão Operacional, a foto da página virou a foto do topo. A da Gestão Administrativa é pequena demais para o topo; ela ficou no conteúdo, e o topo espera uma foto nova.

---

## 06/11 — Todas as páginas no `style.css`

**O que fizemos**

* A Confirmação, a tela que aparece depois de enviar um formulário, foi a última página a entrar no `style.css`. O HTML dela já estava bom; mudou só o CSS: regras isoladas com `.pagina-confirmacao` (inclusive a versão para imprimir), cores da paleta e os textos com os componentes do site.
* Agora as 12 páginas do site usam só o `css/style.css`. Os testes subiram para 26 itens OK, e passaram os itens de arquivo único (1.2), CSS isolado (7.10), paleta (7.11) e tipografia (7.13).

**Próximo passo**

* Montar o `style.css` uma última vez e passar a editar direto nele, como combinado para o fim do projeto.

---

## 06/11 — O `style.css` passa a ser o arquivo de CSS do grupo

**O que fizemos**

* Juntamos o CSS uma última vez, com as 12 páginas, e conferimos que o `style.css` estava igual aos arquivos separados.
* A partir de agora, o grupo edita direto no `css/style.css`. O começo do arquivo explica como ele está dividido e as regras para editar.
* O arquivo está dividido em blocos: GLOBAL (fontes, paleta, padrão das tags e componentes), HEADER, FOOTER, os COMPONENTES da home e um bloco para cada PÁGINA. Cada bloco começa com um título num comentário.
* Os arquivos separados que usamos durante o desenvolvimento (`global.css`, `layout/`, `components/` e `page/`) foram para a pasta `css/legado/`. Eles ficam só como registro de como trabalhamos e não são carregados por nenhuma página do site.
* O relatório de testes passou a conferir as regras do CSS no próprio `style.css`, bloco por bloco: prefixo de cada página, cores da paleta, variáveis e tipografia. Cada problema aparece com o número da linha do `style.css`.
* Atualizamos o README: a estrutura de pastas, a organização do CSS e o modelo de `<head>` das páginas.

**O que decidimos**

* O CSS do site é editado só no `css/style.css`. A pasta `css/legado/` não é editada.
* Regra nova de página vai no bloco da própria página, sempre com o prefixo `.pagina-<nome>`. Página nova ganha um bloco novo no fim do arquivo.
* Os títulos dos blocos não podem ser apagados nem renomeados, porque o relatório de testes usa eles para achar cada página.

**Por quê?**

Enquanto as páginas estavam sendo ajustadas, os arquivos separados ajudavam cada integrante a mexer só no seu arquivo, sem uma página estragar a outra. Com todas as páginas prontas dentro do `style.css`, manter dois lugares para o mesmo CSS só aumentava a chance de alguém editar o arquivo errado.

---

## 06/11 — Integrante novo, Política de Privacidade e aviso de cookies

**O que fizemos**

* O grupo ganhou um integrante: **Guilherme** (Guilherme Santos Peixoto Muniz, RGM 46924507), que entrou na 2ª fase com a página de Política de Privacidade. Agora somos 12. Ele foi incluído na tabela da equipe no README e na seção "Equipe do projeto" da Contato.
* A Política de Privacidade chegou pelo ClickUp com CSS próprio dentro do HTML, menu e rodapé próprios e alguns links para páginas que não existem. Ela passou para o padrão do site: header e footer compartilhados, topo com foto, cabeçalho e o CSS num bloco novo no fim do `style.css`. O texto das três seções ficou como o Guilherme escreveu.
* Foi a primeira página a entrar já com o `style.css` como arquivo editável: o bloco dela foi escrito direto nele.
* O site ganhou um aviso de cookies simples: na primeira visita aparece uma faixa no rodapé da tela, com um link para a Política de Privacidade e os botões "Aceitar" e "Recusar". A escolha fica guardada no navegador e a faixa não volta. O aviso é montado pelo `js/cookies.js`, e o visual fica no bloco `COMPONENTE: cookies` do `style.css`.
* O link "Política de Privacidade" entrou no rodapé de todas as páginas, ao lado do "© 2026".

**O que falta**

* A foto do topo da Política de Privacidade e a fonte dela, a validação no W3C e a nota.

---

## 06/11 — Página Projetos montada com o envio do ClickUp

**O que fizemos**

* O Felipe Gabriel enviou pelo ClickUp a página de Projetos: uma página inicial e três subpáginas (Gestão Financeira, Operacional e Administrativa), com três projetos cada, além das imagens.
* Juntamos tudo numa página só, a `projetos.html`: topo com foto, cabeçalho, atalhos para as três áreas e os nove projetos em cards, cada um com o que o cliente queria, o que foi feito e o resultado em destaque.
* As nove imagens chegaram em PNG com cerca de 2 MB cada e nomes com espaço e acento. Viraram JPG de cerca de 160 KB em `img/projetos/`, com nomes como `alto-dos-jardins.jpg`.
* Os links das subpáginas apontavam para uma pasta `src/` que não existe no projeto; com a página única, eles saíram.
* Colocamos uma nota no fim avisando que os projetos e os resultados são fictícios.

**O que falta**

* A fonte das imagens, o Felipe Gabriel conferir o texto de um dos projetos, a validação no W3C e a nota.

---

## 06/11 — Serviços volta ao layout do João

**O que fizemos**

* O João reenviou pelo ClickUp a página Serviços: era a mesma versão do começo, com três cards com imagem, uma tabela de comparação e uma chamada no fim.
* A página voltou para esse layout, mas com os textos que já tínhamos: Gestão Administrativa, Financeira e Operacional, com os links para as páginas internas. Os textos de finanças pessoais da versão dele não voltaram, porque fogem do tema.
* As três imagens dele eram os cartazes que já estavam no projeto. Elas foram para a pasta da página (`img/servicos/`) e aparecem no topo de cada card sem distorcer. Antes ele mostrava as imagens com 72 × 72 px, o que esticava os cartazes.
* Saíram a lista em linhas com os números grandes e a chamada para o site de imóveis.

**O que falta**

* A fonte das imagens dos cards (ou imagens novas, de condomínio), validar no W3C de novo e a nota.

---

## 06/11 — Limpeza da pasta de imagens

**O que fizemos**

* Conferimos as 58 imagens da pasta `img/`, uma por uma: onde cada uma é usada, o peso e se o nome e a pasta estão certos. O levantamento ficou em `docs/testes/imagens.md`.
* Apagamos 11 imagens que nenhuma página usava (cerca de 9,7 MB): os originais das fotos da Serviços 1, 2 e 3, que já tinham sido convertidas, dois logos antigos, três ilustrações que a Notícias não usa mais e outras sobras.
* A foto do topo da Quem Somos foi para `img/quem-somos/` e uma foto usada só pela home foi para `img/index/`, com os caminhos trocados.
* Nenhuma imagem em uso tinha nome fora do padrão, então nada precisou ser renomeado.
* Saíram também a pasta com o envio da Projetos e uma cópia solta da página inicial desse envio (`pages/index.html`), junto com as três imagens grandes que só ela usava (`f1.png`, `F2.png` e `F3.png`). Essa cópia derrubava vários testes, e com ela fora o relatório subiu para 31 itens OK.

**O que aprendemos**

* Quando uma imagem é convertida ou trocada, o arquivo antigo precisa sair junto. Senão a pasta vai acumulando sobras pesadas, e o professor confere isso.

---

## 06/11 — Serviços 1 com o layout do Arthur

**O que fizemos**

* O Arthur reenviou pelo ClickUp a página de Gestão Administrativa. O envio tinha sobras de um conflito do git no começo do arquivo (as linhas `<<<<<<<`, `=======` e `>>>>>>>`), que quebram o HTML, além de fontes do Google, um CSS próprio e o caminho de uma foto que já não existia.
* A página passou a usar o layout e os textos dele, no padrão do site: topo com foto, cabeçalho "Detalhes do serviço", a foto da reunião, os cards "Benefícios" e "Como funciona", a tabela "O que está incluso?" e os botões de orçamento e de voltar.

**O que aprendemos**

* Quando o git avisa que há conflito, as linhas com `<<<<<<<`, `=======` e `>>>>>>>` precisam ser resolvidas e apagadas antes de enviar o arquivo. Se ficarem, o navegador mostra o texto delas e o validador acusa erro.

---

## 06/11 — Home com os mesmos projetos e clientes das páginas

**O que fizemos**

* A seção "Projetos & Condomínios Atendidos" da home ainda tinha três cases de exemplo (Edifício Horizonte, Parque dos Ipês e Vila Nova Mogi), sem foto e com dados que não apareciam em nenhuma outra página. Agora ela mostra três projetos da página Projetos, um de cada área: Alto dos Jardins (Gestão Financeira), Alameda das Quaresmeiras (Gestão Operacional) e Reserva da Cantareira (Gestão Administrativa). Textos, resultados e imagens são os mesmos da página, e cada card leva direto à sua área.
* Na seção de clientes, a foto do condomínio estava dentro do ícone e as pessoas apareciam só com o ícone de perfil. Agora as fotos dos condomínios e das pessoas são as mesmas da página Clientes, com os mesmos textos alternativos.
* O lugar da foto nos cards passou a se chamar `.foto-card` (antes `.foto-vazia`), e a foto preenche o espaço.
* A home ganhou a nota no fim da página, dizendo que o conteúdo é fictício e de onde vêm as fotos.
* Os subtítulos das duas seções passaram a usar o nome completo, "Grupo Êxito Condomínios".

**O que aprendemos**

* Quando a home mostra um resumo de outras páginas, o conteúdo precisa vir dessas páginas. Um dado que só existe na home (como o número de unidades) faz o site se contradizer.

---

## 06/11 — Fonte das fotos em todas as páginas

**O que fizemos**

* As notas que ainda diziam "(fonte a definir)" passaram a dizer "Pixabay / gerado por IA": home (imagens dos projetos), Contato, Projetos (imagens e foto do topo), Política de Privacidade e Serviços 3.
* Na Serviços, a nota ganhou a fonte das fotos dos cards: "Foto do topo: Pixabay. Fotos dos serviços: Pixabay / gerado por IA."
* Com isso, nenhuma página do site tem mais foto sem fonte.

---

## 06/11 — Mensagem obrigatória no formulário da Contato

**O que fizemos**

* O campo "Mensagem" do formulário da Contato passou a ter `required`, como os outros campos. Agora todos os campos do formulário são obrigatórios.
* Os testes ficaram em 32 OK, 8 FALHOU, 1 ATENÇÃO e 5 MANUAL.

---

## 06/11 — Mapas dos endereços na home

**O que fizemos**

* Na seção "Mais proximidade para uma gestão melhor" da home, cada card de endereço ganhou um mapa do Google Maps em `<iframe>`: a sede de Mogi das Cruzes (R. Gonçalo Ferreira, 164) e a filial de São Paulo (Av. Rio das Pedras, 3.409).
* O mapa fica entre o endereço e o rodapé do card, com um título que o leitor de tela anuncia. Ele só carrega quando a pessoa chega na seção (`loading="lazy"`). O link "Ver Mapa", que abre o Google Maps em outra aba, continua no card.
* O tamanho do mapa (proporção 4 por 3), a borda e os cantos arredondados vêm do bloco da home no `style.css`.

**O que aprendemos**

* Dentro do `src` de um `<iframe>`, o `&` do endereço precisa ser escrito como `&amp;`. Se não for, o validador do W3C acusa erro.

---

## 06/11 — Vídeo da Quem Somos no próprio site

**O que fizemos**

* Criamos a pasta `assets/` com o vídeo do especialista (`video.mp4`, 1 min 12 s). Na Quem Somos, o `<iframe>` do YouTube virou um `<video controls>` que toca o arquivo do site.
* A capa do vídeo (`poster`) é um quadro do começo do próprio vídeo, salvo em `img/quem-somos/capa-video-especialista.jpg` (145 KB).
* O vídeo é o mesmo de antes, do Felipe Lima (canal Manutenção Predial). Por isso a legenda com o aviso e o crédito, com o link para o YouTube, continua igual.
* Com isso, a pasta `assets/` existe e o site tem `<video>` com capa e controles. Os testes ficaram em 34 OK, 6 FALHOU, 1 ATENÇÃO e 5 MANUAL. Na multimídia, falta só o `<audio>`.

**O que aprendemos**

* Com o vídeo no próprio site, ele toca mesmo sem acesso ao YouTube e não depende de o vídeo continuar publicado lá.
* O `poster` é a imagem que aparece antes de o vídeo tocar. Sem ele, o navegador mostra um quadro preto ou o primeiro quadro, que nem sempre é bom.

---

## 06/11 — Todas as fotos de topo no lugar

**O que fizemos**

* Entraram as fotos de topo que faltavam: `img/servicos-1/hero-servicos-1.jpg` (58 KB) e `img/politica-privacidade/hero-politica-privacidade.jpg` (208 KB, um cadeado sobre código, do Pixabay). A da Contato (`img/contato/hero-contato.jpg`) já estava na pasta.
* Com isso, todo arquivo que o CSS e as páginas usam existe. Os testes ficaram em 35 OK, 5 FALHOU, 1 ATENÇÃO e 5 MANUAL. Os 5 FALHOU que sobram são o orçamento de hospedagem (4 itens) e o `<audio>`.

---

## 06/11 — Mesmos botões no fim das páginas de serviço

**O que fizemos**

* A Serviços 1 e a Serviços 2 passaram a terminar com os mesmos botões da Serviços 3: "Solicitar orçamento" (vai para a Contato) e "Voltar para serviços", centralizados, com 50px entre eles no computador e 16px no celular.
* Na Serviços 1, os textos "Solicite um orçamento sem compromisso." e "← Voltar para os serviços" deram lugar aos do padrão. A Serviços 2 já tinha o HTML certo, mas faltava a regra de CSS que coloca os botões lado a lado no centro.

---

## 06/11 — Home mais simples: sem tela de carregamento, efeitos e assistente

**O que fizemos**

* Tiramos da home três recursos: a tela de carregamento, as animações de entrada com o parallax (o fundo e as fotos que se mexiam com a rolagem) e o assistente virtual.
* Saíram da página os scripts e as 19 marcações de efeito. O ponto verde do painel do topo parou de pulsar.
* No `css/style.css` saíram os blocos `COMPONENTE: efeitos`, `COMPONENTE: loading` e `COMPONENTE: assistente`, com quase mil linhas a menos. Ficaram os componentes de acessibilidade e de cookies.
* Os scripts `loading.js`, `efeitos.js` e `assistente.js` foram para `js/legado/`, só como registro, como já foi feito com o CSS antigo.
* Continuam funcionando o carrossel do topo, o filtro do FAQ, o botão de acessibilidade (incluindo "pausar animações"), o aviso de cookies e os efeitos de passar o mouse nos botões e nos cards.
* Os testes ficaram iguais: 35 OK, 5 FALHOU, 1 ATENÇÃO e 5 MANUAL.

**O que aprendemos**

* Antes, as seções da home começavam escondidas e só apareciam quando o script de efeitos rodava. Sem efeitos, a página fica mais leve e aparece inteira, mesmo se algum script falhar.

---

## 06/11 — Topo da home com uma foto só

**O que fizemos**

* A coluna da direita do topo da home tinha um "painel do síndico" com barra de status, um carrossel de 3 fotos (setas, pontos e botão de pausa), dois indicadores e um rodapé. Agora ela mostra só uma foto, a da telemetria predial, com cantos arredondados e a sombra azul-marinho do site.
* O código do carrossel saiu do `js/home.js` (de 127 para 36 linhas), que ficou só com o filtro do FAQ e a rolagem até a seção certa. No `style.css` saíram as regras do painel e do carrossel (281 linhas).
* A foto `img/index/relatorios-financeiros.jpg`, que era um dos slides, ficou sem uso.

---

## 06/11 — Orçamento de hospedagem e domínio no site

**O que fizemos**

* O orçamento, que estava só na planilha de 14/10, virou a página `pages/orcamento_hospedagem.html`, no padrão do site. O link "Orçamento de hospedagem" entrou no rodapé de todas as páginas, ao lado do da Política de Privacidade.
* A página tem um card para cada hospedagem (HostGator, Hostinger e Umbler) com o print da página de planos e uma tabela com preço, contrato, espaço, largura de banda, SSL e suporte. Depois vêm a tabela comparativa do primeiro ano, os três domínios e a conclusão do grupo.
* Completamos o que faltava na planilha, consultando os sites das empresas em 06/11: SSL e suporte dos três provedores e a largura de banda da Hostinger. A HostGator e a Umbler não informam a largura de banda; a página diz isso em vez de inventar um número.
* Domínios: `.com.br` e `.net.br` no Registro.br (R$ 40,00 por ano) e `.com` na Hostinger (R$ 0,01 no primeiro ano e R$ 94,99 na renovação).
* Salvamos a página em PDF, em A4 deitado para a tabela comparativa caber inteira, em `docs/hospedagem/orcamento-hospedagem-dominio.pdf`.
* Os testes foram para 38 OK, 1 FALHOU (o `<audio>`), 2 ATENÇÃO e 5 MANUAL.

**Dificuldades**

* Nem toda empresa informa a largura de banda. A HostGator mostra o número de visitas por mês, e a Umbler cobra pelos recursos usados.
* Em A4 em pé, a tabela comparativa era cortada na direita. Em A4 deitado, ela cabe.

---

## 06/11 — Escolha da hospedagem e link no rodapé

**O que fizemos**

* A conclusão do orçamento passou a dizer qual plano o grupo escolheu: o Hostinger Single.
* O link "Orçamento de Hospedagem" entrou também na lista "Páginas internas" do rodapé de todas as páginas, depois de "Fale Conosco".
* O PDF do orçamento foi gerado de novo, com a conclusão nova.

---

## 06/11 — Página do orçamento com hífen no nome

**O que fizemos**

* A página `pages/orcamento_hospedagem.html` passou a se chamar `pages/orcamento-hospedagem.html`, com hífen, como os outros arquivos do site.
* Junto com o nome, mudaram os links do rodapé das 14 páginas, a classe do `<body>` (`pagina-orcamento-hospedagem`), o bloco do `style.css` (`PÁGINA: orcamento-hospedagem.html`, com as regras trocadas), o relatório da página (`docs/testes/pages/orcamento-hospedagem/`), o painel e o README.
* O PDF do orçamento foi gerado de novo, para os links dele apontarem para o nome novo.
* Nenhum link ficou quebrado (teste 4.3) e os testes continuaram em 38 OK, 1 FALHOU, 2 ATENÇÃO e 5 MANUAL.

---

## 06/11 — Revisão de fechamento do projeto

**O que fizemos**

* O líder validou no W3C o `css/style.css` e sete páginas: Quem Somos, Clientes, Serviços, Serviços 1, Projetos, Notícias e FAQ. Os PDFs ficaram em `docs/testes/pages/<pagina>/` (o do CSS em `docs/testes/pages/css/`).
* O relatório de testes passou a reconhecer a validação do CSS e a contar quantas páginas têm o PDF do W3C. Antes, um PDF só já bastava para o item ficar OK. Agora ele lista as páginas que faltam.
* A revisão manual (`docs/testes/revisao-manual.md`) foi reescrita com o estado de hoje: o que foi resolvido desde 01/11, as pendências por página, o que conferir no navegador e o checklist de envio.
* Resultado: 38 OK, 1 FALHOU (o `<audio>`), 3 ATENÇÃO (a escolha da hospedagem, 7 páginas sem W3C e uma imagem sem uso) e 4 MANUAL.

---

## 06/11 — Últimos ajustes antes do fechamento

**O que fizemos**

* Decidimos que o site fica sem `<audio>`.
* Apagamos `img/index/relatorios-financeiros.jpg`, que ficou sem uso quando o carrossel saiu da home, e a pasta `img/index/`.
* **Serviços 2:** a nota da foto passou a usar a cor padrão das notas e ficou legível. Saíram os pontos duplos em "condomínio.." e "financeiras..", e as regras vazias ou sem uso do bloco da página no `style.css` (a parte do formulário que a página não tem mais).
* **Notícias:** a grade não deixa mais um card sozinho. No computador ficam 2 cards em cima e 3 embaixo; no tablet, o primeiro ocupa a linha inteira e os outros ficam de 2 em 2; no celular, um embaixo do outro. As fotos passaram a declarar o tamanho real do arquivo (`width` e `height`).
* **Serviços 3:** saiu o `<link rel="manifest">`. Agora nenhuma página liga o manifest, como já era na Quem Somos.
* Os testes ficaram em 39 OK, 1 FALHOU (o `<audio>`), 2 ATENÇÃO e 4 MANUAL.

---

## 06/11 — Por que escolhemos o Hostinger Single

**O que fizemos**

* A conclusão do orçamento passou a explicar a escolha do Hostinger Single:
  * **Custo-benefício:** é o menor custo no primeiro ano, R$ 111,88 (R$ 71,88 de hospedagem e R$ 40,00 de domínio). Tem 10 GB de espaço para um site de cerca de 20 MB, 100 GB de largura de banda, SSL grátis e suporte 24 horas em português.
  * **Domínio:** `.com.br` no Registro.br, por R$ 40,00 por ano, porque o Single não inclui domínio.
  * **Escalabilidade:** se o site crescer, dá para subir para o Premium, o Unlimited ou o Cloud Startup sem trocar de empresa.
  * **Atenção:** o preço promocional exige pagar os 48 meses de uma vez (R$ 287,52), e a renovação é de R$ 23,99 por mês.
* O PDF do orçamento foi gerado de novo. Os testes foram para 40 OK, 1 FALHOU (o `<audio>`, que decidimos não ter), 1 ATENÇÃO (páginas sem W3C) e 4 MANUAL.

---

## 06/11 — Botão de acessibilidade em todas as páginas

**O que fizemos**

* O `js/acessibilidade.js`, que antes ficava só na home e na Confirmação, passou a ser carregado no `<head>` de todas as páginas, logo depois do `style.css`. Na Notícias, a linha estava comentada e foi ativada.
* Com isso, o botão redondo de acessibilidade aparece no canto da tela do site inteiro, com tamanho do texto (A, A+, A++), leitura em voz alta, alto contraste, escala de cinza, destaque de links, fonte legível, pausar animações, guia de leitura e cursor grande. A escolha fica salva e vale ao trocar de página.
* Conferimos no navegador, no computador e no celular, que o painel abre, que o "A+" aumenta o texto e que não aparece erro no console.
* O README passou a mostrar o script no modelo do `<head>`.

---

## 06/11 — Sete páginas fechadas

**O que fizemos**

* Fechamos as páginas que já tinham a validação do W3C de 06/11: Serviços, Serviços 1, Projetos, Notícias e FAQ. Cada uma ganhou o relatório final (só com o que está de fato na página, com os números de linha atuais) e o `antes-depois.md`, que compara o que veio do ClickUp com a página final.
* A Quem Somos e a Clientes, fechadas em 01/11, tiveram o registro atualizado: CSS no `style.css` único, vídeo local na Quem Somos, coerência com a home, link do orçamento no rodapé, botão de acessibilidade e as validações novas do HTML e do CSS.
* Na revisão de fechamento apareceram sobras, que corrigimos:
  * **Quem Somos:** o título do cabeçalho tinha o `id` da Clientes; passou a ser `titulo-quem-somos`.
  * **Projetos:** a regra `.atalhos` ficou no CSS depois que os atalhos saíram da página. Saiu.
  * **Serviços 1:** a foto da reunião virou a foto do topo, mas a regra `.foto` e dois comentários ainda falavam dela no conteúdo. A regra saiu, os comentários foram corrigidos e a nota passou a dizer "Foto do topo: gerado por IA.".
  * **FAQ:** a nota da foto ganhou o ponto final.
* O painel ficou com 7 de 14 páginas fechadas. As notas da 2ª entrega das cinco páginas novas ficam a definir pelo líder.

**O que aprendemos**

* Quando uma parte da página sai (uma foto, uma lista de atalhos), a regra do CSS dela precisa sair junto. Senão fica código que ninguém usa e confunde quem lê depois.

---

## 06/11 — Decisões sobre os pontos de conteúdo

**O que decidimos**

* Os pontos de conteúdo que ficaram em ATENÇÃO nas páginas fechadas continuam como estão: o Essência Moema com o mesmo texto do Alto dos Jardins (Projetos), os nomes de duas imagens e a coluna "Duração" (Serviços), o texto alternativo "Ilustração sobre…" nas fotos (Notícias) e os textos dos diferenciais (Quem Somos).
* Na Serviços 2, o líder tirou o `aria-labelledby` da seção de soluções, que apontava para um título que não existia.

---

## 06/11 — Home no W3C: título nos cards de cliente

**O que fizemos**

* O W3C deu três avisos na home: "Article lacks heading", nos três cards de cliente. Cada card é um `<article>`, mas o nome do cliente ("CONDOMÍNIO JARDINS"...) estava num `<span>`.
* O nome passou a ser um `<h3>`, com as mesmas classes da etiqueta. A seção já tem o `<h2>` "Quem confia no nosso trabalho", então a ordem dos títulos continua certa. A aparência não mudou: a etiqueta é um componente e define a própria fonte. No CSS da home, a etiqueta ganhou só `margin: 0`, porque o `<h3>` tem margem por padrão.

**O que aprendemos**

* Todo `<article>` precisa de um título (`h2` a `h6`). Quando o card já mostra um nome, basta transformar esse nome no título.

---

## 06/11 — Serviços 3 no W3C: o conteúdo não é um `<article>`

**O que fizemos**

* O W3C deu o aviso "Article lacks heading" na Serviços 3. O conteúdo inteiro da página estava dentro de um `<article>` sem título próprio.
* Um `<article>` é um item que faz sentido sozinho, como um card ou uma notícia. Aqui ele só agrupava as seções, então virou `<div class="conteudo">`. Os cards de dentro continuam sendo `<article>`, cada um com o seu `<h3>`.
* No CSS da página, a regra `main > .ex-container > article` passou a ser `.pagina-servicos-3 .conteudo`, com o mesmo espaçamento. A aparência não muda.

---

## 06/11 — Serviços 2 no W3C: seção sem título

**O que fizemos**

* O W3C deu o aviso "Section lacks heading" na Serviços 2. A `<section class="solucoes">` só agrupa os quatro cards, e os títulos (`<h3>`) ficam dentro de cada card, então a seção não tinha um título dela.
* Como a regra do grupo é "`<section>` sempre com título; sem título, vira `<div>`", ela passou a ser `<div class="solucoes">`. Nenhuma regra do CSS dependia da tag, então a aparência não muda.

---

## 06/11 — Política de Privacidade no W3C

**O que fizemos**

* O W3C deu o aviso "Article lacks heading" na Política de Privacidade. O texto inteiro estava dentro de um `<article class="documento">`, e os títulos ficam nas três seções de dentro.
* O `<article>` virou `<div class="documento">`, como na Serviços 3. O CSS da página usa só a classe `.documento`, então a aparência não muda.

---

## 06/11 — Contato no W3C: primeira opção do "Seu papel"

**O que fizemos**

* O W3C deu um erro no formulário da Contato. O campo "Seu Papel no Condomínio" é obrigatório (`required`), e a primeira opção já vinha escolhida com um valor ("Síndico(a) Eleito(a)"). Num `<select>` obrigatório, a primeira opção precisa ser vazia, para a pessoa ter que escolher.
* Entrou a primeira opção "Selecione o seu papel", com `value=""`, do mesmo jeito que o campo "Assunto" já fazia. Agora, se a pessoa não escolher o papel, o navegador não deixa enviar.

**O que aprendemos**

* Num `<select>` com `required`, a primeira opção serve de aviso ("Selecione…") e precisa ter `value=""`. Se ela já tiver um valor, o `required` não tem efeito, porque o campo nunca fica vazio.

---

## 06/11 — Confirmação e Orçamento fora do W3C

**O que decidimos**

* A Confirmação e o Orçamento de hospedagem não vão passar pelo validador do W3C. As outras doze páginas passam.
* O relatório de testes deixou de cobrar o PDF dessas duas.
* Com os PDFs da Home, Serviços 2, Serviços 3, Contato e Política de Privacidade, as 12 páginas que passam pelo W3C estão validadas. Os testes ficaram em 41 OK, 1 FALHOU (o `<audio>`, que decidimos não ter), nenhuma ATENÇÃO e 4 MANUAL.

---

## 06/11 — Fonte do conteúdo em todas as páginas

**O que fizemos**

* Conferimos a fonte de todo conteúdo que não é do grupo. As fotos são do Pixabay ou geradas por IA, e cada página com foto tem a nota no fim. As imagens da página de orçamento são prints das páginas de planos das empresas. A nota dela, que tinha saído, voltou: "Imagens: prints das páginas de planos da HostGator, da Hostinger e da Umbler, feitos pelo grupo em 14/10/2026."
* O relatório de testes passou a conferir isso página por página: toda página com foto (no conteúdo ou no topo) precisa ter a nota de fonte. O logo, que é do próprio grupo, não conta.
* Os testes ficaram em 42 OK, 1 FALHOU (o `<audio>`), nenhuma ATENÇÃO e 3 MANUAL.

---

## 06/11 — Dados de contato iguais em todo o site

**O que decidimos**

* Os dados de contato do site são de uma empresa real. Decidimos mantê-los, desde que estejam iguais em todas as páginas.

**O que conferimos**

* Em todas as páginas aparecem os mesmos dados:
  * e-mail `contato@grupoexitocondominios.com.br`;
  * telefone e WhatsApp (11) 2564-9963;
  * Instagram `grupoexito.condominios` e Facebook `grupoexitocondominios`;
  * os dois endereços: R. Gonçalo Ferreira, 164, Sala 3, em Mogi das Cruzes, e Av. Rio das Pedras, 3.409, em São Paulo.
* Os únicos dados diferentes são os exemplos dentro dos campos do formulário (`sindico@seudominio.com.br` e (11) 98765-4321), que estão lá de propósito.
* Os testes ficaram em 43 OK, 1 FALHOU (o `<audio>`), nenhuma ATENÇÃO e 2 MANUAL (o `.zip` e o envio).

---

## 06/11 — Menu "Docs" no rodapé

**O que fizemos**

* O rodapé das 14 páginas ganhou o menu **Docs**, logo abaixo de "Páginas Internas", com o link "Painel do projeto" para o `docs/paginas.html`. O menu está pronto para receber mais links, como o diário de bordo de cada página.
* No `style.css`, o BLOCO FOOTER ganhou a regra `.ex-rodape .ex-rodape__coluna`, que coloca os dois menus um embaixo do outro na mesma coluna. No celular, o Docs fica logo antes da linha do "© 2026".
* No painel, a coluna "O que falta" das páginas fechadas ficou só com o que de fato falta (por exemplo, "Falta só a nota do líder").

**Dificuldades**

* O CSS novo do rodapé fica antes dos blocos das páginas no `style.css`, então os números de linha citados nos relatórios das páginas fechadas andaram 7 linhas e foram corrigidos.

---

## 06/11 — Todas as páginas fechadas

**O que fizemos**

* Fechamos as últimas sete páginas: Home, Serviços 2, Serviços 3, Contato, Política de Privacidade, Confirmação e Orçamento de hospedagem. Cada uma tem agora o relatório final e o `antes-depois.md` em `docs/testes/pages/<pagina>/`. A Home ganhou a pasta `docs/testes/pages/index/`.
* O painel `docs/paginas.html` mostra **14 de 14 páginas fechadas**. Na coluna "O que falta" ficou só a nota do líder, que ainda vai ser dada.
* Na revisão de fechamento, corrigimos as sobras que apareceram:
  * **Home:** as fotos das notícias, dos clientes e das pessoas ganharam `width` e `height`, e a nota do fim passou a dar a fonte das fotos do topo e das notícias.
  * **Serviços 2:** saiu o `formulario.js`, que a página não usa mais.
  * **Serviços 3:** o comentário do CSS deixou de falar numa coluna de 767px, que não existe mais.
  * **Contato:** o rótulo "Mensagem" ganhou o "*" dos campos obrigatórios.
  * **Política de Privacidade:** a nota do fim acompanhou a largura do texto, e os comentários foram corrigidos.
  * **Orçamento:** o parágrafo "Atenção" da conclusão ganhou a caixa com borda âmbar, que já estava no CSS.
  * **Rodapé:** o link da linha do © passou a se chamar "Orçamento de Hospedagem", igual ao da lista.

---

## 06/11 — Notas da 2ª entrega e painel final

**O que fizemos**

* O líder deu as notas da 2ª entrega e confirmou quem entregou na 2ª fase. Elas estão no relatório de cada página e no painel:

| Página | Entregou na 2ª fase? | Nota |
| --- | :---: | :---: |
| Quem Somos | Sim | 7 / 10 |
| Serviços | Sim | 5 / 10 |
| Serviços 1 | Não | 7 / 10 |
| Serviços 2 | Sim | 7 / 10 |
| Serviços 3 | Sim | 9 / 10 |
| Clientes | Não | 7 / 10 |
| Projetos | Sim | 6 / 10 |
| Notícias | Não | 4 / 10 |
| FAQ | Não | 6 / 10 |
| Contato | Sim | 6 / 10 |
| Política de Privacidade | Sim | 5 / 10 |

* O painel `docs/paginas.html` passou a listar só as 12 páginas que têm responsável e nota: saíram a Confirmação, o Orçamento de hospedagem e a home antiga (`index-v3.html`). As páginas continuam no site e com os seus relatórios em `docs/testes/pages/`.
* A Home ainda está sem nota.

---

## 06/11 — Painel com o menu do site e fim do relatório de testes no projeto

**O que fizemos**

* O painel `docs/paginas.html` ganhou o header e o footer do site, com os caminhos ajustados para a pasta `docs/`. Assim dá para ir do painel para qualquer página e voltar pelo menu Docs do rodapé.
* A Home ficou com a nota "—", porque foi feita pelo líder.
* O relatório de testes (`relatorio-testes.md`) saiu da pasta `docs/testes/`. Ele era uma conferência interna, usada durante o desenvolvimento. O registro que fica no projeto é a revisão manual (`docs/testes/revisao-manual.md`) e o relatório final de cada página em `docs/testes/pages/<pagina>/`.

---

## Resumo das decisões até agora

| Decisão                                         | Motivo                                              |
| ----------------------------------------------- | --------------------------------------------------- |
| Usar só HTML, CSS e JavaScript                  | É o que estamos aprendendo                          |
| Cada integrante cuida de uma página             | Todo mundo pratica e o trabalho fica dividido       |
| Uma paleta de cores para o site todo            | O site fica com a mesma cara em todas as páginas    |
| Mesmo menu e rodapé em todas as páginas         | Facilita a navegação e evita retrabalho             |
| Home simplificada                               | Código que todo mundo do grupo consegue entender    |
| Sem acessibilidade, assistente e efeitos (por enquanto) | Focar no básico e não acelerar demais        |
| Cores escritas em `rgb(...)` no README          | Mais fácil para iniciantes                          |
| Documentação dentro de `docs/`                  | Deixar a raiz do projeto mais organizada            |
| CSS em `global.css` + `page/` + `components/`   | Cada um sabe qual é o seu arquivo                   |
| Fontes dentro do projeto (`css/fonts/`)         | Não depender do Google Fonts                        |
| Header e footer em `css/layout/`                | Cada parte do site em um arquivo fácil de achar     |
| Padrão das tags no `global.css`                 | Identidade visual única pedida pelo professor       |
| `css/style.css` único, montado dos arquivos de CSS | O professor pede um só arquivo de CSS na entrega final |
| `css/style.css` passa a ser o arquivo editado (06/11) | Com todas as páginas dentro dele, os arquivos separados não são mais necessários |
| CSS de página isolado com `.pagina-<nome>`      | Juntar tudo em um arquivo sem uma página estragar a outra |
| CSS do site sem `var()`, com as cores em `rgb(...)` | O `style.css` fica com os valores direto, mais fácil de ler |
| Mesmo padrão de texto; variações viram componentes | Identidade visual única em todas as páginas |

---

## Próximos passos

* Ajustar o site página por página. Cada página pronta tem o CSS isolado, entra no `style.css` e passa a carregar só ele.
* Corrigir as pendências da seção 12 de `docs/testes/revisao-manual.md`.
* Cada integrante terminar o HTML da sua página.
* Depois, começar o CSS da página usando as cores da paleta.
* Testar cada página no computador e no celular.
* Continuar anotando aqui as decisões do grupo.

---


## Palavras que aprendemos

* **Repositório:** a "pasta" do projeto guardada no GitHub, com todo o histórico de alterações.
* **Commit:** um "salvamento" no Git, com uma mensagem dizendo o que mudou.
* **Pull (`git pull`):** traz para o seu computador as alterações que os colegas enviaram.
* **Push (`git push`):** envia as suas alterações para o GitHub.
* **Branch:** uma "cópia paralela" do projeto, onde você pode trabalhar sem atrapalhar os outros.
* **Header:** a parte de cima do site, onde fica o logo e o menu.
* **Footer:** a parte de baixo do site, o rodapé.
* **Paleta de cores:** a lista de cores que o site usa.
* **Caminho relativo:** o endereço de um arquivo a partir de onde você está, como `../img/logo.png`.
* **README:** o documento que explica o projeto e as regras do grupo.
