let isEven = x => {
    if (x < 0) {
        return "Value must be a positive whole number";
    } else if ( x === 0 ) {
        return true;
    } else if ( x === 1 ) {
        return false;
    }

    return isEven(x - 2);
}

console.log(isEven(0));
console.log(isEven(1));
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(4));
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));