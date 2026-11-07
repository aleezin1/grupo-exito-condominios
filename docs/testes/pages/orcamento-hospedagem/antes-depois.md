# Antes e depois — Orçamento de hospedagem

**Antes:** a planilha `docs/hospedagem/orcamento-hospedagem-dominio.xlsx`, de 14/10/2026, com os prints `hostgator.png`, `hostinger.png` e `umbler.png`. Não havia página no site nem versão enviada pelo ClickUp.
**Depois:** a versão final, fechada em 06/11/2026: `pages/orcamento-hospedagem.html` + bloco `PÁGINA: orcamento-hospedagem.html` do `css/style.css` + prints em `img/orcamento-hospedagem/` + a cópia em PDF `docs/hospedagem/orcamento-hospedagem-dominio.pdf`.

O relatório com os requisitos do professor está em [orcamento-hospedagem.md](orcamento-hospedagem.md).

---

## Resumo

| Parte | Antes | Depois |
| --- | --- | --- |
| Onde estava | Só na planilha, fora do site | Página do site, com link no rodapé de todas as páginas, e cópia em PDF |
| Hospedagens | HostGator, Hostinger e Umbler | As mesmas três, cada uma num card com o print e a tabela de recursos |
| Espaço em disco | Sim, copiado dos prints | Sim, na tabela de cada card |
| Largura de banda | Não tinha | Hostinger Single: 100 GB. HostGator e Umbler: "não informada no site". Hostinger Premium: "—", porque o dado não foi confirmado |
| SSL | Não tinha | Os três provedores |
| Suporte | Só a coluna "Suporte prioritário 24h" da Hostinger | Os três provedores |
| Domínios | Só o `.com.br` (R$ 40,00 por ano) | `.com.br`, `.net.br` e `.com`, com preço e onde registrar |
| Tabela comparativa | Aba "Resumo", com fórmulas | Tabela do primeiro ano na página, com a linha de menor custo destacada |
| Nomes dos planos da Umbler | Só na aba "Umbler"; vazios na aba "Resumo" | Nas duas tabelas, com a nota de que são nomes dados pelo grupo |
| Conclusão | Cinco itens, sem escolher um plano ("qualquer um dos dois atende") | O Hostinger Single é o escolhido, com custo-benefício, domínio, escalabilidade e o aviso do contrato |
| Fonte | Linha "Fonte: print da página…" em cada aba | Nota no fim da página e `alt` de cada print com a data da consulta |
| Topo | — | Componente do site `.ex-hero`, sem foto (fundo azul-marinho) |
| W3C | — | HTML fora da validação, por decisão do líder; `css/style.css` validado no W3C CSS Validator |

---

## 1. De onde vieram os dados

### A planilha de 14/10

| Aba | O que tinha |
| --- | --- |
| Resumo | 12 meses de orçamento, o `.com.br` a R$ 40,00 por ano, a comparação dos 12 planos (preço por mês, domínio grátis, hospedagem, domínio e total no período, contrato e observação), o menor custo achado por fórmula, a conclusão do grupo e a legenda das cores (azul = valor do print, preto = fórmula, verde = valor de outra aba) |
| HostGator | Planos P, M e Turbo no ciclo de 3 anos: desconto, preço por mês, total de 3 anos, economia, domínios grátis, sites, armazenamento, visitas por mês, contas de e-mail e servidores |
| Hostinger | Planos Single, Premium, Unlimited e Cloud Startup no contrato de 48 meses: preço normal e promocional, total do contrato, renovação, sites, armazenamento, domínio, backups, comércio eletrônico, CDN, ferramentas de IA e suporte prioritário |
| Umbler | Cinco opções do plano elástico (de R$ 29 a R$ 275 por mês): custo de 12 meses, RAM, disco SSD, CPU e banco de dados |

O que faltava na planilha: SSL, largura de banda e suporte de todos os provedores, mais dois domínios com extensões diferentes e a escolha de um plano.

### A consulta de 06/11

Completamos o que faltava nos sites das empresas e no Registro.br:

| Dado | Resultado |
| --- | --- |
| SSL | HostGator: grátis em todos os planos. Hostinger: grátis e ilimitado em todos os planos. Umbler: grátis (Let's Encrypt) |
| Suporte | HostGator: 24 horas, por chat e ticket. Hostinger: 24 horas, por chat em português. Umbler: pelo painel do cliente (chamado) |
| Largura de banda | Hostinger Single: 100 GB. A HostGator mostra só as visitas por mês (até 80 mil no Plano P), e a Umbler não informa |
| `.net.br` | Registro.br, R$ 40,00 por ano |
| `.com` | Hostinger, R$ 0,01 no 1º ano e R$ 94,99 por ano na renovação |

Os preços, o espaço e os planos continuam os dos prints de 14/10.

---

## 2. Estrutura da página

| Antes (planilha) | Depois (página) |
| --- | --- |
| — | `<body class="pagina-orcamento-hospedagem">` |
| — | `<main>` |
| Título "Relatório de orçamento de hospedagem e domínio" | `<section class="ex-hero">` com o rótulo "Orçamento" e o `<h1>` "Hospedagem e domínio para o site do grupo." |
| — | `<section class="orcamento-intro">` com o `.ex-cabecalho` e o `<h2>` "Onde publicar o site do Grupo Êxito Condomínios" |
| Abas HostGator, Hostinger e Umbler | `<section class="hospedagens">` com três `<article class="ex-card provedor">`, cada um com o print e uma tabela |
| Aba Resumo, "Comparativo do primeiro ano" | `<section class="comparativo">` com a tabela do primeiro ano |
| Célula "Domínio .com.br por ano" | `<section class="dominios">` com a tabela das três extensões |
| "Conclusão do grupo" | `<section class="conclusao">` |
| Linhas "Fonte: print da página…" | `<p class="ex-nota nota-fonte">` no fim da página |
| — | `</main>` |

### Tabelas

Toda tabela da página tem `<caption>`, `<thead>` e `scope` nos cabeçalhos, e fica dentro de uma caixa que rola no celular:

```html
<div class="tabela-rolagem" tabindex="0" role="region"
    aria-label="Tabela comparativa do primeiro ano">
    <table class="tabela-larga">
        <caption>Custo de cada plano nos primeiros 12 meses (valores em R$)</caption>
        <thead>
            <tr>
                <th scope="col">Empresa</th>
                ...
```

`tabindex="0"` deixa a caixa receber o foco do teclado, para rolar a tabela pelas setas.

---

## 3. Conteúdo

### Tabela comparativa do primeiro ano

Os números são os mesmos da aba "Resumo": preço por mês × 12, mais R$ 40,00 do `.com.br` quando o plano não tem domínio grátis.

| Empresa | Plano | Total em 12 meses (R$) |
| --- | --- | ---: |
| HostGator | Plano P | 121,08 |
| HostGator | Plano M | 137,88 |
| HostGator | Plano Turbo | 224,28 |
| **Hostinger** | **Single** | **111,88** |
| Hostinger | Premium | 131,88 |
| Hostinger | Unlimited | 167,88 |
| Hostinger | Cloud Startup | 479,88 |
| Umbler | Elástico 29 | 388,00 |
| Umbler | Elástico 39 | 508,00 |
| Umbler | Elástico 60 | 760,00 |
| Umbler | Elástico 195 | 2.380,00 |
| Umbler | Elástico 275 | 3.340,00 |

Na planilha, o menor custo saía de uma fórmula. Na página, a linha do Hostinger Single é destacada e tem a etiqueta "Menor custo".

### O que entrou além da planilha

| Onde | Antes | Depois |
| --- | --- | --- |
| Card de cada hospedagem | — | Linhas "Largura de banda", "SSL" e "Suporte" |
| Hostinger Premium, largura de banda | — | "—", porque o dado não foi confirmado |
| Domínios | Só o `.com.br` | `.com.br` e `.net.br` no Registro.br, `.com` na Hostinger |
| Umbler | Nomes dos planos só na aba dela | Nota: "Os nomes "Elástico 29", "Elástico 39"... foram dados pelo grupo a partir do preço; não são nomes oficiais." |

### Conclusão

| Antes (planilha) | Depois (página) |
| --- | --- |
| 1. O site é só HTML, CSS e JavaScript; os planos da Umbler são mais do que precisamos | Igual, no primeiro parágrafo |
| 2. O Hostinger Single é o mais barato por mês, mas não tem domínio grátis | "O Hostinger Single é o escolhido." |
| 3. HostGator Plano P e Hostinger Premium custam quase o mesmo; "qualquer um dos dois atende" | **Custo-benefício:** menor custo no primeiro ano, R$ 111,88 (R$ 71,88 de hospedagem e R$ 40,00 de domínio), com 10 GB de espaço para um site de cerca de 20 MB, 100 GB de largura de banda, SSL grátis e suporte 24 horas em português |
| — | **Domínio:** `.com.br` no Registro.br, por R$ 40,00 por ano, que mantém o preço na renovação |
| — | **Escalabilidade:** Premium (3 sites, 20 GB), Unlimited (50 GB, CDN e suporte prioritário) e Cloud Startup (100 GB), sem trocar de empresa |
| 4. Os preços promocionais exigem pagar o contrato inteiro de uma vez | **Atenção:** contrato de 48 meses pago de uma vez (R$ 287,52); depois, renova a R$ 23,99 por mês |
| 5. Os valores são dos prints de 14/10/2026 e podem mudar | Nota de fonte no fim da página, com a data dos prints |

---

## 4. CSS

### Onde fica

| Antes | Depois |
| --- | --- |
| — (a planilha não tinha página) | Bloco `PÁGINA: orcamento-hospedagem.html` do `css/style.css` (linhas 5583 a 5730) |
| — | Toda regra começa com `.pagina-orcamento-hospedagem` |
| — | Topo, cabeçalho, cards e etiquetas vêm dos componentes do site (`.ex-hero`, `.ex-cabecalho`, `.ex-card`, `.ex-etiqueta`). O bloco da página não muda a tipografia: tem só espaços, caixas, bordas e a rolagem das tabelas |

### Tabelas no celular

| Regra | O que faz |
| --- | --- |
| `.tabela-rolagem` (linha 5629) | `overflow-x: auto`: a tabela rola para o lado dentro da caixa, sem a página rolar |
| `.tabela-larga` (linha 5640) | Largura mínima de 56rem na tabela comparativa, para as 8 colunas não ficarem espremidas |
| `.tabela-media` (linha 5644) | Largura mínima de 36rem na tabela de domínios |
| `@media (max-width: 800px)` (linha 5722) | Em cada card, o print fica em cima da tabela, e o card tem menos espaço por dentro |

### Cores

Todas da paleta, em `rgb(...)`:

| Uso | Cor |
| --- | --- |
| Borda de cima dos cards e contorno do foco do teclado | Teal `rgb(0, 104, 118)` |
| Fundo da linha de menor custo | Ciano suave `rgb(214, 247, 255)` |
| Borda dos prints | Borda `rgb(226, 232, 240)` |
| Sombra dos cards | `rgba(6, 21, 45, 0.08)` |

---

## 5. Como fica na tela e no PDF

| Elemento | Antes (planilha) | Depois |
| --- | --- | --- |
| Topo | — | Faixa azul-marinho do componente `.ex-hero`, sem foto, com o rótulo "Orçamento" |
| Hospedagens | Uma aba por empresa | Um card por empresa, um embaixo do outro. No computador, o print fica à esquerda e a tabela à direita; no celular, o print fica em cima |
| Tabela comparativa | Aba "Resumo" | Tabela larga; no celular, rola para o lado dentro da caixa |
| Menor custo | Célula calculada no fim da tabela | Linha em ciano suave, com a etiqueta "Menor custo", e a frase de resumo embaixo da tabela |
| Fonte | Linha no topo de cada aba | Nota pequena e centralizada no fim da página |
| PDF | — | `docs/hospedagem/orcamento-hospedagem-dominio.pdf`, em A4 deitado. Em A4 em pé a tabela comparativa era cortada na direita; deitado, ela cabe inteira |
