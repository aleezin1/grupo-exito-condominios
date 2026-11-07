// Scripts da home (index.html): filtro do FAQ e rolagem até a âncora.
// A função filterFaq é global porque os botões chamam direto no HTML (onclick).

// Filtro do FAQ
// O botão ativo fica com aria-pressed="true" (o CSS pinta ele de azul-marinho).
// As perguntas de outro assunto ganham o atributo hidden (somem da tela).
function filterFaq(category, btnElement) {
    document.querySelectorAll('.faq__filtro').forEach(tab => {
        tab.setAttribute('aria-pressed', 'false');
    });
    btnElement.setAttribute('aria-pressed', 'true');

    let visiveis = 0;
    document.querySelectorAll('.faq__item').forEach(item => {
        const mostrar = category === 'todas' || item.getAttribute('data-category') === category;
        item.hidden = !mostrar;
        if (mostrar) visiveis++;
    });

    // avisa o leitor de tela quantas perguntas ficaram
    const aviso = document.getElementById('faqAviso');
    if (aviso) aviso.textContent = visiveis + (visiveis === 1 ? ' pergunta exibida' : ' perguntas exibidas');
}

// Chegando de outra página com âncora (ex.: pages/faq.html -> index.html#faq):
// o navegador pula para a seção antes de as imagens terminarem de carregar, e a
// posição fica errada ("cortada"). Depois que tudo carrega, rola de novo até a seção.
window.addEventListener('load', function () {
    if (!location.hash) return;
    var alvo = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (alvo) {
        setTimeout(function () {
            alvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 50);
    }
});
