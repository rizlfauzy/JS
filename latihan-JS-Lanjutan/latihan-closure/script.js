// closure berjalan ketika inner function membtuhkan sebuah
// variabel dari luar inner function trsebut
// function tersebut mencarinya keluar dan ketemu di
// outer function

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Selamat ${waktu}, semoga hari ${nama} menyenangkan`);
  };
};

let selamatPagi = ucapkanSalam('pagi');
let selamatSiang = ucapkanSalam('siang');
let selamatMalam = ucapkanSalam('malam');

selamatPagi('Rizal');

let add = (function () {
  let counter = 0;
  return function () {
    ++counter;
    return counter
  }
})();
// dengan tanda () membuat kita bisa menjalankan
// fungsi add tanpa menginiliasi dulu di sebuah variabel

console.log(add());
console.log(add());
console.log(add());
console.log(add());

