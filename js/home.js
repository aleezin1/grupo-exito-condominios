// Scripts da home (index.html): carrossel do topo e filtro do FAQ.
// As funções são globais porque os botões chamam direto no HTML (onclick).

// Hero Dashboard Carousel Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
// só os pontos (o botão de pausar usa o mesmo visual, mas não é um slide)
const dots = document.querySelectorAll('#carouselDots .carousel-dot:not(.carousel-pausa)');
const carrossel = document.getElementById('heroCarousel');
const slidesWrapper = document.getElementById('carouselSlides');
const botaoPausa = document.getElementById('carouselPausa');
let autoSlideInterval;
let pausadoPeloUsuario = false;   // botão pausar
let pausadoPorInteracao = false;  // mouse ou foco do teclado em cima do carrossel

function showSlide(index) {
    if (!slides.length) return;
    currentSlide = (index + slides.length) % slides.length;
    slides.forEach((slide, idx) => {
        const ativo = idx === currentSlide;
        slide.classList.toggle('opacity-100', ativo);
        slide.classList.toggle('z-10', ativo);
        slide.classList.toggle('opacity-0', !ativo);
        slide.classList.toggle('pointer-events-none', !ativo);
        slide.classList.toggle('z-0', !ativo);
        // leitor de tela só "enxerga" o slide visível
        slide.setAttribute('aria-hidden', ativo ? 'false' : 'true');
    });
    dots.forEach((dot, idx) => {
        dot.classList.toggle('is-ativo', idx === currentSlide);
        if (idx === currentSlide) dot.setAttribute('aria-current', 'true');
        else dot.removeAttribute('aria-current');
    });
}

// Troca feita pela pessoa (setas/pontos): anuncia o novo slide no leitor de tela
function anunciar() {
    if (slidesWrapper) slidesWrapper.setAttribute('aria-live', 'polite');
}

function nextSlide() {
    anunciar();
    showSlide(currentSlide + 1);
    resetAutoSlide();
}

function prevSlide() {
    anunciar();
    showSlide(currentSlide - 1);
    resetAutoSlide();
}

function goToSlide(idx) {
    anunciar();
    showSlide(idx);
    resetAutoSlide();
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        // Não troca sozinho se: pausado no botão, mouse/foco em cima, "Pausar animações"
        // (menu de acessibilidade) ou sistema pedindo menos movimento
        if (pausadoPeloUsuario || pausadoPorInteracao ||
            document.documentElement.classList.contains('ac-pausar') ||
            window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        // troca automática não é anunciada (seria interrompido a cada 4,5s)
        if (slidesWrapper) slidesWrapper.setAttribute('aria-live', 'off');
        showSlide(currentSlide + 1);
    }, 4500);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Botão pausar/continuar (WCAG 2.2.2: conteúdo que se move sozinho precisa poder parar)
function alternarPausa() {
    pausadoPeloUsuario = !pausadoPeloUsuario;
    botaoPausa.setAttribute('aria-pressed', pausadoPeloUsuario ? 'true' : 'false');
    botaoPausa.setAttribute('aria-label', pausadoPeloUsuario ? 'Continuar carrossel' : 'Pausar carrossel');
    botaoPausa.querySelector('.material-symbols-outlined').textContent = pausadoPeloUsuario ? 'play_arrow' : 'pause';
}

if (botaoPausa) botaoPausa.addEventListener('click', alternarPausa);
if (carrossel) {
    carrossel.addEventListener('mouseenter', () => { pausadoPorInteracao = true; });
    carrossel.addEventListener('mouseleave', () => { pausadoPorInteracao = false; });
    carrossel.addEventListener('focusin', () => { pausadoPorInteracao = true; });
    carrossel.addEventListener('focusout', (e) => {
        if (!carrossel.contains(e.relatedTarget)) pausadoPorInteracao = false;
    });
}

showSlide(1); // o HTML começa no slide 2
startAutoSlide();

// FAQ Filter Functionality
function filterFaq(category, btnElement) {
    const tabs = document.querySelectorAll('.faq-tab');
    tabs.forEach(tab => {
        tab.className =
            'faq-tab px-4 py-2 rounded-full font-label-badge text-[12px] uppercase transition-all bg-white border border-slate-200 text-slate-600 hover:border-brand-navy-deep';
        tab.setAttribute('aria-pressed', 'false');
    });
    btnElement.className =
        'faq-tab px-4 py-2 rounded-full font-label-badge text-[12px] uppercase transition-all bg-brand-navy-deep text-white shadow-xs';
    btnElement.setAttribute('aria-pressed', 'true');

    let visiveis = 0;
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        if (category === 'todas' || item.getAttribute('data-category') === category) {
            item.style.display = 'block';
            visiveis++;
        } else {
            item.style.display = 'none';
        }
    });

    // avisa o leitor de tela quantas perguntas ficaram
    const aviso = document.getElementById('faqAviso');
    if (aviso) aviso.textContent = visiveis + (visiveis === 1 ? ' pergunta exibida' : ' perguntas exibidas');
}

// Chegando de outra página com âncora (ex.: pages/contato.html -> index.html#proposta):
// o navegador pula para a seção antes do Tailwind terminar de montar o CSS, e a
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
