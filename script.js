const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
const bird = document.querySelector('.bird');
let isJumping = false;
let position = 0;

function handleKeyDown(event) {
    if (event.keyCode === 32 || event.keyCode === 38) {
        if (!isJumping) {
            jump();
        }
    }
}

function jump() {
    isJumping = true;
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval)
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                } else {
                    position -= 10;
                    dino.style.bottom = position + 'px';
                }
            }, 30);
        } else {
            position += 10;
            dino.style.bottom = position + 'px';
        }
    }, 10);
}

function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1360;
    let randonTime = Math.random() * 6000;
    cactus.classList.add('cactus');
    cactus.style.left = 1360 + 'px';
    background.appendChild(cactus);
    let leftInterval = setInterval(() => {
        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="Game-Over">Fim de Jogo</h1>';
        } else {
            cactusPosition -= 7;
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20)
    setTimeout(createCactus, randonTime);
}

function createBird() {
    const bird = document.createElement('div');
    let birdPosition = 1360;
    let randonTime = Math.random() * 6000;
    bird.classList.add('bird');
    bird.style.left = 1360 + 'px';
    background.appendChild(bird);
    let leftInterval = setInterval(() => {
        if (birdPosition < -61) {
            clearInterval(leftInterval);
            background.removeChild(bird);
        } else if (birdPosition > 0 && birdPosition < 61 && position > 61) {
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="Game-Over">Fim de Jogo</h1>';
        } else {
            birdPosition -= 10;
            bird.style.left = birdPosition + 'px';
        }
    }, 20)
    setTimeout(createBird, 10000);
}

createCactus();
createBird();
document.addEventListener('keydown', handleKeyDown);