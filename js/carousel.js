document.addEventListener('DOMContentLoaded', function() {
    let startX, endX;
    let threshold = 50; // ajuste conforme necessário
    let carouselInner = document.querySelector('.carousel-inner');
    let carouselItems = document.querySelectorAll('.carousel-item');
    let totalItems = carouselItems.length;
    let currentItemIndex = 0;
    let intervalId;
    let radioButtonsContainer = document.querySelector('.radio-buttons');
  
    // Adiciona um temporizador para chamar showNextSlide a cada 5 segundos
    function startAutoSlide() {
      intervalId = setInterval(showNextSlide, 5000);
    }
  
    // Para o temporizador
    function stopAutoSlide() {
      clearInterval(intervalId);
    }
  
    startAutoSlide(); // Inicia o temporizador automaticamente
  
    // Cria os botões de rádio
    for (let i = 0; i < totalItems; i++) {
      let radioButton = document.createElement('label');
      let radioButtonInput = document.createElement('input');
      radioButtonInput.setAttribute('type', 'radio');
      radioButtonInput.setAttribute('name', 'carousel-radio');
      radioButtonInput.setAttribute('value', i);
      radioButton.appendChild(radioButtonInput);
      radioButton.innerHTML += '<span></span>';
      radioButtonsContainer.appendChild(radioButton);
    }
  
    // Define o primeiro botão de rádio como selecionado por padrão
    document.querySelector('input[type="radio"][name="carousel-radio"][value="0"]').checked = true;
  
    // Adiciona o evento change para os botões de rádio
    radioButtonsContainer.addEventListener('change', function(event) {
      let selectedRadioValue = parseInt(event.target.value);
      goToSlide(selectedRadioValue);
    });
  
    // Adiciona eventos de mouse e toque para controle de toque
    document.querySelector('.carousel').addEventListener('mousedown', function(event) {
      startX = event.pageX;
      stopAutoSlide(); // Para o temporizador quando o usuário interage com o carrossel
    });
  
    document.querySelector('.carousel').addEventListener('touchstart', function(event) {
      startX = event.touches[0].pageX;
      stopAutoSlide(); // Para o temporizador quando o usuário interage com o carrossel
    });
  
    document.querySelector('.carousel').addEventListener('mouseup', function(event) {
      endX = event.pageX;
      handleGesture();
      startAutoSlide(); // Reinicia o temporizador após o usuário interagir com o carrossel
    });
  
    document.querySelector('.carousel').addEventListener('touchend', function(event) {
      endX = event.changedTouches[0].pageX;
      handleGesture();
      startAutoSlide(); // Reinicia o temporizador após o usuário interagir com o carrossel
    });
  
    function handleGesture() {
        let diff = endX - startX;
        if (Math.abs(diff) > threshold) {
          if (diff > 0 && currentItemIndex > 0) {
            // Deslize para a direita, exceto na primeira imagem
            showPrevSlide();
          } 
          else if (diff < 0 && currentItemIndex < totalItems - 1) {
            // Deslize para a esquerda, exceto na última imagem
            showNextSlide();
          }
        } 
        else {
          // Se o deslocamento for menor que o limite, retorna para a posição original
          let currentTranslateX = -currentItemIndex * carouselItems[0].offsetWidth + (endX - startX);
          carouselInner.style.transition = 'none'; // Remover transição para deslocamento suave
          carouselInner.style.transform = 'translateX(' + currentTranslateX + 'px)';
        }
      }
  
    function showNextSlide() {
      currentItemIndex = (currentItemIndex + 1) % totalItems;
      let currentTranslateX = -currentItemIndex * carouselItems[0].offsetWidth;
      carouselInner.style.transition = 'transform 0.5s ease';
      carouselInner.style.transform = 'translateX(' + currentTranslateX + 'px)';
      updateRadioButtons();
    }
  
    function showPrevSlide() {
      currentItemIndex = (currentItemIndex - 1 + totalItems) % totalItems;
      let currentTranslateX = -currentItemIndex * carouselItems[0].offsetWidth;
      carouselInner.style.transition = 'transform 0.5s ease';
      carouselInner.style.transform = 'translateX(' + currentTranslateX + 'px)';
      updateRadioButtons();
    }
  
    // Função para ir para o slide selecionado
    function goToSlide(index) {
      currentItemIndex = index;
      let currentTranslateX = -currentItemIndex * carouselItems[0].offsetWidth;
      carouselInner.style.transition = 'transform 0.5s ease';
      carouselInner.style.transform = 'translateX(' + currentTranslateX + 'px)';
      updateRadioButtons();
    }
  
    // Atualiza os botões de rádio
    function updateRadioButtons() {
      document.querySelector('input[type="radio"][name="carousel-radio"][value="' + currentItemIndex + '"]').checked = true;
    }
  });  