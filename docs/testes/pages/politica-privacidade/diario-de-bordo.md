# Diário de Bordo: Desenvolvimento Web

**Projeto:** Refatoração e Padronização Semântica / Visual  
**Cliente:** Grupo Êxito Condomínios  
**Página:** Política de Privacidade (privacidade.html)  
**Data:** Outubro de 2026

## 1. Diagnóstico Inicial
O código fonte inicial enviado para análise apresentava uma estrutura base em HTML5 e CSS customizado (usando variáveis :root), porém encontrava-se incompleto (cortado ao final do cabeçalho) e com oportunidades de melhoria em acessibilidade, semântica e alinhamento de marca.

## 2. Registro de Modificações e Evolução

| Etapa | Foco da Atividade | Implementação Técnica | Motivação / Objetivo |
| :---: | :--- | :--- | :--- |
| **01** | Correção de Estrutura Cortada | Fechamento das tags órfãs e reconstrução do escopo global do documento (`<body>`, `<main>`, `<footer>`, `</html>`). | Garantir a renderização correta e a validação do código nos navegadores. |
| **02** | Injeção de Tags Semânticas | Introdução das tags `<nav>` (menu), `<section>` (divisões de tópicos) e `<article>` (conteúdo isolável). | Melhorar o SEO e a leitura por tecnologias assistivas (leitores de tela). |
| **03** | Ajuste da Hierarquia de Títulos | Reorganização linear dos cabeçalhos utilizando estritamente a ordem funcional: `<h1>` -> `<h2>` -> `<h3>`. | Garantir conformidade com as diretrizes de acessibilidade (WCAG). |
| **04** | Conectividade de Links | Criação de uma barra de navegação interna e inserção de links cruzados no texto (`index.html`, `contato.html`, `servicos.html`). | Tornar os links funcionais e simular a experiência real de navegação do ecossistema do site. |
| **05** | Substituição Completa da Paleta | Mapeamento das variáveis antigas (tons verdes) e aplicação exata da nova paleta corporativa baseada em tons Navy, Cerceta e Ciano. | Garantir consistência de marca (identidade visual idêntica à do site principal). |
| **06** | Refinamento de Interação (Hover / Foco) | Configuração de transições suaves (`transition`) e comportamentos visuais de hover distintos para links em fundo claro e escuro. | Otimizar a experiência visual e a usabilidade do usuário. |

## 3. Mapeamento Final da Paleta de Cores Aplicada
As cores foram distribuídas de forma estratégica para manter o contraste regulamentar e o padrão estético do Grupo Êxito:

* **Fundo Geral:** `rgb(248, 250, 253)` (Fundo claro e limpo para leitura confortável).
* **Blocos Estruturais (Header/Footer):** `rgb(6, 21, 45)` (Marinha profundo para passar solidez e profissionalismo).
* **Títulos das Seções (<h2>):** `rgb(6, 21, 45)` (Texto forte com separador horizontal em `rgb(226, 232, 240)`).
* **Subtítulos (<h3>) e Links:** `rgb(0, 104, 118)` (Cerceta, garantindo destaque sem perder o contraste).
* **Elementos Ativos / Hover do Menu:** `rgb(0, 188, 212)` (Ciano elétrico para indicar interatividade no fundo escuro).
* **Texto do Corpo:** `rgb(71, 85, 105)` (Cinza azulado suave, reduzindo a fadiga visual durante a leitura da política).

## 4. Status Atual do Entregável
* **Código:** 100% estruturado, limpo e validado.
* **Semântica HTML5:** Plenamente aplicada.
* **Responsividade:** Mantida através de propriedades flexíveis (`clamp` e `flexbox`).
