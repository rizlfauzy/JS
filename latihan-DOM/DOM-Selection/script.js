// // document.getElementById() = menghasilkan sebuah element
// const judul = document.getElementById('judul');
// judul.style.color = "red";
// judul.style.backgroundColor = "#333";
// judul.innerHTML = "Rizal Fauzi";

// // document.getElementsByTagName() = menghasilkan HTMLCollections
// const p = document.getElementsByTagName('p');
// // Karena menghasilkan seperti sebuah array maka untuk mewarnai semuanya hrus menggunakan perulangan
// for (let i = 0; i < p.length; i++){
//   p[i].style.backgroundColor = 'lightblue';
// };

// // document.getElementsByClassName() = menghasilkan HTMLCollections
// const p1 = document.getElementsByClassName('p1');
// // Sama dengan byTagName byClassName juga menghasilkan array
// p1[0].innerHTML = "Ini diubah dari Javascript"

// document.querySelector() = menghasilkan sebuah element
const p1 = document.querySelector('.p1');
// Diisikan sebuah selector sama dengan yang ada di css
p1.style.fontSize = '30px';
p1.style.color = 'brown';
p1.innerHTML = 'Diubah dengan Javascript';

// document.querySelectorAll() = menghasilkan nodeList
const li3 = document.querySelectorAll('#b ul li');
// mengembalikan sebuah array
li3[2].style.backgroundColor = 'orange';

// Mengubah node root
const sectionb = document.getElementById('b');
const p4 = sectionb.querySelectorAll('p');
p4[0].style.fontSize = "30px";           