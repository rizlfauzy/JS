const coba1 = [1, 2, 3, 4, 5];
const [co1, ...angka] = coba1;
console.log(angka[0]);
// rest parameter akan mengambil sisanya

// fungsi menambahkan semua argumen
function tambah(...angka) {
  return angka.reduce((a, b) => a + b);
};

console.log(tambah(1, 2, 3, 4, 5));

// object desc=truction
const team = {
  pm: `Rizal Fauzi`,
  frontEnd: `Rafly`,
  backEnd: `Edgar`,
  ui: `Radja`,
  ux: `Rendo`
};

const { pm, ...myTeam } = team;
console.log(myTeam);

function filterBy(type, ...values) {
  return values.filter(value => typeof value === type);
}

console.log(filterBy(`string`,50,45,`rizal`,true,false,`fajar`));