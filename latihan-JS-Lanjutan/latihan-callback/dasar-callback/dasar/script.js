// callback
// function yang menjadi sebuah parameter bagi function lain

// synchronous Callbac
function pemanggilNama(callback) {
  let halo = prompt("Masukkan Nama :");
  callback(halo);
}

pemanggilNama(halo => {
  alert(`Halo selamat datang ${halo}`);
});

const siswa = [
  {
    nama: `Rizal Fauzi`,
    umur: 18,
    email: `rizalfauzi774@gmail.com`
  },
  {
    nama: `Raden Muhammad Rivansyach`,
    umur: 18,
    email: `rivansyach12@gmail.com`
  },
  {
    nama: `Husein Azka Fadhila`,
    umur: 18,
    email: `huseinbuchin@gmail.com`
  }
];

// membuat objek siswa lama dipanggil dengan cara seperti dibawah
console.log(`mulai`);
siswa.forEach(swa => {
  for (let i = 0; i < 10000000; i++) {
    let d = new Date();
  }
  console.log(swa.nama)
})
console.log(`selesai`);