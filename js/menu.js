// Menu responsivo — usado pela home (index.html) e pelas páginas em /pages.
// O botão precisa de data-menu-toggle e aria-controls="<id do menu>".
// Abrir/fechar apenas liga/desliga a classe "is-open" no menu; o CSS decide como mostrar.
document.querySelectorAll('[data-menu-toggle]').forEach(function (botao) {
    var menu = document.getElementById(botao.getAttribute('aria-controls'));
    if (!menu) return;

    function definirAberto(aberto) {
        menu.classList.toggle('is-open', aberto);
        botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
        botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
    }

    botao.addEventListener('click', function () {
        definirAberto(!menu.classList.contains('is-open'));
    });

    // Fecha ao clicar em um link do menu (ex.: âncoras na mesma página)
    menu.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            definirAberto(false);
        });
    });

    // Fecha com a tecla Esc
    document.addEventListener('keydown', function (evento) {
        if (evento.key === 'Escape' && menu.classList.contains('is-open')) {
            definirAberto(false);
            botao.focus();
        }
    });

    // Fecha ao voltar para a largura de desktop
    window.matchMedia('(min-width: 1024px)').addEventListener('change', function (mq) {
        if (mq.matches) definirAberto(false);
    });
});
