const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');

const backgroundMusic = document.querySelector('#background-music');
const collisionSound = document.querySelector('#collision-sound');

const gameOver = document.querySelector('.game-over');
const restartButton = document.querySelector('.restart');

let score = 0;
let scoreInterval;

const jump = () => {

    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 90) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '20px'; 
        
        backgroundMusic.pause();
        collisionSound.currentTime = 0;
        collisionSound.play();
        
        
        cloud.style.animation = 'cloud 20s infinite linear';
        cloud.style.left = `${cloudPosition}px`;

        gameOver.style.visibility = 'visible';

        clearInterval(loop);
        clearInterval(scoreInterval);
    } else {
        score += 1;
        document.querySelector('.score').textContent = score;
    
    }
}, 10);

const restart = () => {
    

    gameOver.style.visibility = 'hidden';
    score = 0; 
    pipe.style.animation = 'pipe-animations 1.5s infinite linear';
    pipe.style.left = ``;

    mario.src = './imagens/mario.gif.gif';
    mario.style.width = '130px';
    mario.style.bottom = '0px';
    mario.style.marginLeft = '';
    mario.style.animation = '';

    cloud.style.left = ``;
    collisionSound.pause();
    backgroundMusic.currentTime = 0;
    backgroundMusic.play();

    const loop = setInterval(() => {

        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        const cloudPosition = +window.getComputedStyle(cloud).left.replace('px', '');
    
        if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 90) {
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = './imagens/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '20px';

            backgroundMusic.pause();
            collisionSound.currentTime = 0;
            collisionSound.play();

    
            cloud.style.animation = 'cloud 20s infinite linear';
            cloud.style.left = `${cloudPosition}px`;
    
            gameOver.style.visibility = 'visible';
    
            clearInterval(loop);
            clearInterval(scoreInterval);
            
    } else {
        score += 1;
        document.querySelector('.score').textContent = score;
    
    }
        
    }, 10);
}

document.addEventListener('keydown', jump);
document.addEventListener('touchstart', jump);

restartButton.addEventListener('click', restart);