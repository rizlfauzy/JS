// Desstruction Assignment
// membongkar isi sebuah array dan objek ke dalam variabel baru

// contoh penggunaan di array
const coba1 = [2, 3, 5, 4];
const [a, b, c, d] = coba1; // =  [a,b,c,d] = [2,3,5,4]
console.log(a);//akan menghasilkan angka pertama dalam array

// jika kita tidak tau ada berapa arraynnya di variabel pertama maka
const [angka, ...values1] = coba1;//gunakan rest parameter
console.log(angka);//menghasilkan angka 2
console.log(values1);//menghasilkn array yang mengembalikan sisa dari arraynya
for (const value of values1) {
  console.log(value);//menghasilkan nilai satu2 dari array values
};

function kalkulasi(a,b) {
  return [
    a + b, a - b, a * b, a / b
  ]
};

const [tambah, kurang, kali, bagi] = kalkulasi(5, 6);
console.log(kali);//menghasilkan 30
console.log(kalkulasi(6, 6)[3]);//tanpa dustruction assignment

// destruction assignment
const coba2 = {
  nama: "Rizal Fauzi",
  kelas: "XIII SIJA 2",
  umur: 18
};

const { nama, kelas, umur, email = `email@email.com` } = coba2;//email = 'email@email.com untuk mengisi nama default sebuah property
console.log(email);
const { nama:gua, ...values2 } = coba2;
console.log(gua);
console.log(values2);//jadi sebuah object baru yang berisi sisanya

// destruction function
let coba3 = (a, b) => ({
  tambah: a + b,
  kurang: a - b,
  kali: a * b,
  bagi: a / b
});

const { kurang: ku, kali:ka, bagi:ba, tambah:ta } = coba3(5, 7);
console.log(ku);

const siswa = {
  nama: 'Rizal Fauzi',
  umur: 18,
  email: `rizalfauzi774@gmail.com`,
  nilai: {
    harian: 80,
    uts: 85,
    uas: 90
  }
};
// nested destruction argumen
const cetakSiswa = ({nama, umur, nilai:{harian, uts, uas}}) =>
  `Halo nama saya ${nama}, saya berumur ${umur}, nilai uts saya ${uts}`;

console.log(cetakSiswa(siswa));