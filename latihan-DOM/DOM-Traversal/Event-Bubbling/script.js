// Event Bubling
// suatu eveent pada sebuah element akan merambat ke parentnya juga
// maka jika suatu child memiliki event
// javascript akan mengecek ke parentnya apakah ada event lagi

const container = document.querySelector('.container');
container.addEventListener('click', (e) => {
  if (e.target.className == 'close') {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  }
})