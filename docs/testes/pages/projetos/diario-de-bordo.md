# Diário de bordo Clientes (projetos)

**Aluno:** Felipe Gabriel Evangelista Alexandrias

**Data:** 04/11/2026

## 1. Objetivo do desenvolvimento

O objetivo desta etapa foi desenvolver a área de projetos para clientes
no site do Grupo Êxito Condomínios, permitindo que os usuários conheçam
os trabalhos realizados pela empresa, separados por áreas de atuação.

A ideia foi criar uma navegação simples e organizada, para que o usuário
pudesse escolher qual tipo de serviço gostaria de conhecer e visualizar
os projetos correspondentes.

## 2. Decisões tomadas

Primeiramente, decidi dividir os projetos em três páginas diferentes,
cada uma representando uma área de atuação da empresa:

-   Gestão Financeira;

-   Gestão Operacional;

-   Gestão Administrativa.

Essa divisão foi escolhida para facilitar a navegação e permitir que o
usuário encontre os projetos de acordo com o serviço que deseja
conhecer, sem precisar visualizar todas as informações em uma única
página.

Na página principal de projetos, foram criados três cards, representando
cada uma dessas áreas. Também decidi utilizar imagens como links de
navegação, permitindo que o usuário clique diretamente na imagem para
acessar a página correspondente.

Outra decisão foi adicionar um efeito visual aos cards quando o usuário
passa o mouse sobre eles. Dessa forma, os elementos aumentam levemente
de tamanho e recebem uma sombra mais evidente, destacando o card
selecionado e proporcionando uma experiência de navegação mais
interativa.

Nas três páginas específicas, organizei os projetos de cada área
utilizando imagens e descrições divididas em três informações
principais:

-   **O que o cliente queria:** apresenta o problema ou a necessidade
    que o cliente possuía.

-   **O que foi feito:** descreve as ações e soluções realizadas pela
    empresa.

-   **Resultado:** apresenta os benefícios alcançados após a
    implementação da solução.

Também foi adicionada uma opção para retornar à página principal de
projetos, caso o usuário queira conhecer outra área de atuação.

## 3. Desenvolvimento no código

Para realizar essa estrutura, utilizei HTML para organizar os elementos
das páginas e CSS para desenvolver a aparência visual e os efeitos de
interação.

### 3.1. Criação dos links entre as páginas

Na página principal (`index.html`), utilizei a tag `<a>` para
transformar as imagens dos cards em links que direcionam o usuário para
as páginas específicas.

Trecho utilizado:

``` html

<div class="projeto">

    <a href="../src/gestaofinanceira.html">

        <img src="../img/F1.png" alt="Projeto 1">

    </a>

    <h3>Gestão Financeira</h3>

    <p>

        Clique na imagem acima para ver os projetos

        de Gestão Financeira.

    </p>

</div>
```

**Como isso afetou o site:**

A utilização da tag `<a>` permitiu que o usuário clicasse na imagem do
card e fosse direcionado para a página de Gestão Financeira.

O mesmo procedimento foi aplicado aos cards de Gestão Operacional e
Gestão Administrativa, cada um direcionando para sua respectiva página.

### 3.2. Organização dos projetos em cards

Nas páginas específicas, utilizei a estrutura de `<div>` com a classe
`projeto` para organizar cada cliente individualmente.

Trecho utilizado:

``` html

<div class="projeto">

    <img src="../img/financeiro_ Alto dos Jardins.png"

         alt="Projeto 1">

    <h3>Alto dos Jardins</h3>

    <p>

        O que o cliente queria: Reduzir a inadimplência

        dos moradores e recuperar o equilíbrio financeiro

        do condomínio.

    </p>

    <p>

        O que foi feito: Implantação de uma nova política

        de cobrança, com acompanhamento próximo dos moradores.

    </p>

    <p>

        Resultado: Redução de 40% na inadimplência

        em 6 meses.

    </p>

</div>
```

**Como isso afetou o site:**

Essa estrutura permitiu apresentar cada projeto de maneira independente,
contendo uma imagem, o nome do cliente e as informações sobre o serviço
realizado.

Também ajudou a manter um padrão de apresentação entre os diferentes
projetos, facilitando a leitura e a comparação das soluções
apresentadas.

### 3.3. Efeito visual ao passar o mouse sobre os cards

Para criar a interação visual dos cards, utilizei as propriedades
`:hover`, `transform` e `box-shadow` no CSS.

Trecho utilizado:

``` css

.projeto {

    transition: transform 0.25s ease,

                box-shadow 0.25s ease;

    cursor: pointer;

}

.projeto:hover {

    transform: scale(1.05);

    box-shadow: 0 10px 22px

        rgba(23, 43, 68, 0.18);

}
```

**Como isso afetou o site:**

-   `transition`: faz com que a mudança visual aconteça de maneira
    suave, evitando movimentos bruscos.

-   `:hover`: identifica quando o ponteiro do mouse está sobre o card.

-   `transform: scale(1.05)`: aumenta o tamanho do card em
    aproximadamente 5%.

-   `box-shadow`: adiciona uma sombra mais evidente, dando destaque ao
    elemento.

-   `cursor: pointer`: altera o formato do cursor para indicar que o
    elemento pode ser selecionado.

Com isso, quando o usuário posiciona o mouse sobre um card, ele aumenta
levemente de tamanho e ganha uma sombra mais destacada, proporcionando
uma sensação de profundidade e interação.

### 3.4. Organização e posicionamento dos cards

Para organizar os cards na página, utilizei o Flexbox por meio das
propriedades CSS.

Trecho utilizado:

``` css

.card {

    display: flex;

    justify-content: center;

    gap: 30px;

    flex-wrap: wrap;

    padding: 30px 20px;

}
```

**Como isso afetou o site:**

-   `display: flex`: permite organizar os cards utilizando o modelo
    Flexbox.

-   `justify-content: center`: centraliza os cards horizontalmente.

-   `gap: 30px`: define um espaço entre os cards.

-   `flex-wrap: wrap`: permite que os cards passem para a linha seguinte
    quando não houver espaço suficiente.

-   `padding`: adiciona espaçamento interno à seção.

Essa organização contribuiu para deixar a apresentação dos projetos mais
equilibrada e organizada.

### 3.5. Criação dos links para retornar à página de projetos

Nas páginas de Gestão Financeira, Gestão Operacional e Gestão
Administrativa, adicionei um link para que o usuário pudesse voltar à
página principal.

Trecho utilizado:

``` html

<a href="../index.html" class="voltar">

    Voltar para ver os outros projetos

</a>
```

**Como isso afetou o site:**

Esse recurso facilitou a navegação entre as páginas, permitindo que o
usuário retornasse à seleção das três áreas sem precisar utilizar o
botão de voltar do navegador ou acessar novamente o endereço principal.

## 4. Organização dos arquivos

Para facilitar o desenvolvimento e a manutenção do site, os arquivos
foram separados conforme suas funções:

-   `index.html`: página principal com os três cards de seleção das
    áreas.

-   `gestaofinanceira.html`: apresenta os projetos relacionados à Gestão
    Financeira.

-   `gestaooperacional.html`: apresenta os projetos relacionados à
    Gestão Operacional.

-   `gestaoadministrativa.html`: apresenta os projetos relacionados à
    Gestão Administrativa.

-   `style.css`: concentra os estilos visuais utilizados nas páginas.

-   Pasta de imagens: armazena as imagens dos projetos e a identidade
    visual da empresa.

Essa separação permite realizar alterações em cada página sem precisar
concentrar todo o conteúdo em um único arquivo.

## 5. Resultado alcançado

Ao finalizar essa etapa, consegui desenvolver uma área de projetos
organizada em três categorias, permitindo que o usuário escolha qual
serviço deseja conhecer.

Cada categoria possui três projetos apresentados por meio de cards com
imagens e informações sobre as necessidades dos clientes, as soluções
implementadas e os resultados obtidos.

Também foram implementados efeitos visuais ao posicionar o mouse sobre
os cards, links nas imagens para acessar as páginas específicas e opções
de retorno à página principal.

O resultado foi uma navegação mais organizada, intuitiva e interativa,
facilitando o acesso às informações e permitindo que os visitantes
conheçam melhor os serviços e os trabalhos realizados pelo Grupo Êxito
Condomínios.

## 6. Aprendizados

Durante esse desenvolvimento, pude praticar e compreender melhor a
utilização das tags HTML para criação de links, organização de conteúdo
e estruturação de páginas.

Também aprofundei meus conhecimentos em CSS, principalmente nas
propriedades de Flexbox, transições, sombras e efeitos de interação com
`:hover`.

Além disso, compreendi melhor a importância de separar o conteúdo em
diferentes páginas e organizar os arquivos do projeto, tornando o
desenvolvimento mais estruturado e facilitando futuras alterações.
