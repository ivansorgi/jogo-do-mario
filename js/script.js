const mario = document.querySelector('.mario');
const coin = document.querySelector('.coin');

let isJumping = false;

function jump() {
  if (!isJumping) {
    isJumping = true;
    mario.style.animation = 'jump 0.6s';
    setTimeout(() => {
      mario.style.animation = 'walk 0.8s steps(4) infinite';
      isJumping = false;
    }, 600);
  }
}

function controlMario(event) {
  if (event.key === 'ArrowUp') {
    jump();
  }
}

document.addEventListener('keydown', controlMario);
