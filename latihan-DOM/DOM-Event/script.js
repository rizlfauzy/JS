// event handler
// dengan memakai on<event>
// bisa digunakan dari file htmlnya atau langsung dari javascript

// contoh dari htmlnya
const p3 = document.querySelector('.p3');
function ubahWarnaP3() {
  p3.style.backgroundColor = 'lightblue';
};

// langsung dari javascripnya dengan method onclick
const p2 = document.querySelector('.p2');
function ubahWarnaP2() {
  p2.style.backgroundColor = 'salmon';
};
p2.onclick = ubahWarnaP2;

// menggunakan addEventListener();
const p4 = document.querySelector('section#b p.p4');
p4.innerHTML = 'Click Me!!';
p4.addEventListener('click', function () {
  for (let i = 4; i < 11; i++){
    const ul = document.querySelector('ul');
    const liBaru = document.createElement('li');
    const isiLiBaru = document.createTextNode('item ' + i);
    liBaru.appendChild(isiLiBaru);
    ul.appendChild(liBaru);
  } 
})
