# Diário de bordo: servicos-1.html (Gestão Administrativa)

**Autor:** Arthur Kassab Dias  
**RGM:** 47317621  
**Data:** 07/11/2026

## 1. Visão geral

Página do serviço **Gestão Administrativa** do site do Grupo Êxito Condomínios. Ela apresenta o que a empresa faz na parte burocrática do condomínio (documentos, atas, contratos e processos), quais são os benefícios, como o serviço funciona e o que está incluso. Segue o mesmo visual da página `servicos.html`.

### Arquivos envolvidos

| Arquivo | Função |
|---|---|
| `pages/servicos-1.html` | A página em si |
| `css/servicos-1.css` | Estilo próprio da página |
| `css/paleta.css` e `css/layout.css` | Estilos compartilhados do site (layout.css cuida do cabeçalho e do rodapé) |
| `js/menu.js` | Abre e fecha o menu no celular |
| `img/reuniao.jfif` | Foto da seção de introdução |
| `img/logo-grupo-exito-header.png` | Logo do cabeçalho e do rodapé |

## 2. Estrutura da página

| Região | Tag | Conteúdo |
|---|---|---|
| Cabeçalho (compartilhado) | `header` | Faixa superior com telefone, e-mail e redes sociais. Barra com logo, menu principal, botão "Falar com Consultor" e menu mobile |
| Introdução | `section` | `h1`, dois parágrafos e a foto da reunião |
| Detalhes do serviço | `section` com dois `article` | Benefícios (lista) e Como funciona (lista numerada) |
| O que está incluso? | `section` | Tabela com os itens do serviço |
| Chamadas finais | `p` com links | Pedido de orçamento e botão de voltar para Serviços |
| Rodapé (compartilhado) | `footer` | Marca, endereços das unidades, links das páginas e direitos autorais |

Todo o conteúdo principal fica dentro de um único `main`.

### Hierarquia dos títulos

- `h1` Gestão Administrativa
  - `h2` Detalhes do serviço
    - `h3` Benefícios
    - `h3` Como funciona
  - `h2` O que está incluso?

## 3. Conteúdo da página

- **Introdução:** cuidamos da parte burocrática do condomínio (documentos, atas, contratos e organização dos processos), com uma equipe que dá praticidade e segurança à gestão.
- **Benefícios:** organização de documentos e atas; gestão de contratos com fornecedores; apoio nas reuniões; assessoria jurídica básica.
- **Como funciona:** 1) levantamento da situação atual; 2) organização da documentação; 3) acompanhamento mensal das obrigações; 4) relatório de atividades.
- **O que está incluso:**

| Item | Descrição |
|---|---|
| Atas e documentos | Organização e arquivamento digital |
| Contratos | Gestão de fornecedores e prestadores |
| Reuniões | Apoio na organização e realização das reuniões |

## 4. Tags usadas e para que servem

| Tag | Função na página |
|---|---|
| `header` | Agrupa o topo do site (contato, logo e menu) |
| `nav` | Marca os blocos de navegação: menu principal, menu mobile e links do rodapé |
| `main` | Conteúdo principal, único por página |
| `section` | Divide a página em blocos com um tema e um título cada |
| `article` | Conteúdo independente: os cards Benefícios e Como funciona |
| `footer` | Rodapé com informações institucionais e links |
| `h1`, `h2`, `h3` | Títulos em ordem hierárquica |
| `p` | Parágrafos de texto |
| `ul`, `ol`, `li` | Lista de benefícios (sem ordem) e passos (com ordem) |
| `img` | Foto e logo, sempre com texto alternativo (`alt`) |
| `table`, `thead`, `tbody`, `tr`, `th`, `td` | Tabela de itens inclusos, com cabeçalho e linhas |
| `a` | Links entre as páginas, telefone, e-mail e redes sociais |
| `button` | Botão do menu mobile |

## 5. CSS (`css/servicos-1.css`)

### Cores

Ficam todas em variáveis no `:root`, no topo do arquivo, e o resto do CSS só usa as variáveis. Para mudar uma cor em toda a página, basta mudar o valor ali.

| Variável | Valor | Uso |
|---|---|---|
| `--texto` | `#1c2b26` | Cor do texto |
| `--fundo` | `#fbfaf7` | Fundo da página |
| `--borda` | `#d9d6cc` | Bordas da tabela |
| `--destaque` | `#06152d` | Links, borda superior dos cards e foco do teclado |
| `--destaque-suave` | `#e8edf5` | Fundo do cabeçalho da tabela |

### Regras principais

- `body`: fonte Georgia (serifada), `line-height` de 1.6, cor e fundo pelas variáveis.
- `main`: largura máxima de 60rem, centralizado, com espaçamento interno.
- `h1`, `h2`, `h3`: tamanhos de 2rem, 1.3rem e 1.15rem.
- `.foto`: ocupa a largura toda, altura máxima de 22rem, `object-fit: cover` para a imagem não deformar.
- `.servicos`: grade (`grid`) com `repeat(auto-fit, minmax(16rem, 1fr))`. Os cards ficam lado a lado em telas grandes e empilham em telas pequenas, sem precisar de media query.
- `.servico`: card com borda superior de 3px na cor de destaque.
- `.tabela-wrapper`: `overflow-x: auto`, para a tabela rolar na horizontal em telas estreitas sem quebrar a página.
- `table`, `th`, `td`: bordas finas, espaçamento interno e cabeçalho com fundo suave.
- `a:focus-visible`: contorno visível quando o link é selecionado pelo teclado.

### Responsividade

A página usa `<meta name="viewport">`, imagem em `width: 100%`, grade que se reorganiza sozinha e tabela com rolagem horizontal. O menu do cabeçalho vira o botão de menu no celular.

## 6. JavaScript

O `js/menu.js` (compartilhado) controla o menu mobile. O botão com o atributo `data-menu-toggle` abre e fecha o `nav` de id `ex-menu-mobile` pela classe `is-open` e atualiza o `aria-expanded` do botão.

## 7. Links da página

- **Menu e rodapé:** Início (`../index.html`), Quem Somos, Serviços, Clientes, Projetos, Notícias, FAQ e Contato (todos em `pages/`).
- **Botão "Falar com Consultor" e link do rodapé:** `contato.html#proposta-form`.
- **No conteúdo:** "Solicite um orçamento sem compromisso." leva a `contato.html`, e "← Voltar para os serviços" leva a `servicos.html`.
- **Externos:** Instagram e Facebook, abrindo em nova aba com `rel="noopener"`.
- **Contato direto:** `tel:` no telefone e `mailto:` no e-mail.

## 8. Acessibilidade

- `lang="pt-BR"` na tag `html`.
- Texto alternativo em todas as imagens.
- `aria-label` nos blocos de navegação e `aria-current="page"` no item Serviços do menu.
- `aria-labelledby` ligando cada `section` e a tabela ao seu título.
- `th` com `scope="col"` e `scope="row"` na tabela.
- Contorno de foco visível nos links e hierarquia de títulos sem pular níveis.

## 9. Imagens

- `reuniao.jfif`: nome em minúsculas, com `alt="Reunião de equipe"`.
- `logo-grupo-exito-header.png`: nome em minúsculas, com `alt="Grupo Êxito Condomínios"`.

## 10. Histórico do desenvolvimento

A primeira versão da página tinha o conteúdo certo, mas o visual era diferente do restante do site e havia erros de código. O que foi feito para chegar à versão final:

1. **Visual:** o conteúdo de `css/servicos-1.css` foi substituído por um CSS no mesmo padrão de `servicos.html`. As classes antigas (`container`, `retangulo`, `botao`) sobrescreviam o estilo novo.
2. **Estrutura:** a página passou a usar `main`, `section` e `article`, com os títulos em ordem (`h1`, `h2`, `h3`). Foi criado o título "Detalhes do serviço" para que os `h3` tenham um `h2` acima.
3. **Menu mobile:** o `js/menu.js` estava comentado e foi ativado.
4. **Correções de código:**

| Antes | Depois |
|---|---|
| `<thread>` | `<thead>` |
| `<h2 text align="center">` (atributo inválido) | `<h2>`, estilizado pelo CSS |
| `<title>` com texto genérico | `<title>` descritivo, com o nome do serviço e da empresa |
| `<br>` e `<p></p>` vazio usados como espaçamento | Removidos, o espaçamento vem do CSS |
| "administratica" e "Acessoria" | "administrativa" e "Assessoria" |
| Primeira coluna da tabela com `<td>` | `<th scope="row">` |
| CSS e botões soltos na página | Links de texto simples, no padrão de `servicos.html` |

## 11. Critérios técnicos atendidos

| Critério | Como foi atendido |
|---|---|
| Uso correto de `header`, `nav`, `main`, `section`, `article` e `footer` | Todas as tags estão presentes, cada uma no seu papel (seção 2) |
| Cabeçalhos hierárquicos (`h1`, `h2`, `h3`) | Ordem respeitada, sem pular níveis (seção 2) |
| Links entre as páginas | Menu, rodapé, chamadas e botão de voltar (seção 7) |
| Nomes de imagens em minúsculas | `reuniao.jfif` e o logo (seção 9) |
| Cores em um só lugar | Variáveis no `:root` de `css/servicos-1.css` (seção 5) |
| Diário de bordo da página | Este arquivo, `diario-de-bordo.md` |
