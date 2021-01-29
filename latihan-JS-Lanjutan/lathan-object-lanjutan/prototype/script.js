function Mahasiswa(nama, energi) {
  // object contructor sebenarnya membuat sebuah method berikut
  // let this = Object.create(Mahasiswa.prototype);
  // yang menghubungkan ke parent class dari objek yang sekarang
  // sedang kita buat
  this.nama = nama;
  this.energi = energi;
}

Mahasiswa.prototype.makan= function(porsi) {
  this.energi += porsi;
  return `Selamat makan ${this.nama}`;
}

Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Selamat main ${this.nama}`;
}

Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Selamat tidur ${this.nama}`;
}

const namaMahasiswa = document.querySelector('input[name=nama]');
const energiMahasiswa = document.querySelector('input[name=energi]');
const makanMahasiswa = document.querySelector('#makan');
const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
  if (e.target.className == 'tombol') {
    const r = namaMahasiswa.value;
    const g = parseInt(energiMahasiswa.value);
    const b = parseInt(makanMahasiswa.value);
    let mahasiswa1 = new Mahasiswa(r, g);
    mahasiswa1.makan(b)

    const pBaru = document.createElement('p');
    const isiPBaru = document.createTextNode(`Nama ${mahasiswa1.nama} telah makan sebanyak ${b} porsi, energi sekarang ${mahasiswa1.energi}`);
    pBaru.appendChild(isiPBaru);
    e.target.after(pBaru);
  }
})





// Versi class
class Siswa{
  // consrtuctor()
  // membuat property
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  };
  makan (porsi) {
    this.energi += porsi;
    return `Selamat makan ${this.nama}`;
  };

  main (jam) {
    this.energi -= jam;
    return `Selamat main ${this.nama}`;
  };

  tidur (jam) {
    this.energi += jam * 2;
    return `Selamat tidur ${this.nama}`;
  };
};

let salsa = new Siswa('Salsa', 5);
