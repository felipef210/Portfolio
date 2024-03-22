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

// Sessão Carrossel
let contador = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    proxImagem()
}, 8000)

const proxImagem = () => {
    contador++;
    if (contador>2){
        contador = 1
    }
    document.getElementById("radio1").checked = false;
    document.getElementById("radio2").checked = false;
    document.getElementById("radio"+contador).checked = true;
}

let botao = document.querySelector(".botao")
botao.addEventListener("click", () => {
    botao.classList.add("active");

    setTimeout(()=> {
        botao.classList.remove("active");
        document.querySelector("bx").classList.replace("bx-cloud-download", "bx-check-circle")
        document.querySelector(".textoBotao").innerHTML = "Concluído"
    }, 1000) //ms
})
// Fim Sessão Carrossel

// Sessão Projetos
const btn_abrir_modal1 = document.getElementById('btn-sinal');
const btn_abrir_modal2 = document.getElementById('btn-vick-count');
const btn_abrir_modal3 = document.getElementById('btn-exercicios-modalgr');
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
const modalOverlay = document.getElementById('modal-overlay');
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

btn_abrir_modal3.onclick = function(){
    if (!fechandoModal && modalAberta !== modal3) { // Verifica se a modal não está sendo fechada e se a modal atual já não está aberta
        abrirModal(modal3);
    }
    btn_abrir_modal3.blur();
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
        modal3.style.opacity = '0';
        modal1.style.pointerEvents = 'none';
        modal2.style.pointerEvents = 'none';
        modal3.style.pointerEvents = 'none';
        pagina.style.pointerEvents = 'auto';
        setTimeout(() => { 
            modalOverlay.style.display = 'none'; 
            modalAberta = null; // Reseta a variável de controle
            fechandoModal = false; // Reseta a variável de controle para indicar que a modal foi fechada
        }, 800); // Aguarda o término da transição antes de ocultar o modal
    });
});
//Fim Sessão Projetos