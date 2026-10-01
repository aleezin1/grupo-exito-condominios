// Menu de acessibilidade — monta o botão e o painel sozinho, em qualquer página.
// Carregue no <head> (sem defer): assim as preferências salvas são aplicadas antes
// da página aparecer, sem "piscar". Estilos em css/acessibilidade.css.
(function () {
    var raiz = document.documentElement;
    var CHAVE = 'ge-acessibilidade';

    var OPCOES = [
        { id: 'contraste', rotulo: 'Alto contraste', icone: 'M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm1-17.93c3.94.49 7 3.86 7 7.93s-3.06 7.44-7 7.93V4.07z' },
        { id: 'cinza', rotulo: 'Escala de cinza', icone: 'M12 4.81V19c-3.31 0-6-2.63-6-5.87 0-1.56.62-3.03 1.75-4.14L12 4.81M6.35 7.56C4.9 8.99 4 10.96 4 13.13 4 17.48 7.58 21 12 21s8-3.52 8-7.87c0-2.17-.9-4.14-2.35-5.57L12 2 6.35 7.56z' },
        { id: 'links', rotulo: 'Destacar links', icone: 'M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z' },
        { id: 'fonte', rotulo: 'Fonte legível', icone: 'M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z' },
        { id: 'pausar', rotulo: 'Pausar animações', icone: 'M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z' },
        { id: 'guia', rotulo: 'Guia de leitura', icone: 'M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z' },
        { id: 'cursor', rotulo: 'Cursor grande', icone: 'M13 1.07V9h7c0-4.08-3.05-7.44-7-7.93zM4 15c0 4.42 3.58 8 8 8s8-3.58 8-8v-4H4v4zm7-13.93C7.05 1.56 4 4.92 4 9h7V1.07z' }
    ];
    var ICONE_OUVIR = 'M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z';
    var ICONE_PAUSAR = 'M6 19h4V5H6v14zm8-14v14h4V5h-4z';
    var ICONE_CONTINUAR = 'M8 5v14l11-7z';
    var ICONE_PARAR = 'M6 6h12v12H6z';
    var ICONE_BOTAO ='M20.5 6c-2.61.7-5.67 1-8.5 1s-5.89-.3-8.5-1L3 8c1.86.5 4 .83 6 1v13h2v-6h2v6h2V9c2-.17 4.14-.5 6-1l-.5-2zM12 6c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z';

    // ---- Preferências (salvas no navegador) --------------------------------
    var estado = ler();

    function ler() {
        try {
            return JSON.parse(localStorage.getItem(CHAVE)) || { zoom: 0 };
        } catch (erro) {
            return { zoom: 0 };
        }
    }

    function salvar() {
        try {
            localStorage.setItem(CHAVE, JSON.stringify(estado));
        } catch (erro) { /* modo privado: vale só nesta página */ }
    }

    function aplicar() {
        raiz.classList.toggle('ac-zoom-1', estado.zoom === 1);
        raiz.classList.toggle('ac-zoom-2', estado.zoom === 2);
        OPCOES.forEach(function (op) {
            raiz.classList.toggle('ac-' + op.id, !!estado[op.id]);
        });
        // avisa outros scripts (parallax, carrossel)
        document.dispatchEvent(new CustomEvent('ac:mudou', { detail: estado }));
    }

    aplicar(); // já no <head>, antes de a página aparecer

    // ---- Interface ---------------------------------------------------------
    document.addEventListener('DOMContentLoaded', montar);

    function svg(caminho) {
        return '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="' + caminho + '"/></svg>';
    }

    function montar() {
        // "Pular para o conteúdo": primeiro item do Tab
        var principal = document.querySelector('main');
        if (principal && !principal.id) principal.id = 'conteudo';

        var caixa = document.createElement('div');
        caixa.className = 'ac-raiz';
        caixa.innerHTML =
            (principal ? '<a class="ac-pular" href="#' + principal.id + '">Pular para o conteúdo</a>' : '') +
            '<button class="ac-botao" type="button" aria-expanded="false" aria-controls="ac-painel" aria-label="Abrir menu de acessibilidade" title="Acessibilidade">' +
            svg(ICONE_BOTAO) + '</button>' +
            '<div class="ac-painel" id="ac-painel" role="dialog" aria-label="Opções de acessibilidade" hidden>' +
            '<div class="ac-topo"><span class="ac-titulo">Acessibilidade</span>' +
            '<button class="ac-fechar" type="button" aria-label="Fechar menu de acessibilidade">✕</button></div>' +
            '<span class="ac-rotulo">Tamanho do texto</span>' +
            '<div class="ac-tamanhos" role="group" aria-label="Tamanho do texto">' +
            '<button class="ac-opcao" type="button" data-zoom="0" aria-label="Texto normal">A</button>' +
            '<button class="ac-opcao" type="button" data-zoom="1" aria-label="Texto grande">A+</button>' +
            '<button class="ac-opcao" type="button" data-zoom="2" aria-label="Texto muito grande">A++</button>' +
            '</div>' +
            '<span class="ac-rotulo">Leitura em voz alta</span>' +
            '<div class="ac-leitor" data-leitor>' +
            '<button class="ac-opcao ac-ouvir" type="button" data-ler aria-pressed="false">' +
            svg(ICONE_OUVIR) + '<span>Ouvir esta página</span></button>' +
            '<div class="ac-velocidades" role="group" aria-label="Velocidade da leitura">' +
            '<button class="ac-opcao" type="button" data-velocidade="0.85">Devagar</button>' +
            '<button class="ac-opcao" type="button" data-velocidade="1">Normal</button>' +
            '<button class="ac-opcao" type="button" data-velocidade="1.25">Rápido</button>' +
            '</div>' +
            '<p class="ac-dica">Dica: selecione um trecho da página antes para ouvir só ele.</p>' +
            '</div>' +
            '<span class="ac-rotulo">Ajustes</span>' +
            '<div class="ac-opcoes">' +
            OPCOES.map(function (op) {
                return '<button class="ac-opcao" type="button" data-opcao="' + op.id + '" aria-pressed="false">' +
                    svg(op.icone) + '<span>' + op.rotulo + '</span></button>';
            }).join('') +
            '</div>' +
            '<button class="ac-restaurar" type="button">Restaurar padrão</button>' +
            '</div>' +
            '<div class="ac-guia-faixa" aria-hidden="true"></div>' +
            // controle flutuante enquanto lê (continua visível com o menu fechado)
            '<div class="ac-player" role="region" aria-label="Leitura em voz alta" hidden>' +
            svg(ICONE_OUVIR) +
            '<span class="ac-player__status">Lendo…</span>' +
            '<button class="ac-player__botao" type="button" data-pausar aria-label="Pausar leitura">' + svg(ICONE_PAUSAR) + '</button>' +
            '<button class="ac-player__botao" type="button" data-parar aria-label="Parar leitura">' + svg(ICONE_PARAR) + '</button>' +
            '</div>';
        document.body.appendChild(caixa);

        var botao = caixa.querySelector('.ac-botao');
        var painel = caixa.querySelector('.ac-painel');
        var faixa = caixa.querySelector('.ac-guia-faixa');

        function abrir(aberto) {
            painel.hidden = !aberto;
            botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
            if (aberto) painel.querySelector('button').focus();
        }

        function atualizarBotoes() {
            caixa.querySelectorAll('[data-zoom]').forEach(function (b) {
                b.setAttribute('aria-pressed', Number(b.getAttribute('data-zoom')) === estado.zoom ? 'true' : 'false');
            });
            caixa.querySelectorAll('[data-opcao]').forEach(function (b) {
                b.setAttribute('aria-pressed', estado[b.getAttribute('data-opcao')] ? 'true' : 'false');
            });
            caixa.querySelectorAll('[data-velocidade]').forEach(function (b) {
                b.setAttribute('aria-pressed', Number(b.getAttribute('data-velocidade')) === (estado.velocidade || 1) ? 'true' : 'false');
            });
        }

        botao.addEventListener('click', function () { abrir(painel.hidden); });
        caixa.querySelector('.ac-fechar').addEventListener('click', function () { abrir(false); botao.focus(); });

        caixa.querySelectorAll('[data-zoom]').forEach(function (b) {
            b.addEventListener('click', function () {
                estado.zoom = Number(b.getAttribute('data-zoom'));
                salvar(); aplicar(); atualizarBotoes();
            });
        });
        caixa.querySelectorAll('[data-opcao]').forEach(function (b) {
            b.addEventListener('click', function () {
                var id = b.getAttribute('data-opcao');
                estado[id] = !estado[id];
                salvar(); aplicar(); atualizarBotoes();
            });
        });
        caixa.querySelector('.ac-restaurar').addEventListener('click', function () {
            estado = { zoom: 0 };
            salvar(); aplicar(); atualizarBotoes();
        });

        // Fecha com Esc ou clicando fora
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !painel.hidden) { abrir(false); botao.focus(); }
        });
        document.addEventListener('click', function (e) {
            if (!painel.hidden && !caixa.contains(e.target)) abrir(false);
        });

        // Guia de leitura acompanha o mouse/dedo
        function moverGuia(y) { faixa.style.top = y + 'px'; }
        document.addEventListener('mousemove', function (e) { moverGuia(e.clientY); }, { passive: true });
        document.addEventListener('touchmove', function (e) { moverGuia(e.touches[0].clientY); }, { passive: true });

        iniciarLeitor(caixa, atualizarBotoes);
        atualizarBotoes();
    }

    // ---- Ouvir esta página (voz do próprio navegador: Web Speech API, grátis) ----
    // Lê trecho por trecho (títulos, parágrafos, itens), destacando e rolando até
    // o trecho lido. Se houver texto selecionado, lê só a seleção.
    function iniciarLeitor(caixa, atualizarBotoes) {
        var secao = caixa.querySelector('[data-leitor]');
        var botaoOuvir = caixa.querySelector('[data-ler]');
        var player = caixa.querySelector('.ac-player');
        var statusPlayer = caixa.querySelector('.ac-player__status');
        var botaoPausar = caixa.querySelector('[data-pausar]');

        if (!('speechSynthesis' in window) || !window.SpeechSynthesisUtterance) {
            secao.innerHTML = '<p class="ac-dica">Este navegador não oferece leitura em voz alta.</p>';
            return;
        }

        var fala = window.speechSynthesis;
        var SELETOR = 'h1,h2,h3,h4,h5,h6,p,li,summary,blockquote,dt,dd,figcaption,caption,th,td,label,legend';
        var blocos = [];
        var atual = 0;
        var lendo = false;
        var pausado = false;
        var sessao = 0;   // invalida respostas de falas canceladas
        var voz = null;
        var marcado = null;

        // Voz em português (de preferência pt-BR e das mais naturais)
        function escolherVoz() {
            var vozes = fala.getVoices();
            var pt = vozes.filter(function (v) { return /^pt[-_]BR/i.test(v.lang); });
            if (!pt.length) pt = vozes.filter(function (v) { return /^pt/i.test(v.lang); });
            voz = pt.filter(function (v) { return /natural|online|google/i.test(v.name); })[0] || pt[0] || null;
        }
        escolherVoz();
        if (fala.addEventListener) fala.addEventListener('voiceschanged', escolherVoz);

        // Texto como o leitor de tela leria: ignora ícones e partes com aria-hidden
        function textoDe(el) {
            var texto = '';
            (function percorrer(no) {
                no.childNodes.forEach(function (filho) {
                    if (filho.nodeType === 3) texto += filho.textContent;
                    else if (filho.nodeType === 1 && filho.getAttribute('aria-hidden') !== 'true' &&
                        !/^(script|style|svg|noscript|template)$/i.test(filho.tagName)) {
                        if (filho.tagName === 'IMG') texto += ' ' + (filho.getAttribute('alt') || '') + ' ';
                        else percorrer(filho);
                    }
                });
            })(el);
            return texto.replace(/\s+/g, ' ').trim();
        }

        function legivel(el) {
            if (el.closest('[aria-hidden="true"], [hidden], .ac-raiz, .ga-raiz')) return false;
            var caixaEl = el.getBoundingClientRect();
            return caixaEl.width > 0 && caixaEl.height > 0 && getComputedStyle(el).visibility !== 'hidden';
        }

        function coletar() {
            var selecao = window.getSelection ? window.getSelection() : null;
            var textoSelecionado = selecao ? String(selecao).trim() : '';
            if (textoSelecionado.length > 1 && !caixa.contains(selecao.anchorNode)) {
                return [{ el: null, texto: textoSelecionado }];
            }
            var lista = [];
            (document.querySelector('main') || document.body).querySelectorAll(SELETOR).forEach(function (el) {
                if (!legivel(el) || el.querySelector(SELETOR)) return; // o trecho de dentro entra no lugar
                var texto = textoDe(el);
                if (texto.length > 1) lista.push({ el: el, texto: texto });
            });
            return lista;
        }

        function marcar(el) {
            if (marcado) marcado.classList.remove('ac-lendo');
            marcado = el;
            if (!el) return;
            el.classList.add('ac-lendo');
            var r = el.getBoundingClientRect();
            if (r.top < 120 || r.bottom > window.innerHeight - 80) {
                el.scrollIntoView({ block: 'center', behavior: raiz.classList.contains('ac-pausar') ? 'auto' : 'smooth' });
            }
        }

        function atualizarTela() {
            player.hidden = !lendo;
            botaoOuvir.setAttribute('aria-pressed', lendo ? 'true' : 'false');
            botaoOuvir.querySelector('span').textContent = lendo ? 'Parar leitura' : 'Ouvir esta página';
            statusPlayer.textContent = pausado ? 'Pausado' : 'Lendo ' + (atual + 1) + ' de ' + blocos.length;
            botaoPausar.setAttribute('aria-label', pausado ? 'Continuar leitura' : 'Pausar leitura');
            botaoPausar.innerHTML = svg(pausado ? ICONE_CONTINUAR : ICONE_PAUSAR);
        }

        function falar(i) {
            if (i >= blocos.length) { parar(); return; }
            atual = i;
            var minhaSessao = sessao;
            var frase = new SpeechSynthesisUtterance(blocos[i].texto);
            frase.lang = voz ? voz.lang : 'pt-BR';
            if (voz) frase.voice = voz;
            frase.rate = estado.velocidade || 1;
            frase.onend = function () { if (minhaSessao === sessao && lendo && !pausado) falar(i + 1); };
            frase.onerror = function (e) {
                if (minhaSessao === sessao && lendo && !pausado && e.error !== 'interrupted' && e.error !== 'canceled') falar(i + 1);
            };
            marcar(blocos[i].el);
            atualizarTela();
            fala.speak(frase);
        }

        // No Chrome, falar logo depois de cancel() às vezes perde a frase: espera um instante
        function falarDepois(i) {
            var minhaSessao = sessao;
            setTimeout(function () { if (minhaSessao === sessao) falar(i); }, 80);
        }

        function iniciar() {
            sessao++;
            fala.cancel();
            blocos = coletar();
            if (!blocos.length) return;
            lendo = true;
            pausado = false;
            falarDepois(0);
        }

        function parar() {
            sessao++;
            lendo = false;
            pausado = false;
            fala.cancel();
            marcar(null);
            atualizarTela();
        }

        // Pausa "de verdade" em todos os navegadores: cancela e depois retoma do mesmo trecho
        function alternarPausa() {
            if (!lendo) return;
            sessao++;
            if (pausado) {
                pausado = false;
                falarDepois(atual);
            } else {
                pausado = true;
                fala.cancel();
                atualizarTela();
            }
        }

        botaoOuvir.addEventListener('click', function () { if (lendo) parar(); else iniciar(); });
        botaoPausar.addEventListener('click', alternarPausa);
        caixa.querySelector('[data-parar]').addEventListener('click', parar);
        caixa.querySelectorAll('[data-velocidade]').forEach(function (b) {
            b.addEventListener('click', function () {
                estado.velocidade = Number(b.getAttribute('data-velocidade'));
                salvar();
                atualizarBotoes();
                if (lendo && !pausado) { sessao++; fala.cancel(); falarDepois(atual); } // aplica na hora
            });
        });
        window.addEventListener('pagehide', function () { fala.cancel(); });
        fala.cancel(); // limpa leitura que tenha ficado de outra página
    }
})();
