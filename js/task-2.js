class Storage {
  #items;
  constructor(itemsStrg) {
    this.#items = itemsStrg;
  }

  getItems() {
    return this.#items;
  }
  addItem(item) {
    this.#items.push(item);
  }
  removeItem(itemtoRemove) {
    const deleteItem = this.#items.indexOf(itemtoRemove);
    if (deleteItem !== -1) {
      this.#items.splice(deleteItem, 1);
    }
  }
}

const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
