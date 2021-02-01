// ambil semua li
const videos = Array.from(document.querySelectorAll(`[data-duration]`));
// perintah merubah nodeList, atau HTMLCollection jadi array
// karena method map(),filter(),dan reduce() hanya bisa digunakan di array

// ambil yang merupakan jsLanjutan
let jsLanjutan = videos.filter(video => video.textContent.includes(`JAVASCRIPT LANJUTAN`))
  // array.textContent.includes() = untuk mengambil isi dari konten HTML itu
  // ambil data-durationnya
  .map(item => item.dataset.duration)
  .map(waktu => {
    // ubah 11:28 jadi ['10','28']
    const parts = waktu.split(':').map(part => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((total, waktu) => total + waktu);//jumlahkan waktu yang tdi sudah diubah

//Dapatkan jamnya , menitnya, detiknya
let jam = ~~(jsLanjutan / 3600);
// ~~ sama dengan Math.floor()
jsLanjutan = jsLanjutan - jam * 3600;
let menit = Math.floor(jsLanjutan / 60);
let detik = jsLanjutan - menit * 60;

// simpan di html
const pDurasi = document.querySelector(`p span.total-durasi`);
const pJumlah = document.querySelector('p span.jumlah-video');

const jmlVideo = videos.filter(video => video.innerHTML.includes(`JAVASCRIPT LANJUTAN`));

// textContent = innerHTML
pDurasi.innerHTML = `${jam} jam, ${menit} menit, ${detik} detik`;
pJumlah.textContent = `${jmlVideo.length} video`;

