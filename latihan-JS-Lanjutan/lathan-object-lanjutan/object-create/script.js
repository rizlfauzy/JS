// Function Declaration
const methodMahasiswa = {
  makan: function (porsi){
    this.energi += porsi;
    console.log(`Selamat Makan ${this.nama}`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`Selamat bermain ${this.nama}`);
  },
  tidur: function (jam) {
    this.energi += jam *2;
    console.log(`Selamat tidur ${this.nama}`);
  }
};

function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa);
  // Object.create sama dengan {}
  // bedanya kita bisa mengambil data dari object literal
  // yang sudah dibuat diatasnya

  // object.create memanggil objek lain =
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
};

// const nama = document.querySelector('input[name=nama').value;
// const energi = document.querySelector('input[name=energi]').value;

let rizal = Mahasiswa('Rizal', 20);
