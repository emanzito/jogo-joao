const joao = document.querySelector('.joao')
const pipe = document.querySelector('.pipe')
const nuvens = document.querySelector('.nuvens')
const oleSound = document.querySelector('.ole');
const oofSound = document.querySelector('.oof');
const perdeuSound = document.querySelector('.perdeu');
let isPerdeuSound = false

const playPerdeuSound = () => {
    if (!isPerdeuSound) {
      isPerdeuSound = true;
      perdeuSound.currentTime = 0;
      perdeuSound.play();
    }
  };

const jump = () => {
    joao.classList.add('jump')

        setTimeout(() => {
        joao.classList.remove('jump')
    }, 500)

    oleSound.currentTime = 0
    oleSound.play()

}


const loop = setInterval(() => {
    
    const pipePosition = pipe.offsetLeft
    const joaoPosition = +window.getComputedStyle(joao).bottom.replace('px', '')
    const nuvensPosition = nuvens.offsetLeft

    console.log(joaoPosition)

    if (pipePosition <= 89 && pipePosition > 0 && joaoPosition < 105) {

        pipe.style.animation = 'none'
        pipe.style.left = `${pipePosition}px`

        joao.style.animation = 'none'
        joao.style.bottom = `${joaoPosition}px`
        joao.src = "./imagens/parado.jpg"
        
        joao.style.width = '75px'
        joao.style.marginLeft = '20px'
        
        nuvens.style.animation = 'none'
        nuvens.style.left = `${nuvensPosition}px`

        playPerdeuSound()
        
    }
}, 10)


document.addEventListener('keydown', jump)