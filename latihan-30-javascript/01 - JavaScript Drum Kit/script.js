document.addEventListener(`keydown`, function(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; //stop the function from running all togehter
  audio.currentTime = 0 //rewind to the start
  audio.play()
  key.classList.add(`playing`)
  if (key.classList.contains(`playing`)) {
    setTimeout(() => {
      key.classList.remove(`playing`)
    }, 70);
  }
})