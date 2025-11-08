function SumOfRange(start, finish, step) {
    const rangeArray = getRangeArray(start, finish, step);

    let total = 0;
    for (let num of rangeArray) {
        total += num;
    }
    return total;
}

console.log(SumOfRange(1, 10, 2));
console.log(getRangeArray(1, 10, 2));
console.log(getRangeArray(5, 2, -1));


function getRangeArray(start, finish, step) {
    let result = [];
    if (start < finish) {
        for (let i = start; i <= finish; i += Math.abs(step)) {
            result.push(i);
        }
    } else {
        for (let i = start; i >= finish; i -= Math.abs(step)) {
            result.push(i);
        }
    }
    return result;
}