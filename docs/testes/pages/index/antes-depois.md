# Antes e depois — Home

**Antes:** a `index.html` do último commit do projeto (`c1fd8dd`), uma home simples, com o CSS escrito num `<style>` dentro da página. Hoje ela está guardada como `index-v3.html`, só como referência. No mesmo commit, a home completa ficava em `index-v2.html`, feita com Tailwind; foi dela que veio o conteúdo da versão final.
**Depois:** a versão final, fechada em 06/11/2026 (`index.html` + bloco `PÁGINA: index.html` do `css/style.css` + `js/home.js` + imagens em `img/noticias/`, `img/projetos/` e `img/clientes/`).

O relatório com os requisitos do professor está em [index.md](index.md).

---

## Resumo

| Parte | Antes (`index.html`) | Depois |
| --- | --- | --- |
| `<body>` | Sem classe | `<body class="pagina-index">` |
| CSS | `css/paleta.css`, `css/layout.css` e um `<style>` de 115 linhas no `<head>` | Só o `css/style.css` |
| Cores | Em hexadecimal, algumas fora da paleta (`#333`, `#555`, `#777`, `#f5f7fa`, `#00838f`, `#ccd3dc`) | Todas da paleta, em `rgb(...)` |
| Fontes | Arial no texto; Google Fonts carregado pela internet | Plus Jakarta Sans, Space Grotesk e os ícones em `css/fonts/`, pelo `style.css` |
| Scripts | `js/formulario.js` e `js/menu.js` | `js/acessibilidade.js` (no `<head>`), `js/home.js`, `js/menu.js` e `js/cookies.js` |
| Seções | 8 seções de texto, sem imagens | 8 seções com fotos, cards, filtro no FAQ e mapas |
| Imagens no conteúdo | Nenhuma | 13: a foto do topo, 3 das notícias, 3 dos projetos, 3 dos condomínios e 3 das pessoas |
| Projetos | Edifício Horizonte, Parque dos Ipês e Vila Nova Mogi, que não existiam em outra página | Alto dos Jardins, Alameda das Quaresmeiras e Reserva da Cantareira, iguais aos da página Projetos |
| Clientes | Só os três depoimentos, sem foto | Card com a foto do condomínio, o nome em `<h3>`, o depoimento e a foto da pessoa, iguais aos da página Clientes |
| Endereços | Texto em `<address>` e link "Ver mapa" | Cards com mapa do Google Maps em `<iframe>` e o link "Ver Mapa" |
| Logo | Sem `srcset` | 1x e 2x com `srcset` |
| Rodapé | Só "Páginas Internas" | "Páginas Internas" com "Orçamento de Hospedagem", menu "Docs" e links na linha do © |
| Nota de fonte | Não tinha | Nota no fim da página: conteúdo fictício e fonte das fotos |
| W3C | Não validado | HTML validado pelo líder em 06/11; `css/style.css` validado no W3C CSS Validator |

---

## 1. Estrutura do arquivo

### `<head>`

| Antes | Depois |
| --- | --- |
| `<meta charset="UTF-8">` | `<meta charset="utf-8">` |
| — | `<meta name="author" content="Grupo Êxito Condomínios">` |
| Favicon 32 px e ícone da Apple | Favicon 16 e 32 px e ícone da Apple |
| `<link rel="manifest">` | Retirado, como em todas as páginas |
| Google Fonts (texto e ícones), pela internet | Fontes locais, declaradas no `css/style.css` |
| `css/paleta.css` + `css/layout.css` + `<style>` | `css/style.css` |
| — | `<script src="js/acessibilidade.js">` |

A home completa (`index-v2.html`) carregava muito mais coisa no `<head>`: `css/paleta.css`, `css/home.css`, `css/efeitos.css`, `css/loading.css`, `css/acessibilidade.css`, `css/assistente.css`, os scripts `js/loading.js` e `js/efeitos.js`, o Tailwind pela internet e o `js/tailwind.config.js`. Nada disso ficou.

### Header

| Antes | Depois |
| --- | --- |
| Header compartilhado, sem o status do topo | Header compartilhado, com "Operação Digital Conectada" no topo |
| Logo sem `srcset` | Logo com `srcset` (1x e 2x), `width` e `height` |
| No menu do celular, "Início" levava para `index-v2.html` | "Início" leva para `index.html`, nos dois menus |

### Footer

| Antes | Depois |
| --- | --- |
| Logo e texto | Logo com `srcset`, texto e os selos "SUPERLÓGICA HUB" e "ROZENDO ADM" |
| Unidades em `<address>` | Unidades em `<div>`, com os mesmos dados |
| "Páginas Internas" com 7 links | 8 links (entrou "Orçamento de Hospedagem") e o botão "Solicitar Estudo Condominial →" |
| — | Menu "Docs" com o link "Painel do projeto" |
| `<p><small>© 2026…</small></p>` | © com os links "Política de Privacidade" e "Orçamento de Hospedagem", e a assinatura "EXECUTIVE EDITORIAL • PROPTECH MANAGEMENT" |

### Scripts no fim da página

| Antes | Depois |
| --- | --- |
| `js/formulario.js` (sem formulário na página) | — |
| `js/menu.js` | `js/home.js`, `js/menu.js` e `js/cookies.js` |

Na home completa (`index-v2.html`), o fim da página tinha ainda `js/formulario.js` (o formulário de proposta) e `js/assistente.js`. O `js/home.js` dela tinha 127 linhas, com o carrossel do topo. O de agora tem 36 linhas: o filtro do FAQ e a rolagem até a seção certa quando a página abre com âncora (ex.: `index.html#faq`).

---

## 2. Estrutura do conteúdo

| Seção | Antes | Depois |
| --- | --- | --- |
| Topo | `<h1>` "Inovando a forma de se viver em condomínio", texto, um botão e os 3 números numa `<dl>` | Selos acima do título, `<h1>` "Grupo Êxito Condomínios", a frase grande, o texto, dois botões, 3 indicadores em cards e, à direita, a foto da telemetria predial |
| Quem Somos | `<h2>`, texto e link | Caixa com ícone, rótulo, `<h2>`, texto e botão "Conheça a história e liderança" |
| Serviços | 3 `<article>` com texto, lista de itens e "Veja mais" | 3 `<article>` em card, com ícone, "PILAR 01" a "03", texto e "Veja mais" cobrindo o card inteiro. Sem a lista de itens |
| Notícias | 3 `<article>` iguais, com `<time>` | Uma notícia em destaque com foto e duas menores ao lado, cada uma com foto, data e etiqueta |
| Projetos | 3 cases de exemplo, só texto | 3 cards com foto, área, "O que o cliente queria", solução e resultado em 6 meses |
| Clientes | 3 `<figure>` com o depoimento | 3 `<article>` com foto do condomínio, nome em `<h3>` e `<figure>` com o depoimento e a foto da pessoa |
| FAQ | 5 `<details>` e um link para o WhatsApp | Filtro por assunto, os mesmos 5 `<details>` e um card de suporte com WhatsApp e link para a página FAQ |
| Endereços | 2 `<article>` com `<address>` e "Ver mapa" | Texto da presença regional à esquerda; 2 `<article>` com o endereço, o mapa em `<iframe>` e "Ver Mapa" |
| Fim da página | — | `<p class="ex-nota nota-fonte">` com a nota de conteúdo fictício e fonte das fotos |

O formulário "Solicitar Proposta Sob Medida", que ficava no fim da home completa (`index-v2.html`), foi para a página Contato.

### O topo da home completa

Na `index-v2.html`, a coluna da direita do topo era um "painel do síndico": barra de status, carrossel de 3 fotos (com setas, pontos e botão de pausa), dois indicadores e um rodapé. Agora é só uma foto:

```html
<div class="inicio__painel">
    <img class="inicio__foto" src="img/noticias/telemetria-predial.jpg" width="512" height="279"
        alt="Painel de telemetria predial com medidores de água e sensores">
</div>
```

### Um card de cliente

**Antes:**

```html
<figure>
    <blockquote>
        <p>"O atendimento é rápido, profissional e nos passa muita segurança. Recomendo sem dúvidas!"</p>
    </blockquote>
    <figcaption><strong>Mariana Santos</strong>, síndica do Condomínio Jardins</figcaption>
</figure>
```

**Depois:**

```html
<article class="ex-card cliente">
    <div class="foto-card">
        <img src="img/clientes/condominio-jardins.jpg" alt="Condomínio Jardins">
        <h3 class="ex-etiqueta ex-etiqueta--escura cliente__nome">CONDOMÍNIO
            <span>JARDINS</span></h3>
    </div>
    <figure class="cliente__corpo">
        <div class="ex-aspas" aria-hidden="true">“</div>
        <blockquote>
            <p class="ex-citacao">O atendimento é rápido, profissional e nos passa muita segurança.
                Recomendo sem dúvidas!</p>
        </blockquote>
        <figcaption class="cliente__autor">…</figcaption>
    </figure>
</article>
```

O nome do cliente é o `<h3>` do `<article>`. As aspas decorativas não são lidas pelo leitor de tela.

---

## 3. Texto

| Onde | Antes | Depois |
| --- | --- | --- |
| `<h1>` | "Inovando a forma de se viver em condomínio" | "Grupo Êxito Condomínios". A frase "Inovando a forma de se viver em condomínio" continua, em letras grandes, logo abaixo |
| Indicador de precisão | "99.8%", "Precisão no rateio e leitura" | "99.1%", "Rateio & leitura sem falhas" |
| Botão do topo | "Solicitar proposta sob medida" | "SOLICITAR PROPOSTA SOB MEDIDA" e, ao lado, "Nossos Serviços" |
| Subtítulo de Projetos | "Alguns dos empreendimentos administrados pelo Grupo Êxito." | "Conheça alguns dos empreendimentos e cases administrados com a excelência do Grupo Êxito Condomínios." |
| Subtítulo de Clientes | "…parcerias de longo prazo com o Grupo Êxito." | "…parcerias de longo prazo com o Grupo Êxito Condomínios." |
| Notícias | "Novas regras e tendências para Assembleias Virtuais em 2026", "Eficiência energética e redução de taxas com telemetria", "Segurança jurídica na terceirização predial" | "Nova lei do condomínio entra em vigor em 2026", "5 dicas para reduzir a inadimplência no seu condomínio", "Como resolver conflitos de barulho entre vizinhos", com link para cada matéria na página Notícias |
| Projetos | Edifício Horizonte Residencial, Parque dos Ipês Corporativo, Residencial Vila Nova Mogi | Alto dos Jardins, Alameda das Quaresmeiras, Reserva da Cantareira |
| Respostas do FAQ | Versões curtas | Versões completas, as mesmas da página FAQ |
| Fim da página | — | "Projetos, clientes e depoimentos fictícios, criados para um projeto acadêmico. Fotos dos clientes: geradas por inteligência artificial e de banco de imagens. Imagens dos projetos: Pixabay / gerado por IA." |

Os textos dos depoimentos e da chamada da Quem Somos continuaram os mesmos. Os textos dos três serviços ficaram um pouco mais longos.

---

## 4. CSS

### Onde fica

| Antes | Depois |
| --- | --- |
| `index.html`: `<style>` dentro da página, com regras sem prefixo (`body`, `h1`, `a`, `form`…) | Bloco `PÁGINA: index.html` do `css/style.css` (linhas 2722 a 3971) |
| `index-v2.html`: Tailwind pela internet, cerca de 700 classes de aparência no HTML (`text-sm`, `bg-white`…) e o `css/home.css` | Classes com nome do que é cada parte (`.inicio`, `.metricas`, `.servico`, `.noticia`, `.caso`, `.cliente`, `.faq`, `.endereco`) |
| Regras que valiam para qualquer página que carregasse o arquivo | Toda regra começa com `.pagina-index` |
| Tamanho e fonte dos textos definidos na página | Textos com os componentes do site (`.ex-titulo`, `.ex-sobretitulo`, `.ex-nota`, `.ex-numero`…). O bloco da página não muda tipografia |
| `@media (max-width: 800px)` | `@media` 640px, 768px e 1024px |

### O que saiu

| Recurso (da `index-v2.html`) | O que fazia |
| --- | --- |
| Tela de carregamento (`css/loading.css`, `js/loading.js`) | Aparecia enquanto a página carregava |
| Efeitos de entrada (`css/efeitos.css`, `js/efeitos.js`) | As seções começavam escondidas e só apareciam quando o script de efeitos rodava (19 marcações de efeito no HTML) |
| Parallax | O fundo e as fotos se mexiam com a rolagem |
| Assistente virtual (`css/assistente.css`, `js/assistente.js`) | O assistente virtual da página |
| Carrossel do topo | 3 fotos com setas, pontos e botão de pausa |
| Formulário de proposta | Foi para a página Contato |

No `css/style.css` saíram os blocos de efeitos, carregamento e assistente. Os scripts `loading.js`, `efeitos.js` e `assistente.js` ficaram em `js/legado/`, só como registro. Nenhuma página carrega esses arquivos.

### O que ficou

* O fundo do topo, com pontinhos ciano e um brilho redondo desfocado, feito só com CSS.
* Os efeitos de passar o mouse nos botões e nos cards.
* O contorno de foco do teclado no conteúdo (teal com halo branco).
* O botão de acessibilidade (com "pausar animações") e o aviso de cookies, que são componentes do site.

---

## 5. Como fica na tela

| Elemento | Antes | Depois |
| --- | --- | --- |
| Visual geral | Texto em Arial sobre fundo cinza-claro, cards brancos simples, sem fotos | O visual da home completa: fundo claro com pontinhos ciano no topo, cards com borda e sombra, fotos e ícones |
| Topo | Título, texto, um botão e três números | Selos, título com "condomínio" em destaque, dois botões, três indicadores em cards brancos e a foto da telemetria com cantos arredondados |
| Ao abrir a página | — (na `index-v2.html`: tela de carregamento e seções aparecendo aos poucos) | A página aparece inteira de uma vez |
| FAQ | Lista de perguntas | Botões de filtro por assunto; o ativo fica azul-marinho |
| Endereços | Texto e link | Cards com o mapa de cada unidade (proporção 4 por 3, cantos arredondados) |
| Cards de cliente | Só o texto do depoimento | Foto do condomínio com o nome numa etiqueta escura (segunda palavra em ciano), aspas, depoimento e foto redonda da pessoa |
| Logo do header e do rodapé | Uma versão só, sem `srcset` | Nítido (versões 1x e 2x) |
| Colunas | Lado a lado acima de 800px | Lado a lado a partir de 1024px; no celular, uma embaixo da outra |
