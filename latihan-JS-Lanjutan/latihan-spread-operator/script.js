const siswa = [`Rizal`, `Rivan`, `Husein`];
// spread operator
// memecah array menjadi single element
console.log(...siswa);
// bisa digunakan sebagai pengganti concat
const siswa2 = [`nama`, `gua`, ...siswa];
console.log(siswa2);
// bisa digunakan untuk mengcopy array juga
// tanpa mengubah susunan array pembentuk
const siswa1 = [...siswa];
siswa1[0] = 'hiya'
console.log(siswa1);

const li = document.querySelectorAll(`ul li`);
// mengubah nodeList menjadi array
const swa = [...li].map(l => l.innerHTML);
console.log(swa);

const nama = document.querySelector('.nama');
const huruf = [...nama.textContent];
const nm = huruf.map(n => `<span>${n}</span>`).join(` `);

nama.innerHTML = nm;

