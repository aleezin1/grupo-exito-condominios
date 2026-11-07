// Aviso de cookies — usado pela home (index.html) e pelas páginas em /pages.
// O próprio script monta a faixa no rodapé da tela, para não repetir o HTML
// em todas as páginas. A escolha (Aceitar ou Recusar) fica guardada no
// navegador (localStorage, chave "ge-cookies"); se já existir, a faixa não aparece.
//
// Estilos em css/style.css (bloco COMPONENTE: cookies).
(function () {
    var CHAVE = 'ge-cookies';

    // Endereço da raiz do site, calculado a partir deste arquivo (js/cookies.js),
    // para o link da política funcionar tanto na home quanto em /pages
    var script = document.currentScript;
    var RAIZ = script ? script.src.replace(/js\/cookies\.js.*$/, '') : '';
    var LINK_POLITICA = RAIZ + 'pages/politica-privacidade.html';

    // Lê a escolha guardada (o try/catch evita erro se o navegador bloquear o localStorage)
    function lerEscolha() {
        try {
            return window.localStorage.getItem(CHAVE);
        } catch (erro) {
            return null;
        }
    }

    // Guarda a escolha: "aceito" ou "recusado"
    function guardarEscolha(valor) {
        try {
            window.localStorage.setItem(CHAVE, valor);
        } catch (erro) {
            // sem localStorage: a faixa só fecha nesta visita
        }
    }

    // Já escolheu antes? Então não mostra nada
    if (lerEscolha()) return;

    document.addEventListener('DOMContentLoaded', montar);

    function montar() {
        var faixa = document.createElement('div');
        faixa.className = 'ck-raiz';
        faixa.setAttribute('role', 'region');
        faixa.setAttribute('aria-label', 'Aviso de cookies');
        faixa.innerHTML =
            '<div class="ck-conteudo">' +
            '<p class="ck-texto">Usamos cookies e armazenamento do navegador para o site funcionar e lembrar ' +
            'suas escolhas. Saiba mais na <a href="' + LINK_POLITICA + '">Política de Privacidade</a>.</p>' +
            '<div class="ck-acoes">' +
            '<button class="ex-botao ex-botao--secundario ck-botao ck-botao--recusar" type="button" data-escolha="recusado">Recusar</button>' +
            '<button class="ex-botao ex-botao--primario ck-botao ck-botao--aceitar" type="button" data-escolha="aceito">Aceitar</button>' +
            '</div>' +
            '</div>';
        document.body.appendChild(faixa);

        // Enquanto a faixa está aberta, o body ganha a classe "ck-aberto":
        // o CSS usa ela para subir os botões flutuantes da acessibilidade
        document.body.classList.add('ck-aberto');

        // Os dois botões fecham a faixa e guardam a escolha
        faixa.querySelectorAll('[data-escolha]').forEach(function (botao) {
            botao.addEventListener('click', function () {
                guardarEscolha(botao.getAttribute('data-escolha'));
                faixa.remove();
                document.body.classList.remove('ck-aberto');
            });
        });
    }
})();
