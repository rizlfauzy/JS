// Promise()
// Objek yang merepresentasikan keberhasilan / kegagalan sebuah event asyncrounous
// yang akan terjadi di masa yang akan datang
// janji (terpenuhi / ingkar)
// states (fulfilled / rejected / pending)
// callback (resolve / reject / finally)
// aksi (then / catch)
let ditepati = true;
const janji1 = new Promise((resolve, reject) => {
  if (ditepati) {
    resolve(`Berhasil ditepati`);
  } else {
    reject(`Tidak ditepati`)
  }
});

// janji1
//   .then(response => console.log(`OK! ${response}`))//response adalah parameter yang 
//                                                   //memngambil dari hasil resolve
//   .catch(response => console.log(`NOT OKAY ${response}`));//mengambil dari reject

const janji2 = new Promise((resolve, reject) => {
  if (ditepati) {
    setTimeout(() => {
      resolve(`berhasil terukir`)
    }, 2000);
  } else {
    setTimeout(() => {
      reject(`Tidak berhasil terukir`)
    }, 2000);
  }
});

console.log(`mulai`);
// console.log(janji2.then(() => console.log(janji2)));
//akan menghasilkan pending di pertama karen then belum dijalankany
//setelah .then dijalankan objek janji2 pun berjalan 2 detik setelah itu
janji2
  .finally(() => console.log(`Masih Menunggu`))
  .then(response => console.log(response))
  .catch(response => console.log(response))
console.log(`selesai`);

const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul: `avengers`,
      actors: `Rizal Fauzi`,
      write: `Rivansyach`
    }])
  }, 2000);
});

const cuaca = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      kota: `Jakarta`,
      suhu: 25,
      satuan: `celcius`
    }])
  }, 500);
});

// Promise.all
// atribut Promise untuk memanggil banyak objek promise sekaligus
Promise.all([film, cuaca])
  .then(response => {
    const [film, cuaca] = response;
    console.log(film);
    console.log(cuaca);
  });
  // akan muncul setelah dua detik