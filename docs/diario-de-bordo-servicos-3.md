# Diário de Bordo — Serviços 3 (Gestão Operacional) — 04/11/2026

**Data:** quarta-feira, 04/11/2026
**Responsável:** David
**Página:** `servicos-3.html` — Página 7, Serviços 3
**Etapa do dia:** adequação ao checklist de entrega final

---

## 1. Objetivo do dia

Revisar a página com a lista de conferência da entrega (tags obrigatórias, hierarquia de títulos, links, paleta de cores, imagens em minúsculo, diário de bordo e Git) e corrigir o que estava fora do padrão.

---

## 2. O que fiz hoje

### 2.1 Conferência das tags e dos títulos
- Verifiquei que a página já usava `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`.
- Constatei que **faltava o `<h3>`**, obrigatório no checklist (a página tinha só `<h1>` e `<h2>`).

### 2.2 Cards com `<h3>`
- Os 4 cards de "Gestão operacional na prática" eram mini-tabelas de uma única célula, com o título em `<th>`.
- Como `<h3>` não pode ficar dentro de `<th>` e esses cards não têm dados tabulares de verdade, **troquei as tabelas por `<section class="card">` com `<h3>` + `<p>`**.
- Migrei o visual para o CSS (`.card`, `.card h3`, `.card p`).
- A tabela "O que está incluso" permaneceu como `<table>`, porque ali os dados são tabulares.

### 2.3 Ajuste visual dos cards
O primeiro card novo ficou diferente das tabelas antigas. Resolvi:
- zerando as margens padrão do `<h3>` e do `<p>` (`margin: 0`);
- adicionando `padding` ao título e ao texto;
- definindo `font-size: 1rem` no `<h3>` para igualar o tamanho do título;
- removendo a borda completa do `<p>`, que formava um segundo retângulo dentro do card.

### 2.4 Escopo do CSS para não afetar o header e o footer
- A regra `img { ... }` valia para todas as imagens, incluindo as logos compartilhadas.
- Troquei para **`article img`**, que atinge só a imagem do serviço.

### 2.5 Cores
- Substituí as cores que eu havia escolhido (`#1c587f`, verde e vermelho) pelos valores `rgb(...)` da **paleta do README do grupo**: navy para títulos e botões, cinzas para textos e bordas, fundo claro da página.

### 2.6 Imagem
- Renomeei `img1.png` para **`gestora-orientando-equipe.png`** (minúsculo, com hífens e descritivo) e atualizei o `src` e o `alt`.
- Caminho relativo mantido: `../img/gestora-orientando-equipe.png`.

### 2.7 Pequenos ajustes de HTML
- Corrigi o espaço faltando em `rel="stylesheet"href=` no `<link>` da fonte.
- Troquei os `<section>` ao redor dos botões por `<div>`, já que não tinham título.

### 2.8 Versionamento no Git (04/11/2026)
- Enviei a página, a imagem e o diário de bordo para o repositório do grupo no GitHub.
- O commit continha apenas o meu trabalho, sem conflitos e sem alterar arquivos compartilhados.
- Fiz o envio **direto na branch `main`**, em vez de criar uma branch própria, como o README orienta. Aprendi o que é uma branch, por que cada integrante deve ter a sua e como seria o fluxo correto (`git switch -c`, `git commit`, `git push -u origin nome-da-branch`). Vou avisar o responsável do repositório sobre o envio.

---

## 3. Problemas do dia e soluções

| Problema | Causa | Solução |
|---|---|---|
| Faltava `<h3>` | Títulos dos cards estavam em `<th>` | Cards refeitos com `<h3>` + `<p>` |
| Card novo diferente dos outros | Margens padrão de `h3` e `p`, sem padding | `margin: 0`, `padding`, `font-size: 1rem` |
| Segundo retângulo dentro do card | `border` completo copiado do `td` | Removida a borda do `<p>` |
| Logos do header e do footer afetadas | Seletor `img` genérico | `article img` |
| Cores fora do padrão | Cores escolhidas por mim | Valores da paleta do README |
| Atributos colados no `<link>` | Espaço ausente | Espaço entre `rel` e `href` |

---

## 4. Decisões

- **Cores de hover dos botões:** mantive `rgb(28, 99, 0)` e `rgb(99, 0, 0)`, que não fazem parte da paleta. O README sugere o Navy claro `rgb(14, 56, 103)` para hover. Foi uma escolha minha e posso trocar se o grupo pedir.

---

## 5. Pendências

- [ ] Testar os links entre páginas depois de subir tudo no repositório
- [ ] Testar a página em tablet e celular
- [ ] Confirmar com o grupo se a fonte Manrope pode ficar (o padrão do projeto é Plus Jakarta Sans e Space Grotesk)
- [x] Subir no Git, incluindo a imagem da pasta `img/` (feito em 04/11/2026, direto na `main`)
- [ ] Avisar o responsável do repositório que o envio foi direto na `main` e usar branch nas próximas alterações
- [ ] Remover o `preconnect` duplicado do `<head>` (opcional)

---

## 6. Aprendizados do dia

- Checklist de entrega ajuda a achar o que passa despercebido, como o `<h3>` ausente.
- `<table>` serve para dados tabulares. Um bloco com título e descrição é melhor como `<h3>` + `<p>`.
- Elementos como `h3` e `p` trazem margens padrão do navegador, e é preciso zerá-las ao criar cards.
- Em projeto de equipe, seletores genéricos como `img` podem quebrar o trabalho dos outros, então devo escopá-los.
- Erros de digitação em atributos (como um espaço faltando) são silenciosos e fáceis de deixar passar.
