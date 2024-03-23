// Sessão Projetos
const btn_abrir_modal1 = document.getElementById('btn-sinal');
const btn_abrir_modal2 = document.getElementById('btn-vick-count');
const btn_abrir_modal3 = document.getElementById('btn-exercicios-modalgr');
const modal1 = document.getElementById('modal1');
const modal2 = document.getElementById('modal2');
const modal3 = document.getElementById('modal3');
let modais = [modal1, modal2, modal3];
const modalOverlay = document.getElementById('modal-overlay');
const btn_close = document.querySelectorAll('.btn-close');
const pagina = document.getElementById('pagina');
let modalAberta = null; // Variável para rastrear qual modal está aberta
let fechandoModal = false; // Variável para indicar se uma modal está sendo fechada no momento

function criarFuncaoAbrirModal(botao, modal) {
    return function() {
        if (!fechandoModal && modalAberta !== modal) {
            abrirModal(modal);
        }
        botao.blur();
    };
}

btn_abrir_modal1.onclick = criarFuncaoAbrirModal(btn_abrir_modal1, modal1);
btn_abrir_modal2.onclick = criarFuncaoAbrirModal(btn_abrir_modal2, modal2);
btn_abrir_modal3.onclick = criarFuncaoAbrirModal(btn_abrir_modal3, modal3);

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
        for (let i = 0; i < modais.length; i++) {
            modais[i].style.opacity = '0';            
            modais[i].style.pointerEvents = 'none';
        }
        
        pagina.style.pointerEvents = 'auto';
        setTimeout(() => { 
            modalOverlay.style.display = 'none'; 
            modalAberta = null; // Reseta a variável de controle
            fechandoModal = false; // Reseta a variável de controle para indicar que a modal foi fechada
        }, 800); // Aguarda o término da transição antes de ocultar o modal
    });
});
//Fim Sessão Projetos