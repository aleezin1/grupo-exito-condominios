// Assistente virtual — substitui o botão "WhatsApp Direto".
// Funciona 100% no navegador, sem servidor e sem custo: entende a pergunta por
// palavras-chave (ignora acentos, maiúsculas e pontuação) e responde a partir da
// base de conhecimento abaixo. Quando não sabe, oferece o WhatsApp de um atendente.
//
// Para ensinar algo novo, adicione um item em BASE:
//   palavras:  termos que ativam a resposta (frases inteiras valem mais)
//   resposta:  texto; links no formato [texto](endereço). Use "site:" para páginas do site.
//   sugestoes: botões de resposta rápida mostrados depois
//
// Estilos em css/assistente.css.
(function () {
    var NOME = 'Assistente Felipe João';   // nome mostrado no botão e no topo do chat
    var INICIAIS_NOME = 'FJ';              // letras do avatar
    var WHATSAPP = 'https://wa.me/551125649963';
    var CHAVE = 'ge-assistente-conversa';

    // Endereço da raiz do site, calculado a partir deste arquivo (js/assistente.js),
    // para os links funcionarem tanto na home quanto em /pages
    var script = document.currentScript;
    var RAIZ = script ? script.src.replace(/js\/assistente\.js.*$/, '') : '';

    var BASE = [
        {
            id: 'saudacao',
            palavras: ['oi', 'ola', 'bom dia', 'boa tarde', 'boa noite', 'e ai', 'opa', 'hello', 'hey'],
            resposta: 'Olá! 👋 Sou o Felipe João, assistente virtual do Grupo Êxito. Posso ajudar com serviços, proposta, boletos, contato e endereços. Sobre o que você quer saber?',
            sugestoes: ['Quais serviços vocês oferecem?', 'Quero uma proposta', 'Falar com atendente']
        },
        {
            id: 'servicos',
            palavras: ['servico', 'servicos', 'o que voces fazem', 'o que fazem', 'administracao', 'administrar', 'pilares', 'catalogo'],
            resposta: 'Trabalhamos em 3 frentes:\n• [Gestão Administrativa](site:pages/servicos-1.html): documentos, atas, contratos e cadastros.\n• [Gestão Financeira](site:pages/servicos-2.html): orçamento, cobrança, balancetes e prestação de contas.\n• [Gestão Operacional](site:pages/servicos-3.html): manutenção, fornecedores e equipe.\nVeja tudo em [Serviços](site:pages/servicos.html).',
            sugestoes: ['Gestão financeira', 'Manutenção e fornecedores', 'Quero uma proposta']
        },
        {
            id: 'administrativa',
            palavras: ['administrativa', 'administrativo', 'documento', 'documentos', 'ata', 'atas', 'contrato', 'contratos', 'burocracia', 'cadastro', 'convencao', 'regimento', 'encomenda', 'correspondencia'],
            resposta: 'Na Gestão Administrativa cuidamos de documentos e atas, contratos com fornecedores, cadastros de moradores, convenção e regimento interno. Detalhes em [Gestão Administrativa](site:pages/servicos-1.html).',
            sugestoes: ['Gestão financeira', 'Quero uma proposta']
        },
        {
            id: 'financeira',
            palavras: ['financeira', 'financeiro', 'balancete', 'prestacao de contas', 'previsao orcamentaria', 'inadimplencia', 'inadimplente', 'cobranca', 'conciliacao', 'contas a pagar', 'fundo de reserva'],
            resposta: 'Na Gestão Financeira fazemos previsão orçamentária, contas a pagar, conciliação bancária, cobrança de inadimplentes e balancetes transparentes. Nossos cases mostram redução forte da inadimplência. Veja em [Gestão Financeira](site:pages/servicos-2.html).',
            sugestoes: ['Segunda via de boleto', 'Ver projetos e cases', 'Quero uma proposta']
        },
        {
            id: 'operacional',
            palavras: ['operacional', 'manutencao', 'manutencoes', 'porteiro', 'porteiros', 'zelador', 'zeladores', 'fornecedor', 'fornecedores', 'portaria', 'limpeza', 'emergencia', 'avcb', 'vistoria', 'obra', 'obras', 'elevador'],
            resposta: 'Na Gestão Operacional acompanhamos porteiros e zeladores, manutenção preventiva, contratação e fiscalização de fornecedores e plantão para emergências. Veja em [Gestão Operacional](site:pages/servicos-3.html).',
            sugestoes: ['Quero uma proposta', 'Falar com atendente']
        },
        {
            id: 'boleto',
            palavras: ['boleto', 'boletos', '2 via', 'segunda via', '2a via', 'pix', 'pagamento', 'pagar', 'taxa condominial', 'condominio atrasado', 'vencimento'],
            resposta: 'A segunda via do boleto (com Pix Copia e Cola) sai pelo app do morador, integrado à Superlógica. Se não conseguir acessar, nosso time envia para você: [chamar no WhatsApp](whatsapp:Olá! Preciso da segunda via do boleto do condomínio.).',
            sugestoes: ['Falar com atendente', 'Horário de atendimento']
        },
        {
            id: 'assembleia',
            palavras: ['assembleia', 'assembleias', 'reuniao', 'votacao', 'votar', 'quorum', 'eleicao', 'sindico'],
            resposta: 'Organizamos assembleias presenciais, híbridas ou 100% digitais, com votação auditada e ata automatizada. Também damos suporte completo ao síndico. Quer saber mais? [Fale com um consultor](site:index.html#proposta).',
            sugestoes: ['Quero uma proposta', 'Quais serviços vocês oferecem?']
        },
        {
            id: 'proposta',
            palavras: ['proposta', 'orcamento', 'preco', 'precos', 'quanto custa', 'valor', 'valores', 'contratar', 'cotacao', 'estudo', 'mensalidade', 'taxa de administracao'],
            resposta: 'O valor depende do tamanho e da rotina do condomínio, por isso montamos uma proposta sob medida, sem compromisso. Preencha o [formulário de proposta](site:index.html#proposta) e um consultor retorna em até 2h úteis.',
            sugestoes: ['Trocar de administradora', 'Falar com atendente']
        },
        {
            id: 'troca',
            palavras: ['trocar', 'troca', 'mudar de administradora', 'nova administradora', 'transicao', 'migrar', 'migracao', 'sair da administradora'],
            resposta: 'Cuidamos de toda a transição: levantamento de documentos e saldos, migração do cadastro e comunicação com os moradores, sem interromper a rotina. Comece pelo [formulário de proposta](site:index.html#proposta).',
            sugestoes: ['Quero uma proposta', 'Ver projetos e cases']
        },
        {
            id: 'contato',
            palavras: ['telefone', 'whatsapp', 'whats', 'zap', 'email', 'e-mail', 'contato', 'falar', 'atendente', 'humano', 'pessoa', 'ligar', 'atendimento humano', 'consultor'],
            resposta: 'Você pode falar com a gente por:\n• Telefone: [(11) 2564-9963](tel:1125649963)\n• WhatsApp: [conversar agora](whatsapp:Olá! Vim pelo site e gostaria de falar com um atendente.)\n• E-mail: [contato@grupoexitocondominios.com.br](mailto:contato@grupoexitocondominios.com.br)\nOu use a página de [Contato](site:pages/contato.html).',
            sugestoes: ['Horário de atendimento', 'Onde fica o escritório?']
        },
        {
            id: 'endereco',
            palavras: ['endereco', 'onde fica', 'onde ficam', 'localizacao', 'local', 'escritorio', 'matriz', 'filial', 'mogi', 'sao paulo', 'mapa', 'visitar'],
            resposta: 'Temos duas unidades:\n• Matriz: R. Gonçalo Ferreira, 164, Sala 3, Mogi das Cruzes/SP ([ver mapa](https://maps.google.com/?q=Rua+Goncalo+Ferreira+164+Mogi+das+Cruzes))\n• Filial: Av. Rio das Pedras, 3.409, São Paulo/SP ([ver mapa](https://maps.google.com/?q=Av+Rio+das+Pedras+3409+Sao+Paulo))\nTelefone das duas unidades: [(11) 2564-9963](tel:1125649963).',
            sugestoes: ['Horário de atendimento', 'Falar com atendente']
        },
        {
            id: 'horario',
            palavras: ['horario', 'horarios', 'funciona', 'funcionamento', 'aberto', 'abre', 'fecha', 'que horas', 'expediente', 'sabado', 'domingo', 'plantao'],
            resposta: 'Atendimento de segunda a sexta, das 9h às 17h. Para emergências no condomínio (vazamentos, falta de energia etc.) temos plantão 24h.',
            sugestoes: ['Falar com atendente', 'Onde fica o escritório?']
        },
        {
            id: 'projetos',
            palavras: ['clientes', 'cliente', 'cases', 'case', 'projetos', 'projeto', 'referencias', 'referencia', 'depoimentos', 'resultados', 'portfolio', 'atendem', 'condominios atendidos'],
            resposta: 'Atendemos condomínios residenciais, comerciais e fechados em Mogi das Cruzes e São Paulo. Veja os [projetos e cases](site:pages/projetos.html) e o que dizem os [nossos clientes](site:pages/clientes.html).',
            sugestoes: ['Quero uma proposta', 'Quem é o Grupo Êxito?']
        },
        {
            id: 'sobre',
            palavras: ['quem sao', 'quem e', 'empresa', 'historia', 'sobre', 'experiencia', 'anos', 'grupo exito', 'confiavel', 'missao', 'valores'],
            resposta: 'O Grupo Êxito administra condomínios há mais de 15 anos, unindo tecnologia, transparência e atendimento próximo. Conheça a nossa história em [Quem Somos](site:pages/quem-somos.html).',
            sugestoes: ['Quais serviços vocês oferecem?', 'Ver projetos e cases']
        },
        {
            id: 'tecnologia',
            palavras: ['app', 'aplicativo', 'superlogica', 'portal', 'online', 'digital', 'tecnologia', 'sistema', 'telemetria', 'agua', 'gas', 'lgpd'],
            resposta: 'Usamos a plataforma Superlógica: app do morador e do síndico com boletos, prestação de contas, reservas e comunicados. Também implantamos telemetria individual de água e gás, tudo seguindo a LGPD.',
            sugestoes: ['Segunda via de boleto', 'Quero uma proposta']
        },
        {
            id: 'faq',
            palavras: ['duvida', 'duvidas', 'perguntas', 'pergunta frequente', 'faq', 'ajuda'],
            resposta: 'Reunimos as perguntas mais comuns em [Perguntas Frequentes](site:pages/faq.html). Se preferir, é só me perguntar aqui!',
            sugestoes: ['Quais serviços vocês oferecem?', 'Falar com atendente']
        },
        {
            id: 'obrigado',
            palavras: ['obrigado', 'obrigada', 'valeu', 'agradeco', 'brigado', 'show', 'otimo', 'perfeito', 'beleza'],
            resposta: 'Por nada! 😊 Se precisar de mais alguma coisa, é só chamar.',
            sugestoes: ['Quero uma proposta', 'Falar com atendente']
        },
        {
            id: 'tchau',
            palavras: ['tchau', 'ate logo', 'ate mais', 'flw', 'falou'],
            resposta: 'Até logo! Quando quiser, estou por aqui. 👋',
            sugestoes: []
        }
    ];

    var NAO_ENTENDI = {
        resposta: 'Hmm, ainda não sei responder isso. 🤔 Tente perguntar de outro jeito ou fale com um atendente: [conversar no WhatsApp](whatsapp:Olá! Vim pelo site e tenho uma dúvida.).',
        sugestoes: ['Quais serviços vocês oferecem?', 'Quero uma proposta', 'Falar com atendente']
    };

    var GENERICOS = ['saudacao', 'obrigado', 'servicos'];

    var INICIAIS = ['Quais serviços vocês oferecem?', 'Quero uma proposta', 'Segunda via de boleto', 'Falar com atendente'];

    // ---- "Entendimento" da pergunta ----------------------------------------
    function normalizar(texto) {
        return texto.toLowerCase()
            .normalize('NFD').replace(/[̀-ͯ]/g, '')  // tira acentos
            .replace(/[^a-z0-9\s-]/g, ' ')
            .replace(/\s+/g, ' ').trim();
    }

    function entender(pergunta) {
        var texto = ' ' + normalizar(pergunta) + ' ';
        var palavras = texto.trim().split(' ');
        var melhor = null;
        var melhorPontos = 0;

        BASE.forEach(function (item) {
            var pontos = 0;
            item.palavras.forEach(function (chave) {
                var c = normalizar(chave);
                if (c.indexOf(' ') > -1) {
                    if (texto.indexOf(' ' + c + ' ') > -1) pontos += 4;          // frase inteira
                } else {
                    palavras.forEach(function (p) {
                        if (p === c) pontos += 2;                                   // palavra exata
                        else if (c.length >= 5 && p.length >= 5 &&                  // plural, erro no fim
                            (p.indexOf(c.slice(0, -1)) === 0 || c.indexOf(p.slice(0, -1)) === 0)) pontos += 1;
                    });
                }
            });
            // respostas genéricas só vencem quando não há assunto mais específico
            if (GENERICOS.indexOf(item.id) > -1) pontos *= 0.45;
            if (pontos > melhorPontos) {
                melhorPontos = pontos;
                melhor = item;
            }
        });
        return melhor || NAO_ENTENDI;
    }

    // ---- Texto da resposta -> elementos (links seguros) --------------------
    function resolverLink(destino) {
        if (destino.indexOf('site:') === 0) return { href: RAIZ + destino.slice(5), externo: false };
        if (destino.indexOf('whatsapp:') === 0) return { href: WHATSAPP + '?text=' + encodeURIComponent(destino.slice(9)), externo: true };
        return { href: destino, externo: /^https?:/.test(destino) };
    }

    function montarTexto(el, texto) {
        texto.split('\n').forEach(function (linha, i) {
            if (i) el.appendChild(document.createElement('br'));
            var re = /\[([^\]]+)\]\(([^)]+)\)/g;
            var ultimo = 0;
            var m;
            while ((m = re.exec(linha))) {
                el.appendChild(document.createTextNode(linha.slice(ultimo, m.index)));
                var info = resolverLink(m[2]);
                var a = document.createElement('a');
                a.href = info.href;
                a.textContent = m[1];
                if (info.externo) { a.target = '_blank'; a.rel = 'noopener'; }
                el.appendChild(a);
                ultimo = re.lastIndex;
            }
            el.appendChild(document.createTextNode(linha.slice(ultimo)));
        });
    }

    // ---- Interface ---------------------------------------------------------
    document.addEventListener('DOMContentLoaded', montar);

    function montar() {
        var caixa = document.createElement('div');
        caixa.className = 'ga-raiz';
        caixa.innerHTML =
            '<button class="ga-botao" type="button" aria-expanded="false" aria-controls="ga-painel">' +
            '<span class="ga-botao__icone" aria-hidden="true">' +
            '<svg viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-3 11H7v-2h10v2zm0-3H7V8h10v2z"/></svg>' +
            '</span><span class="ga-botao__texto">' + NOME + '</span></button>' +
            '<section class="ga-painel" id="ga-painel" role="dialog" aria-label="' + NOME + '" hidden>' +
            '<header class="ga-topo">' +
            '<span class="ga-avatar" aria-hidden="true">' + INICIAIS_NOME + '</span>' +
            '<div class="ga-topo__texto"><strong>' + NOME + '</strong><span><i class="ga-online"></i>Online • respostas automáticas</span></div>' +
            '<button class="ga-fechar" type="button" aria-label="Fechar assistente">✕</button>' +
            '</header>' +
            '<div class="ga-mensagens" role="log" aria-live="polite"></div>' +
            '<div class="ga-sugestoes"></div>' +
            '<form class="ga-form">' +
            '<label class="ga-oculto" for="ga-campo">Digite sua pergunta</label>' +
            '<input class="ga-campo" id="ga-campo" type="text" autocomplete="off" maxlength="300" placeholder="Digite sua pergunta...">' +
            '<button class="ga-enviar" type="submit" aria-label="Enviar">' +
            '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>' +
            '</form>' +
            '<a class="ga-humano" target="_blank" rel="noopener" href="' + WHATSAPP + '?text=' +
            encodeURIComponent('Olá! Vim pelo site e gostaria de falar com um atendente.') + '">Prefere uma pessoa? Fale no WhatsApp →</a>' +
            '</section>';
        document.body.appendChild(caixa);

        var botao = caixa.querySelector('.ga-botao');
        var painel = caixa.querySelector('.ga-painel');
        var lista = caixa.querySelector('.ga-mensagens');
        var sugestoes = caixa.querySelector('.ga-sugestoes');
        var form = caixa.querySelector('.ga-form');
        var campo = caixa.querySelector('.ga-campo');

        var conversa = lerConversa();

        function lerConversa() {
            try { return JSON.parse(sessionStorage.getItem(CHAVE)) || []; } catch (e) { return []; }
        }
        function salvarConversa() {
            try { sessionStorage.setItem(CHAVE, JSON.stringify(conversa.slice(-40))); } catch (e) { }
        }

        function adicionar(autor, texto, salvar) {
            var msg = document.createElement('div');
            msg.className = 'ga-msg ga-msg--' + autor;
            if (autor === 'bot') montarTexto(msg, texto); else msg.textContent = texto;
            lista.appendChild(msg);
            lista.scrollTop = lista.scrollHeight;
            if (salvar !== false) { conversa.push({ autor: autor, texto: texto }); salvarConversa(); }
        }

        function mostrarSugestoes(itens) {
            sugestoes.innerHTML = '';
            (itens || []).forEach(function (texto) {
                var b = document.createElement('button');
                b.type = 'button';
                b.className = 'ga-chip';
                b.textContent = texto;
                b.addEventListener('click', function () { perguntar(texto); });
                sugestoes.appendChild(b);
            });
        }

        function responder(item) {
            var digitando = document.createElement('div');
            digitando.className = 'ga-msg ga-msg--bot ga-digitando';
            digitando.setAttribute('aria-label', 'Digitando');
            digitando.innerHTML = '<i></i><i></i><i></i>';
            lista.appendChild(digitando);
            lista.scrollTop = lista.scrollHeight;
            mostrarSugestoes([]);

            var pausa = document.documentElement.classList.contains('ac-pausar') ? 150 : 550 + Math.random() * 450;
            setTimeout(function () {
                digitando.remove();
                adicionar('bot', item.resposta);
                mostrarSugestoes(item.sugestoes);
            }, pausa);
        }

        function perguntar(texto) {
            texto = texto.trim();
            if (!texto) return;
            adicionar('usuario', texto);
            responder(entender(texto));
        }

        function abrir(aberto) {
            painel.hidden = !aberto;
            botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
            caixa.classList.toggle('ga-aberto', aberto);
            if (aberto) {
                if (!lista.children.length) {
                    if (conversa.length) {
                        conversa.forEach(function (m) { adicionar(m.autor, m.texto, false); });
                        mostrarSugestoes(INICIAIS);
                    } else {
                        responder({ resposta: BASE[0].resposta, sugestoes: INICIAIS });
                    }
                }
                setTimeout(function () { campo.focus(); }, 50);
            }
        }

        botao.addEventListener('click', function () { abrir(painel.hidden); });
        caixa.querySelector('.ga-fechar').addEventListener('click', function () { abrir(false); botao.focus(); });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && !painel.hidden) { abrir(false); botao.focus(); }
        });
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            perguntar(campo.value);
            campo.value = '';
        });
    }
})();
