// Menu Responsivo
function menuShow() {
    let menuMobile = document.querySelector('.itens-mobile-nav-bar');
    if (menuMobile.style.display === 'none' || menuMobile.style.display === '') {
        menuMobile.style.display = 'block';
        menuMobile.style.animation = 'openMenu 0.6s forwards';
    }
    else {
        menuMobile.style.animation = 'closeMenu 0.5s forwards'; // Aplica a animação de fechar
        setTimeout(function() {
            menuMobile.style.display = 'none';
        }, 500);
    }

    let btnIcon = document.getElementById('btn-menu').getElementsByTagName('i')[0];
    if (btnIcon.classList.contains('fa-bars')) {
        setTimeout(function() {
            btnIcon.classList.remove('fa-bars');
            btnIcon.classList.add('fa-times');
        }, 200);
    } 
    else {
        setTimeout(function() {
            btnIcon.classList.remove('fa-times');
            btnIcon.classList.add('fa-bars');
        }, 500);
    }
}
// Fim Menu Responsivo