const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem(`items`)) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector(`[name="item"]`).value;
  const item = {
    text,
    done: false
  }
  items.push(item);
  populateList(items, itemsList);
  // objek dibuat jadi JSON dahulu
  // karena di localStorage Objek dijadikan string
  localStorage.setItem(`items`, JSON.stringify(items));
  this.reset();
}

function populateList(plates = [], plateList) {
  plateList.innerHTML = plates.map((plate, i) => {
    return /*html*/`
    <li>
      <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? "checked" : ``} />
      <label for="item${i}">${plate.text}</label>
    </li>
    `
  }).join(``)
}

function toggleCheck(e) {
  if (e.target.matches(`input`)) {
    const index = e.target.dataset.index;
    items[index].done = !items[index].done
    localStorage.setItem(`items`, JSON.stringify(items));
    populateList(items, itemsList);
  }
}

addItems.addEventListener(`submit`, addItem);
itemsList.addEventListener(`click`,toggleCheck)
populateList(items, itemsList)