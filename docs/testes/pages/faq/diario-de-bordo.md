# Diário de bordo: página de FAQ

**Data:** 07/11/2026
**Arquivo:** `faq.html`

## O que foi feito
1. Criei a página de perguntas frequentes da administradora, com 10 perguntas e respostas sobre transição de administradora, controle financeiro, aplicativo, assembleias, SLA, papel do síndico, prestação de contas, cobrança, manutenção e serviços incluídos.
2. Cada pergunta é um `<details>` com `<summary>`, então abre e fecha sem JavaScript. A primeira já começa aberta (atributo `open`).
3. Usei o mesmo header, menu e versão mobile da home. O link "FAQ" do menu está marcado com `aria-current="page"`.
4. Fiz o topo com foto (componente `.ex-hero`), com o título "Perguntas frequentes sobre a administração".
5. Adicionei a caixa "Qualquer dúvida?" com botão do WhatsApp, e o crédito da foto do topo (Pixabay).

## Pendências / decisões
- O CSS que tenho é da página inicial: todas as regras começam com `.pagina-index`, e o `<body>` desta página usa `.pagina-faq`. Preciso adaptar os seletores.
- As classes do CSS não batem com o HTML (`.faq__item` x `.pergunta`, `.faq__resposta` x `.resposta`, `.faq__seta` x `.sinal`, `.suporte` x `.duvida`).
- Os botões de filtro e o card de suporte do CSS não existem no HTML novo. Decidir se removo ou se volto com eles.
- Confirmar se os dados das respostas (migração em 48 horas, retorno em até 2 horas úteis, plantão 24h) são fictícios ou reais.

## Aprendizados
- `<details>` e `<summary>` criam um acordeão (abre e fecha) só com HTML.
- Começar o CSS com a classe do `<body>` (`.pagina-faq`) limita o estilo àquela página.
- `aria-current="page"` indica o link da página atual, e `aria-hidden="true"` esconde ícones decorativos de leitores de tela.
