# Grupo Êxito Condomínios — Site Institucional

Projeto acadêmico do curso de Engenharia de Software. O grupo desenvolveu o site institucional de uma administradora de condomínios, o **Grupo Êxito Condomínios**, usando HTML, CSS e JavaScript.

O site não é o site oficial da empresa e não tem finalidade comercial. Clientes, depoimentos, projetos, resultados e notícias foram criados pelo grupo para o trabalho.

---

## Objetivos

- Construir em equipe um site com várias páginas interligadas e a mesma identidade visual.
- Praticar HTML semântico, CSS responsivo e JavaScript sem bibliotecas.
- Trabalhar com Git e GitHub: commits, pull, resolução de conflitos e histórico.
- Dividir as tarefas, revisar o trabalho dos colegas e documentar o processo.
- Fazer o orçamento de hospedagem e domínio para publicar o site.

---

## Equipe e divisão das páginas

O grupo tem 12 integrantes, e cada um ficou responsável por uma página. O Alexander, além da Home, coordenou o grupo e organizou o CSS do site.

| Página | Arquivo | Integrante | RGM |
| --- | --- | --- | --- |
| Home | `index.html` | Alexander Serafim | 049269569 |
| Quem Somos | `pages/quem-somos.html` | Anthony Gabriel Pereira dos Santos | 49353411 |
| Serviços | `pages/servicos.html` | João Vitor Rocha Silva | 47170867 |
| Gestão Administrativa | `pages/servicos-1.html` | Arthur Kassab Dias | 47137621 |
| Gestão Financeira | `pages/servicos-2.html` | Felipe Dias Gomes | 48814342 |
| Gestão Operacional | `pages/servicos-3.html` | David Oliveira dos Santos | 47235179 |
| Clientes | `pages/clientes.html` | Gabriel da Silva | 47771526 |
| Projetos | `pages/projetos.html` e as três páginas `projeto-*.html` | Felipe Gabriel Evangelista Alexandrias | 47251735 |
| Notícias | `pages/noticias.html` | Enzo Veríssimo | 47242493 |
| FAQ | `pages/faq.html` | Evandro Araujo Costa | 47300761 |
| Contato | `pages/contato.html` | Pablo Soares Gomes | 49150308 |
| Política de Privacidade | `pages/politica-privacidade.html` | Guilherme Santos Peixoto Muniz | 46924507 |

As tarefas de cada página ficaram no ClickUp. A equipe também aparece no fim da página Contato.

---

## O site

| Página | O que tem |
| --- | --- |
| Home | Apresentação da empresa, serviços, notícias, projetos, depoimentos de clientes, perguntas frequentes e os dois endereços com mapa |
| Quem Somos | Missão, visão, valores, vídeo de um especialista e diferenciais |
| Serviços | Os três serviços em cards e tabela comparativa |
| Gestão Administrativa, Financeira e Operacional | Uma página para cada serviço, com benefícios, como funciona e o que está incluso |
| Clientes | Condomínios e empresas atendidos e depoimentos |
| Projetos | Três áreas (Financeira, Operacional e Administrativa); cada uma abre uma página com três projetos, mostrando o que o cliente queria, o que foi feito e o resultado |
| Notícias | Destaque e lista de notícias, com a matéria completa na própria página |
| FAQ | Perguntas frequentes que abrem e fecham ao clicar |
| Contato | Dados da empresa, formulário com validação, redes sociais e a equipe do projeto |
| Política de Privacidade | Como os dados de síndicos e moradores são tratados |
| Confirmação | Tela mostrada depois que o formulário da Contato é enviado |
| Orçamento de hospedagem | Comparação de três hospedagens e três domínios, e a escolha do grupo |

Em todas as páginas:

- Menu igual no topo. No celular, ele vira um botão (`js/menu.js`).
- Aviso de cookies na primeira visita, com link para a Política de Privacidade (`js/cookies.js`).
- Botão de acessibilidade, com tamanho do texto, leitura em voz alta, alto contraste e outros ajustes (`js/acessibilidade.js`). A escolha fica salva no navegador.
- Rodapé com os endereços, as páginas do site e o link do orçamento de hospedagem.

---

## Estrutura de pastas

```text
grupoexitocondominios/
├── index.html                  Home
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
│   ├── <pagina>/               Imagens de cada página, numa pasta com o nome dela
│   └── logo-grupo-exito-header.png (e a versão @2x)
├── pages/                      Páginas internas
└── docs/
    ├── README.md               Este documento
    ├── paginas.html            Painel com todas as páginas
    ├── diario-de-bordo/        Diário do grupo (.md, .docx e .pdf)
    ├── hospedagem/             Planilha, prints e PDF do orçamento de hospedagem
    ├── testes/pages/<pagina>/  Diário do integrante e validação W3C de cada página
    └── aula/                   Material de apoio sobre Git
```

---

## CSS

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
| `PÁGINA: <nome>.html` | Um bloco para cada página |

Cada página tem uma classe no `<body>`, e as regras do bloco dela começam com essa classe. Assim o CSS de uma página não muda a outra:

```html
<body class="pagina-quem-somos">
```

```css
.pagina-quem-somos .valores {
    display: flex;
    gap: 24px;
}
```

As fontes ficam em `css/fonts/`, e o site não depende do Google Fonts. Um caminho de imagem no CSS parte da pasta `css/`, então começa com `../img/`.

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

### Fontes e componentes

- **Plus Jakarta Sans** nos títulos e textos; **Space Grotesk** nas etiquetas e números; ícones **Material Symbols**.
- `h1`, `h2`, `h3`, `p` e `a` têm um padrão definido no BLOCO GLOBAL.
- Componentes compartilhados, com o prefixo `.ex-`: `.ex-container` (conteúdo com até 1200px), `.ex-hero` (topo com foto), `.ex-botao`, `.ex-card`, `.ex-etiqueta`, `.ex-sobretitulo`, `.ex-subtitulo` e `.ex-nota` (textos pequenos e a nota de fonte no fim da página).

---

## HTML

- `<head>` com `lang="pt-BR"`, `charset`, `viewport`, título no formato "Nome da Página | Grupo Êxito Condomínios" e o `style.css`.
- Header e rodapé iguais em todas as páginas. A página atual fica marcada no menu com `aria-current="page"`.
- Tags semânticas: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`.
- Um `<h1>` por página e títulos em ordem (`h1`, `h2`, `h3`).
- Imagens com `alt` e caminhos relativos.
- No fim da página, a nota com a fonte das imagens.

As páginas são validadas no [W3C Markup Validation Service](https://validator.w3.org/) e o `style.css` no [W3C CSS Validator](https://jigsaw.w3.org/css-validator/). Os PDFs das validações ficam em `docs/testes/pages/<pagina>/w3c-validator.pdf`.

---

## Formulário de contato

O formulário da página Contato usa a validação do próprio HTML5:

- campos obrigatórios com `required`;
- `type="email"`, `type="tel"`, `type="number"` e `type="date"`;
- `pattern` no telefone, com máscara enquanto a pessoa digita (`js/formulario.js`);
- `<label for>` em todos os campos.

O site não tem servidor. Ao enviar, o `formulario.js` guarda os dados no navegador e abre a página de confirmação, com o resumo do que foi enviado e os próximos passos.

---

## Imagens e multimídia

- Cada página tem a sua pasta de imagens, com o mesmo nome do arquivo: `img/clientes/`, `img/projetos/`... Na raiz de `img/` fica só o logo.
- Os nomes dos arquivos são em minúsculas, com hífen e sem acento.
- A fonte das imagens aparece na nota do fim de cada página.
- A Quem Somos tem um vídeo local, `assets/video.mp4`, com capa e controles.
- A Home mostra os dois endereços da empresa em mapas do Google Maps (`<iframe>`).

---

## Orçamento de hospedagem e domínio

O grupo comparou três hospedagens (HostGator, Hostinger e Umbler) e três domínios (`.com.br` e `.net.br` no Registro.br e `.com` na Hostinger), considerando espaço, largura de banda, SSL, suporte e custo no primeiro ano.

A escolha foi o **Hostinger Single**, com o domínio **.com.br** no Registro.br, num total de **R$ 111,88 no primeiro ano**. É o menor custo, atende um site feito só com HTML, CSS e JavaScript e pode passar para um plano maior na mesma empresa se o site crescer.

- Página no site: `pages/orcamento-hospedagem.html`.
- Relatório em PDF: `docs/hospedagem/orcamento-hospedagem-dominio.pdf`.
- Planilha e prints: `docs/hospedagem/`.

---

## Documentação

| Arquivo | Conteúdo |
| --- | --- |
| `docs/README.md` | Este documento |
| `docs/paginas.html` | Painel com todas as páginas e links para a documentação |
| `docs/diario-de-bordo/` | Diário do grupo, com o que fizemos, aprendizados e dificuldades |
| `docs/testes/pages/<pagina>/` | Diário do integrante e validação W3C de cada página |
| `docs/hospedagem/` | Orçamento de hospedagem e domínio |

---

## Tecnologias

- HTML5, CSS3 e JavaScript, sem bibliotecas.
- Fontes Plus Jakarta Sans e Space Grotesk (licença OFL) e ícones Material Symbols (licença Apache 2.0), salvos em `css/fonts/`.
- Git e GitHub para o versionamento, e ClickUp para as tarefas.

---

## Como abrir o site

Não precisa instalar nada: basta abrir o `index.html` no navegador. No VS Code, a extensão Live Server abre o site e recarrega a página a cada alteração salva.

---

## Git

```bash
git pull                     # traz o que os colegas enviaram
git status                   # confere o que mudou
git add .
git commit -m "feat: adiciona seção de clientes"
git push
```

As mensagens de commit usam um prefixo: `feat` para algo novo, `fix` para correção, `style` para ajuste visual, `docs` para documentação e `chore` para organização de arquivos.

---

## Regras do grupo

1. Cada integrante trabalha principalmente na sua página.
2. Header, rodapé, paleta e componentes são compartilhados: qualquer mudança neles é combinada com o grupo.
3. Não apagar nem alterar o código de outra pessoa sem conversar antes.
4. Código organizado e indentado, com HTML semântico.
5. Cores da paleta e imagens só na pasta `img/`.
6. Testar os links e a página no computador e no celular antes de enviar.
7. Commits pequenos, com mensagens claras.

---

<sub>Projeto acadêmico de Engenharia de Software. Marcas e nomes citados pertencem aos seus donos e são usados apenas para fins educacionais.</sub>
