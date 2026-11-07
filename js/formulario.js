// Envio de formulário (sem back-end).
// Formulários com o atributo data-confirmacao, ao serem enviados, guardam os dados
// no navegador (sessionStorage) e abrem a página de confirmação definida em action.
// Nada é enviado para servidor nenhum: quando houver back-end, é só trocar o action.
//
// Uso:
//   <form action="pages/confirmacao.html" method="get" data-confirmacao="Proposta personalizada">
//
// O valor de data-confirmacao é o "tipo" de solicitação mostrado na confirmação.
document.querySelectorAll('form[data-confirmacao]').forEach(function (form) {
    form.addEventListener('submit', function (evento) {
        evento.preventDefault();
        if (!form.reportValidity()) return;

        var campos = [];
        form.querySelectorAll('input, select, textarea').forEach(function (campo) {
            if (!campo.name || campo.type === 'submit' || campo.type === 'button') return;
            if ((campo.type === 'checkbox' || campo.type === 'radio') && !campo.checked) return;

            var valor = campo.tagName === 'SELECT'
                ? campo.options[campo.selectedIndex].text
                : campo.value.trim();
            if (campo.type === 'date') valor = dataBrasileira(valor);
            if (!valor) return;

            campos.push({ nome: campo.name, rotulo: rotuloDo(campo), valor: valor });
        });

        var dados = {
            tipo: form.getAttribute('data-confirmacao') || 'Solicitação',
            protocolo: gerarProtocolo(),
            data: new Date().toISOString(),
            campos: campos
        };

        try {
            sessionStorage.setItem('ge-confirmacao', JSON.stringify(dados));
        } catch (erro) {
            // navegador bloqueando o armazenamento: a confirmação abre sem o resumo
        }
        window.location.href = form.getAttribute('action');
    });
});

// Texto do <label> do campo: pelo for="id" ou o label dentro do mesmo bloco
function rotuloDo(campo) {
    var label = campo.id && document.querySelector('label[for="' + campo.id + '"]');
    if (!label && campo.parentElement) label = campo.parentElement.querySelector('label');
    var texto = label ? label.textContent : campo.name;
    return texto.replace(/\*/g, '').replace(/\s+/g, ' ').trim();
}

// Ex.: GE-260930-4821
function gerarProtocolo() {
    var d = new Date();
    var data = String(d.getFullYear()).slice(2) +
        String(d.getMonth() + 1).padStart(2, '0') +
        String(d.getDate()).padStart(2, '0');
    var aleatorio = Math.floor(1000 + Math.random() * 9000);
    return 'GE-' + data + '-' + aleatorio;
}

// ---------------------------------------------------------------------------
// Data mínima: nos campos de data dos formulários, não deixa escolher um dia
// que já passou (o "min" vira a data de hoje quando a página abre).
document.querySelectorAll('form[data-confirmacao] input[type="date"]').forEach(function (campo) {
    if (!campo.min) campo.min = dataDeHoje();
});

// Data de hoje no formato do campo de data: 2026-11-04
function dataDeHoje() {
    var d = new Date();
    return d.getFullYear() + '-' +
        String(d.getMonth() + 1).padStart(2, '0') + '-' +
        String(d.getDate()).padStart(2, '0');
}

// Data do campo (2026-11-04) no jeito brasileiro (04/11/2026), para a confirmação
function dataBrasileira(valor) {
    var partes = valor.split('-');
    if (partes.length !== 3) return valor;
    return partes[2] + '/' + partes[1] + '/' + partes[0];
}

// ---------------------------------------------------------------------------
// Máscara do telefone: enquanto a pessoa digita, coloca os parênteses, o
// espaço e o traço. Vale para todo campo type="tel" dos formulários.
//   fixo (10 números):    (11) 2564-9963
//   celular (11 números): (11) 98765-4321
// O pattern do HTML continua conferindo o formato no envio.
document.querySelectorAll('form[data-confirmacao] input[type="tel"]').forEach(function (campo) {
    ligarMascaraTelefone(campo);
});

function ligarMascaraTelefone(campo) {
    // Guarda o valor de antes, para saber se o Backspace apagou só um símbolo
    campo.valorAnterior = campo.value;

    campo.addEventListener('input', function (evento) {
        mascararAoDigitar(campo, evento.inputType);
    });

    // Colar: trata o texto inteiro (o maxlength cortaria "+55 11 98765-4321")
    campo.addEventListener('paste', function (evento) {
        var texto = (evento.clipboardData || window.clipboardData).getData('text');
        evento.preventDefault();
        mascararAoColar(campo, texto);
    });
}

// Deixa só os números do texto
function somenteNumeros(texto) {
    return texto.replace(/\D/g, '');
}

// Monta o telefone formatado a partir dos números (no máximo 11)
function formatarTelefone(numeros) {
    var ddd = numeros.slice(0, 2);
    var resto = numeros.slice(2);

    if (numeros.length === 0) return '';
    if (numeros.length <= 2) return '(' + ddd;
    if (resto.length <= 4) return '(' + ddd + ') ' + resto;

    // Fixo: 4 números antes do traço. Celular (11 números): 5 antes do traço.
    var antesDoTraco = numeros.length === 11 ? 5 : 4;
    return '(' + ddd + ') ' + resto.slice(0, antesDoTraco) + '-' + resto.slice(antesDoTraco);
}

// Posição do cursor logo depois do enésimo número do texto formatado
function posicaoDepoisDoNumero(texto, quantos) {
    if (quantos === 0) return 0;
    var contados = 0;
    for (var i = 0; i < texto.length; i++) {
        if (/\d/.test(texto[i])) contados++;
        if (contados === quantos) return i + 1;
    }
    return texto.length;
}

// Digitar e apagar
function mascararAoDigitar(campo, tipo) {
    var cursor = campo.selectionStart;
    var numeros = somenteNumeros(campo.value);
    // Quantos números ficam antes do cursor (para o cursor não pular para o fim)
    var antesDoCursor = somenteNumeros(campo.value.slice(0, cursor)).length;

    // Backspace em cima de um símbolo ("-", ")" ou espaço): os números não
    // mudaram. Apaga o número que está antes dele, senão o campo "trava".
    var apagando = tipo === 'deleteContentBackward';
    if (apagando && numeros === somenteNumeros(campo.valorAnterior) && antesDoCursor > 0) {
        numeros = numeros.slice(0, antesDoCursor - 1) + numeros.slice(antesDoCursor);
        antesDoCursor--;
    }

    // Preenchimento automático do navegador pode trazer o +55 na frente
    if (numeros.length > 11 && numeros.indexOf('55') === 0) {
        numeros = numeros.slice(2);
        antesDoCursor = Math.max(antesDoCursor - 2, 0);
    }
    numeros = numeros.slice(0, 11);
    antesDoCursor = Math.min(antesDoCursor, numeros.length);

    campo.value = formatarTelefone(numeros);
    campo.valorAnterior = campo.value;
    var posicao = posicaoDepoisDoNumero(campo.value, antesDoCursor);
    campo.setSelectionRange(posicao, posicao);
}

// Colar: aceita com ou sem formatação, e com o +55 do Brasil na frente
function mascararAoColar(campo, texto) {
    var numeros = somenteNumeros(texto);
    if (numeros.length > 11 && numeros.indexOf('55') === 0) numeros = numeros.slice(2);

    campo.value = formatarTelefone(numeros.slice(0, 11));
    campo.valorAnterior = campo.value;
    campo.setSelectionRange(campo.value.length, campo.value.length);
}
