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

Se cada pessoa escolhesse suas próprias cores e seu próprio menu, o site pareceria 11 sites diferentes. Com uma paleta e um menu só, o site fica com a mesma cara em todas as páginas.

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
* O CSS dos componentes da home (acessibilidade e recursos de animação) foi para `css/components/`.
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

**O que decidimos**

* A entrega final vai ter **um único arquivo de CSS**, como o professor pede.
* Durante o desenvolvimento, continuamos editando os arquivos separados. O `style.css` é montado juntando esses arquivos, e **ninguém edita ele direto**.
* Vamos ajustar o site **página por página**. Quando uma página fica pronta, ela entra no `style.css` e passa a carregar só ele (`<link rel="stylesheet" href="../css/style.css">`). As que ainda não foram ajustadas continuam com os arquivos separados.
* Para entrar no `style.css`, a página precisa ter o CSS **isolado**: `<body class="pagina-<nome>">` e toda regra do `css/page/<nome>.css` começando com `.pagina-<nome>`.

**Por quê?**

Se juntássemos os arquivos do jeito que estão, uma página estragaria a outra. Hoje 11 classes têm o mesmo nome em páginas diferentes (`.container` aparece em 6 páginas, `.botao` em 3) e 9 páginas usam regras soltas como `img` e `table`. Num arquivo só, a regra da última página valeria para o site inteiro. Com o prefixo `.pagina-<nome>`, cada regra só vale na sua página.

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
* A partir de agora, conferimos com a paleta as cores de toda página atualizada.

**O que decidimos**

* A Quem Somos foi a primeira página porque já tinha passado pela revisão do ClickUp (`docs/testes/pages/quem-somos/`). Ela serve de exemplo para as próximas.
* O CSS dela continua sendo editado em `css/page/quem-somos.css`. Depois de qualquer mudança, é preciso atualizar o `style.css` também.

**Por quê?**

Assim a página já está no formato da entrega final (um arquivo de CSS só), e o resto do site continua funcionando com os arquivos separados enquanto as outras páginas são ajustadas.

**Dificuldades**

* O W3C Validator deu o aviso "Section lacks heading" na caixa de apresentação (`.destaque`), que tínhamos transformado em `<section>`. Toda `<section>` precisa ter um título (`h2`–`h6`). Como essa caixa é só a apresentação do `<h1>` logo acima e não precisa de título, voltamos ela para `<div>`. O visual não mudou, porque o CSS usa a classe `.destaque`.
* Para não acontecer de novo, passamos a conferir em toda página se cada `<section>` tem título.
* Corrigimos o texto ("Grupo Êxito Imóveis" virou "Grupo Êxito Condomínios" e "administração imobiliária" virou "administração condominial") e apagamos a cópia `quem-somos-clickup.html`, que não era mais usada. A página passou de novo no W3C sem erros e sem avisos. Ficou um detalhe: "condomínios" com minúscula no primeiro parágrafo.
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

* O professor pede um `<iframe>` (vídeo ou mapa). Até agora o único estava na `adm-contato.html`, que não tem link no site: o professor não acharia. A Quem Somos tem link no menu.
* O vídeo é de outra pessoa, então a fonte precisa aparecer na página, como o professor pede.

---

## 01/11 — Na 2ª entrega o CSS vale nota

**O que decidimos**

* Estamos na **2ª entrega**, que é a final, e nela o **CSS vale nota**. O arquivo que vale é o `css/style.css`, um só para o site inteiro.
* Na nossa conferência, as regras de CSS passaram a ser obrigatórias: todas as páginas usando só o `style.css`, o CSS de cada página isolado e as cores da paleta. O `style.css` também precisa passar no W3C CSS Validator.

**Dificuldades**

* Na hora de validar a página Quem Somos, o HTML foi enviado para o validador **de CSS** (ou com a opção "check as CSS" marcada). Apareceram erros como "Style sheets should not include HTML syntax", que não eram problema da página.

**O que aprendemos**

* São dois validadores diferentes: o HTML (`.html`) vai no https://validator.w3.org e o CSS (`.css`) vai no https://jigsaw.w3.org/css-validator. No validador de CSS, os avisos sobre variáveis (`var(--cor-...)`) são normais.

---

## 01/11 — Cores das páginas em `rgb(...)`, sem `var()`

**O que decidimos**

* No CSS das páginas (`css/page/`), as cores são escritas em **`rgb(...)`**, tiradas da tabela da paleta no README. Exemplo: `color: rgb(0, 104, 118);`, e não `color: var(--cor-teal);`.
* A fonte também vai pelo nome: `font-family: "Plus Jakarta Sans", system-ui, sans-serif;`.
* As variáveis (`var(--...)`) continuam só nos arquivos compartilhados: `global.css`, `layout/` e `components/`.
* A página não tem `:root` nem variáveis próprias (`--minha-cor`).

**O que fizemos**

* Escrevemos a regra no README e na lista de pendências.
* Conferimos quais páginas ainda usam `var()`: hoje são 10. A Quem Somos já está certa: usa só `rgb(...)`.

**Por quê?**

Com o `rgb(...)` escrito direto, quem abre o CSS da página vê na hora qual é a cor, sem precisar procurar o nome da variável no `global.css`. É o mesmo formato da tabela da paleta, então fica fácil copiar e conferir. Assim fica mais simples para todo o grupo, que está começando no CSS.

---

## 01/11 — Clientes é a segunda página no `style.css`

**O que fizemos**

* Seguimos o relatório de revisão da página (`docs/testes/pages/clientes/clientes.md`).
* No HTML (`pages/clientes.html`): as três `<section>` (topo, clientes e depoimentos) ficaram dentro de um `<main>`; o `<body>` ganhou a classe `pagina-clientes`; os cards de clientes viraram `<article>`; cada depoimento virou `<figure>`, com o texto dentro de `<blockquote>` e a pessoa dentro de `<figcaption>`; as aspas decorativas ganharam `aria-hidden="true"`; e a indentação foi arrumada (4 espaços, sem linhas vazias soltas).
* Os títulos e rótulos estavam digitados em MAIÚSCULAS no HTML. Escrevemos normal ("Empresas e condomínios...") e colocamos `text-transform: uppercase` no CSS. Na tela continua tudo em maiúsculas.
* No CSS (`css/page/clientes.css`): todas as regras começam com `.pagina-clientes`, inclusive dentro dos dois `@media`; saiu o `:root` com as 5 cores próprias da página; as 16 cores fora da paleta foram trocadas pelas da paleta (tabela no relatório da página); e não sobrou nenhum `var()`.
* Os textos de 10px (tipo do card e cargo de quem deu o depoimento) passaram para 12px.
* No fim do `<main>` entrou uma nota discreta: "Clientes e depoimentos fictícios, criados para um projeto acadêmico. Fotos ilustrativas."
* O CSS da página entrou no `css/style.css` e os 4 `<link>` de CSS viraram um só.
* Imagens: a `condominio_jardins.jpg` tinha 990 KB (1408 × 768 px) para aparecer num card de 180px de altura. Reduzimos para 800 × 436 px, JPG qualidade 80: ficou com 86 KB. As fotos das pessoas (765 × 1024 px, até 168 KB) viraram quadrados de 200 × 200 px (recorte do centro), com menos de 11 KB cada.
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

* O grupo confirmou de onde vieram as fotos da página Clientes. A fonte das fotos está na nota do fim da página.
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

* O líder conferiu a página Clientes no computador e no celular e deu a nota **7 / 10** para a entrega. O trabalho partiu da página que já estava no projeto.
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
* A `adm-contato.html` (Fale Conosco com mapas) **não faz parte do projeto**. Ela saiu do painel, e o painel passou a mostrar **2 de 12 páginas fechadas**. A página de contato do site é a `contato.html`.
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
* O topo com foto (`.ex-hero`) passou a ter as cores escritas em `rgb(...)`, sem `var()`, igual ao CSS das páginas. Como ele vai ser usado em outras páginas, fica mais fácil de ler.

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
* Como as outras páginas usavam essas variáveis, fizemos a mesma troca no CSS da Confirmação, Contato, Projetos, Serviços 1, 2 e 3, Adm Contato e Home v2 e no CSS dos componentes da home. Só trocamos as variáveis; o resto desses arquivos continua igual.
* A home antiga (`index-v2.html`) ainda lia as cores da paleta em variáveis (`--cor-...-rgb`). Essas cores foram para o começo do CSS dela (`css/page/index-v2.css`), que não entra no `style.css`.
* Conferimos valor por valor: cada troca ficou com exatamente a mesma cor, fonte, raio ou sombra de antes, então o site continua com a mesma aparência.

**O que decidimos**

* Nenhum CSS do site usa `var()` nem define variáveis da paleta. A paleta fica na tabela do README e no comentário da seção "2. PALETA" do `global.css`.
* As cores da home antiga, as variáveis próprias de algumas páginas (Contato, Serviços, Adm Contato, Home v2) e as dos recursos de animação ficam por enquanto. Elas são revistas quando cada página for trabalhada.

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
* Juntamos o CSS de novo no `style.css` e conferimos: nas duas páginas, nenhuma regra muda mais a tipografia.

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
* Juntamos o CSS de novo no `style.css` e conferimos as páginas.

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
* Na conferência, deixamos a cópia do ClickUp de fora: ela não é uma página do site e aparecia como página órfã, com links e imagens quebrados.
* Na conferência de tipografia, passamos a olhar também as regras escritas numa linha só, como `.servico h2 { font-size: 1.3rem; }`. Assim apareceram regras desse tipo na Serviços e na Notícias.

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
* A página passou a carregar só o `css/style.css`. Na conferência, ela ficou sem nenhum problema.

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
* O caminho da foto do topo da Serviços já está no CSS: `img/servicos/hero-servicos.jpg`. Enquanto a foto não chega, o topo aparece com o fundo azul-marinho do componente.

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
* Na Quem Somos, o vídeo passou a ocupar a largura toda do conteúdo; antes chegava só a 800px. A mudança foi feita direto no `style.css` e depois levada para o arquivo da página, para não se perder na próxima montagem.

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

## 04/11 — Home antiga refeita no CSS do site, dentro do `style.css`

**O que fizemos**

* A home completa (a antiga `index-v2.html`) passou a ser a `index.html`. A home simples que existia antes virou `index-v3.html` e fica só como referência, fora do site e dos testes.
* A home antiga foi refeita no CSS do site. Saíram as cerca de 700 classes que só diziam a aparência, e cada parte da página ganhou uma classe com nome que diz o que é (`.inicio`, `.metricas`, `.servicos`, `.noticias`, `.faq`, `.proposta`…), escrita no `css/page/index.css` com o prefixo `.pagina-index`.
* A home passou a usar o mesmo header e o mesmo footer das outras páginas, as cores da paleta em `rgb(...)` e os componentes de texto do site. O visual ficou bem parecido com o anterior.
* Criamos componentes novos no `global.css`: `.ex-numero` (números em destaque) e os tamanhos e cores de ícone (`.ex-icone--pequeno`, `--grande`, `--ciano`, `--teal`, `--navy`). Eles estão na tabela de componentes do README.
* Os componentes de acessibilidade e os recursos de animação da home entraram no `style.css` com as cores da paleta e sem variáveis. No alto contraste, o preto virou azul-marinho e o amarelo virou o âmbar da paleta.
* No formulário de proposta da home, os dois campos de seleção ficaram obrigatórios e o telefone ganhou o formato `(11) 98765-4321`.
* Ao montar o `style.css`, vimos que o CSS da Projetos tinha sido colado direto nele, e o `css/page/projetos.css` estava vazio. Algumas regras sem prefixo já estavam afetando as outras páginas: a regra de `img`, por exemplo, deixava os logos com 600px de altura. Devolvemos o CSS para o arquivo da Projetos, com o prefixo `.pagina-projetos` em toda regra.

**O que decidimos**

* Todo o estilo do site é escrito à mão nos arquivos do projeto.
* Mudança feita direto no `style.css` precisa voltar para o arquivo da página; senão, ela some na próxima montagem.

**O que aprendemos**

* Classes que só dizem a aparência (`text-sm`, `bg-white`…) deixam o HTML difícil de ler. Com classes que dizem o que é cada parte, o HTML fica mais fácil de ler, e o CSS segue a mesma paleta e os mesmos textos do resto do site.

---

## 04/11 — Serviços com seis cards e chamada de imóveis

**O que fizemos**

* Reabrimos a página Serviços. Ela ganhou, acima da tabela, os cards de serviço no mesmo modelo da home, agora seis: Gestão de Recursos Humanos, Gestão Administrativa, Gestão Financeira, Gestão Operacional, Departamento Jurídico e Assembleias e Tecnologia. Os textos seguem o site do grupo.
* Na Serviços, os cards mostram a lista de itens de cada serviço. Na home, essa lista continua escondida.
* A tabela de comparação passou a ter os seis serviços. Os que ainda não têm página própria levam para a página de contato.
* Entrou uma chamada curta para o site de imóveis do grupo, com o botão "Ver imóveis", que abre em outra aba.
* Uma linha da home (`width: 100%` no rótulo do topo) tinha sido mudada direto no `style.css`. Levamos a mudança para o `css/page/index.css` antes de montar o arquivo de novo.

**O que decidimos**

* Para a Serviços ficar igual à home, os cards usam as mesmas regras de CSS da home, repetidas com o prefixo da página.
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

* A foto do topo (`img/noticias/hero-noticias.jpg`) e a fonte dela. Enquanto isso, o topo aparece com o fundo azul-marinho.
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
* Na Notícias, o líder colocou a foto do topo e completou a nota do fim da página, que passou a dar a fonte das ilustrações e da foto.

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
* O título que veio da FAQ levou junto o `id="titulo-perguntas"`. Na Serviços, isso deixava a seção sem o título ligado a ela. Cada página ganhou o seu `id` (`titulo-clientes`, `titulo-servicos`, `titulo-noticias`).
* Na Serviços, o primeiro serviço deixou de ter a linha fina em cima, porque ela já vem do cabeçalho.
* A FAQ ganhou mais cinco perguntas sobre administração de condomínio: o papel do síndico, a prestação de contas, a cobrança de taxas atrasadas, como pedir manutenção e o que está incluído na administração. Agora são dez.

---

## 04/11 — Contato entra no `style.css` e recebe o formulário da home

**O que fizemos**

* Revisamos a página Contato (do Pablo). Ela ainda tinha os dados de outra empresa (telefone, e-mail, endereço e redes do "Grupo Êxito Imóveis") e assuntos de imobiliária no formulário. Agora os dados são os mesmos do header e do footer, e os assuntos são de condomínio.
* O formulário "Solicitar Proposta Sob Medida" saiu da home e veio para a Contato, que é o lugar dele. Os botões "Falar com Consultor" de todas as páginas já levavam para cá.
* O formulário ganhou os campos que o enunciado pede: número de unidades (`number`) e melhor data para retorno (`date`), além de assunto e mensagem.
* O telefone ganhou uma máscara no `js/formulario.js`: o número é formatado enquanto a pessoa digita, para fixo e celular. Antes o campo só aceitava o número já escrito com parênteses e traço, e quem digitava só os números não conseguia enviar.
* O `formulario.js`, que estava desligado na Contato, foi ligado: a tela de confirmação volta a mostrar os dados enviados.
* Entrou a seção "Equipe do projeto", com os 11 integrantes e a página de cada um, como o enunciado pede.
* Com isso, o site passou a ter a lista dos integrantes e os campos `date` e `number`, e nenhum CSS usa mais variáveis.

**O que falta**

* A foto do topo (`img/contato/hero-contato.jpg`) e a fonte dela.
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
* Com isso, só a Confirmação ainda não está no `style.css`.

**O que falta**

* A fonte das fotos das três páginas, a validação no W3C e as notas.

**Depois, no mesmo dia**

* O líder trouxe do git a versão nova da Gestão Operacional, feita pelo integrante. O conteúdo era o mesmo, mas a página tinha voltado com o CSS dentro do HTML, uma foto com caminho quebrado e o menu do celular desligado. Levamos o visual para o arquivo de CSS da página e corrigimos o resto.
* As três páginas receberam o padrão de tags do site, mantendo os textos e a ordem da equipe: topo com foto, cabeçalho logo abaixo, rótulos de seção com o componente do site, cards em `<article>` e os botões do site. Na Gestão Financeira e na Gestão Operacional, a foto da página virou a foto do topo. A da Gestão Administrativa é pequena demais para o topo; ela ficou no conteúdo, e o topo espera uma foto nova.

---

## 06/11 — Todas as páginas no `style.css`

**O que fizemos**

* A Confirmação, a tela que aparece depois de enviar um formulário, foi a última página a entrar no `style.css`. O HTML dela já estava bom; mudou só o CSS: regras isoladas com `.pagina-confirmacao` (inclusive a versão para imprimir), cores da paleta e os textos com os componentes do site.
* Agora as 12 páginas do site usam só o `css/style.css`, com o CSS de cada página isolado, as cores da paleta e o mesmo padrão de texto.

**Próximo passo**

* Montar o `style.css` uma última vez e passar a editar direto nele, como combinado para o fim do projeto.

---

## 06/11 — O `style.css` passa a ser o arquivo de CSS do grupo

**O que fizemos**

* Juntamos o CSS uma última vez, com as 12 páginas, e conferimos que o `style.css` estava igual aos arquivos separados.
* A partir de agora, o grupo edita direto no `css/style.css`. O começo do arquivo explica como ele está dividido e as regras para editar.
* O arquivo está dividido em blocos: GLOBAL (fontes, paleta, padrão das tags e componentes), HEADER, FOOTER, os COMPONENTES da home e um bloco para cada PÁGINA. Cada bloco começa com um título num comentário.
* Os arquivos separados que usamos durante o desenvolvimento (`global.css`, `layout/`, `components/` e `page/`) foram para a pasta `css/legado/`. Eles ficam só como registro de como trabalhamos e não são carregados por nenhuma página do site.
* Passamos a conferir as regras do CSS no próprio `style.css`, bloco por bloco: prefixo de cada página, cores da paleta, variáveis e tipografia.
* Atualizamos o README: a estrutura de pastas, a organização do CSS e o modelo de `<head>` das páginas.

**O que decidimos**

* O CSS do site é editado só no `css/style.css`. A pasta `css/legado/` não é editada.
* Regra nova de página vai no bloco da própria página, sempre com o prefixo `.pagina-<nome>`. Página nova ganha um bloco novo no fim do arquivo.
* Os títulos dos blocos não podem ser apagados nem renomeados, porque é por eles que achamos o bloco de cada página.

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
* Saíram também a pasta com o envio da Projetos e uma cópia solta da página inicial desse envio (`pages/index.html`), junto com as três imagens grandes que só ela usava (`f1.png`, `F2.png` e `F3.png`). Essa cópia não fazia parte do site.

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

* As notas que ainda diziam "(fonte a definir)" passaram a dar a fonte das fotos: home (imagens dos projetos), Contato, Projetos (imagens e foto do topo), Política de Privacidade e Serviços 3.
* Na Serviços, a nota ganhou também a fonte das fotos dos cards.
* Com isso, nenhuma página do site tem mais foto sem fonte.

---

## 06/11 — Mensagem obrigatória no formulário da Contato

**O que fizemos**

* O campo "Mensagem" do formulário da Contato passou a ter `required`, como os outros campos. Agora todos os campos do formulário são obrigatórios.

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
* Com isso, a pasta `assets/` existe e o site tem `<video>` com capa e controles.

**O que aprendemos**

* Com o vídeo no próprio site, ele toca mesmo sem acesso ao YouTube e não depende de o vídeo continuar publicado lá.
* O `poster` é a imagem que aparece antes de o vídeo tocar. Sem ele, o navegador mostra um quadro preto ou o primeiro quadro, que nem sempre é bom.

---

## 06/11 — Todas as fotos de topo no lugar

**O que fizemos**

* Entraram as fotos de topo que faltavam: `img/servicos-1/hero-servicos-1.jpg` (58 KB) e `img/politica-privacidade/hero-politica-privacidade.jpg` (208 KB, um cadeado sobre código, do Pixabay). A da Contato (`img/contato/hero-contato.jpg`) já estava na pasta.
* Com isso, todo arquivo que o CSS e as páginas usam existe.

---

## 06/11 — Mesmos botões no fim das páginas de serviço

**O que fizemos**

* A Serviços 1 e a Serviços 2 passaram a terminar com os mesmos botões da Serviços 3: "Solicitar orçamento" (vai para a Contato) e "Voltar para serviços", centralizados, com 50px entre eles no computador e 16px no celular.
* Na Serviços 1, os textos "Solicite um orçamento sem compromisso." e "← Voltar para os serviços" deram lugar aos do padrão. A Serviços 2 já tinha o HTML certo, mas faltava a regra de CSS que coloca os botões lado a lado no centro.

---

## 06/11 — Home mais simples

**O que fizemos**

* A home ficou mais simples: saíram os recursos extras de animação, como a tela de carregamento e as animações de entrada com o parallax (o fundo e as fotos que se mexiam com a rolagem).
* Saíram da página os arquivos JavaScript desses recursos e as 19 marcações de efeito. O ponto verde do painel do topo parou de pulsar.
* No `css/style.css` saíram os blocos de CSS desses recursos, com quase mil linhas a menos. Ficaram os componentes de acessibilidade e de cookies.
* Continuam funcionando o carrossel do topo, o filtro do FAQ, o botão de acessibilidade (incluindo "pausar animações"), o aviso de cookies e os efeitos de passar o mouse nos botões e nos cards.

**O que aprendemos**

* Antes, as seções da home começavam escondidas e só apareciam quando o arquivo JavaScript dos efeitos rodava. Sem efeitos, a página fica mais leve e aparece inteira, mesmo se algum arquivo JavaScript falhar.

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
* Conferimos que nenhum link ficou quebrado.

---

## 06/11 — Revisão de fechamento do projeto

**O que fizemos**

* O líder validou no W3C o `css/style.css` e sete páginas: Quem Somos, Clientes, Serviços, Serviços 1, Projetos, Notícias e FAQ. Os PDFs ficaram em `docs/testes/pages/<pagina>/` (o do CSS em `docs/testes/pages/css/`).
* A revisão manual (`docs/testes/revisao-manual.md`) foi reescrita com o estado de hoje: o que foi resolvido desde 01/11, as pendências por página, o que conferir no navegador e o checklist de envio.

---

## 06/11 — Últimos ajustes antes do fechamento

**O que fizemos**

* Apagamos `img/index/relatorios-financeiros.jpg`, que ficou sem uso quando o carrossel saiu da home, e a pasta `img/index/`.
* **Serviços 2:** a nota da foto passou a usar a cor padrão das notas e ficou legível. Saíram os pontos duplos em "condomínio.." e "financeiras..", e as regras vazias ou sem uso do bloco da página no `style.css` (a parte do formulário que a página não tem mais).
* **Notícias:** a grade não deixa mais um card sozinho. No computador ficam 2 cards em cima e 3 embaixo; no tablet, o primeiro ocupa a linha inteira e os outros ficam de 2 em 2; no celular, um embaixo do outro. As fotos passaram a declarar o tamanho real do arquivo (`width` e `height`).
* **Serviços 3:** saiu o `<link rel="manifest">`. Agora nenhuma página liga o manifest, como já era na Quem Somos.

---

## 06/11 — Por que escolhemos o Hostinger Single

**O que fizemos**

* A conclusão do orçamento passou a explicar a escolha do Hostinger Single:
  * **Custo-benefício:** é o menor custo no primeiro ano, R$ 111,88 (R$ 71,88 de hospedagem e R$ 40,00 de domínio). Tem 10 GB de espaço para um site de cerca de 20 MB, 100 GB de largura de banda, SSL grátis e suporte 24 horas em português.
  * **Domínio:** `.com.br` no Registro.br, por R$ 40,00 por ano, porque o Single não inclui domínio.
  * **Escalabilidade:** se o site crescer, dá para subir para o Premium, o Unlimited ou o Cloud Startup sem trocar de empresa.
  * **Atenção:** o preço promocional exige pagar os 48 meses de uma vez (R$ 287,52), e a renovação é de R$ 23,99 por mês.
* O PDF do orçamento foi gerado de novo.

---

## 06/11 — Botão de acessibilidade em todas as páginas

**O que fizemos**

* O `js/acessibilidade.js`, que antes ficava só na home e na Confirmação, passou a ser carregado no `<head>` de todas as páginas, logo depois do `style.css`. Na Notícias, a linha estava comentada e foi ativada.
* Com isso, o botão redondo de acessibilidade aparece no canto da tela do site inteiro, com tamanho do texto (A, A+, A++), leitura em voz alta, alto contraste, escala de cinza, destaque de links, fonte legível, pausar animações, guia de leitura e cursor grande. A escolha fica salva e vale ao trocar de página.
* Conferimos no navegador, no computador e no celular, que o painel abre, que o "A+" aumenta o texto e que não aparece erro no console.
* O README passou a mostrar a linha do `acessibilidade.js` no modelo do `<head>`.

---

## 06/11 — Sete páginas fechadas

**O que fizemos**

* Fechamos as páginas que já tinham a validação do W3C de 06/11: Serviços, Serviços 1, Projetos, Notícias e FAQ. Cada uma ganhou o relatório final (só com o que está de fato na página, com os números de linha atuais) e o `antes-depois.md`, que compara o que veio do ClickUp com a página final.
* A Quem Somos e a Clientes, fechadas em 01/11, tiveram o registro atualizado: CSS no `style.css` único, vídeo local na Quem Somos, coerência com a home, link do orçamento no rodapé, botão de acessibilidade e as validações novas do HTML e do CSS.
* Na revisão de fechamento apareceram sobras, que corrigimos:
  * **Quem Somos:** o título do cabeçalho tinha o `id` da Clientes; passou a ser `titulo-quem-somos`.
  * **Projetos:** a regra `.atalhos` ficou no CSS depois que os atalhos saíram da página. Saiu.
  * **Serviços 1:** a foto da reunião virou a foto do topo, mas a regra `.foto` e dois comentários ainda falavam dela no conteúdo. A regra saiu, os comentários foram corrigidos e a nota passou a falar só da foto do topo.
  * **FAQ:** a nota da foto ganhou o ponto final.
* O painel ficou com 7 de 14 páginas fechadas. As notas da 2ª entrega das cinco páginas novas ficam a definir pelo líder.

**O que aprendemos**

* Quando uma parte da página sai (uma foto, uma lista de atalhos), a regra do CSS dela precisa sair junto. Senão fica código que ninguém usa e confunde quem lê depois.

---

## 06/11 — Decisões sobre os pontos de conteúdo

**O que decidimos**

* Os pontos de conteúdo que ficaram em aberto na revisão das páginas fechadas continuam como estão: o Essência Moema com o mesmo texto do Alto dos Jardins (Projetos), os nomes de duas imagens e a coluna "Duração" (Serviços), o texto alternativo "Ilustração sobre…" nas fotos (Notícias) e os textos dos diferenciais (Quem Somos).
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

## 06/11 — Páginas do painel validadas no W3C

**O que fizemos**

* Com os PDFs da Home, Serviços 2, Serviços 3, Contato e Política de Privacidade, as 12 páginas do painel estão validadas no W3C. Os PDFs ficam em `docs/testes/pages/<pagina>/`.

---

## 06/11 — Fonte do conteúdo em todas as páginas

**O que fizemos**

* Conferimos a fonte de todo conteúdo que não é do grupo. Cada página com foto tem a nota no fim, com a fonte das fotos. As imagens da página de orçamento são prints das páginas de planos das empresas. A nota dela, que tinha saído, voltou: "Imagens: prints das páginas de planos da HostGator, da Hostinger e da Umbler, feitos pelo grupo em 14/10/2026."
* Passamos a conferir isso página por página: toda página com foto (no conteúdo ou no topo) precisa ter a nota de fonte. O logo, que é do próprio grupo, não conta.

---

## 06/11 — Dados de contato iguais em todo o site

**O que decidimos**

* Os dados de contato precisam ser iguais em todas as páginas.

**O que conferimos**

* Em todas as páginas aparecem os mesmos dados:
  * e-mail `contato@grupoexitocondominios.com.br`;
  * telefone e WhatsApp (11) 2564-9963;
  * Instagram `grupoexito.condominios` e Facebook `grupoexitocondominios`;
  * os dois endereços: R. Gonçalo Ferreira, 164, Sala 3, em Mogi das Cruzes, e Av. Rio das Pedras, 3.409, em São Paulo.
* Os únicos dados diferentes são os exemplos dentro dos campos do formulário (`sindico@seudominio.com.br` e (11) 98765-4321), que estão lá de propósito.

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

* O líder deu as notas da 2ª entrega. Elas estão no relatório de cada página e no painel:

| Página | Nota |
| --- | :---: |
| Quem Somos | 7 / 10 |
| Serviços | 5 / 10 |
| Serviços 1 | 7 / 10 |
| Serviços 2 | 7 / 10 |
| Serviços 3 | 9 / 10 |
| Clientes | 7 / 10 |
| Projetos | 6 / 10 |
| Notícias | 4 / 10 |
| FAQ | 6 / 10 |
| Contato | 7 / 10 |
| Política de Privacidade | 5 / 10 |

* O painel `docs/paginas.html` passou a listar só as 12 páginas que têm responsável e nota: saíram a Confirmação, o Orçamento de hospedagem e a home antiga (`index-v3.html`). As páginas continuam no site e com os seus relatórios em `docs/testes/pages/`.
* A Home ainda está sem nota.

---

## 06/11 — Painel com o menu do site

**O que fizemos**

* O painel `docs/paginas.html` ganhou o header e o footer do site, com os caminhos ajustados para a pasta `docs/`. Assim dá para ir do painel para qualquer página e voltar pelo menu Docs do rodapé.
* A Home ficou com a nota "—", porque foi feita pelo líder.
* O registro das revisões fica na revisão manual (`docs/testes/revisao-manual.md`) e no relatório final de cada página em `docs/testes/pages/<pagina>/`.

---

## 07/11 — Assinatura do rodapé

**O que fizemos**

* No rodapé das 14 páginas e do painel, a frase "EXECUTIVE EDITORIAL • PROPTECH MANAGEMENT", ao lado do "© 2026", virou "Projeto acadêmico.". Ela deixa claro que o site é um trabalho da faculdade.
* No `style.css`, a assinatura deixou de ficar toda em maiúsculas (`text-transform: none`), para o texto aparecer como foi escrito.

---

## 07/11 — README final

**O que fizemos**

* Reescrevemos o README como o documento final do projeto: objetivos, equipe e divisão das páginas, o que tem em cada página, estrutura de pastas, regras do CSS e do HTML, formulário, imagens, orçamento de hospedagem com a escolha do grupo, documentação, tecnologias, como abrir o site e o fluxo de Git.
* Os nomes das páginas no README passaram a ser os mesmos do menu e do painel (Contato, Projetos, FAQ).

---

## Diário de cada página

Cada integrante escreveu o diário da sua página. Aqui está um resumo do que cada um registrou, na ordem do menu. O que já foi contado nas entradas acima (a revisão de cada página e a entrada no `style.css`) não se repete aqui. O diário completo de cada página fica na pasta da página, em `docs/testes/pages/<pagina>/`.

### Quem Somos — Anthony

Anthony Gabriel Pereira dos Santos. O diário não traz datas; conta a página em etapas. [diário completo](../testes/pages/quem-somos/diario-de-bordo.md)

**O que ele fez**

* Na primeira versão, fez uma abertura com fundo azul em degradê, com o nome da empresa, o título "Quem Somos" e uma frase de apresentação. Escolheu uma paleta de azul-marinho, ciano e tons claros, e o CSS ficava dentro do próprio HTML.
* Escreveu as seções Nossa Missão, Nossa Visão e Nossos Valores (transparência, excelência e confiança), além de um texto de apresentação da empresa.
* Fez os cartões dos valores, com bordas, sombras e movimento ao passar o mouse, e a seção "Por que escolher o Grupo Êxito?", com quatro diferenciais em duas colunas: Atendimento Personalizado, Tecnologia Própria de Gestão, Transparência nas Informações e Agilidade e Organização.
* Na versão final, levou a página para o padrão do site: header e footer compartilhados, menu do celular, contatos e redes sociais, botão de falar com consultor, vídeo sobre administração condominial e imagem de abertura. O CSS saiu do HTML e foi para um arquivo externo, e a página passou a usar os arquivos JavaScript do menu, dos cookies e da acessibilidade.
* Nessa etapa, contou com a orientação do líder para adaptar a página à estrutura do site.

**O que ele aprendeu**

* A organizar os arquivos de um projeto e a manter o mesmo padrão visual entre as páginas.
* A usar media queries para a página continuar organizada em telas menores.
* Que o trabalho em grupo ajuda a achar soluções: receber orientação e trocar conhecimento melhorou o resultado.

**Dificuldades**

* Chegar a um visual que o agradasse: a primeira versão era simples, e ele testou várias combinações de cores, tamanhos e espaçamentos.
* Posicionar bem os cartões dos valores e dos diferenciais.
* Adaptar uma página que tinha estrutura própria ao header, ao footer, às imagens e aos arquivos do site.
* Entender os caminhos dos arquivos para ligar as imagens, o vídeo, o CSS e os arquivos JavaScript, e mudar partes do código sem estragar outras.

### Serviços — João

João Vitor Rocha Silva. O diário não traz datas; conta a página em seis etapas. [diário completo](../testes/pages/servicos/diario-de-bordo.md)

**O que ele fez**

* Montou a página com `lang="pt-BR"`, `meta charset`, `meta viewport` e título, e colocou as cores em variáveis de CSS (`--texto`, `--fundo`, `--borda`, `--destaque`).
* Organizou a página com `<header>`, `<nav>`, `<main>`, `<section>` e `<footer>`, com cada serviço num `<article>`.
* Deixou um único `<h1>` ("Nossos serviços"), `<h2>` para cada seção e `<h3>` para cada serviço, e ligou cada seção ao seu título com `aria-labelledby`.
* Usou CSS Grid com `repeat(auto-fit, minmax(16rem, 1fr))` nos cartões e pôs a tabela de comparação dentro de um contêiner com `overflow-x: auto`, para a página não rolar para o lado no celular. Os links ganharam estilo de foco (`:focus-visible`).
* Fez a tabela comparativa com `<caption>`, `<thead>`, `<tbody>` e `scope` nos `th`.
* Publicou a página num repositório próprio no GitHub, com `git init`, `git add`, `git commit` e `git push`.
* A primeira versão falava de serviços financeiros (gestão financeira, planejamento de investimentos e consultoria tributária). Na revisão, os textos passaram a falar de condomínio, como contamos nas entradas de 01/11 e 06/11.

**O que ele aprendeu**

* Cada tag semântica tem uma função, e os títulos seguem a ordem h1 → h2 → h3, sem pular nível.
* Imagem precisa de caminho relativo e de texto `alt`.
* Variáveis de CSS deixam o estilo mais fácil de manter.

**Dificuldades**

* Um `>` sobrando depois de duas tags `<img>` aparecia como texto na página; ele apagou o `>` extra.
* Um erro de digitação no `alt` ("gesgão") foi corrigido para "gestão".
* Uma largura escrita sem unidade (`width: 1000`), que o CSS ignora, saiu; ficou o tamanho da classe `.servico img`.
* Imagens com caminho do próprio computador (`C:\Users\...`) não apareciam em outro lugar; elas foram para o projeto, com caminho relativo.

### Serviços 1 — Gestão Administrativa — Arthur

Arthur Kassab Dias. O diário é de 07/11 e descreve a página que ele enviou, com o que corrigiu desde a primeira versão. [diário completo](../testes/pages/servicos-1/diario-de-bordo.md)

**O que ele fez**

* Escreveu o conteúdo do serviço: a parte burocrática do condomínio (documentos, atas, contratos e processos), os benefícios, os quatro passos de "Como funciona" e a tabela "O que está incluso?".
* Organizou a página com um `main`, seções com título e dois `article` (Benefícios e Como funciona). Criou o título "Detalhes do serviço" para os `h3` terem um `h2` acima.
* Trocou o CSS antigo, cujas classes (`container`, `retangulo`, `botao`) atrapalhavam o estilo novo, por um CSS no mesmo padrão da página Serviços, com grade que se ajusta sozinha e tabela com rolagem horizontal.
* Ativou o `menu.js`, que estava comentado, para o menu do celular funcionar.
* Corrigiu erros de código: `<thread>` virou `<thead>`; saiu o atributo inválido `text align`; o `<title>` ficou descritivo; saíram os `<br>` e `<p></p>` vazios usados como espaço; "administratica" e "Acessoria" viraram "administrativa" e "Assessoria"; a primeira coluna da tabela passou a usar `<th scope="row">`.
* Registrou a acessibilidade da página: `lang="pt-BR"`, `alt` em todas as imagens, `aria-label` nos menus, `aria-current="page"`, `aria-labelledby` nas seções e foco visível nos links.

**O que ele aprendeu**

* Para que serve cada tag da página, do `header` ao `table`, e como montar a hierarquia dos títulos sem pular nível.
* Que uma grade com `auto-fit` deixa os cards lado a lado no computador e empilhados no celular, sem media query.

**Dificuldades**

* A primeira versão tinha o conteúdo certo, mas o visual era diferente do resto do site e havia erros de código, que ele listou e corrigiu.

### Serviços 2 — Gestão Financeira — Felipe Dias

Felipe Dias. O diário cobre de 26/09 a 07/11. [diário completo](../testes/pages/servicos-2/diario-de-bordo.md)

**O que ele fez**

* Seguiu cinco etapas: planejamento (tema, conteúdo e estrutura), HTML (cabeçalho, menus, seções, formulário e rodapé), CSS (cores, fontes, espaçamentos e alinhamentos), testes no navegador com correção de erros visuais e, por fim, revisão do código e organização dos arquivos.

**O que ele aprendeu**

* A estruturar uma página, estilizar, organizar o código e resolver problemas. Ele destaca a importância do planejamento e de testar a página.

**Dificuldades**

* Alinhar e posicionar os elementos, organizar as seções, deixar os componentes com o mesmo visual e ajustar espaçamentos e responsividade. Ele resolveu com `display: flex`, `justify-content`, `align-items` e `gap`, e revendo a estrutura do HTML.

### Serviços 3 — Gestão Operacional — David

David. O diário é de 04/11 e conta a revisão da página com a lista de conferência da entrega. [diário completo](../testes/pages/servicos-3/diario-de-bordo.md)

**O que ele fez**

* Conferiu as tags e viu que faltava o `<h3>`: os títulos dos quatro cards de "Gestão operacional na prática" estavam em `<th>`, em tabelas de uma célula só. Como os cards não são dados de tabela, ele os refez com `<h3>` + `<p>` e levou o visual para o CSS. A tabela "O que está incluso" continuou `<table>`.
* Ajustou os cards novos para ficarem iguais aos antigos: zerou as margens do `<h3>` e do `<p>`, deu `padding`, pôs `font-size: 1rem` no título e tirou a borda do `<p>`, que formava um segundo retângulo.
* Trocou a regra `img` por `article img`, porque ela também mudava os logos do header e do footer.
* Trocou as cores que tinha escolhido pelos valores `rgb(...)` da paleta do README. Manteve, por escolha dele, duas cores de hover dos botões fora da paleta.
* Renomeou a imagem `img1.png` para `gestora-orientando-equipe.png`, com caminho relativo, e corrigiu um espaço que faltava entre `rel` e `href` no `<link>` da fonte.
* Trocou os `<section>` sem título em volta dos botões por `<div>`.
* Enviou a página, a imagem e o diário pelo Git direto na branch `main`, sem conflitos e sem mexer em arquivos compartilhados.

**O que ele aprendeu**

* Uma lista de conferência ajuda a achar o que passa despercebido, como o `<h3>` que faltava.
* `<table>` é para dados de tabela; bloco com título e texto fica melhor como `<h3>` + `<p>`.
* `h3` e `p` têm margens padrão do navegador, que precisam ser zeradas nos cards.
* Em trabalho de equipe, um seletor genérico como `img` pode mexer na parte dos outros.
* O que é uma branch, por que cada integrante deve ter a sua e o fluxo certo (`git switch -c`, `git commit`, `git push -u origin nome-da-branch`).

**Dificuldades**

* Erros pequenos de digitação em atributos, como o espaço que faltava no `<link>`, não dão aviso e passam fácil.
* Ficaram anotadas para depois: testar os links e a página no tablet e no celular, confirmar a fonte Manrope com o grupo e tirar um `preconnect` repetido. Na revisão do grupo, a página passou a usar as fontes do site.

### Clientes — Gabriel

Gabriel. O diário conta a criação da página. [diário completo](../testes/pages/clientes/diario-de-bordo.md)

**O que ele fez**

* Separou o conteúdo pedido no ClickUp por parte da página e escolheu as imagens: quatro de clientes, três de depoimentos e uma do logo.
* Dividiu a página em `<header>`, seções de introdução, clientes e depoimentos e `<footer>`, e foi montando cada parte com textos, imagens e o CSS (cores, tamanhos, limites e espaçamentos).
* Definiu as cores azul, azul-escuro, turquesa, turquesa-escuro e cinza, com base num site de referência, e organizou clientes e depoimentos em colunas, para facilitar a leitura.

**O que ele aprendeu**

* Que cabeçalho e rodapé dão continuidade ao site e são o lugar de outros links e informações.

**Dificuldades**

* Os links para as outras páginas ainda não podiam ser feitos, porque elas estavam em desenvolvimento.

### Projetos — Felipe Gabriel

Felipe Gabriel Evangelista Alexandrias. O diário é de 04/11. [diário completo](../testes/pages/projetos/diario-de-bordo.md)

**O que ele fez**

* Dividiu os projetos em três áreas, cada uma numa página: Gestão Financeira, Gestão Operacional e Gestão Administrativa. Na página principal, três cards com imagem levam a cada área.
* Em cada área, mostrou três projetos em cards, cada um com "O que o cliente queria", "O que foi feito" e "Resultado".
* Pôs um efeito nos cards ao passar o mouse: `transition`, `transform: scale(1.05)`, `box-shadow` e `cursor: pointer`.
* Organizou os cards com Flexbox (`display: flex`, `justify-content: center`, `gap: 30px` e `flex-wrap: wrap`).
* Colocou em cada área um link para voltar à página principal de projetos.
* Na revisão do grupo, as três áreas viraram uma página só, a `projetos.html`, como contamos na entrada de 06/11.

**O que ele aprendeu**

* A usar a tag `<a>` em imagens e a organizar o conteúdo com tags HTML.
* Flexbox, transições, sombras e efeitos com `:hover` no CSS.
* A importância de separar o conteúdo e organizar os arquivos para facilitar mudanças.

**Dificuldades**

* O diário dele não registra dificuldades.

### Notícias — Enzo

Enzo. O diário é de 04/11. [diário completo](../testes/pages/noticias/diario-de-bordo.md)

**O que ele fez**

* Partiu do arquivo original da página (vitrine em destaque, cinco cards com ilustração e seis matérias completas) e manteve o layout, a estrutura e o conteúdo.
* Trocou todas as cores pela paleta do grupo, em variáveis de CSS, e recoloriu as ilustrações para combinar com ela.
* Fez a troca entre a lista e as matérias sem JavaScript, com `<input type="radio">`, `<label for>` e o seletor `:checked`.
* Deixou a página sem header, menu e rodapé, para receber os do site. "Ver notícias mais antigas" ficou sem link, porque não existe página de destino.

**O que ele aprendeu**

* Variáveis de CSS permitem mudar uma cor em um só lugar.
* O truque do radio com `:checked ~` troca de tela só com CSS.
* `article` marca conteúdo independente (cada notícia) e `section` agrupa partes da página.

**Dificuldades**

* O diário dele não registra dificuldades. Na revisão do grupo, a troca entre lista e matérias passou a usar links e o seletor `:target`, como contamos na entrada de 04/11.

### FAQ — Evandro

Evandro. O diário é de 07/11 e descreve a página como ela está. [diário completo](../testes/pages/faq/diario-de-bordo.md)

**O que ele fez**

* Registrou as dez perguntas da página: transição de administradora, controle financeiro, aplicativo, assembleias, prazos de atendimento, papel do síndico, prestação de contas, cobrança, manutenção e serviços incluídos.
* Cada pergunta é um `<details>` com `<summary>`, que abre e fecha sem JavaScript, e a primeira já começa aberta (`open`).
* A página usa o mesmo header, menu e versão para celular da home, com `aria-current="page"` no link FAQ, o topo com foto, a caixa "Qualquer dúvida?" com botão do WhatsApp e a fonte da foto do topo na nota do fim da página.

**O que ele aprendeu**

* `<details>` e `<summary>` fazem um acordeão só com HTML.
* Começar as regras com a classe do `<body>` (`.pagina-faq`) limita o estilo àquela página.
* `aria-current="page"` marca o link da página atual, e `aria-hidden="true"` esconde ícones decorativos dos leitores de tela.

**Dificuldades**

* O CSS que ele tinha era o da página inicial, com as regras em `.pagina-index`, e as classes não batiam com o HTML novo. Ele anotou que precisava adaptar os seletores e decidir o que fazer com os filtros e o card de suporte.
* Ficou a dúvida se os números das respostas (como prazos de atendimento) são fictícios. Como todo o conteúdo do site é fictício, eles também são.

### Política de Privacidade — Guilherme

Guilherme Santos Peixoto Muniz. O diário é de outubro de 2026. [diário completo](../testes/pages/politica-privacidade/diario-de-bordo.md)

**O que ele fez**

* Partiu de um código que estava incompleto, cortado no fim do cabeçalho, e fechou as tags que faltavam (`<body>`, `<main>`, `<footer>`, `</html>`).
* Colocou as tags `<nav>`, `<section>` e `<article>` e organizou os títulos na ordem `<h1>` → `<h2>` → `<h3>`.
* Fez uma barra de navegação e links no texto para a home, a Contato e a Serviços.
* Trocou a paleta antiga, em tons de verde, pela paleta do grupo: fundo claro, header e footer azul-marinho, títulos azul-marinho, subtítulos e links em teal, hover do menu em ciano e texto em cinza azulado.
* Ajustou o hover e o foco dos links, com transições suaves e cores diferentes para fundo claro e fundo escuro.

**O que ele aprendeu**

* Que a ordem dos títulos e as tags semânticas ajudam os leitores de tela e a acessibilidade.
* A manter a página responsiva com `clamp` e Flexbox.

**Dificuldades**

* O código de partida estava cortado e precisou ser completado antes de qualquer outra mudança.

---

## Resumo das decisões até agora

| Decisão | Motivo |
| --- | --- |
| Usar só HTML, CSS e JavaScript | É o que estamos aprendendo |
| Cada integrante cuida de uma página | Todo mundo pratica e o trabalho fica dividido |
| Uma paleta de cores para o site todo | O site fica com a mesma cara em todas as páginas |
| Mesmo menu e rodapé em todas as páginas | Facilita a navegação e evita retrabalho |
| Home mais simples, sem recursos extras de animação | A página fica mais leve e o código fica fácil de entender |
| Cores escritas em `rgb(...)`, sem `var()` | Quem lê o CSS vê a cor na hora; mais fácil para iniciantes |
| Fontes dentro do projeto (`css/fonts/`) | Não depender do Google Fonts |
| Um único `css/style.css`, dividido em blocos e editado direto nele | O professor pede um só arquivo de CSS na entrega final |
| CSS de cada página isolado com `.pagina-<nome>` | Uma página não estraga a outra dentro do mesmo arquivo |
| Mesmo padrão de tags e de texto; variações viram componentes | Identidade visual única pedida pelo professor |
| Topo com foto e cabeçalho padrão em todas as páginas | Todas as páginas começam do mesmo jeito |
| `<section>` e `<article>` sempre com título; sem título, vira `<div>` | HTML correto e sem avisos no W3C |
| Fonte de todo conteúdo que não é do grupo na nota do fim da página | O professor pede a indicação da fonte |
| Dados de contato iguais em todas as páginas | O site não se contradiz |
| Botão de acessibilidade e aviso de cookies em todas as páginas | O site inteiro funciona do mesmo jeito |
| Hospedagem no Hostinger Single, com domínio `.com.br` no Registro.br | Menor custo no primeiro ano e espaço para crescer |
| Documentação dentro de `docs/` e painel em `docs/paginas.html` | Raiz organizada e o andamento de todas as páginas num lugar só |

---

## Próximos passos

* As 12 páginas do painel (`docs/paginas.html`) estão fechadas, validadas no W3C e com a nota do líder registrada. A Home, feita pelo líder, fica com "—". O `css/style.css` também passou no W3C.
* Cada página tem o relatório final, o `antes-depois.md` e o diário de bordo do integrante em `docs/testes/pages/<pagina>/`.
* Falta só o envio:
  * fazer o último commit e o push no GitHub;
  * gerar o `.zip` do projeto;
  * enviar no Blackboard.

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
