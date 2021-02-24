const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', (e) => {
  if (e.target.classList.contains(`thumb`)) {
    // const imgThumb = e.target.getAttribute('src')
    // jumbo.setAttribute('src',imgThumb)
    jumbo.src = e.target.src;
    jumbo.classList.add('fade');
    setTimeout(() => {
      jumbo.classList.remove('fade')
    }, 500);
    thumbs.forEach((thumb) => {
      thumb.className = 'thumb';
      // setiap ditekan akan menciptan class yang namanya thumb
    });
    e.target.classList.add('active');
  }
});

