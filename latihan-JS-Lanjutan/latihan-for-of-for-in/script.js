const coba1 = [1, 2, 3, 4, 5];
// for of digunakan untuk mengambil satu2 value dari array

// jika menggunakan for biasa maka
for (let i = 0; i < coba1.length; i++) {
  const co = coba1[i];
  console.log(co);
}
// jika memakai for of
for (const co of coba1) {
  console.log(co);
};
// jika memakai forEach
coba1.forEach(co => {
  console.log(co);
});

const liBaru = document.querySelectorAll(`ul li`);
// jika memakai forEach bisa langsung dimasukkaan ke indeksnya
liBaru.forEach((li,i) => {
  console.log(`${li.innerHTML} ada di indeks ke ${i + 1}`);
});
// jika memakai for of ada yg harus disetting dulu
for (const [i,li] of liBaru.entries()) {
  // liBaru.entries() mengembalikan array dari indeks dan valuenya
  // dalam satu array
  console.log(`${li.innerHTML} ada di indeks ke ${i + 1}`);
};

// for in
const coba3 = {
  nama: 'Rizal Fuzi',
  umur: 18,
  email: `rizalfauzi774@gmail.com`
};
// untuk memanggil valuenya pakai coba3[co]
// kalau ingin propertinya maka co saja
for (const co in coba3) {
  console.log(coba3[co]);
}