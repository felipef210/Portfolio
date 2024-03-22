// Sessão Carousel
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
// Fim Sessão Carousel