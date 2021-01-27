const tUbahWarna = document.querySelector('#tUbahWarna');
tUbahWarna.onclick = function () {
  document.body.classList.toggle('biru-muda');
};

const tAcakWarna = document.createElement('button');
const isiTAcakWarna = document.createTextNode('Acak Warna');
tAcakWarna.appendChild(isiTAcakWarna);

tUbahWarna.before(tAcakWarna);
// node.before(elemenbaru);
// digunakan untuk menaruh elemen tanpa tau parent nodenya terlebih dahulu
// dan elemen diletakkan sebelum elemen itu
// node.after(elemenbaru);
// menaruh elemen setelah elemen node tersebut
tAcakWarna.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255 + 1);
  const g = Math.round(Math.random() * 255 + 1);
  const b = Math.round(Math.random() * 255 + 1);
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')'
});

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau');
const sBiru = document.querySelector('input[name=sBiru]');

sMerah.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sHijau.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

sBiru.addEventListener('input', function () {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
});

document.body.addEventListener('mousemove', function (event) {
  // event.clientX
  // event.clientY
  // clientX dan clientY harus diawali dengan object event
  // maka fungsinya harus diisi dengan parameter event
  // window.innerWidht untuk mengetahui lebar dari browser
  // window.innerHeight untuk mengetahui tinggi dari broser
  const xPos = Math.round((event.clientX / window.innerWidth) * 255);
  const yPos = Math.round((event.clientY / window.innerHeight) * 255);
  document.body.style.backgroundColor = 'rgb(' + xPos + ',' + yPos + ',' + '100)';
  // ada kekurangan yaitu
  // karena isi bodynya tidak full maka saat keluar dari body 
  // tombol tidak akan berfungsi
  // bisa diatasi dengan menggunakan css
  // yaitu membuat heightnya 100%
})
