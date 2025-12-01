export class Group {
  #collection;
  constructor() {
    this.#collection = [];
  }

  static from(array) {
    let group = new Group();

    for (let element of array) {
      if (!group.has(element)) {
        group.add(element);
      }
    }

    return group;
  }

  add(value) {
    if (!this.has(value)) {
      this.#collection.push(value);
    }
  }

  delete(value) {
    let index = this.#collection.indexOf(value);
    if (index !== -1) {
      this.#collection.splice(index, 1);
    }
  }

  has(value) {
    return this.#collection.indexOf(value) !== -1;
  }
}
