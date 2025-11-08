export function loop1(value, test, update, body) {
  for (value; value >= 0; ) {
    if (test(value)) {
      body(value);
    }
    value = update(value);
  }
}

export function loop2(value, test, update, body) {
  while (test(value)) {
    body(value);
    value = update(value);
  }
}

export function loop(value, test, update, body) {
  if (!test(value)) return; // base case
  body(value); // action
  loop2(update(value), test, update, body); // update value and try again
  // this is recursion but it doens't go all the way to the base case before taking action
  // like most recursive functions
}
