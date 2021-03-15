const holes = document.querySelectorAll(`.hole`);
const moles = document.querySelectorAll(`.mole`);
const scoreBoard = document.querySelector(`.scoreBoard span`)
let lastHole;
let score;
let done;


function randomHoles(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  hole = holes[idx];
  if (lastHole === hole) {
    console.log(`Gk boleh muncul dua kali ya bund`);
    return randomHoles(holes);
  }
  lastHole = hole;
  return hole
}

function showMoles() {
  const time = randomTimes(200, 1000);
  const hole = randomHoles(holes);
  hole.classList.add(`up`);
  setTimeout(() => {
    hole.classList.remove(`up`);
    if (!done) showMoles();
  }, time);
};

function randomTimes(min, max) {
  // untuk menentukan bilangan random dari berapa sampai berapa
  return Math.round(Math.random() * (max - min) + min);
};

function startGame() {
  done = false;
  score = 0
  scoreBoard.innerHTML = score
  showMoles();
  setTimeout(() => {
    done = true;
  }, 10000);
}

function hit(e) {
  if (e.isTrusted) {
    score++;
  scoreBoard.innerHTML = score;
  this.parentElement.classList.remove(`up`)
  }
};

moles.forEach(mole=>mole.addEventListener(`click`, hit))