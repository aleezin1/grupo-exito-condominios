# Diário de Bordo — Grupo Êxito Condomínios

Este é o diário de bordo do nosso grupo.

Aqui anotamos, em ordem de data, **o que fizemos**, **o que decidimos** e **por que decidimos**. A ideia é que qualquer pessoa do grupo (ou o professor) consiga entender como o projeto chegou até aqui.

Como todos nós estamos começando, escrevemos de um jeito simples. Se algum termo for novo para você, procure no final do documento, na parte **Palavras que aprendemos**.

---

## 28/09 — Começo do projeto

**O que fizemos**

* Criamos o repositório do projeto no GitHub.

**O que decidimos**

* O projeto vai ser um site institucional de uma administradora de condomínios, a **Grupo Êxito Condomínios**.
* Tudo no site é **fictício**: textos, números, clientes e notícias. É só para estudo.
* Vamos usar apenas **HTML, CSS e JavaScript**, que é o que estamos aprendendo na faculdade.

**Por quê?**

Um site institucional tem várias páginas parecidas (início, quem somos, serviços, contato...). Assim, cada pessoa do grupo pode ficar com uma página.

---

## 29/09 — Estrutura inicial e divisão das páginas

**O que fizemos**

* Criamos as pastas do projeto: `css/`, `js/`, `img/` e `pages/`.
* Adicionamos as primeiras imagens e o logo.
* Escrevemos o primeiro README com as regras do grupo.
* Colocamos o mesmo menu (header) e o mesmo rodapé (footer) em todas as páginas.

**O que decidimos**

* Somos **11 integrantes** e cada um fica responsável por **uma página**.
* As tarefas de cada página ficam no **ClickUp**.
* A página inicial fica na raiz (`index.html`) e as outras páginas ficam dentro de `pages/`.
* As cores ficam todas em um único arquivo: `css/paleta.css`.
* O menu e o rodapé ficam no arquivo `css/layout.css`, e todo mundo usa o mesmo.

**Por quê?**

Se cada pessoa escolhesse suas próprias cores e seu próprio menu, o site ia parecer 11 sites diferentes. Com uma paleta e um menu só, o site fica com a mesma cara em todas as páginas.

---

## 30/09 — Arrumando o menu

**O que fizemos**

* Corrigimos o menu nas páginas internas. Alguns links não funcionavam porque o caminho estava errado.

**O que aprendemos**

Uma página dentro de `pages/` precisa "voltar uma pasta" para achar os arquivos da raiz. Por isso usamos `../`:

```html
<!-- No index.html (raiz) -->
<link rel="stylesheet" href="css/paleta.css">

<!-- Dentro de pages/ -->
<link rel="stylesheet" href="../css/paleta.css">
```

**O que decidimos**

* Antes de enviar qualquer alteração, cada um **testa todos os links** da sua página.



## 14/10 — Dia de praticar Git

**O que fizemos**

Foi o primeiro dia em que várias pessoas do grupo mexeram no projeto e enviaram alterações pelo Git:

* alguém removeu uma linha da página `servicos-1.html`, e depois ela foi colocada de volta;
* o título de uma página foi alterado, e depois voltou ao título original;
* foi criado um arquivo de teste (`teste.css`), e depois ele foi apagado.

**O que aprendemos**

* Errar no Git **não é o fim do mundo**: dá para ver o que mudou e desfazer.
* O comando `git pull` antes de começar evita muitos problemas, porque traz as alterações dos colegas.
* Mensagens de commit claras ajudam muito. "Mudança do título" é melhor do que "alteração", mas "fix: corrige título da página de serviços" é ainda melhor, porque diz **onde** foi a mudança.

**O que decidimos**

* Arquivos de teste não devem ser enviados para o repositório.
* Antes de mexer em algo que **não é da sua página**, avise o grupo.
* Criamos a pasta `docs/` para guardar a documentação do projeto:
  * `README.md` — as regras e o guia do projeto;
  * `giti-para-iniciantes.pdf` — material de apoio sobre Git;
  * `diario-de-bordo.md` — este diário.
* Atualizamos o README:
  * tiramos os ícones, para ficar mais fácil de ler;
  * a paleta de cores agora mostra os valores em `rgb(...)`, que é mais fácil para quem está começando;
  * tiramos as explicações dos recursos que foram removidos.

---

## Resumo das decisões até agora

| Decisão                                         | Motivo                                              |
| ----------------------------------------------- | --------------------------------------------------- |
| Usar só HTML, CSS e JavaScript                  | É o que estamos aprendendo                          |
| Cada integrante cuida de uma página             | Todo mundo pratica e o trabalho fica dividido       |
| Uma paleta de cores para o site todo            | O site fica com a mesma cara em todas as páginas    |
| Mesmo menu e rodapé em todas as páginas         | Facilita a navegação e evita retrabalho             |
| Home simplificada                               | Código que todo mundo do grupo consegue entender    |
| Sem acessibilidade, assistente e efeitos (por enquanto) | Focar no básico e não acelerar demais        |
| Cores escritas em `rgb(...)` no README          | Mais fácil para iniciantes                          |
| Documentação dentro de `docs/`                  | Deixar a raiz do projeto mais organizada            |

---

## Próximos passos

* Cada integrante terminar o HTML da sua página.
* Depois, começar o CSS da página usando as cores da paleta.
* Testar cada página no computador e no celular.
* Continuar anotando aqui as decisões do grupo.

---


## Palavras que aprendemos

* **Repositório:** a "pasta" do projeto guardada no GitHub, com todo o histórico de alterações.
* **Commit:** um "salvamento" no Git, com uma mensagem dizendo o que mudou.
* **Pull (`git pull`):** traz para o seu computador as alterações que os colegas enviaram.
* **Push (`git push`):** envia as suas alterações para o GitHub.
* **Branch:** uma "cópia paralela" do projeto, onde você pode trabalhar sem atrapalhar os outros.
* **Header:** a parte de cima do site, onde fica o logo e o menu.
* **Footer:** a parte de baixo do site, o rodapé.
* **Paleta de cores:** a lista de cores que o site usa.
* **Caminho relativo:** o endereço de um arquivo a partir de onde você está, como `../img/logo.png`.
* **README:** o documento que explica o projeto e as regras do grupo.
