# Relatório de teste — Contato

| | |
| --- | --- |
| **Responsável** | Pablo |
| **Entregou para a 2ª fase?** | **Sim** |
| **Avaliação do líder (2ª entrega)** | **7 / 10** |
| **Situação** | **Fechada em 06/11/2026.** |
| **Arquivos finais** | `pages/contato.html` + bloco `PÁGINA: contato.html` do `css/style.css` (linhas 4458 a 4867) + `js/formulario.js` (envio, data e máscara do telefone) + foto do topo `img/contato/hero-contato.jpg` |
| **Antes e depois** | [antes-depois.md](antes-depois.md) |
| **Evidência W3C (HTML)** | [w3c-validator.pdf](w3c-validator.pdf) (06/11): **sem erros** |
| **Evidência W3C (CSS)** | [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) (06/11): o `css/style.css` inteiro validado no W3C CSS Validator |
| **Fora do escopo** | Header e footer (compartilhados, revisados à parte) |

---

## 1. Histórico

| Data | O que aconteceu |
| --- | --- |
| 04/11 | Primeira revisão. A página não veio pelo ClickUp; o "antes" é a versão que estava no projeto: título "Fale conosco", três blocos de contato (telefone e WhatsApp, e-mail e endereço), uma linha com o horário, um formulário (nome, telefone, e-mail, canal de preferência, assunto e mensagem) e os links das redes sociais |
| 04/11 | Problemas encontrados: telefone, e-mail, endereço e redes de outra empresa ("Grupo Êxito Imóveis"); assuntos de imobiliária no formulário ("Comprar imóvel", "Alugar imóvel"…); `js/formulario.js` desligado; nenhum campo `date` ou `number`; CSS próprio, com variáveis e regras sem prefixo. Decisão do líder: o formulário da home vem para a Contato e sai da home, e o telefone ganha uma máscara |
| 04/11 | O formulário "Solicitar Proposta Sob Medida" saiu da home e veio para a Contato, com o texto de vantagens ao lado, no mesmo visual. Ganhou os campos nº de unidades (`number`), assunto, melhor data para retorno (`date`) e mensagem. Os botões que levavam ao formulário da home agora levam para a Contato |
| 04/11 | Máscara do telefone no `js/formulario.js`: formata enquanto a pessoa digita, para fixo e celular, e aceita colar e apagar sem travar. O `pattern` continua conferindo o formato no envio |
| 04/11 | Página no padrão do site: topo `.ex-hero`, cabeçalho `.ex-cabecalho`, canais de atendimento em seis cards com os mesmos dados do header e do footer, seção "Equipe do projeto", `formulario.js` ligado, CSS isolado com `.pagina-contato`, sem variáveis, cores da paleta e largura de 1200px. A página passou a carregar só o `css/style.css` |
| 04/11 | Foto do topo: `img/contato/hero-contato.jpg` (1280 × 853 px, 110 KB) |
| 06/11 | O CSS do site passou a ser um arquivo único e editável, o `css/style.css`, dividido em blocos. As regras da página ficam no bloco `PÁGINA: contato.html`. Os arquivos separados usados durante o desenvolvimento foram para `css/legado/` e não são carregados por nenhuma página |
| 06/11 | O grupo ganhou um integrante, o Guilherme (Política de Privacidade). A seção "Equipe do projeto" passou a ter os 12 integrantes |
| 06/11 | Fonte da foto do topo na nota do fim da página: "Foto do topo: Pixabay / gerado por IA." |
| 06/11 | O campo "Mensagem" passou a ter `required`. Agora todos os campos do formulário são obrigatórios |
| 06/11 | Rodapé com o link "Orçamento de Hospedagem" (na lista "Páginas Internas" e na linha do ©) e o menu "Docs", com o link para o painel do projeto. O `js/acessibilidade.js` passou a ser carregado no `<head>`, como em todas as páginas |
| 06/11 | Correção pedida pelo W3C no `<select>` "Seu Papel no Condomínio": a primeira opção vinha escolhida com valor. Entrou a opção "Selecione o seu papel" (`value=""`), igual ao campo "Assunto" |
| 06/11 | Dados de contato: são de uma empresa real e ficam no site por decisão do líder, iguais em todas as páginas (telefone e WhatsApp, e-mail, os dois endereços, Instagram e Facebook) |
| 06/11 | Validação no W3C feita pelo líder: **sem erros** ([w3c-validator.pdf](w3c-validator.pdf)). No mesmo dia, o `css/style.css` inteiro foi validado no W3C CSS Validator ([`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf)). Página **fechada** |
| 06/11 | Fechamento: o rótulo "Mensagem" ganhou o "*" dos campos obrigatórios, e o comentário do CSS sobre o contorno de foco passou a citar só links e botões |

---

## 2. Requisitos do professor

OK = atende · ATENÇÃO = atende, mas pode melhorar · N/A = não se aplica a esta página

Os números de linha são do `pages/contato.html`, a não ser quando a linha diz "do CSS" (aí são do `css/style.css`) ou "do JS" (aí são do `js/formulario.js`).

### HTML5 e semântica

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<header>`, `<nav>`, `<footer>` | OK | Compartilhados (linhas 21, 56 e 374) |
| `<main>` | OK | `<main>` da linha 96 à 371, com as quatro seções e a nota |
| `<section>` | OK | Topo (98), Canais (113), Proposta (196) e Equipe (346), cada uma com título |
| `<article>` | OK | Os 6 cards de canal (linhas 123, 139, 149, 158, 167 e 176) |
| Cabeçalhos hierárquicos | OK | Um `<h1>` (102), `<h2>` nas seções (115, 208 e 347), `<h3>` nos 6 cards de canal e no card do formulário (261). Nenhum nível pulado |
| Links funcionais | OK | `tel:` (129), `mailto:` (145), WhatsApp (131 e 249), Instagram e Facebook (183 e 187, abrem em outra aba com `rel="noopener"`), a página de cada integrante (351 a 362) e o "Orçamento de Hospedagem" no rodapé (417 e 430) |

### Dados da empresa e do grupo

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Nome, endereço, e-mail e telefone da empresa | OK | Cards de telefone e WhatsApp (123), e-mail (139), horário (149), matriz (158), filial (167) e redes sociais (176) |
| Dados iguais em todo o site | OK | Os mesmos do header (linhas 25 a 46) e do footer (391 a 401): (11) 2564-9963, `contato@grupoexitocondominios.com.br`, R. Gonçalo Ferreira, 164, Sala 3, em Mogi das Cruzes, Av. Rio das Pedras, 3.409, em São Paulo, Instagram `grupoexito.condominios` e Facebook `grupoexitocondominios`. São dados de uma empresa real, mantidos por decisão do líder |
| Nome da empresa | OK | "Grupo Êxito Condomínios" no `<title>` (linha 7), na descrição (8), no `<h1>` (102 e 103) e no logo |
| Membros do grupo | OK | Seção "Equipe do projeto" (linhas 346 a 364) com os 12 integrantes e o link para a página de cada um |

### Formulário

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Formulário com validação do HTML5 | OK | `<form id="proposta-form" action="confirmacao.html" method="get">` (linha 268). O navegador confere os campos antes de enviar |
| Campos obrigatórios (`required`) | OK | Os 9 campos: nome (273), e-mail (278), telefone (284), condomínio (291), unidades (296), papel (300), assunto (311), data (323) e mensagem (328) |
| `type="email"` | OK | E-mail (linha 278) |
| `type="tel"` com `pattern` | OK | Telefone (linhas 283 a 286): `pattern="\(\d{2}\) \d{4,5}-\d{4}"`, `maxlength="15"` e um `title` com o formato esperado |
| `type="number"` | OK | Nº de unidades (linha 296), com `min="1"` e `max="2000"` |
| `type="date"` | OK | Melhor data para retorno (linha 323). A data mínima é o dia de hoje, preenchida quando a página abre (linhas 66 a 68 do JS) |
| `<select>` com primeira opção vazia | OK | "Selecione o seu papel" (301) e "Selecione o assunto" (312), as duas com `value=""` |
| `<label for>` em cada campo | OK | 9 rótulos, cada um ligado ao seu campo (linhas 271, 276, 282, 289, 294, 299, 310, 322 e 326) |
| Rótulo do campo "Mensagem" | OK | Como os outros campos obrigatórios, o rótulo tem "*" (linha 326) |
| Máscara do telefone | OK | Linhas 85 a 178 do JS: `(11) 2564-9963` para fixo e `(11) 98765-4321` para celular, enquanto a pessoa digita. Aceita colar com ou sem formatação, inclusive com o +55, e apagar com Backspace sem travar |
| Envio leva à confirmação com os dados | OK | `js/formulario.js` carregado na linha 436. No envio, guarda os campos no navegador e abre a `confirmacao.html` (linhas 10 a 43 do JS), com o tipo "Proposta personalizada" (linha 269). A data aparece como dd/mm/aaaa (linhas 79 a 83 do JS) |
| Assunto coerente com o tema | OK | Proposta de administração, boleto ou taxa condominial, assembleias, manutenção ou ocorrência e outros assuntos (linhas 313 a 317) |

### Multimídia

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `<video>`, `<audio>`, `<iframe>` | N/A | Não é obrigatório nesta página |

### Boas práticas

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Código validado no W3C (HTML) | OK | [w3c-validator.pdf](w3c-validator.pdf), de 06/11: **sem erros** |
| Imagens existem e o caminho está certo | OK | A foto do topo `img/contato/hero-contato.jpg` (linha 4484 do CSS) e o logo 1x e 2x existem |
| Imagens com `alt` | OK | As duas `<img>` da página são o logo, com `alt="Grupo Êxito Condomínios"` (linhas 54 e 378). Os ícones são de fonte e têm `aria-hidden="true"` |
| Imagens otimizadas (até 500 KB) | OK | A foto do topo tem 110 KB (1280 × 853 px) |
| Imagens corretamente nomeadas | OK | `hero-contato.jpg`: minúsculas, com hífen e nome que diz o que é |
| Logo nítido | OK | `<img>` do logo com `srcset` (1x e 2x) no header (linha 54) e no rodapé (linha 378) |
| Fonte de conteúdo não autoral | OK | Nota do fim (linhas 367 a 369): "Foto do topo: Pixabay / gerado por IA." |
| Navegação funcional e coerente | OK | Abre pelo menu e marca "Contato" com `aria-current="page"` (linhas 64 e 87). Os botões "Falar com Consultor" do site levam a `contato.html#proposta-form` (67, 88 e 418), e a página para 240px acima do formulário, para mostrar também o título do card (linha 4758 do CSS) |
| Acessibilidade | OK | Seções ligadas aos seus títulos com `aria-labelledby` (113, 196 e 346); aviso "(abre em nova aba)" só para o leitor de tela (253); botão de acessibilidade pelo `js/acessibilidade.js` (16); contorno de foco nos links e botões (linhas 4494 a 4499 do CSS) |
| Código sem sobras | OK | Todas as classes do bloco da página são usadas no HTML |

### Clareza e coerência

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Texto coerente com o tema | OK | Síndicos, conselheiros, moradores, gestão e propostas para condomínios |
| Coerência com o resto do site | OK | Os mesmos dados de contato do header e do footer; o formulário é o mesmo "Solicitar Proposta Sob Medida" que ficava na home |

### CSS

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Usa só o `css/style.css` | OK | Linha 15: `<link rel="stylesheet" href="../css/style.css">` |
| CSS isolado com `.pagina-contato` | OK | `<body class="pagina-contato">` (linha 19) e todas as regras do bloco `PÁGINA: contato.html` do `css/style.css` (linhas 4458 a 4867) com o prefixo, inclusive dentro dos dois `@media` |
| Topo com o componente do site | OK | `<section class="ex-hero">` (linha 98). A página só define a foto de fundo (linhas 4483 a 4485 do CSS) |
| Cabeçalho com o componente do site | OK | `<div class="ex-cabecalho">` (linha 114), com o subtítulo `.ex-subtitulo` (linha 116) |
| Largura do conteúdo | OK | Container do site `.ex-container` (linha 110), com 1200px |
| Cores da paleta | OK | Todas as cores do bloco da página são da paleta, em `rgb(...)` e `rgba(...)` |
| Sem `var()` | OK | Nenhum `var()` no bloco da página |
| Mesmo padrão de texto do site | OK | O bloco da página não muda fonte, tamanho, peso nem altura da linha. As variações usam componentes do site: cards (`.ex-card`), rótulos e campos (`.ex-rotulo`, `.ex-campo`), botões (`.ex-botao`), etiquetas (`.ex-etiqueta`), título (`.ex-titulo`) e notas (`.ex-nota`, `.ex-sobretitulo`) |
| Sem `<style>` nem `style="..."` no HTML | OK | Nenhum |
| Responsivo | OK | `@media` 640px (linha 4838 do CSS): canais e campos em 2 colunas; 1024px (linha 4859 do CSS): canais em 3 colunas e texto e formulário lado a lado |
| CSS validado no W3C CSS Validator | OK | O `css/style.css` inteiro foi validado em 06/11: [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) |

### Resumo

| OK | ATENÇÃO | N/A |
| :---: | :---: | :---: |
| 45 | 0 | 1 |

Todos os requisitos do professor que valem para esta página foram atendidos.
