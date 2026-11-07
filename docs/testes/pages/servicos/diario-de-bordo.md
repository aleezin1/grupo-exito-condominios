# Diário de bordo – Página de Serviços

**Autor:** João Vitor Rocha Silva  
**Projeto:** Página "Nossos serviços" (HTML5 e CSS3)

## 1. Objetivo do projeto

Criar uma página web de serviços financeiros (gestão financeira, planejamento de investimentos e consultoria tributária) usando HTML semântico, cabeçalhos hierárquicos e CSS responsivo, e publicá-la no GitHub.

## 2. Tecnologias utilizadas

- HTML5 (tags semânticas)
- CSS3 (variáveis, Grid, Flexbox, tabela com rolagem horizontal)
- Git e GitHub (versionamento e publicação)
- VS Code (editor)

## 3. Registro das etapas

### Etapa 1 – Estrutura básica da página

Montei o esqueleto do documento com `lang="pt-BR"`, `meta charset`, `meta viewport` e título. Defini as cores da página com variáveis CSS (`--texto`, `--fundo`, `--borda`, `--destaque`) para facilitar mudanças futuras.

### Etapa 2 – Uso das tags semânticas

Organizei a página com `<header>` e `<nav>` (menu com links para os três serviços e contato), `<main>` (conteúdo principal), `<section>` (resumo dos serviços e comparação) e `<footer>` (link de contato). Cada serviço ficou em um `<article>`, pois é um bloco de conteúdo independente.

### Etapa 3 – Hierarquia de cabeçalhos

Ajustei a ordem dos títulos: um único `<h1>` ("Nossos serviços"), `<h2>` para o título de cada seção e `<h3>` para o título de cada serviço dentro dos `<article>`. Liguei cada seção ao seu título com `aria-labelledby`, melhorando a acessibilidade.

### Etapa 4 – Layout e estilo

Usei CSS Grid com `repeat(auto-fit, minmax(16rem, 1fr))` para os cartões de serviço se adaptarem ao tamanho da tela. A tabela de comparação ganhou um contêiner com `overflow-x: auto`, evitando rolagem lateral na página inteira no celular. Adicionei estilo de foco (`:focus-visible`) nos links.

### Etapa 5 – Tabela comparativa

Criei a tabela com `<caption>`, `<thead>`, `<tbody>` e `scope` em `th`, comparando para quem é cada serviço, o que se recebe e a duração.

### Etapa 6 – Publicação no GitHub

Renomeei o arquivo para `index.html`, criei o repositório no GitHub e enviei os arquivos (pelo terminal com `git init`, `git add`, `git commit` e `git push`, ou pelo upload no navegador do celular).

## 4. Dificuldades encontradas e soluções

| Dificuldade | Solução |
| --- | --- |
| Caracteres `>` sobrando depois de duas tags `<img>`, aparecendo como texto na página | Remoção do `>` extra |
| Erro de digitação no texto `alt` ("gesgão") | Correção para "gestão" |
| Largura da imagem escrita como `width: 1000` sem unidade, o que o CSS ignora | Manter o tamanho definido na classe `.servico img` (72px) e retirar o estilo inline |
| Imagens com caminho local (`C:\Users\...`), que não aparecem fora do meu computador | Mover as imagens para o projeto e usar caminho relativo, como `imagens/foto.jpeg` |

## 5. Aprendizados

- Cada tag semântica tem uma função: `<header>` e `<nav>` para o topo e a navegação, `<main>` para o conteúdo principal, `<section>` para agrupar temas, `<article>` para blocos independentes e `<footer>` para o rodapé.
- Os cabeçalhos devem seguir uma ordem lógica (h1 → h2 → h3), sem pular níveis.
- Imagens precisam de caminho relativo e texto `alt` para funcionar em qualquer lugar e ser acessíveis.
- Variáveis CSS deixam o estilo mais fácil de manter.
