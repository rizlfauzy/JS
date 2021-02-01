// tag template literal adalah
// template literal yang disimpan di sebuah function

// const nama = 'Rizal Fauzi';
// const umur = 18;


// function coba(strings, ...values) {
//   // untuk mengambil semua argumen menggunakan
//   // ...values
//   // let result = ``;
//   // strings.forEach((string,i) => {
//   //   result += `${string}${values[i] || ``}`
//   //   // `${string}${values[i] || ``}`
//   //   // sama saja dengan fungsi ternary
//   //   // `${string}${values[i] ? values[i] : `}`
//   // });
//   // return result

//   // Cara Panjang

//   return strings.reduce((result, string, i) =>  `${result}${string}${values[i] || ``}`,``)
// }


// const str = coba`Halo nama saya ${nama}, saya ${umur} tahun`;
// console.log(str);

// Contoh Penggunaan

const nama = 'Rizal Fauzi';
const umur = 18;
const email = `rizalfauzi774@gmail.com`


function highlight(strings, ...values) {
  // untuk mengambil semua argumen menggunakan
  // ...values
  // let result = ``;
  // strings.forEach((string,i) => {
  //   result += `${string}${values[i] || ``}`
  //   // `${string}${values[i] || ``}`
  //   // sama saja dengan fungsi ternary
  //   // `${string}${values[i] ? values[i] : `}`
  // });
  // return result

  // Cara Panjang

  return strings.reduce((result, string, i) =>
    `${result}${string}<span class="hl">${values[i] || ``}</span>`, ``)
}


const str = highlight`Halo nama saya ${nama}, saya ${umur} tahun, email saya adalah ${email}`;
document.body.innerHTML = str;

// Digunakan untuk membrikan highlight kepada elemen yang diinginkan