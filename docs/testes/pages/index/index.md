# Relatório de teste — Home

| | |
| --- | --- |
| **Responsável** | Alexander |
| **Entregou para a 2ª fase?** | — |
| **Avaliação do líder (2ª entrega)** | — |
| **Situação** | **Fechada em 06/11/2026.** |
| **Arquivos finais** | `index.html` + bloco `PÁGINA: index.html` do `css/style.css` (linhas 2722 a 3971) + `js/home.js` + imagens em `img/noticias/`, `img/projetos/` e `img/clientes/` |
| **Antes e depois** | [antes-depois.md](antes-depois.md) |
| **Evidência W3C (HTML)** | [w3c-validator.pdf](w3c-validator.pdf) (06/11): validada pelo líder |
| **Evidência W3C (CSS)** | [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) (06/11): o `css/style.css` inteiro validado no W3C CSS Validator |
| **Fora do escopo** | Header e footer (compartilhados, revisados à parte) |

---

## 1. Histórico

| Data | O que aconteceu |
| --- | --- |
| 04/11 | A home completa (a antiga `index-v2.html`) passou a ser a `index.html`. A home simples que existia antes ficou só como referência, fora do site, e saiu do projeto no fechamento |
| 04/11 | Saiu o Tailwind: o carregamento do framework pela internet, o arquivo de configuração e as cerca de 700 classes prontas. Cada parte da página ganhou uma classe com nome que diz o que é (`.inicio`, `.metricas`, `.servicos`, `.noticias`, `.faq`…), com o prefixo `.pagina-index` |
| 04/11 | A home passou a usar o header e o footer das outras páginas, as cores da paleta em `rgb(...)` e os componentes de texto do site. Entraram os componentes `.ex-numero` (números em destaque) e os tamanhos e cores de ícone (`.ex-icone--pequeno`, `--grande`, `--ciano`, `--teal`, `--navy`) |
| 04/11 | O formulário "Solicitar Proposta Sob Medida" saiu da home e foi para a Contato. Os botões "Falar com Consultor" já levavam para lá |
| 06/11 | O CSS do site passou a ser um arquivo único e editável, o `css/style.css`, dividido em blocos. As regras da página ficam no bloco `PÁGINA: index.html`. Os arquivos separados foram para `css/legado/` e não são carregados por nenhuma página |
| 06/11 | Projetos e clientes iguais aos das páginas: a seção de projetos trocou os três cases de exemplo (Edifício Horizonte, Parque dos Ipês e Vila Nova Mogi) por Alto dos Jardins, Alameda das Quaresmeiras e Reserva da Cantareira, com os textos, resultados e imagens da página Projetos. A seção de clientes passou a usar as fotos dos condomínios e das pessoas da página Clientes, com os mesmos textos alternativos |
| 06/11 | O lugar da foto nos cards passou a se chamar `.foto-card`. Os subtítulos de Projetos e Clientes passaram a usar o nome completo, "Grupo Êxito Condomínios" |
| 06/11 | Nota no fim da página: conteúdo fictício e fonte das fotos dos clientes e das imagens dos projetos ("Pixabay / gerado por IA") |
| 06/11 | Mapas dos endereços: cada card da seção "Mais proximidade para uma gestão melhor" ganhou um mapa do Google Maps em `<iframe>`, com título para o leitor de tela e `loading="lazy"`. O `&` do endereço no `src` está escrito como `&amp;` |
| 06/11 | Home mais simples: saíram a tela de carregamento, as animações de entrada com o parallax e o assistente virtual, junto com as 19 marcações de efeito. No `css/style.css` saíram os blocos de efeitos, carregamento e assistente. Os scripts foram para `js/legado/`. Agora a página aparece inteira, mesmo se algum script falhar |
| 06/11 | Topo com uma foto só: a coluna da direita tinha um "painel do síndico" com carrossel de 3 fotos, dois indicadores e um rodapé. Agora mostra só a foto da telemetria predial. O `js/home.js` caiu de 127 para 36 linhas, e saíram 281 linhas de CSS do painel e do carrossel |
| 06/11 | Rodapé com o link "Orçamento de Hospedagem", na lista "Páginas Internas" e na linha do © |
| 06/11 | A foto `img/index/relatorios-financeiros.jpg`, que era um dos slides do carrossel, ficou sem uso e foi apagada, junto com a pasta `img/index/` |
| 06/11 | O `js/acessibilidade.js`, que a home já carregava, passou a ser carregado no `<head>` de todas as páginas. O botão de acessibilidade aparece no site inteiro |
| 06/11 | Título nos cards de cliente: o W3C avisava "Article lacks heading" nos três cards. O nome do cliente passou de `<span>` para `<h3>`, com as mesmas classes da etiqueta. No CSS, a etiqueta ganhou só `margin: 0`. A aparência não mudou |
| 06/11 | Validação no W3C feita pelo líder ([w3c-validator.pdf](w3c-validator.pdf)). No mesmo dia, o `css/style.css` inteiro foi validado no W3C CSS Validator ([`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf)) |
| 06/11 | Dados de contato conferidos: e-mail, telefone, WhatsApp, redes sociais e os dois endereços iguais aos das outras páginas |
| 06/11 | Rodapé com o menu **Docs**, logo abaixo de "Páginas Internas", com o link "Painel do projeto" |
| 06/11 | Página **fechada** |
| 06/11 | Fechamento: as fotos das notícias, dos clientes e das pessoas ganharam `width` e `height`, e a nota do fim passou a dar também a fonte das fotos do topo e das notícias (geradas por IA) |

---

## 2. Requisitos do professor

OK = atende · ATENÇÃO = atende, mas pode melhorar · N/A = não se aplica a esta página

Os números de linha são do `index.html`, a não ser quando a linha diz "do CSS" (aí são do `css/style.css`).

### HTML5 e semântica

| Requisito | Status | Evidência |
| --- | :---: | --- |
| `index.html` com resumo do tema, apresentação geral e menu principal | OK | Menu principal na linha 67 (e no celular, linha 90). O topo apresenta a empresa (linhas 110 a 197) com o resumo "Administração condominial moderna com governança executiva…" (linha 153). Depois vêm resumos de Quem Somos, Serviços, Notícias, Projetos, Clientes, FAQ e endereços, cada um com link para a sua página |
| `<header>`, `<nav>`, `<footer>` | OK | Compartilhados (linhas 28, 67, 90 e 1020). O rodapé tem mais dois `<nav>`: "Páginas do site" (1056) e "Documentação do projeto" (1070) |
| `<main>` | OK | `<main>` da linha 108 à 1017, com as oito seções e a nota |
| `<section>` | OK | Topo (110), Quem Somos (200), Serviços (231), Notícias (323), Projetos (487), Clientes (608), FAQ (702) e Cobertura (894), cada uma com título |
| `<article>` | OK | 14 cards: serviços (250, 273 e 296), notícias (347, 407 e 444), projetos (505, 538 e 571), clientes (626, 650 e 674) e endereços (943 e 976), cada um com o seu `<h3>` |
| Depoimentos | OK | Cada um é `<figure>` com `<blockquote>` (o texto) e `<figcaption>` (quem disse), nas linhas 632, 656 e 680 |
| Perguntas frequentes | OK | Cinco `<details>` com `<summary>` (linhas 733, 758, 778, 801 e 821), que abrem e fecham sem script |
| Cabeçalhos hierárquicos | OK | Um `<h1>` (144), com o nome da empresa. Cada seção tem o seu `<h2>` (213, 236, 331, 492, 613, 706 e 903), e os cards têm `<h3>`. Nenhum nível pulado |
| Links funcionais | OK | Botões e cards levam às páginas internas e às âncoras certas (`servicos-1.html`, `noticias.html#materia-1`, `projetos.html#financeira`…). Links externos com `target="_blank"` e `rel="noopener"` (874, 965 e 998). Rodapé com "Orçamento de Hospedagem" (1066 e 1079) e "Painel do projeto" (1073) |

### Formulário e multimídia

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Formulário validado | N/A | O formulário de proposta fica na Contato. Os botões da home levam para ele (`pages/contato.html#proposta-form`, linha 159) |
| `<iframe>` | OK | Dois mapas do Google Maps (linhas 959 e 992), cada um com `title` ("Mapa: Grupo Êxito Condomínios em Mogi das Cruzes…" e "…em São Paulo…") e `loading="lazy"` |
| `<video>`, `<audio>` | N/A | Não é obrigatório nesta página |

### Boas práticas

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Código validado no W3C (HTML) | OK | [w3c-validator.pdf](w3c-validator.pdf), de 06/11 |
| Imagens existem e o caminho está certo | OK | Foto do topo e das notícias em `img/noticias/` (`telemetria-predial.jpg`, `assembleias-virtuais.jpg` e `equipe-executiva.jpg`), projetos em `img/projetos/` (`alto-dos-jardins.jpg`, `alameda-das-quaresmeiras.jpg` e `reserva-da-cantareira.jpg`), clientes em `img/clientes/` (`condominio-jardins.jpg`, `condominio-aurora.jpg`, `empresarial-pinheiros.jpg`, `mariana.jpg`, `joao.jpg` e `carlos.jpg`) e o logo 1x e 2x. Todas existem |
| Imagens com `alt` | OK | Todas as imagens têm `alt`. Nos projetos, o `alt` descreve o card inteiro (linhas 509, 542 e 575) |
| Imagens otimizadas (até 500 KB) | OK | Todas abaixo de 240 KB. A maior é `empresarial-pinheiros.jpg` (237 KB); as fotos das pessoas têm de 7 a 10 KB; o logo, 7 KB (1x) e 19 KB (2x) |
| Tamanho declarado das imagens | OK | Todas as imagens do conteúdo têm `width` e `height` com o tamanho real do arquivo: a foto do topo (192), as das notícias (349, 409 e 446), as dos projetos e as dos clientes e das pessoas (628 a 688) |
| Imagens corretamente nomeadas | OK | Minúsculas, com hífen e nome que diz o que é |
| Logo nítido | OK | `<img>` do logo com `srcset` (1x e 2x) no header (linha 63) e no rodapé (linha 1024) |
| Fonte de conteúdo não autoral | OK | A nota do fim (linhas 1012 a 1016) diz que projetos, clientes e depoimentos são fictícios e dá a fonte de todas as fotos: clientes ("geradas por inteligência artificial e de banco de imagens"), projetos ("Pixabay / gerado por IA"), topo e notícias ("geradas por IA") |
| Navegação funcional e coerente | OK | Abre pelo logo e pelo menu e marca "Início" com `aria-current="page"` (linhas 68 e 92) |
| Acessibilidade | OK | Ícones decorativos com `aria-hidden="true"`; botões do filtro do FAQ com `aria-pressed` (715 a 724); aviso do filtro para o leitor de tela (`role="status"`, linha 727); "(abre em nova aba)" escondido na tela e lido pelo leitor (879, 971 e 1003); `js/acessibilidade.js` no `<head>` (linha 23) |
| Código sem sobras | OK | Sem carrossel, tela de carregamento, efeitos ou assistente. O `js/home.js` (36 linhas) tem só o filtro do FAQ e a rolagem até a âncora |

### Clareza e coerência

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Nome da empresa | OK | "Grupo Êxito Condomínios" no `<title>` (linha 7), no `<h1>` (146), nos subtítulos de Projetos (494) e Clientes (615), no logo e na nota do ©. "Grupo Êxito" só dentro de um depoimento (660), como na página Clientes |
| Texto coerente com o tema | OK | Administração de condomínios: serviços, notícias, cases, depoimentos, dúvidas e endereços |
| Coerência com o resto do site | OK | Projetos, clientes, fotos e depoimentos iguais aos das páginas Projetos e Clientes. Endereços e telefone iguais aos do rodapé e da Contato |
| Conteúdo fictício indicado | OK | Linha 1013: "Projetos, clientes e depoimentos fictícios, criados para um projeto acadêmico." |

### CSS

| Requisito | Status | Evidência |
| --- | :---: | --- |
| Usa só o `css/style.css` | OK | Linha 20: `<link rel="stylesheet" href="css/style.css">`. Sem framework de CSS |
| CSS isolado com `.pagina-index` | OK | `<body class="pagina-index">` (linha 26) e todas as regras do bloco `PÁGINA: index.html` do `css/style.css` (linhas 2722 a 3971) com o prefixo, inclusive dentro dos três `@media` |
| Cores da paleta | OK | Todas as cores do bloco da página são da paleta, em `rgb(...)` |
| Sem `var()` | OK | Nenhum `var()` no bloco da página |
| Mesmo padrão de texto do site | OK | O bloco da página não muda fonte, tamanho, peso, altura da linha nem maiúsculas. Os textos usam os componentes do site (`.ex-titulo`, `.ex-sobretitulo`, `.ex-subtitulo`, `.ex-nota`, `.ex-numero`, `.ex-citacao`, `.ex-autor`, `.ex-etiqueta`, `.ex-botao`, `.ex-card`) |
| Sem `<style>` nem `style="..."` no HTML | OK | Nenhum |
| Responsivo | OK | `@media` 640px (linha 3873 do CSS), 768px (linha 3940 do CSS) e 1024px (linha 3955 do CSS). As colunas lado a lado começam em 1024px |
| CSS validado no W3C CSS Validator | OK | O `css/style.css` inteiro foi validado em 06/11: [`docs/testes/pages/css/w3c-validator.pdf`](../css/w3c-validator.pdf) |

### Resumo

| OK | ATENÇÃO | N/A |
| :---: | :---: | :---: |
| 33 | 0 | 2 |

Todos os requisitos do professor que valem para esta página foram atendidos.
