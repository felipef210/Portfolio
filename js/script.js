// Sessão Carrossel
let touchStartX = 0;
let touchEndX = 0;

function handleTouchStart(event) {
    touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
    touchEndX = event.changedTouches[0].clientX;
    handleSwipe();
}

function handleSwipe() {
    const threshold = 50; // Mínimo deslocamento horizontal necessário para reconhecer um swipe

    const deltaX = touchEndX - touchStartX;
    if (deltaX > threshold) {
        // Swipe para a direita (avançar)
        nextSlide();
    } else if (deltaX < -threshold) {
        // Swipe para a esquerda (retroceder)
        prevSlide();
    }
}

function changeSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const slideWidth = slides[0].offsetWidth; // Largura de cada slide

    slides.forEach((slide, i) => {
        const distance = (i - index) * slideWidth; // Distância que o slide deve se mover
        slide.style.transform = `translateX(${distance}px)`; // Move o slide horizontalmente
    });

    const buttons = document.querySelectorAll('.manual-btn');
    buttons.forEach((button, i) => {
        if (i === index) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    changeSlide(0); // Altere para 0 se quiser começar com o primeiro slide

    // Adicione a classe 'active' ao botão correspondente ao slide inicial
    // const initialButton = document.querySelector('.manual-btn:nth-child(1)'); // Altere para 1 se quiser começar com o primeiro slide
    // initialButton.classList.add('active');
});
// Fim Sessão Carrossel

// Sessão Projetos
const btn_abrir_modal1 = document.getElementById('btn-sinal');
const btn_abrir_modal2 = document.getElementById('teste');
const modalOverlay = document.getElementById('modal-overlay');
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const btn_close = document.querySelectorAll('.btn-close');
const pagina = document.getElementById('pagina');
let modalAberta = null; // Variável para rastrear qual modal está aberta
let fechandoModal = false; // Variável para indicar se uma modal está sendo fechada no momento

btn_abrir_modal1.onclick = function(){
    if (!fechandoModal && modalAberta !== modal1) { // Verifica se a modal não está sendo fechada e se a modal atual já não está aberta
        abrirModal(modal1);
    }
    btn_abrir_modal1.blur();
}

btn_abrir_modal2.onclick = function(){
    if (!fechandoModal && modalAberta !== modal2) { // Verifica se a modal não está sendo fechada e se a modal atual já não está aberta
        abrirModal(modal2);
    }
    btn_abrir_modal2.blur();
}

// Função para abrir uma modal
function abrirModal(modal) {
    modalOverlay.style.display = 'flex';
    modal.style.display = 'inline-block';
    modal.style.pointerEvents = 'auto';
    pagina.style.pointerEvents = 'none';
    setTimeout(() => { modalOverlay.style.opacity = '1'; modal.style.opacity = '1'; }, 10); // Adiciona um pequeno atraso para a transição ser aplicada corretamente
    modalAberta = modal; // Atualiza a variável de controle
}

// Itera sobre todos os botões de fechar e adiciona um evento de clique a cada um
btn_close.forEach(button => {
    button.addEventListener('click', () => {
        fechandoModal = true; // Define a variável de controle para indicar que uma modal está sendo fechada
        modalOverlay.style.opacity = '0'; // Define a opacidade para 0 antes de fechar o modal para aplicar a transição
        modal1.style.opacity = '0'; // Define a opacidade para 0 antes de fechar o modal para aplicar a transição
        modal2.style.opacity = '0';
        pagina.style.pointerEvents = 'auto';
        setTimeout(() => { 
            modalOverlay.style.display = 'none'; 
            modalAberta = null; // Reseta a variável de controle
            fechandoModal = false; // Reseta a variável de controle para indicar que a modal foi fechada
        }, 800); // Aguarda o término da transição antes de ocultar o modal
    });
});
//Fim Sessão Projetos