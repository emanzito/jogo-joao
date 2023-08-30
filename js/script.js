const joao = document.querySelector('.joao');
const pipe = document.querySelector('.pipe');
const perdeu = document.querySelector('.lose');
const oleSound = document.querySelector('.ole');
const perdeuSound = document.querySelector('.perdeu');
const nuvens = document.querySelector('.nuvens');

let isGameOver = false;
let nuvensPosition = 0; 

const playPerdeuSound = () => {
    perdeuSound.currentTime = 0;
    perdeuSound.play();
};

const jump = () => {
    if (!isGameOver) {
        joao.classList.add('jump');

        setTimeout(() => {
            joao.classList.remove('jump');
        }, 500);

        oleSound.currentTime = 0;
        oleSound.play();
    }
};


const checkCollision = () => {
    const pipePosition = pipe.offsetLeft;
    const joaoPosition = +window.getComputedStyle(joao).bottom.replace('px', '');

    if (pipePosition <= 89 && pipePosition > 0 && joaoPosition < 105) {
        gameOver();
    }
};


const gameOver = () => {
    isGameOver = true;
    playPerdeuSound();

    pipe.style.animation = 'none';
    joao.style.animation = 'none';
    joao.src = './imagens/parado.jpg';
    joao.style.width = '75px';
    joao.style.marginLeft = '20px';
    perdeu.src = './imagens/perdeuotr.png';
    perdeu.style.cursor = 'pointer';
    nuvens.style.animation = 'none';
    nuvens.style.left = `${nuvensPosition}px`
};

const restartGame = () => {
    isGameOver = false;
    nuvensPosition = window.innerWidth;

    pipe.style.right = '-80px';
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    joao.style.animation = ''; 
    joao.style.bottom = '0'; 
    joao.src = './imagens/andar.jpg';
    joao.style.width = '100px';
    perdeu.src = '';
    perdeu.style.cursor = 'auto';
    
    
    nuvens.style.animation = 'nuvens-animation 20s linear infinite';
    
    loop = setInterval(() => {
        checkCollision();
    }, 10);
};


perdeu.addEventListener('click', restartGame);

document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') { 
        jump();
    }
});

let loop = setInterval(() => {
    checkCollision();

    if (isGameOver) {
        nuvens.style.animation = 'none';
        nuvens.style.left = `${nuvensPosition}px`;
        joao.style.animation = 'none';
    }
}, 10);
