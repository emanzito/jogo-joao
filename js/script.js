
const joao = document.querySelector('.joao')
const pipe = document.querySelector('.pipe')
const perdeu = document.querySelector('.lose')
const oleSound = document.querySelector('.ole')
const oofSound = document.querySelector('.oof')
const nuvens = document.querySelector('.nuvens')
const perdeuSound = document.querySelector('.perdeu')
let isPerdeuSound = false

const playPerdeuSound = () => {
    if (!isPerdeuSound) {
      isPerdeuSound = true
      perdeuSound.currentTime = 0
      perdeuSound.play()
    }
  };

  const jump = () => {
    if (!isPerdeuSound) { // Check if the game has not ended yet
        joao.classList.add('jump');

        setTimeout(() => {
            joao.classList.remove('jump');
        }, 500);

        oleSound.currentTime = 0;
        oleSound.play();
    }
}

const restartGame = () => {
    joao.src = "./imagens/andar.jpg"
    joao.style.width = "100px"
    joao.style.animation = "jump 500ms ease-out"
    joao.style.bottom = `0px`
    joao.style.left = `0px`
    // Reinicie as variáveis ou estilos que você precisa

    
    // Defina a animação do pipe novamente
    pipe.style.animation = "pipe-animation 1.5s infinite linearntg";

    // Defina a animação das nuvens novamente
    nuvens.style.animation = "nuvens";
    
    // Resto do código...
};


// Adicione um evento de clique à imagem "perdeu"
perdeu.addEventListener('click', restartGame)


const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft
    const joaoPosition = +window.getComputedStyle(joao).bottom.replace('px', '')
    const nuvensPosition = nuvens.offsetLeft

    console.log(joaoPosition)

    if (pipePosition <= 89 && pipePosition > 0 && joaoPosition < 105) {  //só é executado quando o joao bate no pipe(perde o jogo)

        pipe.style.animation = 'none' //o pipe perde a animação e fica parado
        pipe.style.left = `${pipePosition}px`

        joao.style.animation = 'none' //o joao fica sem animação e muda a imagem 
        joao.style.bottom = `${joaoPosition}px`
        joao.src = "./imagens/parado.jpg"
        
        joao.style.width = '75px'
        joao.style.marginLeft = '20px'
        
        nuvens.style.animation = 'none' //retira a animação das nuvens quando perde
        nuvens.style.left = `${nuvensPosition}px`

        perdeu.src = "./imagens/perdeuotr.png" //adiciona uma imagem ao perder
        perdeu.style.cursor = 'pointer'  //o cursor fica pointer

        

        playPerdeuSound()
        clearInterval(loop)


    }
}, 10)


document.addEventListener('keydown', jump)







