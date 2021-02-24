function getDataSiswa(url, success, error) {
  let xml = new XMLHttpRequest();
  xml.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        success(this.response)
      } else if (this.status === 404) {
        error();
      }
    }
  }
  xml.open(`get`, url);
  xml.send();
};

console.log(`mulai`);
getDataSiswa(`data/siswa.json`, (result) => {
  const siswa = JSON.parse(result);
  
  siswa.forEach(swa => {
    console.log(swa.nama);
    console.log(swa.email);
  });
  // menampilkan dalam bentuk objek
}, (e) => {
    console.log(e.responseText);
});
console.log(`selesai`);
// selesai akan jalan duluan karena asyn jalan paling terakhir
// asyin akan masuk ke dalam web API
// dan akan menunggu semua perintah selesai dikerjakan