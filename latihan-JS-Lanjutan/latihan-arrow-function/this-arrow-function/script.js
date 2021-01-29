const box = document.querySelector('.box');
box.addEventListener('click', function() {
  // jika menggunakan arrow function
  // tidak bisa menggunakan this di dalamnya
  // karena arrow function mengembalikan this pada windows
  // berbeda jika function(){} dia mengembalikan this kepada variabel yg bersangkutan
  let satu = 'size';
  let dua = 'colour';

  // jika box sudah memiliki kelas satu
  // variabel nya akan ditukar
  // satu jadi dua
  // dua jadi satu
  // agar urutan transisinya tidak tertukar
  if (this.classList.contains(satu)) {
    [satu,dua] = [dua,satu]
  }
  this.classList.toggle(satu);

  setTimeout(() => {
    this.classList.toggle(dua);
  }, 500);

})