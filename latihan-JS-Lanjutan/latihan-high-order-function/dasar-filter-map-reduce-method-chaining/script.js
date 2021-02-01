// hight order function sendiri adalah
// function yang memiliki function sebagai argumennya
// dan mengembalikan sebuah function juga
// function yang berada di posisi argumennya disebut callback

let angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];
// contoh dasar filter()
// untuk meyeleksi array sesuai perintah
let hasil1 = angka.filter(a => a >= 3); //8,9,4,3,9
console.log(hasil1); //filter mengembalikan array lagi

// contoh dasar map()
// untuk merubah hasil arraynya
let hasil2 = angka.map(a => a * 2); //-2, 16, 18, 2, 8, -10, -8, 6, 4, 18
console.log(hasil2); //map mengembalikan array lagi dan hmpr sama dengan forEach

// contoh dasar reduce()
// untuk menabahkan isi array
// array.reduce(function(acc,cur),0)
// acc sebagai penambah dan penampung hasil tambah nya
// cur yaitu isi array yang sekarang diselect
// setiap sudah ditambahkan dengan acc
// curnya akan berpindah
let hasil3 = angka.reduce((acc, cur) => acc + cur, 0);//26
console.log(hasil3);//reduce mengembalikan sebuah number

// method chain
// menggabung ketiga high order function dalam satu method
let hasil4 = angka.filter(a => a > 5)//8,9,9
  .map(a => a * 3)//24,27,27
  .reduce((acc, cur) => acc + cur, 0);//78
console.log(hasil4);