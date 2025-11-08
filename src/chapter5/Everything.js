export function everything1(array, test) {
  for (let element of array) {
    if (!test(element)) {
      return false;
    }
  }
  return true;
}

export function everything2(array, test) {
  if (array.length === 0) return true;
  if (!test(array[0])) {
    return false;
  }
  return everything(array.slice(1), test);
}

export function everything(array, test) {
  // how can we use || to get &&
  return !array.some((element) => !test(element));
}
