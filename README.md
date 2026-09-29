# Grupo Êxito Condomínios — Site Institucional

> ⚠️ **Projeto exclusivamente para fins de estudo.**

Projeto desenvolvido para a faculdade de **Engenharia de Software**.

O objetivo é desenvolver, em grupo, um site institucional para uma administradora de condomínios, utilizando **HTML, CSS e JavaScript**.

Este projeto não representa o site oficial da empresa e não possui finalidade comercial. Os textos, números, clientes, projetos, notícias e demais informações utilizadas no site são fictícios e foram criados apenas para fins acadêmicos.

---

## 👥 Equipe e divisão das páginas

O projeto possui **11 integrantes**, sendo cada integrante responsável pelo desenvolvimento de uma página.

A ideia é que cada pessoa tenha sua própria página para desenvolver, mas todos sigam a mesma estrutura visual e organização do projeto.

| Página                     | Responsável        | Tarefa                                                     |
| -------------------------- | ------------------ | ---------------------------------------------------------- |
| Home                       | **Alexander**      | [ClickUp](https://app.clickup.com/t/90171541460/86e39d6z7) |
| Quem Somos                 | **Anthony**        | [ClickUp](https://app.clickup.com/t/90171541460/86e39d6z6) |
| Clientes                   | **Gabriel**        | [ClickUp](https://app.clickup.com/t/90171541460/86e39dj32) |
| Serviços — Vitrine         | **João**           | [ClickUp](https://app.clickup.com/t/90171541460/86e39dj5t) |
| Serviços 1                 | **Arthur**         | [ClickUp](https://app.clickup.com/t/90171541460/86e39djak) |
| Serviços 2                 | **Felipe Dias**    | [ClickUp](https://app.clickup.com/t/90171541460/86e39djcu) |
| Serviços 3                 | **David**          | [ClickUp](https://app.clickup.com/t/90171541460/86e39djf1) |
| Perguntas Frequentes — FAQ | **Evandro**        | [ClickUp](https://app.clickup.com/t/90171541460/86e39djn2) |
| Contatos                   | **Pablo**          | [ClickUp](https://app.clickup.com/t/90171541460/86e39djrr) |
| Clientes — Projetos        | **Felipe Gabriel** | [ClickUp](https://app.clickup.com/t/90171541460/86e39djva) |
| Notícias                   | **Enzo**           | [ClickUp](https://app.clickup.com/t/90171541460/86e39dk07) |

### Responsabilidade de cada integrante

Cada integrante é responsável por:

* Desenvolver o HTML da sua página.
* Criar e organizar o conteúdo da página.
* Desenvolver o CSS necessário para sua página.
* Utilizar as cores e padrões definidos pelo grupo.
* Adicionar as imagens necessárias.
* Garantir que os links da página estejam funcionando.
* Verificar a visualização em diferentes tamanhos de tela.
* Manter o código organizado e indentado.
* Fazer commits claros e relacionados ao que foi desenvolvido.
* Avisar o grupo caso precise alterar alguma estrutura compartilhada.

### Importante

Cada integrante deve trabalhar principalmente na sua própria página.

Caso seja necessário alterar:

* Header;
* Footer;
* Paleta de cores;
* Estrutura de pastas;
* Classes compartilhadas;
* Componentes utilizados por outras páginas;

é importante conversar com o grupo antes para evitar que uma alteração quebre o trabalho de outra pessoa.

---

# 📁 Estrutura do projeto

```text
grupoexitocondominios/
│
├── index.html
│
├── css/
│   ├── paleta.css
│   └── componentes.css
│
├── img/
│   ├── logo/
│   ├── banners/
│   ├── clientes/
│   ├── projetos/
│   └── noticias/
│
├── pages/
│   ├── quem-somos.html
│   ├── clientes.html
│   ├── servicos.html
│   ├── servicos-1.html
│   ├── servicos-2.html
│   ├── servicos-3.html
│   ├── faq.html
│   ├── contato.html
│   ├── projetos.html
│   └── noticias.html
│
├── js/
│   └── script.js
│
└── README.md
```

### O que fica em cada pasta?

**`index.html`**

Página inicial do site.

**`pages/`**

Contém as páginas internas do projeto. Cada integrante possui uma página para desenvolver.

**`css/`**

Contém os arquivos CSS compartilhados pelo projeto.

**`img/`**

Local onde devem ficar as imagens utilizadas no site.

**`js/`**

Arquivos JavaScript utilizados para comportamentos e interações do site.

**`README.md`**

Documento com as informações e regras do projeto.

---

# 🎨 Organização do CSS

Como o grupo está começando a trabalhar com CSS, a ideia é manter a estrutura simples.

Não é necessário criar uma estrutura complicada de arquivos.

A prioridade neste momento é aprender e praticar:

* Seletores;
* Classes;
* IDs;
* Cores;
* Fontes;
* Margens;
* Espaçamentos;
* `padding`;
* `border`;
* `border-radius`;
* `width` e `height`;
* `display`;
* Flexbox;
* Grid;
* Posicionamento;
* Responsividade;
* Pseudo-classes como `:hover`.

---

## 🎯 Paleta de cores

As cores principais do projeto ficam centralizadas no arquivo:

```text
css/paleta.css
```

Isso evita que cada integrante escolha uma cor diferente para cada página.

Exemplo:

```css
:root {
    --cor-navy-profundo: #06152d;
    --cor-navy-superficie: #0a1e3b;
    --cor-navy-claro: #0e3867;

    --cor-ciano-eletrico: #00bcd4;
    --cor-teal: #006876;
    --cor-teal-vibrante: #18a8b6;

    --cor-fundo: #f8fafd;
    --cor-superficie: #ffffff;
    --cor-borda: #e2e8f0;

    --cor-texto: #06152d;
    --cor-texto-corpo: #475569;
    --cor-texto-secundario: #526071;
}
```

Na sua página, você pode utilizar essas variáveis:

```css
.titulo {
    color: var(--cor-texto);
}

.botao {
    background-color: var(--cor-ciano-eletrico);
}

.card {
    background-color: var(--cor-superficie);
    border: 1px solid var(--cor-borda);
}
```

### Por que usar variáveis?

Imagine que o grupo decida mudar o azul principal do site.

Sem variáveis, seria necessário procurar várias cores diferentes nos arquivos CSS.

Com variáveis:

```css
--cor-navy-profundo: #06152d;
```

basta alterar o valor uma vez.

---

# 🧩 Componentes compartilhados

O arquivo:

```text
css/componentes.css
```

pode conter estilos de elementos que aparecem em várias páginas.

Por exemplo:

* Botões;
* Cards;
* Tags;
* Formulários;
* Títulos;
* Containers;
* Seções.

Exemplo:

```css
.ex-botao {
    display: inline-block;
    padding: 12px 24px;
    border-radius: 12px;
    text-decoration: none;
    font-weight: 600;
}

.ex-botao--primario {
    background-color: var(--cor-ciano-eletrico);
    color: var(--cor-navy-profundo);
}
```

Na página:

```html
<a href="contato.html" class="ex-botao ex-botao--primario">
    Solicitar proposta
</a>
```

Se você precisar criar algo específico para sua página, pode criar uma classe própria.

Exemplo:

```css
.clientes-destaque {
    ...
}
```

Não é necessário tentar transformar todos os elementos em componentes compartilhados.

---

# 📐 Padrão de HTML

Procurem utilizar HTML semântico.

Em vez de criar tudo utilizando apenas `div`, utilizem elementos que representem o conteúdo.

Exemplo:

```html
<header>
    ...
</header>

<main>

    <section>
        <h1>Quem somos</h1>

        <p>
            Conheça a nossa empresa.
        </p>
    </section>

    <section>
        ...
    </section>

</main>

<footer>
    ...
</footer>
```

Algumas tags importantes:

| Tag             | Utilização            |
| --------------- | --------------------- |
| `<header>`      | Cabeçalho             |
| `<nav>`         | Menu de navegação     |
| `<main>`        | Conteúdo principal    |
| `<section>`     | Seção de conteúdo     |
| `<article>`     | Conteúdo independente |
| `<aside>`       | Conteúdo complementar |
| `<footer>`      | Rodapé                |
| `<h1>`          | Título principal      |
| `<h2>`          | Título de seção       |
| `<h3>`          | Subtítulo             |
| `<p>`           | Parágrafo             |
| `<a>`           | Link                  |
| `<button>`      | Botão/ação            |
| `<ul>` / `<li>` | Listas                |
| `<img>`         | Imagens               |

---

# 📱 Responsividade

As páginas precisam funcionar em diferentes tamanhos de tela.

Durante o desenvolvimento, testem pelo menos:

* Computador;
* Tablet;
* Celular.

Exemplo simples de Media Query:

```css
.card {
    width: 50%;
}

@media (max-width: 768px) {
    .card {
        width: 100%;
    }
}
```

A ideia é começar simples e ir melhorando conforme o grupo aprender mais sobre CSS.

Não é necessário tentar deixar o site perfeito em todos os dispositivos logo no primeiro momento.

---

# 🖼️ Imagens

Todas as imagens utilizadas no projeto devem ficar dentro da pasta:

```text
img/
```

Exemplo:

```text
img/
├── logo/
├── clientes/
├── projetos/
└── noticias/
```

Nas páginas internas:

```html
<img src="../img/clientes/cliente-01.jpg" alt="Nome do cliente">
```

Evitem utilizar imagens diretamente de sites externos.

Também é importante sempre preencher o atributo `alt`:

```html
<img src="../img/logo.png" alt="Êxito Condomínios">
```

O `alt` deve descrever o conteúdo da imagem.

---

# 🔗 Links entre as páginas

Na página inicial:

```html
<a href="pages/quem-somos.html">
    Quem Somos
</a>
```

Dentro da pasta `pages/`:

```html
<a href="quem-somos.html">
    Quem Somos
</a>
```

Para voltar para a página inicial:

```html
<a href="../index.html">
    Início
</a>
```

Antes de finalizar sua tarefa, teste todos os links da sua página.

---

# 🌐 Tecnologias

O projeto utiliza:

* **HTML5**
* **CSS3**
* **JavaScript**
* **Google Fonts**
* **Material Symbols**
* **Git**
* **GitHub**

O projeto está sendo desenvolvido inicialmente com foco em **HTML e CSS**. O JavaScript será utilizado quando houver necessidade de interação e comportamento na página.

---

# ▶️ Como executar o projeto

Não é necessário instalar nenhuma ferramenta específica para visualizar o site.

Basta abrir:

```text
index.html
```

no navegador.

Também recomendamos utilizar a extensão **Live Server** no VS Code.

Com o Live Server, ao salvar uma alteração no código, o navegador pode atualizar automaticamente a página.

---

# 🌱 Para quem está começando no CSS

Não precisa tentar decorar todas as propriedades CSS.

O mais importante neste projeto é entender o que cada propriedade está fazendo.

Por exemplo:

```css
.card {
    background-color: white;
    padding: 20px;
    margin: 20px;
    border-radius: 12px;
}
```

Aqui:

* `background-color` → define a cor do fundo;
* `padding` → espaço interno;
* `margin` → espaço externo;
* `border-radius` → arredonda os cantos.

Depois, podemos evoluir para Flexbox:

```css
.container {
    display: flex;
    gap: 20px;
}
```

E posteriormente para Grid:

```css
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

A ideia é **aprender fazendo**.

Não há problema em consultar documentação, exemplos ou pedir ajuda para entender uma propriedade.

O importante é entender o código que está sendo utilizado.

---

# 🌿 Git e GitHub

Cada integrante deve trabalhar na sua própria branch.

Antes de começar a trabalhar:

```bash
git pull
```

Depois de realizar suas alterações:

```bash
git status
```

Verifique os arquivos alterados:

```bash
git add .
```

Faça o commit:

```bash
git commit -m "feat: adiciona seção de clientes"
```

E envie sua branch:

```bash
git push
```

### Exemplos de mensagens de commit

```text
feat: adiciona estrutura da página de notícias
```

```text
feat: adiciona seção de clientes
```

```text
style: ajusta responsividade dos cards
```

```text
fix: corrige links da página de contato
```

```text
chore: organiza imagens do projeto
```

Procurem fazer commits pequenos e que representem uma alteração específica.

---

# 🤝 Regras básicas do grupo

1. Cada integrante deve trabalhar principalmente na sua própria página.
2. Não apagar ou modificar o código de outra pessoa sem conversar antes.
3. Não alterar arquivos compartilhados sem avisar o grupo.
4. Manter o código organizado e indentado.
5. Utilizar a paleta de cores definida pelo projeto.
6. Utilizar imagens dentro da pasta `img/`.
7. Utilizar HTML semântico sempre que possível.
8. Testar os links antes de enviar a alteração.
9. Testar a página em diferentes tamanhos de tela.
10. Fazer commits pequenos e com mensagens claras.
11. Fazer `git pull` antes de começar uma nova sessão de desenvolvimento.
12. Em caso de conflito no Git, não apagar alterações de outra pessoa sem verificar primeiro.
13. Se tiver dúvida, perguntar antes de fazer uma alteração que possa afetar o restante do projeto.

---

# 📋 Controle das tarefas

As tarefas de cada página estão organizadas no **ClickUp**.

Cada integrante deve acompanhar sua tarefa para verificar:

* O que precisa ser desenvolvido;
* Conteúdo da página;
* Status da atividade;
* Pendências;
* Ajustes solicitados;
* Entrega.

Os tickets estão disponíveis na tabela de **Equipe e divisão das páginas** no início deste documento.

---

# 🎓 Objetivo do projeto

Além de desenvolver o site, o projeto tem como objetivo praticar:

* Desenvolvimento Front-end;
* HTML semântico;
* CSS;
* Responsividade;
* JavaScript;
* Git e GitHub;
* Organização de projetos;
* Trabalho em equipe;
* Divisão de tarefas;
* Code review;
* Resolução de conflitos;
* Versionamento de código.

O projeto será desenvolvido de forma gradual, começando pela estrutura HTML e evoluindo posteriormente para CSS e JavaScript.

---

<sub>Projeto acadêmico — Engenharia de Software. Marcas e nomes citados pertencem aos seus respectivos donos e são utilizados apenas para fins educacionais.</sub>
