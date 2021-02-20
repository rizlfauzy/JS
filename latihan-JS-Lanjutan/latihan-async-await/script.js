const coba = new Promise(resolve => resolve(`Berhasil`));
coba.then((hasil) => console.log(hasil));
// langsung jadi

// kita coba dengan memakai async setTimeout
const coba2 = new Promise(resolve => {
  setTimeout(() => {
    resolve(`tunggu 2 detik`);
  }, 2000);
});

coba2.then((hasil) => console.log(hasil));

function coba3() {
  return new Promise((resolve, rejected) => {
    let waktu = 5000;
    if (waktu < 5000) {
      setTimeout(() => {
        resolve(`Async berhasil`)
      }, waktu);   
    } else {
      rejected(`Async gagal`)
    }
  })
}

// jika tanpa async bisa memakai then dan catch
const coba4 = coba3();
coba4
  .then((hasil) => console.log(hasil))
  .catch((hasil)=>console.log(hasil))

// async function
// dipake saat kita membuat functionnya yang didalmanya ada sebuah promise
async function cobaAsync() {
  // untuk menangkap error dengan async await harus memakai
  // try dan cathc(error)
  // try untuk yang resolve
  // catch(error) untuk yang rejected-
  try {
    console.log(await coba3());
  } catch (error) {
    console.log(error);
  };
}

cobaAsync()