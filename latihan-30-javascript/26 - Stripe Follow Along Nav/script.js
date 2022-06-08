const nav = document.querySelector(`.top`);
const triggers = document.querySelectorAll(`.cool > li`);
const background = document.querySelector(`.dropdownBackground`);

function handleEnter() {
  this.classList.add(`trigger-enter`);
  // jika ada kelas trigger-enter maka akan menambahkan trigger-enter-active
  setTimeout(() => this.classList.contains(`trigger-enter`) && this.classList.add(`trigger-enter-active`), 150);
  background.classList.add(`open`);

  const dropdown = this.querySelector(`.dropdown`);
  const dropdownCords = dropdown.getBoundingClientRect();
  const navCords = nav.getBoundingClientRect();
  console.log(navCords);
  const cords = {
    width: dropdownCords.width,
    height: dropdownCords.height,
    top: dropdownCords.top - navCords.top,
    left: dropdownCords.left - navCords.left
  };
  background.style.width = `${cords.width}px`;
  background.style.height = `${cords.height}px`;
  background.style.transform = `translate(${cords.left}px,${cords.top}px)`
};

function handleLeave() {
  this.classList.remove(`trigger-enter`, `trigger-enter-active`);
  background.classList.remove(`open`);
};

triggers.forEach(trigger => trigger.addEventListener(`mouseenter`, handleEnter));
triggers.forEach(trigger => trigger.addEventListener(`mouseleave`, handleLeave));