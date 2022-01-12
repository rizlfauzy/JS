const pria = [
  [0, 18, `Kurus`],
  [18, 25, `Normal`],
  [25, 27, `Gendut`],
  [27,99, `Obesitas`]
]

const wanita = [
  [0, 17, `Kurus`],
  [17, 23, `Normal`],
  [23, 27, `Gendut`],
  [27, 99, `Obesitas`],
];

const berat = document.querySelector(`input[name="weight"]`)
const tinggi = document.querySelector(`input[name="height"]`)
const h1 = document.querySelector('h1');
const p = document.querySelector('p');

const submit = document.querySelector('#submit')

const jk = document.querySelector('#gender')

submit.addEventListener('click', function () {
  const bValue = berat.value
  const tValue = tinggi.value
  const jkUser = jk.options[jk.selectedIndex].value;

  const bmi = bValue / Math.pow(tValue / 100, 2);
  h1.innerHTML = bmi.toFixed(2)
  const categories = jkUser == `p` ? pria : wanita;
  categories.forEach(category => {
    if (bmi>category[0] && bmi<category[1]) {
      p.innerText = category[2]
    }
  })
 })


