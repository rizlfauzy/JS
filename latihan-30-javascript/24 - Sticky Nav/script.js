const nav = document.querySelector(`#main`);
let topNavOffset = nav.offsetTop;

window.addEventListener(`scroll`, function () {
  
  console.log(topNavOffset, window.scrollY);
  
  if (window.scrollY >= topNavOffset) {
    document.body.style.paddingTop = `${nav.offsetHeight}px`
    document.body.classList.add(`fixed-nav`)
  } else {
    document.body.classList.remove(`fixed-nav`);
    document.body.style.paddingTop = 0;
  }
  
});