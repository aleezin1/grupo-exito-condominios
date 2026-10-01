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
