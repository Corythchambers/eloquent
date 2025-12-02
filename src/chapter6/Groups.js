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

  [Symbol.iterator]() {
    return new IterableGrop(this);
  }

  _getCollection() {
    return this.#collection;
  }
}

class IterableGrop {
  constructor(group) {
    this.group = group;
    this.index = 0;
  }

  next() {
    let collection = this.group._getCollection();

    if (this.index >= collection.length) {
      return { done: true };
    }
    let value = collection[this.index];
    this.index++;
    return { value, done: false };
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
