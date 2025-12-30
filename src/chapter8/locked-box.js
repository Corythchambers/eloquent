const box = new (class {
  locked = true;
  #content = [];

  unlock() {
    this.locked = false;
  }

  lock() {
    this.locked = true;
  }

  get content() {
    if (this.locked) throw new Error("Locked!");
    return this.#content;
  }
})();

export function withBoxUnlocked(body) {
  let wasLocked = box.locked;
  if (wasLocked) {
    box.unlock();
  }

  try {
    body();
  } finally {
    if (!wasLocked) {
      box.lock();
    }
  }
}

withBoxUnlocked(() => {
  box.content.push("gold piece");
});

try {
  withBoxUnlocked(() => {
    throw new Error("Pirates on the horizon! Abaort!");
  });
} catch (e) {
  console.log("Error raised: " + e);
}
console.log(box.locked);
