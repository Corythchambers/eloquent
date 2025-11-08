function arrayToList(array) {
    if (array.length === 0) return null;
    return {
        value: array[0],
        rest: arrayToList(array.slice(1))
    }

}

function listToArray(list) {
    if (list.rest === null) {
        return [list.value];
    }
    return [list.value, ...listToArray(list.rest)];

}

// console.log(arrayToList( [1, 2, 3]))

console.log(listToArray({value: 10, rest: {value: 20, rest: {value: 30, rest: null}}}))