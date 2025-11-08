let minimum = (x, y) => {
  if (x <= y) {
    return x;
  } else {
    return y;
  }
};

console.log(minimum(1, 1));
console.log(minimum(100, 1));
console.log(minimum(1, 100));
console.log(minimum(0, 1));
console.log(minimum(-1, 1));
