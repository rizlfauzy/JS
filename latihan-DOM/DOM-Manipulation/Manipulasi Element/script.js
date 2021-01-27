// element.innerHTML = berfungsi untuk mengisi element html lagi di dalam elemen html
const judul = document.querySelector('#judul');
judul.innerHTML = "Rizal Fauzi";

// element.style.<propertyCSS> = berfungsi memasukkan property css ke html
judul.style.backgroundColor = "coral";

// element.setAttribute('namaAtribut', 'isiAtribut') = berfungsi menambahkan atribut
// di sebuah elemen html
const p1 = document.querySelector('.p1');
p1.setAttribute('name', 'Rizal Fauzi');
// element.getAttribute('namaAtribut') = mengembalikan isi dari atribut yang ada
// di dalam sebuah element html
const a = document.querySelector('a');
let atribut = a.getAttribute('href');
p1.innerHTML = atribut;
// element.removeAttribute('namaAtribut') = menghapus nama atribut
const p2 = document.querySelector('.p2');
p2.removeAttribute('class');

// setAttribute tidak boleh digunakan untuk membuat class
// karena hanya akan mengganti nama class yang sebelumnya
// dan bukan menambahkannya

// element.classList.add('namaclass'); untuk menambah class baru
const sectionA = document.querySelector('section#a');
sectionA.classList.add('label');//menambah kelas label ke sectionA
// element.classList.remove('namaclass') untuk menghapus class
sectionA.classList.remove('label')//menghapus kelas label
// element.classList.toggle('namaclass') jika tidak ada akan ditambah jika ada akan
// dihapus
function gantiWarna() {
  document.body.classList.toggle('biru-muda');
};

