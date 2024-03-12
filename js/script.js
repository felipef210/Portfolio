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