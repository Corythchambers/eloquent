class MultiplactorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplactorUnitFailure("Klunk");
  }
}

export function reliableMultiply(a, b) {
  let answer;
  while (true) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (!(e instanceof MultiplactorUnitFailure)) {
        throw e;
      }
    }
  }
  return answer;
}
