# Grupo Êxito Condomínios — Site Institucional

Projeto acadêmico do curso de Engenharia de Software. O grupo desenvolveu o site institucional de uma administradora de condomínios, o **Grupo Êxito Condomínios**, usando HTML, CSS e JavaScript.

O site não é o site oficial da empresa e não tem finalidade comercial. Clientes, depoimentos, projetos, resultados e notícias foram criados pelo grupo para o trabalho.

O nome da empresa é escrito sempre do mesmo jeito: **Grupo Êxito Condomínios**.

---

## Objetivos

- Construir em equipe um site com 12 páginas interligadas, com a mesma identidade visual.
- Praticar HTML semântico, CSS responsivo e JavaScript sem bibliotecas.
- Trabalhar com Git e GitHub: commits, pull, resolução de conflitos e histórico.
- Dividir tarefas, revisar o trabalho dos colegas e documentar o processo.
- Fazer o orçamento de hospedagem e domínio para publicar o site.

---

## Equipe e divisão das páginas

O grupo tem 12 integrantes. Cada um ficou responsável por uma página. O Alexander, além da Home, fez a coordenação, a revisão das páginas e a organização do CSS.

| Página | Arquivo | Responsável | Tarefa |
| --- | --- | --- | --- |
| Home | `index.html` | Alexander | [ClickUp](https://app.clickup.com/t/90171541460/86e39d6z7) |
| Quem Somos | `pages/quem-somos.html` | Anthony | [ClickUp](https://app.clickup.com/t/90171541460/86e39d6z6) |
| Serviços | `pages/servicos.html` | João | [ClickUp](https://app.clickup.com/t/90171541460/86e39dj5t) |
| Gestão Administrativa (Serviços 1) | `pages/servicos-1.html` | Arthur | [ClickUp](https://app.clickup.com/t/90171541460/86e39djak) |
| Gestão Financeira (Serviços 2) | `pages/servicos-2.html` | Felipe Dias | [ClickUp](https://app.clickup.com/t/90171541460/86e39djcu) |
| Gestão Operacional (Serviços 3) | `pages/servicos-3.html` | David | [ClickUp](https://app.clickup.com/t/90171541460/86e39djf1) |
| Clientes | `pages/clientes.html` | Gabriel | [ClickUp](https://app.clickup.com/t/90171541460/86e39dj32) |
| Projetos | `pages/projetos.html` | Felipe Gabriel | [ClickUp](https://app.clickup.com/t/90171541460/86e39djva) |
| Notícias | `pages/noticias.html` | Enzo | [ClickUp](https://app.clickup.com/t/90171541460/86e39dk07) |
| FAQ | `pages/faq.html` | Evandro | [ClickUp](https://app.clickup.com/t/90171541460/86e39djn2) |
| Contato | `pages/contato.html` | Pablo | [ClickUp](https://app.clickup.com/t/90171541460/86e39djrr) |
| Política de Privacidade | `pages/politica-privacidade.html` | Guilherme | ClickUp |

O Guilherme (Guilherme Santos Peixoto Muniz, RGM 46924507) entrou no grupo na 2ª fase, com a Política de Privacidade. A lista completa da equipe também aparece na página Contato.

Além dessas páginas, o site tem:

- `pages/confirmacao.html`: tela mostrada depois que o formulário da Contato é enviado.
- `pages/orcamento-hospedagem.html`: orçamento de hospedagem e domínio, com link no rodapé.

O andamento, a nota e a documentação de cada página ficam no [painel do projeto](paginas.html), que também tem link no rodapé do site, no menu **Docs**.

---

## O site

| Página | O que tem |
| --- | --- |
| Home | Apresentação da empresa, serviços, notícias, três projetos, clientes com depoimentos, perguntas frequentes com filtro e os endereços com mapa |
| Quem Somos | Missão, visão, valores, vídeo de um especialista e diferenciais |
| Serviços | Os três serviços em cards, tabela comparativa e chamada para orçamento |
| Gestão Administrativa, Financeira e Operacional | Uma página para cada serviço, com benefícios, como funciona e o que está incluso |
| Clientes | Condomínios e empresas atendidos e depoimentos |
| Projetos | Nove projetos em três áreas, com o pedido do cliente, o que foi feito e o resultado |
| Notícias | Notícias sobre condomínios, com a matéria completa na própria página |
| FAQ | Dez perguntas sobre a administração de condomínios |
| Contato | Dados da empresa, formulário com validação e a equipe do projeto |
| Política de Privacidade | Como os dados de síndicos e moradores são tratados |
| Orçamento de hospedagem | Comparação de três hospedagens e três domínios, e a escolha do grupo |

Recursos que aparecem em todas as páginas:

- Menu igual em todo o site. No celular, ele vira um botão (`js/menu.js`).
- Aviso de cookies na primeira visita, com link para a Política de Privacidade (`js/cookies.js`).
- Botão de acessibilidade, com tamanho do texto, leitura em voz alta, alto contraste e outros ajustes (`js/acessibilidade.js`). A escolha fica salva no navegador.
- Rodapé com os endereços, as páginas do site e o menu Docs.

---

## Estrutura de pastas

```text
grupoexitocondominios/
├── index.html                  Home
├── index-v3.html               Primeira versão da home, guardada como registro
├── favicon.ico
├── css/
│   ├── style.css               CSS do site inteiro
│   ├── fonts/                  Fontes e ícones (.woff2)
│   └── legado/                 CSS separado usado durante o desenvolvimento (não é carregado pelo site)
├── js/
│   ├── menu.js                 Menu do celular
│   ├── cookies.js              Aviso de cookies
│   ├── acessibilidade.js       Botão de acessibilidade
│   ├── formulario.js           Envio do formulário, máscara de telefone e tela de confirmação
│   └── home.js                 Filtro das perguntas frequentes da Home
├── assets/
│   └── video.mp4               Vídeo da Quem Somos
├── img/
│   ├── favicon/                Ícones do site
│   ├── <pagina>/               Uma pasta para as imagens de cada página
│   └── logo-grupo-exito-header.png (e a versão @2x)
├── pages/                      As páginas internas
└── docs/
    ├── README.md               Este documento
    ├── paginas.html            Painel do projeto
    ├── diario-de-bordo/        Diário do grupo e resumo do diário de cada página
    ├── hospedagem/             Planilha, prints e PDF do orçamento de hospedagem
    ├── testes/                 Revisão do site e, em pages/<pagina>/, o relatório, o antes e depois, o diário do integrante e a validação W3C
    └── aula/                   Material de apoio sobre Git
```

---

## CSS

### Um arquivo só

O site inteiro usa um único arquivo, `css/style.css`. Toda página carrega só ele:

```html
<link rel="stylesheet" href="../css/style.css">   <!-- páginas em pages/ -->
<link rel="stylesheet" href="css/style.css">      <!-- index.html -->
```

O arquivo é dividido em blocos, e cada bloco começa com um título num comentário:

| Bloco | Conteúdo |
| --- | --- |
| `BLOCO GLOBAL` | Fontes, paleta (em comentário, para consulta), padrão das tags e componentes `.ex-*` |
| `BLOCO HEADER` | Menu do topo, no computador e no celular |
| `BLOCO FOOTER` | Rodapé |
| `COMPONENTE: acessibilidade` e `COMPONENTE: cookies` | Botão de acessibilidade e aviso de cookies |
| `PÁGINA: <nome>.html` | Um bloco por página |

Durante o desenvolvimento, cada parte ficava num arquivo separado, para cada integrante mexer só no seu. Conforme as páginas ficavam prontas, o CSS delas entrava no `style.css`. Os arquivos separados ficaram em `css/legado/`, como registro.

### Regras que o grupo seguiu

- O CSS de uma página fica no bloco dela, e toda regra começa com a classe do `<body>` da página. Assim uma página não muda a outra:

  ```html
  <body class="pagina-quem-somos">
  ```

  ```css
  .pagina-quem-somos .valores {
      display: flex;
      gap: 24px;
  }

  @media (max-width: 700px) {
      .pagina-quem-somos .valores {
          flex-direction: column;
      }
  }
  ```

- Nada de `<style>` dentro do HTML nem de `style="..."`.
- As cores são escritas em `rgb(...)` ou `rgba(...)`, sempre da paleta. O CSS não usa variáveis.
- Sombras usam o azul-marinho transparente da paleta, nunca preto.
- `h1`, `h2`, `h3`, `p`, `a`, `span` e `strong` têm o mesmo padrão em todo o site. O bloco de uma página não muda fonte, tamanho, peso, altura da linha nem maiúsculas. Texto com outro estilo usa um componente (veja abaixo).
- Num fundo escuro, a página só pode mudar a cor do texto, para branco ou ciano.
- O caminho de uma imagem no CSS parte da pasta `css/`, então começa com `../img/`.
- O site não depende de nenhuma biblioteca de CSS nem do Google Fonts. As fontes ficam em `css/fonts/`.

### Paleta de cores

| Cor | Valor | Uso |
| --- | --- | --- |
| Navy profundo | `rgb(6, 21, 45)` | Header, rodapé, botões principais |
| Navy superfície | `rgb(10, 30, 59)` | Cards sobre fundo escuro |
| Navy claro | `rgb(14, 56, 103)` | Hover e variações |
| Ciano elétrico | `rgb(0, 188, 212)` | Ícones, links ativos, detalhes |
| Teal | `rgb(0, 104, 118)` | Títulos de seção, links em fundo claro |
| Teal vibrante | `rgb(24, 168, 182)` | Gradientes e ilustrações |
| Ciano suave | `rgb(214, 247, 255)` | Fundo de etiquetas |
| Fundo | `rgb(248, 250, 253)` | Fundo da página |
| Superfície | `rgb(255, 255, 255)` | Cards e formulários |
| Superfície variante | `rgb(241, 245, 249)` | Blocos secundários e campos |
| Borda | `rgb(226, 232, 240)` | Bordas e divisórias |
| Texto | `rgb(6, 21, 45)` | Títulos e texto forte |
| Texto corpo | `rgb(71, 85, 105)` | Parágrafos |
| Texto secundário | `rgb(82, 96, 113)` | Legendas e textos de apoio |
| Texto suave | `rgb(148, 163, 184)` | Placeholders e metadados |
| Texto invertido | `rgb(255, 255, 255)` | Texto sobre fundo escuro |
| Sucesso | `rgb(16, 185, 129)` | Confirmação e WhatsApp |
| Alerta | `rgb(245, 158, 11)` | Avisos |
| Erro | `rgb(239, 68, 68)` | Erros de formulário |

### Padrão das tags

| Tag | Fonte | Tamanho | Cor |
| --- | --- | --- | --- |
| `body`, `p`, `li`, `td` | Plus Jakarta Sans, altura de linha 1.6 | 16px | Texto corpo, sobre o Fundo |
| `h1` | Plus Jakarta Sans, peso 800 | 44px (32px no celular) | Texto |
| `h2` | Plus Jakarta Sans, peso 700 | 32px (26px no celular) | Texto |
| `h3` | Plus Jakarta Sans, peso 700 | 20px | Texto |
| `a` | herda | herda | Teal, sublinhado; Navy claro no hover |
| `table`, `th`, `td` | herda | largura 100% | Bordas na cor Borda; `th` em negrito sobre a Superfície variante |

A Space Grotesk fica só nas etiquetas, rótulos e números.

### Componentes

Os componentes ficam no bloco GLOBAL e são iguais em todas as páginas:

| Classe | Uso |
| --- | --- |
| `.ex-container` | Conteúdo com até 1200px de largura, centralizado. O header e o rodapé vão até 1280px |
| `.ex-hero` | Topo da página, com foto de fundo, película azul-marinho, rótulo, título (`<h1>`) e texto curto. A foto de cada página fica no bloco dela |
| `.ex-cabecalho` | Primeiro bloco depois do topo: rótulo, título `<h2>` e texto de apoio |
| `.ex-botao`, `.ex-botao--primario`, `.ex-botao--secundario` | Botões |
| `.ex-card` | Cards |
| `.ex-etiqueta` | Etiquetas e selos |
| `.ex-campo`, `.ex-rotulo` | Campos e rótulos de formulário |
| `.ex-sobretitulo` | Rótulo pequeno em maiúsculas |
| `.ex-subtitulo` | Texto de apoio abaixo de um título |
| `.ex-nota` | Texto pequeno: legendas, cargos e a nota de fonte no fim da página |
| `.ex-aspas`, `.ex-citacao`, `.ex-autor` | Depoimentos |
| `.ex-numero` | Números em destaque, como "99.1%" e "24/7" |
| `.ex-icone--pequeno`, `--grande`, `--ciano`, `--teal`, `--navy` | Tamanho e cor dos ícones do Material Symbols |

Modelo do topo e do cabeçalho de uma página (a foto vai no bloco da página, no CSS):

```html
<main>
    <section class="ex-hero">
        <div class="ex-hero__pelicula"></div>
        <div class="ex-hero__conteudo">
            <span class="ex-hero__rotulo">Clientes</span>
            <h1 class="ex-hero__titulo">
                Empresas e condomínios
                <strong>que confiam no nosso trabalho.</strong>
            </h1>
            <p class="ex-hero__texto">Construímos parcerias de longo prazo.</p>
        </div>
    </section>

    <div class="ex-container">
        <section aria-labelledby="titulo-clientes">
            <div class="ex-cabecalho">
                <span class="ex-sobretitulo">Nossos clientes</span>
                <h2 id="titulo-clientes">Fazem parte da nossa história.</h2>
                <p class="ex-subtitulo">Atendemos condomínios e empresas.</p>
            </div>
            ...
        </section>
    </div>
</main>
```

```css
.pagina-clientes .ex-hero {
    background-image: url("../img/clientes/background-cond.jpg");
}
```

---

## HTML

Todas as páginas seguem o mesmo modelo:

- `<head>` com o título no formato "Nome da Página | Grupo Êxito Condomínios", o `style.css` e o `acessibilidade.js`.
- Header e rodapé iguais em todas as páginas. A página atual fica marcada no menu com `aria-current="page"`.
- Conteúdo dentro de `<main>`, com um só `<h1>` (o do topo), títulos em ordem (`h1`, `h2`, `h3`, sem pular nível) e `<section>` sempre com título.
- Cards em `<article>`, tabelas com `<caption>`, `<thead>` e `scope`, e imagens com `alt`.
- Indentação de 4 espaços.
- No fim da página, a nota com a fonte das imagens.
- Antes do `</body>`, o `menu.js`, o `cookies.js` e, na Contato e na Confirmação, o `formulario.js`.

As páginas foram validadas no [W3C Markup Validation Service](https://validator.w3.org/), e o `style.css` no [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). Os PDFs das validações ficam em `docs/testes/pages/<pagina>/w3c-validator.pdf`, e o do CSS em `docs/testes/pages/css/w3c-validator.pdf`.

---

## Formulário de contato

O formulário da página Contato usa a validação do próprio HTML5:

- campos obrigatórios com `required`;
- `type="email"`, `type="tel"`, `type="number"` (com `min` e `max`) e `type="date"`;
- `pattern` no telefone, com máscara enquanto a pessoa digita (`js/formulario.js`);
- `<label for>` em todos os campos.

O site não tem servidor. Ao enviar, o `formulario.js` guarda os dados no navegador e abre a página de confirmação, com o número do protocolo, o resumo do que foi enviado e os próximos passos.

---

## Imagens e multimídia

- Cada página tem a sua pasta de imagens, com o mesmo nome do arquivo: `img/clientes/`, `img/projetos/`... Na raiz de `img/` fica só o logo.
- Os nomes dos arquivos são em minúsculas, com hífen e sem acento. Nenhuma imagem passa de 500 KB.
- O logo tem duas versões (144×52 e 288×104), usadas com `srcset` para ficar nítido em qualquer tela.
- A fonte de cada imagem aparece na nota do fim da página.
- A Quem Somos tem um vídeo local, `assets/video.mp4`, com capa e controles. O crédito do autor fica na legenda.
- A Home mostra os dois endereços da empresa em mapas do Google Maps.

---

## Orçamento de hospedagem e domínio

O grupo comparou três hospedagens (HostGator, Hostinger e Umbler) e três domínios (`.com.br` e `.net.br` no Registro.br e `.com` na Hostinger). A comparação considera espaço, largura de banda, SSL, suporte e custo no primeiro ano.

A escolha foi o **Hostinger Single**, com o domínio **.com.br** no Registro.br, num total de **R$ 111,88 no primeiro ano**. É o menor custo, atende um site feito só com HTML, CSS e JavaScript, e pode passar para um plano maior na mesma empresa se o site crescer.

- Página no site: `pages/orcamento-hospedagem.html`.
- Relatório em PDF: `docs/hospedagem/orcamento-hospedagem-dominio.pdf`.
- Planilha com os dados de origem e os prints: `docs/hospedagem/`.

---

## Documentação

| Arquivo | Conteúdo |
| --- | --- |
| `docs/README.md` | Este documento |
| `docs/paginas.html` | Painel com todas as páginas: responsável, situação, nota e links para a documentação |
| `docs/diario-de-bordo/diario-de-bordo.md` | Diário do grupo, com decisões, aprendizados e dificuldades, e o resumo do diário de cada integrante |
| `docs/testes/revisao-manual.md` | Revisão do site inteiro |
| `docs/testes/pages/<pagina>/` | Relatório final da página, antes e depois, diário do integrante e validação W3C |
| `docs/hospedagem/` | Orçamento de hospedagem e domínio |

---

## Tecnologias

- HTML5, CSS3 e JavaScript, sem bibliotecas.
- Fontes Plus Jakarta Sans e Space Grotesk (licença OFL) e ícones Material Symbols (licença Apache 2.0), salvos em `css/fonts/`.
- Git e GitHub para o versionamento, e ClickUp para as tarefas.

---

## Como abrir o site

Não precisa instalar nada. Basta abrir o `index.html` no navegador.

No VS Code, a extensão Live Server abre o site e recarrega a página a cada alteração salva.

---

## Git

O fluxo de trabalho do grupo:

```bash
git pull                     # traz o que os colegas enviaram
git status                   # confere o que mudou
git add .
git commit -m "feat: adiciona seção de clientes"
git push
```

As mensagens de commit seguem um prefixo: `feat` para algo novo, `fix` para correção, `style` para ajuste visual, `docs` para documentação e `chore` para organização de arquivos.

Quando dois integrantes mudam o mesmo arquivo, o Git pede para resolver o conflito. A regra do grupo é nunca apagar a alteração de outra pessoa sem conferir antes.

---

## Regras do grupo

1. Cada integrante trabalha principalmente na sua página.
2. Header, rodapé, paleta e componentes são compartilhados: qualquer mudança neles é combinada com o grupo.
3. Não apagar nem alterar o código de outra pessoa sem conversar antes.
4. Código organizado e indentado, com HTML semântico.
5. Cores só da paleta e imagens só na pasta `img/`.
6. Testar os links e a página no computador e no celular antes de enviar.
7. Commits pequenos, com mensagens claras.

---

<sub>Projeto acadêmico de Engenharia de Software. Marcas e nomes citados pertencem aos seus donos e são usados apenas para fins educacionais.</sub>
