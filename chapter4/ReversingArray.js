function reverseArray(originalArray) {
    for (let i = 0; i < (originalArray.length / 2); i++) {
        const temp = originalArray[i];
        originalArray[i] = originalArray[originalArray.length -1 - i];
        originalArray[originalArray.length -1 - i] = temp;
    }

    return originalArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([1, 2, 3, 4]));
