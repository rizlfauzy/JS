const triggers = document.querySelectorAll(`a`);
const highlight = document.createElement(`span`);
highlight.classList.add(`highlight`);
document.body.appendChild(highlight);

triggers.forEach(trigger=>trigger.addEventListener(`mouseenter`, function () {
  // mendapatkan informasi trigger sperti posisi dan ukuran
  const linkCords = this.getBoundingClientRect();
  const coords = {
    width: linkCords.width,
    height: linkCords.height,
    left: linkCords.left + window.scrollX,
    top: linkCords.top + window.scrollY
  }

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`
}))