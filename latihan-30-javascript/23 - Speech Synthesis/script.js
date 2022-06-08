const msg = new SpeechSynthesisUtterance();
  let voices = [];
  const voicesDropdown = document.querySelector('[name="voice"]');
  const options = document.querySelectorAll('[type="range"], [name="text"]');
  const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
  
msg.text = document.querySelector(`[name="text"]`).value;

function populateVoices() {
  voices = this.getVoices();
  voicesDropdown.innerHTML = voices
    .map(voice => {
      return /*html*/`
        <option value="${voice.name}">${voice.name} ${voice.lang}</option>`
    }).join(``)
};

function setVoices() {
  msg.voice = voices.find(voice => voice.name === this.value);
  toggle()
};

function toggle(startOver = true) {
  speechSynthesis.cancel();
  if (startOver) {
    // akan berbicara sesuai msg.text
    speechSynthesis.speak(msg)
  }
}

function setOption() {
  msg[this.name] = this.value;
  toggle()
}

// bekerja dengan memasukka datanya ke option
speechSynthesis.addEventListener(`voiceschanged`, populateVoices);
voicesDropdown.addEventListener(`change`, setVoices);
options.forEach(input => input.addEventListener(`change`, setOption));
speakButton.addEventListener(`click`, toggle)
stopButton.addEventListener(`click`,()=> toggle(false));