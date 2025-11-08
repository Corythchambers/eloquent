let countBs = string => {
    return countChar(string, "B");
}

let countChar = (string, char) => {
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}

console.log(countBs("B"));
console.log(countBs("Bb"));
console.log(countBs("BBB"));
console.log(countBs("OOO"));
console.log(countBs(""));
console.log(countBs("35"));

