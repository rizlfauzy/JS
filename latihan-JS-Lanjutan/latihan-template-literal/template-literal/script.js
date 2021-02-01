const students = [
  {
    nama: `Rizal Fauzi`,
    email: `rizalfauzi774@gmail.com`
  },
  {
    nama: `Raden Muhammad Rivansyach`,
    email: `rivansyach12@gmail.com`
  },
  {
    nama: `Husein Azka Fadhila`,
    email: `huseinazka@gmail.com`
  }
];

const el1 = `<div class="container">
      ${students.map(student => `<ul>
        <li>Nama : ${student.nama}</li>
        <li>Email : ${student.email}</li>
      </ul>`).join(``)}
  </div>`;

const songs = [
  {
    judul: `Kau Rinduku`,
    penyanyi: `Asyanti`
  },
  {
    judul: `Jalan Kenangan`,
    penyanyi: `Asyanti`,
    feat: `Ruben`
  },
  {
    judul: `Seluruh Nafasku`,
    penyanyi: `Roy Kiyosi`
  }
]

const el2 = `<div class="lagu">
   ${songs.map(song => `<ul>
      <li>${song.judul}</li>
      <li>${song.penyanyi} ${song.feat ? `(feat. ${song.feat})` : ``}</li>
   </ul>`).join(``)}
</div>`;

const mapels = {
  nama: `Rizal Fauzi`,
  semester: 8,
  mPelajaran: [
    `Teknik Informasi`,
    `Pemrograman Dasar`,
    `Ilmu desain Grafis Dasar`
  ]
};

const el3 = `<div class="siswa">
  <h3>${mapels.nama}</h3>
  <span class="smster">Semester :${mapels.semester}</span>
  <h4>Mata Kuliah :</h4>
  <ol>
    ${mapels.mPelajaran.map(mapel =>
      `<li>${mapel}</li>`
      ).join(``)}
  </ol>
</div>`

document.body.innerHTML = `${el1}  ${el2} ${el3}`;

