# Relatório de teste — Confirmação

| | |
| --- | --- |
| **Responsável** | Página de apoio do site (não está na divisão das páginas do README) |
| **Entregou para a 2ª fase?** | Não se aplica |
| **Avaliação do líder (2ª entrega)** | _ / 10 (a definir pelo líder) |
| **Situação** | **Fechada em 06/11/2026.** |
| **Arquivos finais** | `pages/confirmacao.html` + bloco `PÁGINA: confirmacao.html` do `css/style.css` (linhas 5192 a 5509). Os dados mostrados vêm do `js/formulario.js` |
| **Antes e depois** | [antes-depois.md](antes-depois.md) |
| **Evidência W3C (HTML)** | Fica fora da validação, por decisão do líder (06/11) |
| **Evidência W3C (CSS)** | [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) (06/11): o `css/style.css` inteiro validado no W3C CSS Validator |
| **Fora do escopo** | Header e footer (compartilhados, revisados à parte) |

---

## 1. Histórico

| Data | O que aconteceu |
| --- | --- |
| — | Versão no projeto: tela que aparece depois de enviar um formulário. Um cartão com o tipo da solicitação, o título "Recebemos sua solicitação", o número do protocolo (com botão "Copiar"), o resumo do que foi preenchido e os botões "Voltar para a home", "Acompanhar pelo WhatsApp" e "Salvar comprovante"; ao lado, os "Próximos passos" em 4 etapas. Os dados vêm do `js/formulario.js`, guardados no navegador |
| 04/11 | O `js/formulario.js` foi ligado no formulário da Contato: a tela de confirmação volta a mostrar os dados enviados |
| 06/11 | Revisão completa. O HTML já estava bom. O CSS tinha as regras sem prefixo, variáveis (`var()`), cores fora da paleta (inclusive na versão para imprimir) e regras que mudavam tamanho, peso e espaçamento das letras. O título tinha um `style="..."` no HTML |
| 06/11 | Página no `css/style.css`: `<body class="pagina-confirmacao">`, `<main>` sem classe, CSS isolado com o prefixo (inclusive a impressão), cores da paleta em `rgb(...)` e textos com os componentes do site: número do protocolo em `.ex-numero`, número e prazo das etapas em `.ex-etiqueta`, descrições, aviso e contato em `.ex-nota`. O código da própria página passou a dar aos rótulos do resumo a classe `.ex-sobretitulo`. O `style="margin-top"` do título virou regra do CSS |
| 06/11 | O CSS do site passou a ser um arquivo único e editável, o `css/style.css`, dividido em blocos. As regras da página ficam no bloco `PÁGINA: confirmacao.html`. Os arquivos separados usados durante o desenvolvimento foram para `css/legado/` e não são carregados por nenhuma página |
| 06/11 | A regra de impressão deixou de citar o assistente virtual, que saiu do site. Continua escondendo o menu, o rodapé, os botões e o botão de acessibilidade |
| 06/11 | Rodapé com o link "Orçamento de Hospedagem", na lista "Páginas internas" e na linha do ©, e com o menu "Docs" ("Painel do projeto"). O `js/acessibilidade.js` passou a ser carregado no `<head>` de todas as páginas; esta já carregava |
| 06/11 | Decisão do líder: esta página fica fora da validação do W3C. No mesmo dia, o `css/style.css` inteiro foi validado no W3C CSS Validator ([`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf)) |
| 06/11 | Página **fechada** |

---

## 2. Requisitos do professor

OK = atende · N/A = não se aplica a esta página

Os números de linha são do `pages/confirmacao.html`, a não ser quando a linha diz "do CSS" (aí são do `css/style.css`) ou cita outro arquivo.

### HTML5 e semântica

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<header>`, `<nav>`, `<footer>` | OK | Compartilhados (linhas 21, 56 e 186) |
| `<main>` | OK | `<main>` da linha 96 à 183, com o cartão e os próximos passos |
| `<section>` | OK | Cartão principal em `<section>` ligado ao título por `aria-labelledby` (linha 101) |
| `<aside>` | OK | "Próximos passos" em `<aside>` ligado ao título (linha 147) |
| Cabeçalhos hierárquicos | OK | Um `<h1>` (108) no cartão e um `<h2>` (149) nos próximos passos. Nenhum nível pulado |
| Lista de etapas | OK | `<ol>` com 4 `<li>` (linhas 150 a 174) |
| Resumo dos dados | OK | Lista de definições `<dl>` (linha 129); cada campo vira um `<dt>` e um `<dd>` (linhas 278 a 284) |
| Ícone decorativo | OK | O "visto" em SVG tem `aria-hidden="true"` (linha 102) |
| Links funcionais | OK | "Voltar para a home" (133), WhatsApp (134), telefone e e-mail (176 e 177); os do menu e do rodapé funcionam, inclusive o "Orçamento de Hospedagem" (linhas 229 e 242) |

### Formulário e multimídia

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Recebe os dados do formulário | OK | O `js/formulario.js` guarda tipo, protocolo, data e campos no navegador (linha 37 do `formulario.js`) e abre esta página. O código da página (linhas 248 a 302) lê esses dados e mostra o tipo, o protocolo, a data, o primeiro nome no título e o resumo |
| Página aberta sem envio | OK | Sem dados, o protocolo e o botão "Copiar" ficam escondidos (linhas 256 a 261) e o resumo continua oculto |
| Botões do cartão | OK | "Copiar" copia o protocolo (linhas 293 a 300); o link do WhatsApp já leva o protocolo na mensagem (linhas 290 e 291); "Salvar comprovante" abre a impressão (linha 136) |
| Formulário validado | N/A | É requisito da página de contato |
| `<video>`, `<audio>`, `<iframe>` | N/A | Não é obrigatório nesta página |

### Boas práticas

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Código validado no W3C (HTML) | N/A | Fica fora da validação, por decisão do líder (06/11) |
| Imagens existem e o caminho está certo | OK | A página só tem o logo, 1x e 2x (`img/logo-grupo-exito-header.png` e `img/logo-grupo-exito-header@2x.png`) |
| Imagens com `alt` | OK | Logo com `alt="Grupo Êxito Condomínios"` (linhas 54 e 190) |
| Logo nítido | OK | `<img>` do logo com `srcset` (1x e 2x) no header (linha 54) e no rodapé (linha 190) |
| Fonte de conteúdo não autoral | N/A | A página não tem fotos nem conteúdo de terceiros |
| Navegação funcional e coerente | OK | Menu do site; nenhum item marcado, porque a página não está no menu. Ela abre depois de enviar o formulário da Contato |
| Aviso de projeto acadêmico | OK | Linhas 140 a 143: "Projeto acadêmico: nenhum dado foi enviado. As informações ficam só neste navegador e somem ao fechar a aba." |
| Comentários do HTML | OK | Nenhum comentário cita arquivos de CSS |
| Indentação | OK | 4 espaços |

### Clareza e coerência

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Nome da empresa | OK | "Grupo Êxito Condomínios" no `<title>` (linha 7) e na descrição (linha 8); "Grupo Êxito" no texto do cartão (linha 112) |
| Dados de contato | OK | (11) 2564-9963 e `contato@grupoexitocondominios.com.br` (linhas 176 e 177), iguais aos do header e do rodapé |
| Texto coerente com o tema | OK | Etapas de atendimento de condomínio: análise, contato e proposta |

### CSS

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Usa só o `css/style.css` | OK | Linha 15: `<link rel="stylesheet" href="../css/style.css">` |
| CSS isolado com `.pagina-confirmacao` | OK | `<body class="pagina-confirmacao">` (linha 19) e todas as regras do bloco `PÁGINA: confirmacao.html` (linhas 5192 a 5509 do CSS) com o prefixo, inclusive dentro dos `@media` e da impressão. A animação do "visto" tem nome próprio, `confirmacao-traco` (linha 5279 do CSS) |
| Cores da paleta | OK | Todas as cores do bloco da página são da paleta, em `rgb(...)`, inclusive na impressão (azul-marinho no lugar do preto) |
| Sem `var()` | OK | Nenhum `var()` no bloco da página |
| Mesmo padrão de texto do site | OK | O bloco da página não muda fonte, tamanho, peso nem espaçamento das letras. Título em `.ex-titulo`, protocolo em `.ex-numero`, número e prazo das etapas em `.ex-etiqueta`, rótulos em `.ex-sobretitulo`, descrições, aviso e contato em `.ex-nota` |
| Sem `<style>` nem `style="..."` no HTML | OK | Nenhum. O espaço do título está no CSS (linha 5287 do CSS) |
| Versão para imprimir | OK | `@media print` (linha 5483 do CSS): esconde menu, rodapé, botões e o botão de acessibilidade, tira a sombra e imprime em azul-marinho sobre branco |
| Responsivo | OK | Duas colunas a partir de 960px (linha 5228 do CSS) e uma no celular; cartão com menos espaço até 640px (linha 5244 do CSS); resumo em duas colunas a partir de 640px (linha 5335 do CSS) |
| CSS validado no W3C CSS Validator | OK | O `css/style.css` inteiro foi validado em 06/11: [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) |

### Resumo

| OK | N/A |
| :---: | :---: |
| 31 | 4 |

Nenhum requisito do professor deixou de ser atendido. Os itens N/A não se aplicam a esta página; a validação do HTML no W3C ficou de fora por decisão do líder.
