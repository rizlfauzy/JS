// Dapatkan semua element
const player = document.querySelector(`.player`);
const video = player.querySelector(`.viewer`);
const progress = player.querySelector(`.progress`);
const progressBar = player.querySelector(`.progress__filled`);
const toggle = player.querySelector(`.toggle`);
const sliders = player.querySelectorAll(`.player__slider`);
const skipButton = player.querySelectorAll(`[data-skip]`)

// membuat function tombol
function togglePlay() {
  (video.paused) ? video.play() : video.pause();
};

function togglePlaySpace(e) {
  (e.keyCode === 32) ? ((video.paused) ? video.play() : video.pause()) : ``;
}

function updateButton() {
  const icon = this.paused ? `►` : `II`;
  toggle.innerHTML = icon;
}

function skip() {
  video.currentTime += parseInt(this.dataset.skip);
}

function skipArrow(e) {
  if (e.keyCode === 37) {
    video.currentTime += parseInt(skipButton[0].dataset.skip);
  } else if (e.keyCode === 39) {
    video.currentTime += parseInt(skipButton[1].dataset.skip);
  }
};

function handleUpdate() {
  // [this.name] menghasilkan array yg sesuai namanya ["volume"]
  video[this.name] = this.value;
};

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`
};

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}


// Mengaktifkan eventListener
toggle.addEventListener(`click`, togglePlay);
video.addEventListener(`click`, togglePlay);
document.body.addEventListener(`keydown`, togglePlaySpace)
video.addEventListener(`play`, updateButton);
video.addEventListener(`pause`, updateButton);
video.addEventListener(`timeupdate`, handleProgress);

skipButton.forEach(button => button.addEventListener(`click`, skip));
document.body.addEventListener(`keydown`, skipArrow);
sliders.forEach(slider => slider.addEventListener(`mousemove`, handleUpdate));
let mouseDown = false;
progress.addEventListener(`click`, scrub);
progress.addEventListener(`mousemove`, e => mouseDown && scrub(e));
progress.addEventListener(`mousedown`, () => mouseDown = true);
progress.addEventListener(`mouseup`, () => mouseDown = false);
