const inputs = document.querySelectorAll(`.controls input`);

function updateHandler() {
  const suffix = this.dataset.sizing || ``;
    // || sama saja dengan fungsi ternary
    // digunakan untuk element HTML yang tidak terdapat data-sizing
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => {
  input.addEventListener(`change`, updateHandler);
  input.addEventListener(`mousemove`, updateHandler)
});