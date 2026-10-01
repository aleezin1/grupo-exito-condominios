// Efeitos de entrada/saída e parallax — sem biblioteca. Como usar: veja css/efeitos.css.
// Carregue no <head> (sem defer) para os elementos já começarem escondidos e não "piscarem".
(function () {
    var raiz = document.documentElement;
    var menosMovimento = window.matchMedia('(prefers-reduced-motion: reduce)');

    function semAnimacao() {
        return menosMovimento.matches || raiz.classList.contains('ac-pausar');
    }

    // Sem IntersectionObserver (navegador muito antigo) o conteúdo fica normal, sem efeito
    if (!('IntersectionObserver' in window)) return;
    raiz.classList.add('fx');

    document.addEventListener('DOMContentLoaded', function () {
        // Com o loading na tela (js/loading.js), as entradas só começam quando o portão abre
        if (raiz.classList.contains('ld-ativo')) document.addEventListener('ld:fim', iniciarEntradas, { once: true });
        else iniciarEntradas();
        iniciarParallax();
    });

    // ---- Entrada e saída ---------------------------------------------------
    function iniciarEntradas() {
        // Pais com data-reveal-stagger: cada filho entra um pouco depois do anterior
        document.querySelectorAll('[data-reveal-stagger]').forEach(function (pai) {
            var tipo = pai.getAttribute('data-reveal-stagger') || '';
            Array.prototype.forEach.call(pai.children, function (filho, i) {
                if (!filho.hasAttribute('data-reveal')) filho.setAttribute('data-reveal', tipo);
                filho.style.setProperty('--fx-atraso', Math.min(i * 90, 450) + 'ms');
            });
        });

        var observador = new IntersectionObserver(function (entradas) {
            entradas.forEach(function (entrada) {
                var el = entrada.target;
                if (entrada.isIntersecting) {
                    el.classList.add('fx-visivel');
                    el.classList.remove('fx-acima');
                } else {
                    // Saiu da tela: esconde de novo para animar na próxima vez.
                    // Se saiu pelo topo, sai subindo; se saiu por baixo, volta para baixo.
                    el.classList.remove('fx-visivel');
                    el.classList.toggle('fx-acima', entrada.boundingClientRect.top < 0);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

        document.querySelectorAll('[data-reveal]').forEach(function (el) {
            observador.observe(el);
        });
    }

    // ---- Parallax ----------------------------------------------------------
    function iniciarParallax() {
        var itens = [];
        document.querySelectorAll('[data-parallax]').forEach(function (el) {
            itens.push({ el: el, velocidade: parseFloat(el.getAttribute('data-parallax')) || 0.2 });
        });
        document.querySelectorAll('[data-parallax-img]').forEach(function (el) {
            itens.push({ el: el, velocidade: 0.12 });
        });
        if (!itens.length) return;

        var agendado = false;

        function atualizar() {
            agendado = false;
            var alturaTela = window.innerHeight;
            var parado = semAnimacao();

            itens.forEach(function (item) {
                if (parado) {
                    item.el.style.removeProperty('--fx-y');
                    return;
                }
                // Mede pelo elemento pai (que não se mexe) para o cálculo não "tremer"
                var caixa = (item.el.parentElement || item.el).getBoundingClientRect();
                if (caixa.bottom < -200 || caixa.top > alturaTela + 200) return;

                var distanciaDoCentro = caixa.top + caixa.height / 2 - alturaTela / 2;
                var deslocamento = distanciaDoCentro * -item.velocidade;
                item.el.style.setProperty('--fx-y', deslocamento.toFixed(1) + 'px');
            });
        }

        function agendar() {
            if (!agendado) {
                agendado = true;
                window.requestAnimationFrame(atualizar);
            }
        }

        window.addEventListener('scroll', agendar, { passive: true });
        window.addEventListener('resize', agendar);
        document.addEventListener('ac:mudou', agendar); // menu de acessibilidade
        atualizar();
    }
})();
