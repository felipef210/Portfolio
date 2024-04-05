// Animação Scroll
function checkScroll() {
    let habilidadesItems = document.querySelectorAll('.item-habilidades');
    
    habilidadesItems.forEach(function(item) {
        let bounding = item.getBoundingClientRect();

        // Se o item estiver visível na tela, adicione a classe de animação
        if (
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        ) {
            item.classList.add('fade-in');
        }
        else {
            item.classList.remove('fade-in');
        }
    });
}

// Adicione um evento de rolagem para chamar a função de verificação
window.addEventListener('scroll', checkScroll);
// Fim Animação Scroll