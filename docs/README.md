# Grupo Êxito Condomínios - Site Institucional

> **Projeto exclusivamente para fins de estudo.**

Projeto desenvolvido para a faculdade de **Engenharia de Software**.

O objetivo é desenvolver, em grupo, um site institucional para uma administradora de condomínios, utilizando **HTML, CSS e JavaScript**.

> **Nome da empresa:** sempre **Grupo Êxito Condomínios**, com "G", "Ê" e "C" maiúsculos. Nunca "Grupo Êxito Imóveis", "Êxito Condomínios" nem "condomínios" com minúscula. Vale para textos, `<title>`, `alt` do logo, e-mails e rodapé.

Este projeto não representa o site oficial da empresa e não possui finalidade comercial. Os textos, números, clientes, projetos, notícias e demais informações utilizadas no site são fictícios e foram criados apenas para fins acadêmicos.

---

## Equipe e divisão das páginas

O projeto possui **12 integrantes**, sendo cada integrante responsável pelo desenvolvimento de uma página.

A ideia é que cada pessoa tenha sua própria página para desenvolver, mas todos sigam a mesma estrutura visual e organização do projeto.

| Página                     | Responsável        | Tarefa                                                     |
| -------------------------- | ------------------ | ---------------------------------------------------------- |
| Home                       | **Alexander**      | [ClickUp](https://app.clickup.com/t/90171541460/86e39d6z7) |
| Quem Somos                 | **Anthony**        | [ClickUp](https://app.clickup.com/t/90171541460/86e39d6z6) |
| Clientes                   | **Gabriel**        | [ClickUp](https://app.clickup.com/t/90171541460/86e39dj32) |
| Serviços — Vitrine         | **João**           | [ClickUp](https://app.clickup.com/t/90171541460/86e39dj5t) |
| Serviços 1                 | **Arthur**         | [ClickUp](https://app.clickup.com/t/90171541460/86e39djak) |
| Serviços 2                 | **Felipe Dias**    | [ClickUp](https://app.clickup.com/t/90171541460/86e39djcu) |
| Serviços 3                 | **David**          | [ClickUp](https://app.clickup.com/t/90171541460/86e39djf1) |
| Perguntas Frequentes — FAQ | **Evandro**        | [ClickUp](https://app.clickup.com/t/90171541460/86e39djn2) |
| Contatos                   | **Pablo**          | [ClickUp](https://app.clickup.com/t/90171541460/86e39djrr) |
| Clientes — Projetos        | **Felipe Gabriel** | [ClickUp](https://app.clickup.com/t/90171541460/86e39djva) |
| Notícias                   | **Enzo**           | [ClickUp](https://app.clickup.com/t/90171541460/86e39dk07) |
| Política de Privacidade    | **Guilherme**      | ClickUp (2ª fase)                                          |

**Guilherme** (Guilherme Santos Peixoto Muniz, RGM 46924507) entrou no grupo na 2ª fase, com a página de Política de Privacidade (`pages/politica-privacidade.html`).

### Responsabilidade de cada integrante

Cada integrante é responsável por:

* Desenvolver o HTML da sua página.
* Criar e organizar o conteúdo da página.
* Desenvolver o CSS necessário para sua página.
* Utilizar as cores e padrões definidos pelo grupo.
* Adicionar as imagens necessárias.
* Garantir que os links da página estejam funcionando.
* Verificar a visualização em diferentes tamanhos de tela.
* Manter o código organizado e indentado.
* Fazer commits claros e relacionados ao que foi desenvolvido.
* Avisar o grupo caso precise alterar alguma estrutura compartilhada.

### Importante

Cada integrante deve trabalhar principalmente na sua própria página.

Caso seja necessário alterar:

* Header;
* Footer;
* Paleta de cores;
* Estrutura de pastas;
* Classes compartilhadas;
* Componentes utilizados por outras páginas;

é importante conversar com o grupo antes para evitar que uma alteração quebre o trabalho de outra pessoa.

---

# Estrutura do projeto

```text
grupoexitocondominios/
│
├── index.html                  # Home
├── index-v3.html               # Versão simples antiga da home (só referência, fora do site)
├── favicon.ico                 # Ícone da aba do navegador
│
├── css/
│   ├── style.css               # O CSS do site inteiro (arquivo único da entrega final)
│   ├── fonts/                  # Arquivos .woff2 das fontes (sem depender do Google)
│   └── legado/                 # Arquivos de CSS usados durante o desenvolvimento (não valem mais)
│
├── js/
│   ├── menu.js                 # Abre/fecha o menu no celular (compartilhado)
│   ├── formulario.js           # Envio de formulário -> tela de confirmação e máscara do telefone
│   ├── cookies.js              # Aviso de cookies no rodapé da tela, em todas as páginas (compartilhado)
│   ├── home.js                 # Filtro do FAQ da home
│   ├── acessibilidade.js       # Botão de acessibilidade, em todas as páginas (preferências salvas no navegador)
│   └── legado/                 # Scripts que a home não usa mais (tela de carregamento, efeitos e assistente)
│
├── assets/
│   └── video.mp4               # Vídeo do especialista (Quem Somos), com a capa em img/quem-somos/
│
├── img/
│   ├── favicon/                # Ícones do site (feitos a partir do logo)
│   ├── clientes/               # Imagens da página Clientes
│   ├── servicos/               # Imagens da página Serviços
│   ├── projetos/               # Imagens dos projetos (uma por condomínio) e foto do topo
│   ├── orcamento-hospedagem/   # Prints das páginas de planos das três hospedagens
│   └── ...                     # Uma pasta por página (img/<pagina>/); na raiz, só o que é do site todo (logo)
│
├── pages/
│   ├── quem-somos.html
│   ├── clientes.html
│   ├── servicos.html
│   ├── servicos-1.html
│   ├── servicos-2.html
│   ├── servicos-3.html
│   ├── projetos.html
│   ├── noticias.html
│   ├── faq.html
│   ├── contato.html
│   ├── politica-privacidade.html
│   ├── orcamento-hospedagem.html  # Orçamento de hospedagem e domínio (link no rodapé)
│   └── confirmacao.html        # Tela mostrada depois de enviar um formulário
│
└── docs/
    ├── README.md               # Este documento
    ├── diario-de-bordo.md      # Decisões, aprendizados e dificuldades do grupo
    ├── paginas.html            # Painel com todas as páginas e o status de cada uma
    ├── hospedagem/             # Orçamento de hospedagem e domínio: planilha, prints e o relatório em PDF
    └── testes/                 # Revisão manual, relatório de cada página e evidências (W3C)
```

> Arquivos marcados como **compartilhado** são usados por várias páginas. Antes de alterar, avise o grupo (veja as [Regras básicas do grupo](#regras-básicas-do-grupo)).

### O que fica em cada pasta?

**`index.html`**

Página inicial do site.

**`pages/`**

Contém as páginas internas do projeto. Cada integrante possui uma página para desenvolver.

**`css/`**

O `style.css`, que é o CSS do site inteiro, e as fontes (`fonts/`). A pasta `legado/` guarda os arquivos de CSS separados que o grupo usou durante o desenvolvimento (veja [Arquivo único: `css/style.css`](#arquivo-único-cssstylecss)); eles não são carregados por nenhuma página do site.

**`img/`**

Local onde devem ficar as imagens utilizadas no site.

**`js/`**

Arquivos JavaScript utilizados para comportamentos e interações do site.

**`docs/`**

Documentação do projeto: este README, o diário de bordo, o painel das páginas, o orçamento de hospedagem e os testes.

---

# Organização do CSS

## Arquivo único: `css/style.css`

Na **2ª entrega**, que é a final, o **CSS vale nota** e o professor pede **um único arquivo `.css`**, com identidade visual unificada. O site inteiro usa só o `css/style.css`, e é **nele que o grupo edita** o CSS. Ele também precisa passar no [W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_upload).

Toda página carrega só ele:

```html
<link rel="stylesheet" href="../css/style.css">   <!-- páginas em pages/ -->
<link rel="stylesheet" href="css/style.css">      <!-- index.html -->
```

O arquivo é dividido em **blocos**, nesta ordem. Cada bloco começa com um título num comentário (`BLOCO GLOBAL`, `BLOCO HEADER`, `COMPONENTE: cookies`, `PÁGINA: faq.html`...). **Não apague nem renomeie esses títulos**: é por eles que se acha o bloco de cada página.

| Bloco | O que tem |
| --- | --- |
| `BLOCO GLOBAL` | (1) as fontes (`@font-face`) e a classe dos ícones, (2) a paleta (só um comentário com as cores e as fontes, para consulta), (3) o **padrão das tags** e (4) os componentes prontos `.ex-*` (`.ex-botao`, `.ex-card`, `.ex-hero`, `.ex-cabecalho`...) |
| `BLOCO HEADER` | O header (menu desktop e mobile), igual em todas as páginas |
| `BLOCO FOOTER` | O footer (rodapé), igual em todas as páginas. A terceira coluna (`.ex-rodape__coluna`) junta o menu "Páginas Internas" e o menu "Docs" |
| `COMPONENTE: ...` | O botão de acessibilidade e o aviso de cookies, que aparece em todas as páginas |
| `PÁGINA: <nome>.html` | Um bloco para cada página. Toda regra começa com `.pagina-<nome>` |

### Como funcionou durante o desenvolvimento

Enquanto as páginas eram ajustadas, cada parte ficava num arquivo separado (`global.css`, `layout/header.css`, `layout/footer.css`, `components/` e um arquivo por página em `page/`). Assim cada integrante sabia qual era o seu arquivo, e uma página não estragava a outra. Conforme cada página ficava pronta, o CSS dela entrava no `style.css`, no bloco dela. Em 06/11, com as 12 páginas dentro dele, o `style.css` passou a ser o arquivo editável, e os arquivos separados foram guardados em `css/legado/`, só como registro.

## Regras para editar o `style.css`

* **CSS da sua página fica no bloco dela** (`PÁGINA: <sua-pagina>.html`). **Não** use `<style>` dentro do HTML nem `style="..."`: crie uma classe no bloco da página.
* **Toda regra do bloco começa com a classe da página**, `.pagina-<nome>`, a mesma do `<body>`, inclusive as de tag (`img`, `table`) e as de dentro de `@media`. Assim uma página não mexe nas outras:

   ```html
   <body class="pagina-quem-somos">
   ```

   ```css
   .pagina-quem-somos main > .ex-container { padding-bottom: 60px; }
   .pagina-quem-somos img { border-radius: 8px; }

   @media (max-width: 700px) {
       .pagina-quem-somos .valores { flex-direction: column; }
   }
   ```

   O nome de um `@keyframes` de página começa com o nome da página (`@keyframes quem-somos-entrada`).
* **Página nova:** crie um bloco novo no fim do arquivo, com o mesmo modelo de título dos outros (`PÁGINA: nova-pagina.html`), e use a classe `pagina-nova-pagina` no `<body>`.
* O CSS da página **não redefine** `body`, `h1`, `h2`, `h3`, `p` ou `a` soltos: isso é papel do padrão das tags.
* **`h1`, `h2`, `h3`, `a`, `p`, `span` e `strong` têm sempre o mesmo padrão em todo o site.** O bloco da página **não muda a tipografia** de nada: nenhuma linha de `font-family`, `font-size`, `font-weight`, `font-style`, `font`, `line-height`, `letter-spacing` ou `text-transform` (nem com classe, como o antigo `.titulo` da Clientes).
* A **única** coisa que a página pode mudar nesses textos é a **cor**, e só quando o texto está **sobre fundo escuro** (faixa azul-marinho, topo com foto, caixa escura), para ficar legível: branco ou ciano da paleta. Exemplo: `.pagina-quem-somos .diferenciais h2 { color: rgb(255, 255, 255); }`. Em fundo claro a cor também fica a do padrão.
* Precisa de um texto diferente (rótulo pequeno, nota no fim da página, texto de depoimento...)? Use um **componente de texto** do bloco GLOBAL (veja [Componentes de texto](#componentes-de-texto)). Se nenhum servir, combine com o grupo e crie o componente no bloco GLOBAL, igual para todas as páginas.
* Espaçamento (`margin`, `padding`), alinhamento, layout, bordas, fundos e sombras ficam no bloco da página.
* Um `url()` é relativo ao `style.css`, que fica em `css/`: o caminho até a pasta de imagens começa com `../img/...`.
* Não carregue fontes do Google Fonts: as fontes já estão em `css/fonts/`.
* **Nenhum CSS do site usa `var()` nem cria variáveis (`--nome: ...`).** Escreva as cores em `rgb(...)`, copiando o valor da tabela da [paleta de cores](#paleta-de-cores). Exemplo: `color: rgb(0, 104, 118);`. Para transparência, use `rgba(...)`: `rgba(0, 188, 212, 0.15)`. A fonte vai pelo nome: `font-family: "Plus Jakarta Sans", system-ui, sans-serif;` (ou `"Space Grotesk", system-ui, sans-serif`). Raios e sombras também vão escritos direto, por exemplo `border-radius: 1.5rem;` e `box-shadow: 0 16px 36px rgba(6, 21, 45, 0.08);`. O site não usa nenhum framework de CSS: todo o estilo é escrito à mão.
* **Comentários do HTML não citam arquivos de CSS.** Comentários que explicam o HTML podem ficar:

   ```html
   <!-- HEADER COMPARTILHADO (igual ao da home) -->
   ```

Na revisão de cada página, conferimos essas regras no próprio `style.css`: se a página usa só ele, se o bloco tem o prefixo certo, se as cores são da paleta, se não há variáveis e se a tipografia segue o padrão. O resultado fica no relatório da página, em `docs/testes/pages/<pagina>/`.

## Padrão das tags (identidade visual)

A parte "3. PADRÃO DAS TAGS" do bloco GLOBAL do `css/style.css` dá a mesma cara a todas as páginas. Você não precisa escrever nada: basta usar as tags normalmente.

| Tag | Fonte | Tamanho | Cor |
| --- | --- | --- | --- |
| `body` (e o texto que herda dele: `p`, `li`, `td`) | Plus Jakarta Sans, altura de linha 1.6 | 16px | Texto corpo `rgb(71, 85, 105)` sobre Fundo `rgb(248, 250, 253)` |
| `h1` | Plus Jakarta Sans, peso 800 | 44px (32px no celular) | Texto `rgb(6, 21, 45)` |
| `h2` | Plus Jakarta Sans, peso 700 | 32px (26px no celular) | Texto `rgb(6, 21, 45)` |
| `h3` | Plus Jakarta Sans, peso 700 | 20px | Texto `rgb(6, 21, 45)` |
| `p` | herda do `body` (quebra palavras muito longas) | 16px | herda do `body` (por isso fica claro dentro de caixas escuras) |
| `a` | herda | herda | Teal `rgb(0, 104, 118)`, sublinhado; no hover, Navy claro `rgb(14, 56, 103)` |
| `img` | — | nunca passa da largura da caixa (`max-width: 100%`, `height: auto`, `display: block`) | — |
| `ul`, `ol` | herda | recuo de 1.5rem | herda |
| `table`, `th`, `td` | herda | largura 100%, espaço interno 0.75rem × 1rem | Bordas Borda `rgb(226, 232, 240)`; `th` em negrito, cor Texto sobre Superfície variante `rgb(241, 245, 249)` |

O `strong` fica em negrito (peso 700) e herda o resto de quem está em volta. O `span` não tem regra: herda tudo do elemento em volta.

O `Space Grotesk` (`"Space Grotesk", system-ui, sans-serif`) fica só para etiquetas, números e badges (classes `.ex-etiqueta`, `.ex-sobretitulo`, `.ex-rotulo`...).

**Fundo escuro?** Os títulos são escuros por padrão. Se a sua seção tem fundo escuro, dê a cor clara com o seletor da seção:

```css
.minha-faixa-escura h2 {
    color: rgb(255, 255, 255);
}
```

O header e o footer não mudam com o padrão: os seletores `.ex-header *` e `.ex-rodape *` dos blocos HEADER e FOOTER protegem os dois.

A prioridade neste momento é aprender e praticar:

* Seletores;
* Classes;
* IDs;
* Cores;
* Fontes;
* Margens;
* Espaçamentos;
* `padding`;
* `border`;
* `border-radius`;
* `width` e `height`;
* `display`;
* Flexbox;
* Grid;
* Posicionamento;
* Responsividade;
* Pseudo-classes como `:hover`.

---

## Paleta de cores

As cores do projeto são as da tabela abaixo. A mesma lista fica num comentário do bloco GLOBAL do `css/style.css` (parte "2. PALETA"), para consulta. O CSS não usa variáveis: cada cor é escrita direto em `rgb(...)`, copiada daqui.

Isso evita que cada integrante escolha uma cor diferente para cada página.

Cores do projeto:

| Cor                 | Valor RGB            | Onde usar                              |
| ------------------- | -------------------- | -------------------------------------- |
| Navy profundo       | `rgb(6, 21, 45)`     | Header, rodapé, botões principais      |
| Navy superfície     | `rgb(10, 30, 59)`    | Cards sobre fundo escuro               |
| Navy claro          | `rgb(14, 56, 103)`   | Hover e variações                      |
| Ciano elétrico      | `rgb(0, 188, 212)`   | Ícones, links ativos, detalhes         |
| Teal                | `rgb(0, 104, 118)`   | Títulos de seção, links em fundo claro |
| Teal vibrante       | `rgb(24, 168, 182)`  | Gradientes e ilustrações               |
| Ciano suave         | `rgb(214, 247, 255)` | Fundo de etiquetas e badges            |
| Fundo               | `rgb(248, 250, 253)` | Fundo da página                        |
| Superfície          | `rgb(255, 255, 255)` | Cards, formulários                     |
| Superfície variante | `rgb(241, 245, 249)` | Blocos secundários, inputs             |
| Borda               | `rgb(226, 232, 240)` | Bordas e divisórias                    |
| Texto               | `rgb(6, 21, 45)`     | Títulos e texto forte                  |
| Texto corpo         | `rgb(71, 85, 105)`   | Parágrafos                             |
| Texto secundário    | `rgb(82, 96, 113)`   | Legendas, textos de apoio              |
| Texto suave         | `rgb(148, 163, 184)` | Placeholders, metadados                |
| Texto invertido     | `rgb(255, 255, 255)` | Texto sobre fundo navy                 |
| Sucesso             | `rgb(16, 185, 129)`  | Confirmação, WhatsApp                  |
| Alerta              | `rgb(245, 158, 11)`  | Avisos                                 |
| Erro                | `rgb(239, 68, 68)`   | Erros de formulário                    |

Na sua página, basta copiar o valor da cor:

```css
.titulo {
    color: rgb(6, 21, 45);
}

.botao {
    background-color: rgb(0, 188, 212);
}

.card {
    background-color: rgb(255, 255, 255);
    border: 1px solid rgb(226, 232, 240);
}
```

Precisa de transparência? Use `rgba` e acrescente um quarto valor, de `0` (invisível) a `1` (sólido):

```css
.fundo-destaque {
    background-color: rgba(0, 188, 212, 0.15);
}
```

---

# Componentes compartilhados

A parte "4. COMPONENTES" do bloco GLOBAL do `css/style.css` pode conter estilos de elementos que aparecem em várias páginas.

Por exemplo:

* Botões;
* Cards;
* Tags;
* Formulários;
* Títulos;
* Containers;
* Seções.

Exemplo:

```css
.ex-botao {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
}

.ex-botao--primario {
    background-color: rgb(0, 188, 212);
    color: rgb(6, 21, 45);
}
```

Na página:

```html
<a href="contato.html" class="ex-botao ex-botao--primario">
    Solicitar proposta
</a>
```

### Largura-base de 1200px: `.ex-container`

O **conteúdo das páginas** usa a **largura-base de 1200px**. O header e o footer são um pouco mais largos, com **1280px**, e todos usam o mesmo respiro lateral (`1.5rem`).

| Onde | Classe | Valores |
| --- | --- | --- |
| Conteúdo das páginas | `.ex-container` (bloco GLOBAL) | `max-width: 1200px`, `padding: 0 1.5rem`, `box-sizing: border-box`, centralizado |
| Header | `.ex-header .ex-conteudo` (`layout/header.css`) | `max-width: 1280px`, mesmo padding |
| Footer | `.ex-rodape .ex-conteudo` (`layout/footer.css`) | `max-width: 1280px`, mesmo padding |
| Topo com foto | `.ex-hero__conteudo` (bloco GLOBAL) | os mesmos do conteúdo (1200px); o título e o texto continuam mais estreitos por dentro |

As seções são **"vazadas"**: o fundo da seção (cor, gradiente ou foto) vai de ponta a ponta da tela; só o conteúdo de dentro fica limitado a 1200px. Por isso o fundo fica na `<section>` e o conteúdo vai num `<div class="ex-container">`:

```html
<section class="depoimentos">              <!-- fundo de ponta a ponta -->
    <div class="ex-container">            <!-- conteúdo até 1200px -->
        <h2>Depoimentos</h2>
        <p>...</p>
    </div>
</section>
```

Se a página não tem nenhum fundo de ponta a ponta, o próprio `<main>` pode ser o container: `<main class="ex-container">`. Mas, se ela tem um topo com foto (`.ex-hero`), o `<main>` fica sem classe, o topo vem logo no começo dele e o resto do conteúdo vai num `<div class="ex-container">` logo depois do topo (como na Quem Somos e na Clientes); senão o topo também fica preso nos 1200px. Não crie um `.container` próprio na página com outra largura.

### Topo de página com foto: `.ex-hero`

O `.ex-hero` é o topo (hero) da página Clientes transformado em componente: uma faixa com foto de fundo, uma película azul-marinho por cima, um rótulo ciano, o título (`<h1>`) e um texto curto. No celular o título diminui e o topo fica um pouco mais alto, sozinho. Exemplos prontos em `pages/clientes.html` e `pages/quem-somos.html`.

O topo fica **logo no começo do `<main>`**, e o `<main>` não pode ter a classe `ex-container` (senão o topo fica limitado a 1200px). O `<h1>` da página é o do topo: não repita outro `<h1>` no conteúdo.

HTML para copiar (troque só os textos; o `<strong>` é a parte do título que vai para a linha de baixo, em ciano):

```html
<section class="ex-hero">
    <div class="ex-hero__pelicula"></div>
    <div class="ex-hero__conteudo">
        <span class="ex-hero__rotulo">Nome da página</span>
        <h1 class="ex-hero__titulo">
            Começo do título
            <strong>final do título em destaque.</strong>
        </h1>
        <p class="ex-hero__texto">
            Um texto curto explicando a página.
        </p>
    </div>
</section>
```

A **foto de fundo não vem no componente**: cada página coloca a sua no bloco dela do `css/style.css`, com o prefixo `.pagina-<nome>`. O caminho é relativo ao `style.css`, então começa com `../img/`:

```css
.pagina-clientes .ex-hero {
    background-image: url("../../img/clientes/background-cond.jpg");
}
```

Sem essa regra, o topo aparece com fundo azul-marinho liso. O mesmo acontece se o arquivo da foto não existir ou não carregar: o fundo azul-marinho aparece no lugar e o texto branco continua legível. O relatório de testes acusa no item 7.9 o caminho que aponta para um arquivo que não existe.

A foto do topo é decorativa e vai no CSS, então **não tem `alt`** (o `alt` só existe no `<img>`). O que importa no topo (rótulo, título e texto) já está escrito no HTML. Se a foto não for do grupo, indique a fonte na nota do fim da página (`.ex-nota`), por exemplo: "Foto do topo: Pixabay.". Imagem que passa informação vai em `<img>` com `alt`.

**Logo abaixo do topo vem o cabeçalho da página (`.ex-cabecalho`)**, igual em todas as páginas: rótulo pequeno, título `<h2>` e um texto de apoio. Copie de `pages/faq.html`:

```html
<div class="ex-cabecalho">
    <span class="ex-sobretitulo">Central de dúvidas</span>
    <h2 id="titulo-perguntas">Dúvidas sobre a administração</h2>
    <p class="ex-subtitulo">Encontre respostas imediatas sobre migração de administradora, controle financeiro, tecnologia e aspectos jurídicos da sua gestão.</p>
</div>
```

Troque o `id` do `<h2>` por um nome da sua página (`titulo-clientes`, `titulo-servicos`…): o mesmo `id` não pode se repetir, e um `id` copiado de outra página deixa a ligação errada. Se o cabeçalho estiver dentro de uma `<section>`, esse `id` vai no `aria-labelledby` dela, como na FAQ. O componente já traz a linha fina embaixo e os espaços; o CSS da página não muda as margens dele, e ele funciona mesmo nas páginas que zeram as margens com `main * { margin: 0 }`.

**Espaço abaixo do topo: 50px em todas as páginas.** Ele já vem do componente (regra `main > section.ex-hero + *` no bloco GLOBAL): o primeiro elemento depois do topo ganha 50px de espaço por dentro, em cima. Assim, se esse elemento tiver fundo (como a seção branca da Clientes), o fundo encosta no topo, sem faixa de outra cor. A página **não** coloca outro espaço em cima do primeiro conteúdo: se o primeiro elemento for um título, ele fica com `margin-top: 0`. Quando o primeiro título (`<h2>`) vem direto dentro do `.ex-container` logo depois do topo, o próprio componente já cuida disso (regra `main > section.ex-hero + .ex-container > h2:first-child`: 0 em cima e 15px embaixo, até o texto). Se o título estiver dentro de uma `<section>`, a página faz o mesmo com uma regra dela.

### Componentes de texto

Os textos que não seguem o padrão das tags são **componentes** do bloco GLOBAL, iguais em todas as páginas. Na sua página você só coloca a classe no HTML; no CSS da página pode mudar a margem, o alinhamento e, se o fundo for escuro, a cor.

| Classe | Para que serve | Como fica |
| --- | --- | --- |
| `.ex-sobretitulo` | Rótulo pequeno em maiúsculas: tipo do card ("Condomínio"), nome de uma faixa ("Depoimentos") | Space Grotesk, 11px, peso 700, maiúsculas espaçadas, Teal `rgb(0, 104, 118)`, linha própria |
| `.ex-subtitulo` | Texto de apoio logo abaixo de um título de seção | 15px, Texto corpo `rgb(71, 85, 105)` |
| `.ex-cabecalho` | Bloco que junta rótulo + título + texto de apoio. **É o primeiro bloco de toda página, logo abaixo do topo (`.ex-hero`)** | Título sem margem, 30px de espaço até o conteúdo de baixo. O texto segue o `.ex-sobretitulo`, o `h2` e o `.ex-subtitulo` |
| `.ex-nota` | Texto pequeno de apoio: nota no fim da página, legenda de vídeo ou foto, cargo de uma pessoa | 12px, altura de linha 1.6, Texto secundário `rgb(82, 96, 113)` |
| `.ex-aspas` | Aspas grandes decorativas de um depoimento (com `aria-hidden="true"`) | 50px, peso 700, Ciano elétrico `rgb(0, 188, 212)`, 45px de altura |
| `.ex-citacao` | Texto de um depoimento | 14px, altura de linha 1.8 |
| `.ex-autor` | Nome de quem deu o depoimento | 13px, peso 700, Texto `rgb(6, 21, 45)`, linha própria |
| `.ex-numero` | Número em destaque (métricas, como "99.8%" e "24/7") | Space Grotesk, 32px (26px no celular), peso 700, Texto `rgb(6, 21, 45)` |
| `.ex-numero--grande` | Variação do `.ex-numero` para um número grande decorativo, como o "01" a "06" dos serviços na página Serviços (usar junto: `class="ex-numero ex-numero--grande"`, com `aria-hidden="true"`) | 88px (64px no celular), altura de linha 1, Teal `rgb(0, 104, 118)` |
| `.ex-icone--pequeno` / `.ex-icone--grande` | Tamanho de um ícone do Material Symbols (o normal é 24px) | 16px / 32px |
| `.ex-icone--ciano` / `.ex-icone--teal` / `.ex-icone--navy` | Cor de um ícone | Ciano elétrico `rgb(0, 188, 212)` / Teal `rgb(0, 104, 118)` / Navy `rgb(6, 21, 45)` |

Títulos de card usam o `h3` normal do padrão (20px, peso 700, Texto `rgb(6, 21, 45)`), sem classe. Exemplos prontos em `pages/clientes.html` (rótulos, subtítulo, depoimentos e nota) e `pages/quem-somos.html` (legenda do vídeo e nota).

```html
<figure class="depoimento-card">
    <div class="ex-aspas" aria-hidden="true">“</div>
    <blockquote>
        <p class="ex-citacao">Texto do depoimento.</p>
    </blockquote>
    <figcaption>
        <strong class="ex-autor">Nome da pessoa</strong>
        <span class="ex-nota">Cargo da pessoa</span>
    </figcaption>
</figure>
```

Se você precisar criar algo específico para sua página, pode criar uma classe própria.

Exemplo:

```css
.clientes-destaque {
    ...
}
```

Não é necessário tentar transformar todos os elementos em componentes compartilhados.

---

# Header, footer e estrutura das páginas

Todas as páginas internas usam o **mesmo header (menu) e o mesmo footer** da home, para o site ficar com a mesma cara.

* O visual fica nos blocos HEADER e FOOTER do `css/style.css`.
* O menu vira um botão no celular (abaixo de 1024px), controlado por `js/menu.js`.
* No celular, o logo fica maior e centralizado.
* O logo do header e do rodapé tem duas versões: `img/logo-grupo-exito-header.png` (144×52, telas comuns) e `img/logo-grupo-exito-header@2x.png` (288×104, telas de alta densidade, como celulares). O `<img>` usa as duas com `srcset`:

```html
<img src="../img/logo-grupo-exito-header.png" srcset="../img/logo-grupo-exito-header.png 1x, ../img/logo-grupo-exito-header@2x.png 2x" width="144" height="52" alt="Grupo Êxito Condomínios">
```

### O que cada página precisa ter

**Dentro do `<head>`** (depois do `<meta name="viewport">`):

```html
<title>Nome da Página | Grupo Êxito Condomínios</title>
<meta name="description" content="Uma frase descrevendo a página.">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#06152d">
<link rel="icon" href="../favicon.ico" sizes="any">
<link rel="icon" type="image/png" sizes="32x32" href="../img/favicon/favicon-32.png">
<link rel="apple-touch-icon" href="../img/favicon/apple-touch-icon.png">

<link rel="stylesheet" href="../css/style.css">
<script src="../js/acessibilidade.js"></script>
```

O `acessibilidade.js` fica no `<head>`, logo depois do CSS, para aplicar as preferências salvas (texto maior, alto contraste...) antes de a página aparecer. Ele monta o botão redondo de acessibilidade no canto da tela, em todas as páginas.

O `<link>` do CSS fica sozinho, sem comentário em cima. Não é preciso nenhum `<link>` do Google Fonts: as fontes já vêm pelo `style.css`.

**Dentro do `<body>`:**

1. Logo no começo, o bloco `<!-- HEADER COMPARTILHADO -->`.
2. O conteúdo da sua página, de preferência dentro de `<main>`.
3. No fim, o bloco `<!-- FOOTER COMPARTILHADO -->` e os arquivos JavaScript:

```html
<script src="../js/menu.js"></script>
<!-- só se a página tiver formulário: -->
<script src="../js/formulario.js"></script>
```

### Como criar uma página nova

O jeito mais fácil é **copiar uma página que já existe** (ex.: `pages/faq.html`), manter o `<head>`, o header e o footer, e trocar só o conteúdo do meio.

No menu, a página atual fica destacada com `aria-current="page"`:

```html
<a class="ex-menu__link" href="faq.html" aria-current="page">FAQ</a>
```

Se for preciso **adicionar ou renomear um item do menu**, o menu tem que ser alterado na home e em **todas** as páginas (no menu desktop, no menu mobile e no footer). Combine com o grupo antes.

### Cuidados com o CSS da sua página

O header e o footer usam classes que começam com `ex-` (`.ex-header`, `.ex-rodape`...) para o CSS de cada página não mexer neles. Mesmo assim, evite regras muito genéricas que afetem a página inteira (e não redefina `body`, `h1`–`h3`, `p` e `a` soltos: veja o [Padrão das tags](#padrão-das-tags-identidade-visual)), como:

```css
/* evite: muda o body inteiro (e pode empurrar o header/footer) */
body { display: flex; padding: 40px; }

/* prefira: aplique no seu próprio conteúdo */
main { display: flex; padding: 40px; }
.minha-secao img { width: 100%; }
```

---

# Recursos do site

### Aviso de cookies

Todas as páginas mostram, na primeira visita, uma faixa no rodapé da tela avisando que o site usa cookies e o armazenamento do navegador, com um link para a [Política de Privacidade](../pages/politica-privacidade.html) e os botões "Aceitar" e "Recusar". A escolha fica guardada no navegador, e a faixa não aparece de novo.

* O aviso é montado pelo `js/cookies.js`; o visual fica no bloco `COMPONENTE: cookies` do `css/style.css` (classes `.ck-*`).
* Enquanto a faixa está aberta, o botão redondo da acessibilidade sobe para não ficar embaixo dela.
* Toda página carrega o script antes do `</body>`, junto com os outros:

```html
<script src="../js/cookies.js"></script>   <!-- na home: js/cookies.js -->
```

* O link "Política de Privacidade" também fica no rodapé de todas as páginas, ao lado do "© 2026".

### Menu "Docs" no rodapé

O rodapé de todas as páginas tem, abaixo de "Páginas Internas", o menu **Docs**, com o link "Painel do projeto" para o [painel das páginas](paginas.html) (`docs/paginas.html`). Para acrescentar outro item (por exemplo, o diário de bordo de cada página), basta colocar mais um `<a>` dentro da lista `.ex-rodape__links` desse menu, igual nas 14 páginas. Da home, o caminho começa em `docs/`; das páginas de `pages/`, em `../docs/`.

### Formulários e tela de confirmação

Ainda não há back-end (o formulário não envia para lugar nenhum). Formulários com `data-confirmacao` guardam os dados no navegador e abrem `pages/confirmacao.html`, que mostra protocolo, resumo e próximos passos:

```html
<form action="confirmacao.html" method="get" data-confirmacao="Fale conosco">
    <label for="nome">Nome</label>
    <input id="nome" name="nome" autocomplete="name" required>
    ...
</form>
<script src="../js/formulario.js"></script>
```

Cada campo precisa de `name` e de um `<label for="...">` para aparecer no resumo.

---

# Padrão de HTML

Procurem utilizar HTML semântico.

Em vez de criar tudo utilizando apenas `div`, utilizem elementos que representem o conteúdo.

Exemplo:

```html
<header>
    ...
</header>

<main>

    <section>
        <h1>Quem somos</h1>

        <p>
            Conheça a nossa empresa.
        </p>
    </section>

    <section>
        ...
    </section>

</main>

<footer>
    ...
</footer>
```

Algumas tags importantes:

| Tag             | Utilização            |
| --------------- | --------------------- |
| `<header>`      | Cabeçalho             |
| `<nav>`         | Menu de navegação     |
| `<main>`        | Conteúdo principal    |
| `<section>`     | Seção de conteúdo     |
| `<article>`     | Conteúdo independente |
| `<aside>`       | Conteúdo complementar |
| `<footer>`      | Rodapé                |
| `<h1>`          | Título principal      |
| `<h2>`          | Título de seção       |
| `<h3>`          | Subtítulo             |
| `<p>`           | Parágrafo             |
| `<a>`           | Link                  |
| `<button>`      | Botão/ação            |
| `<ul>` / `<li>` | Listas                |
| `<img>`         | Imagens               |

---

# Responsividade

As páginas precisam funcionar em diferentes tamanhos de tela.

Durante o desenvolvimento, testem pelo menos:

* Computador;
* Tablet;
* Celular.

Exemplo simples de Media Query:

```css
.card {
    width: 50%;
}

@media (max-width: 768px) {
    .card {
        width: 100%;
    }
}
```

A ideia é começar simples e ir melhorando conforme o grupo aprender mais sobre CSS.

Não é necessário tentar deixar o site perfeito em todos os dispositivos logo no primeiro momento.

---

# Imagens

Todas as imagens utilizadas no projeto devem ficar dentro da pasta:

```text
img/
```

**Cada página tem a sua pasta, com o mesmo nome do arquivo `.html`:** `img/<pagina>/`. A foto do topo da Clientes fica em `img/clientes/`, a da Serviços em `img/servicos/`, e assim por diante. Na raiz de `img/` ficam só as imagens do site todo, como o logo, e a pasta `favicon/`.

```text
img/
├── favicon/
├── logo-grupo-exito-header.png
├── clientes/
├── servicos/
├── projetos/
└── noticias/
```

Nas páginas internas:

```html
<img src="../img/clientes/cliente-01.jpg" alt="Nome do cliente">
```

Use sempre **caminhos relativos** ao projeto. Caminhos do seu computador (ex.: `C:\Users\seu-nome\Downloads\foto.png`) só funcionam na sua máquina e quebram para o resto do grupo.

Se o nome do arquivo tiver espaços, troque cada espaço por `%20` no `src` (ou, melhor, renomeie o arquivo sem espaços).

Evitem utilizar imagens diretamente de sites externos.

Também é importante sempre preencher o atributo `alt`:

```html
<img src="../img/logo.png" alt="Êxito Condomínios">
```

O `alt` deve descrever o conteúdo da imagem.

---

# Links entre as páginas

Na página inicial:

```html
<a href="pages/quem-somos.html">
    Quem Somos
</a>
```

Dentro da pasta `pages/`:

```html
<a href="quem-somos.html">
    Quem Somos
</a>
```

Para voltar para a página inicial:

```html
<a href="../index.html">
    Início
</a>
```

Antes de finalizar sua tarefa, teste todos os links da sua página.

---

# Tecnologias

O projeto utiliza:

* **HTML5**
* **CSS3**
* **JavaScript** (puro, sem bibliotecas)
* **Plus Jakarta Sans e Space Grotesk** (fontes do Google Fonts, licença OFL, salvas em `css/fonts/`)
* **Material Symbols** (ícones, licença Apache 2.0, salvos em `css/fonts/`)
* **Git**
* **GitHub**

O projeto está sendo desenvolvido inicialmente com foco em **HTML e CSS**. O JavaScript será utilizado quando houver necessidade de interação e comportamento na página.

Todos os recursos são **gratuitos** e não precisam de instalação nem de chave de API.

---

# Como executar o projeto

Não é necessário instalar nenhuma ferramenta específica para visualizar o site.

Basta abrir:

```text
index.html
```

no navegador.

Também recomendamos utilizar a extensão **Live Server** no VS Code.

Com o Live Server, ao salvar uma alteração no código, o navegador pode atualizar automaticamente a página.

Dicas:

* Se uma alteração de CSS não aparecer, recarregue sem cache: **Ctrl + Shift + R**.

---

# Para quem está começando no CSS

Não precisa tentar decorar todas as propriedades CSS.

O mais importante neste projeto é entender o que cada propriedade está fazendo.

Por exemplo:

```css
.card {
    background-color: white;
    padding: 20px;
    margin: 20px;
    border-radius: 12px;
}
```

Aqui:

* `background-color`: define a cor do fundo;
* `padding`: espaço interno;
* `margin`: espaço externo;
* `border-radius`: arredonda os cantos.

Depois, podemos evoluir para Flexbox:

```css
.container {
    display: flex;
    gap: 20px;
}
```

E posteriormente para Grid:

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

A ideia é **aprender fazendo**.

Não há problema em consultar documentação, exemplos ou pedir ajuda para entender uma propriedade.

O importante é entender o código que está sendo utilizado.

---

# Git e GitHub

Cada integrante deve trabalhar na sua própria branch.

Antes de começar a trabalhar:

```bash
git pull
```

Depois de realizar suas alterações:

```bash
git status
```

Verifique os arquivos alterados:

```bash
git add .
```

Faça o commit:

```bash
git commit -m "feat: adiciona seção de clientes"
```

E envie sua branch:

```bash
git push
```

### Exemplos de mensagens de commit

```text
feat: adiciona estrutura da página de notícias
```

```text
feat: adiciona seção de clientes
```

```text
style: ajusta responsividade dos cards
```

```text
fix: corrige links da página de contato
```

```text
chore: organiza imagens do projeto
```

Procurem fazer commits pequenos e que representem uma alteração específica.

---

# Regras básicas do grupo

1. Cada integrante deve trabalhar principalmente na sua própria página.
2. Não apagar ou modificar o código de outra pessoa sem conversar antes.
3. Não alterar arquivos compartilhados sem avisar o grupo.
4. Manter o código organizado e indentado.
5. Utilizar a paleta de cores definida pelo projeto.
6. Utilizar imagens dentro da pasta `img/`.
7. Utilizar HTML semântico sempre que possível.
8. Testar os links antes de enviar a alteração.
9. Testar a página em diferentes tamanhos de tela.
10. Fazer commits pequenos e com mensagens claras.
11. Fazer `git pull` antes de começar uma nova sessão de desenvolvimento.
12. Em caso de conflito no Git, não apagar alterações de outra pessoa sem verificar primeiro.
13. Se tiver dúvida, perguntar antes de fazer uma alteração que possa afetar o restante do projeto.

---

# Controle das tarefas

As tarefas de cada página estão organizadas no **ClickUp**.

Cada integrante deve acompanhar sua tarefa para verificar:

* O que precisa ser desenvolvido;
* Conteúdo da página;
* Status da atividade;
* Pendências;
* Ajustes solicitados;
* Entrega.

Os tickets estão disponíveis na tabela de **Equipe e divisão das páginas** no início deste documento.

---

# Objetivo do projeto

Além de desenvolver o site, o projeto tem como objetivo praticar:

* Desenvolvimento Front-end;
* HTML semântico;
* CSS;
* Responsividade;
* JavaScript;
* Git e GitHub;
* Organização de projetos;
* Trabalho em equipe;
* Divisão de tarefas;
* Code review;
* Resolução de conflitos;
* Versionamento de código.

O projeto será desenvolvido de forma gradual, começando pela estrutura HTML e evoluindo posteriormente para CSS e JavaScript.

---

<sub>Projeto acadêmico — Engenharia de Software. Marcas e nomes citados pertencem aos seus respectivos donos e são utilizados apenas para fins educacionais.</sub>
