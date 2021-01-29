// arrow function adalah cara kita menyingkat sebuah function
let tampilNama = nama => `Nama Saya ${nama}`;
// = let tampilNama = function(nama) {
  // return `Nama saya ${nama}`;
// }

// singkat {return `Nama Saya ${nama}`};
// jadi langsung
// `nama saya ${nama}`;
// tapi hanya bisa dilakukan jika perintah yang ingin dilakukan cuma return

// singkat function (nama)
// menjadi
// nama
// hanya bisa dilakukan jika hanya punya satu parameter
console.log(tampilNama('rizal'));

let mahasiswa = ['Rizal', 'Rivan', 'Husein'];
let jumlahHuruf = mahasiswa.map(nama => nama.length);
// sama saja dengan 
// let jumlahHuruf = mahasiswa.map(function(nama){
  //return nama.length; 
// });
console.table(jumlahHuruf);
// console.table() digunakan untuk menghasilkan console yg lbh mudah dibaca

let jumlahHuruf2 = mahasiswa.map(nama => ({ nama, jmlhrf: nama.length }));
// sama saja dengan
// let jumlahHuruf3 = mahasiswa.map(function (nama) {
//   return {
//     nama: nama,
//     jmlhrf: nama.length
//   };
// })
// menyingkat membuat objek dengan cara
// () sebagai return
// untuk mengembalikan sebuah objek dari method map
console.table(jumlahHuruf2);