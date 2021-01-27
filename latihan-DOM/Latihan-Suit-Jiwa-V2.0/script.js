function getPilihanKomputer() {
  const comp = Math.random();
  if (comp < 0.34) return 'gajah';
  if (comp >= 0.34 && comp <= 0.67) return 'orang';
  return 'semut';
};

function getHasil(comp, player) {
  if (comp == player) return 'SERI!';
  if (player == 'gajah') return (comp == 'orang') ? 'MENANG!' : 'KALAH!';
  if (player == 'orang') return (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
  if (player == 'semut') return (comp == 'orang') ? 'KALAH!' : 'MENANG!';
};

function putar() {
  const imgKomputer = document.querySelector('.img-komputer');
  const gambar = ['gajah', 'semut', 'orang'];

  let i = 0;
  let waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 1000) {
      // new Date().getTime() akan terus bertambah 100ms
      // waktuMulai mengembalikan nilai 1611755675741
      // jika hasil kurang nya sudah lebih dari 1000ms maka
      // interval akan berhenti
      clearInterval;
      return;
    }
    imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png');
    if (i == gambar.length) {
      i = 0;
    }
  },100)
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach((pil) => {
  pil.addEventListener('click', () => {
    const pilihanKomputer = getPilihanKomputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanKomputer, pilihanPlayer);

    putar();
    // Karena perintah yang dbawah dijalan langsung
    // perintah tersebut langsung ditimpa oleh putar()
    // sehingga jawabannya akan berubah
    // jika ingin jawabann= yg sesuai perintah dibawah maka
    // perintah dibawah harus menunggu selama 1 detik dulu
    // baru boleh dijalankan

    setTimeout(() => {
      const imgKomputer = document.querySelector('.img-komputer');
      imgKomputer.setAttribute('src', 'img/' + pilihanKomputer + '.png');
      
      const info = document.querySelector('.info');
      info.innerHTML = hasil;
    }, 1000);
  });
});