// Manipulasi Node
// Membuat element baru dengan
// node.createElement('elemen html');

// pertama buat dulu elementnya
const pBaru = document.createElement('p');
// buat isi elementnya
const isiPBaru = document.createTextNode('paragraph baru');
// masukkan isi element ke dalam elementnya
pBaru.appendChild(isiPBaru);
// Masukkan kedalam halaman htmlnya dengan mengambil salah satu element
// yang sudah ada di halaman html
const sectionA = document.querySelector("section#a");
sectionA.appendChild(pBaru);

// Parentnode.insertBefore(elemenyanginginmasuk, elemenSesudahnya);
// tangkap dulu parentNode nya
const ul = document.querySelector('section#b ul');
// tangkap li sesudah kita ingin menaruh elemen tersebut
const li2 = ul.querySelector('li:nth-child(2)');
// Buat element barunya lagi
const liBaru = document.createElement('li');
// buat isi dari element baru itu
const isiLiBaru = document.createTextNode("item baru");
// masukkan isi elemen ke dalam element tersebut
liBaru.appendChild(isiLiBaru);
// Masukkan ke dalam halaman html dengan insertBefore
ul.insertBefore(liBaru, li2);

// Menghapus sebuah elemen dalam sebuah parentNode
// parentNode.removeChild(namaelemenyangmaudihapus);
const a = sectionA.querySelector('a');
// setelah menangkap elemen yang mau dihapus langsung saja kita hapus
sectionA.removeChild(a);

// Mengganti elemen lama dengan elemen yang baru
// parentNode.replaceChild(elemenbaru, elemenlama);
// tangkap parent nodenya dulu
const sectionB = document.getElementById('b');
// tangkap elemen lama yang ingin diganti
const p4 = document.querySelector('.p4');
// buat elemen barunya
const h2Baru = document.createElement('h2');
// buat isi elementnya
const isiH2Baru = document.createTextNode('Judul Baru');
// masukkan ke elemen h2Baru
h2Baru.appendChild(isiH2Baru);
// baru kita replace elemen lama dengan yang baru
sectionB.replaceChild(h2Baru, p4)