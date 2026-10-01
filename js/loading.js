// Loading da home: "prédio inteligente + portão" (estilos em css/loading.css).
// Carregue no <head>, sem defer, DEPOIS de js/acessibilidade.js.
//
// - Aparece só na primeira visita da sessão (para ver de novo: feche a aba ou
//   abra index.html?loading=1).
// - Dura cerca de 5s e só sai depois que a página terminou de carregar.
// - Pula com clique, com o botão "Pular" ou com Esc.
// - Com "menos movimento" (sistema ou menu de acessibilidade) vira um fade curto.
(function () {
    var raiz = document.documentElement;
    var CHAVE = 'ge-loading-visto';
    var forcar = /[?&]loading=1\b/.test(location.search);

    var jaViu = false;
    try { jaViu = sessionStorage.getItem(CHAVE) === '1'; } catch (e) { }
    if (jaViu && !forcar) return;
    try { sessionStorage.setItem(CHAVE, '1'); } catch (e) { }

    raiz.classList.add('ld-ativo'); // css/loading.css cobre a página até o loading montar

    // ---- Tempos (ms) -----------------------------------------------------------
    var ANDARES = 10;
    var PASSO = 300;                       // cada andar acende a cada 300ms
    var ACENDER = ANDARES * PASSO + 200;   // ~3,2s acendendo
    var PULSO = 380;                       // brilho final antes de abrir
    var ABRIR = 1150;                      // portão abrindo (~1,2s)  => total ~4,7s
    var LIMITE = 9000;                     // se a página demorar, sai assim mesmo

    var paginaCarregada = document.readyState === 'complete';
    window.addEventListener('load', function () { paginaCarregada = true; });

    document.addEventListener('DOMContentLoaded', montar);

    // ---- Desenhos (SVG) --------------------------------------------------------
    function svgPredio() {
        var janelas = '';
        for (var a = 0; a < ANDARES; a++) {
            var y = 250 - a * 20;
            for (var c = 0; c < 4; c++) {
                janelas += '<rect class="ld-janela" data-andar="' + a + '" x="' + (74 + c * 26) + '" y="' + y + '" width="16" height="10" rx="1.5"/>';
            }
            if (a < 5) {
                for (var c2 = 0; c2 < 2; c2++) {
                    janelas += '<rect class="ld-janela" data-andar="' + a + '" x="' + (28 + c2 * 16) + '" y="' + y + '" width="10" height="10" rx="1.5"/>';
                }
            }
        }
        return '<svg class="ld-predio" viewBox="0 0 260 300" aria-hidden="true" focusable="false">' +
            '<line class="antena" x1="130" y1="16" x2="130" y2="40"/><circle class="luz-antena" cx="130" cy="14" r="3"/>' +
            '<rect class="estrutura" x="62" y="40" width="136" height="232" rx="3"/>' +
            '<rect class="estrutura" x="18" y="160" width="44" height="112" rx="3"/>' +
            '<g class="ld-janelas" filter="url(#ld-brilho)">' + janelas + '</g>' +
            '<line class="chao" x1="0" y1="272" x2="260" y2="272"/>' +
            '</svg>';
    }

    // As 3 lajes do logo: face esquerda ciano, direita teal (o ápice fica na junção do portão)
    function svgEmblema() {
        function laje(esq, dir, d) {
            return '<g class="laje" style="--d:' + d + 'ms">' +
                '<polygon fill="var(--ld-face-esq)" points="' + esq + '"/>' +
                '<polygon fill="var(--ld-face-dir)" points="' + dir + '"/></g>';
        }
        return '<svg class="ld-emblema" viewBox="16 0 156 142" aria-hidden="true" focusable="false">' +
            laje('44,30 100,2 100,28 44,56', '100,2 156,30 156,56 100,28', 0) +
            laje('44,74 100,46 100,72 22,111 22,100 44,89', '100,46 156,74 156,100 100,72', 140) +
            laje('22,138 100,96 100,140', '100,96 166,130 166,140 100,140', 280) +
            '</svg>';
    }

    // Horizonte de prédios (sempre igual: gerador com semente fixa)
    function svgSkyline(cor, alturaMax, semente) {
        var x = 0, partes = '', r = semente;
        function aleatorio() { r = (r * 9301 + 49297) % 233280; return r / 233280; }
        while (x < 1600) {
            var w = 40 + aleatorio() * 90, h = alturaMax * (0.35 + aleatorio() * 0.65);
            partes += '<rect x="' + x.toFixed(0) + '" y="' + (400 - h).toFixed(0) + '" width="' + w.toFixed(0) + '" height="' + h.toFixed(0) + '"/>';
            x += w + 4;
        }
        return '<svg viewBox="0 0 1600 400" preserveAspectRatio="xMidYMax slice" aria-hidden="true" focusable="false"><g fill="' + cor + '">' + partes + '</g></svg>';
    }

    function cena() {
        var status = [['PORTARIA', 3], ['TELEMETRIA', 6], ['FINANCEIRO', 9]].map(function (s) {
            return '<span style="--d:' + ((s[1] - 1) * PASSO) + 'ms">' + s[0] + '</span>';
        }).join('');
        return '<div class="ld-cena">' + svgPredio() +
            '<div class="ld-marca">' + svgEmblema() + '<strong>GRUPO ÊXITO</strong><span>CONDOMÍNIOS</span></div>' +
            '<div class="ld-painel"><div class="ld-andar">ANDAR <b class="ld-num">01</b>/' + ANDARES + ' · SISTEMAS ONLINE</div>' +
            '<div class="ld-barra"><i></i></div><div class="ld-status">' + status + '</div></div></div>';
    }

    // ---- Montagem e linha do tempo ------------------------------------------------
    function montar() {
        var reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
            raiz.classList.contains('ac-pausar');

        var ld = document.createElement('div');
        ld.className = 'ld' + (reduzido ? ' ld--reduzido' : '');
        ld.setAttribute('role', 'status');
        ld.innerHTML =
            '<span class="ld-sr">Carregando Grupo Êxito Condomínios…</span>' +
            // filtro de brilho das janelas (uma vez só, usado pelas duas metades do portão)
            '<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><defs>' +
            '<filter id="ld-brilho" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="2.2" result="b"/>' +
            '<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs></svg>' +
            '<div class="ld-camada ld-ceu" aria-hidden="true"></div>' +
            '<div class="ld-camada ld-skyline-longe" aria-hidden="true">' + svgSkyline('#0b2447', 330, 7) + '</div>' +
            '<div class="ld-camada ld-skyline-perto" aria-hidden="true">' + svgSkyline('#081a33', 220, 21) + '</div>' +
            '<div class="ld-folha ld-folha--esq" aria-hidden="true">' + cena() + '</div>' +
            '<div class="ld-folha ld-folha--dir" aria-hidden="true">' + cena() + '</div>' +
            '<button class="ld-pular" type="button">Pular</button>';
        document.body.appendChild(ld);
        raiz.classList.add('ld-montado');

        // enquanto o loading está na tela, a página por baixo não recebe foco nem clique
        var pagina = document.querySelectorAll('body > header, body > main, body > footer');
        pagina.forEach(function (el) { el.setAttribute('inert', ''); });
        var principal = document.querySelector('main');
        if (principal) principal.setAttribute('aria-busy', 'true');

        // atraso de cada janela (igual nas duas folhas, para ficarem sincronizadas)
        var atrasos = [];
        ld.querySelectorAll('.ld-folha--esq .ld-janela').forEach(function (j) {
            atrasos.push(Number(j.getAttribute('data-andar')) * PASSO + Math.round(Math.random() * PASSO * 0.8));
        });
        ld.querySelectorAll('.ld-folha').forEach(function (folha) {
            folha.querySelectorAll('.ld-janela').forEach(function (j, i) { j.style.setProperty('--d', atrasos[i] + 'ms'); });
        });
        ld.style.setProperty('--dur', ACENDER + 'ms');

        var timers = [];
        function depois(ms, fn) { timers.push(setTimeout(fn, ms)); }
        var saiu = false;

        function sair() {
            if (saiu) return;
            saiu = true;
            timers.forEach(clearTimeout);
            document.removeEventListener('keydown', aoTeclar);

            pagina.forEach(function (el) { el.removeAttribute('inert'); });
            if (principal) {
                principal.removeAttribute('aria-busy');
                if (!reduzido) {
                    principal.classList.add('ld-pagina-entrando');
                    setTimeout(function () { principal.classList.remove('ld-pagina-entrando'); }, 1300);
                }
            }
            ld.classList.add('ld--abrir');
            setTimeout(function () {
                ld.remove();
                raiz.classList.remove('ld-ativo', 'ld-montado');
                document.dispatchEvent(new CustomEvent('ld:fim')); // js/efeitos.js começa as animações de entrada
            }, reduzido ? 320 : ABRIR);
        }

        // sai quando a animação acabou E a página já carregou (ou no limite de tempo)
        function sairQuandoPronto() {
            if (paginaCarregada) sair();
            else window.addEventListener('load', sair, { once: true });
        }

        function aoTeclar(e) { if (e.key === 'Escape') sair(); }
        ld.addEventListener('click', sair);
        document.addEventListener('keydown', aoTeclar);
        depois(LIMITE, sair);

        if (reduzido) {
            depois(600, sairQuandoPronto);
            return;
        }

        requestAnimationFrame(function () { ld.classList.add('ld--rodando'); });

        // contador de andares
        for (var n = 1; n <= ANDARES; n++) {
            (function (n) {
                depois((n - 1) * PASSO, function () {
                    ld.querySelectorAll('.ld-num').forEach(function (el) { el.textContent = String(n).padStart(2, '0'); });
                });
            })(n);
        }
        depois(ACENDER, function () { ld.classList.add('ld--pulso'); });
        depois(ACENDER + PULSO, sairQuandoPronto);
    }
})();
