function isArrayInSeq(array) {
    if (array.length <= 1) {
        return true
    }
    return array[0] === array[1] - 1 && isArrayInSeq(array.slice(1))
}
const inputNotSeq = [1, 5, -3, 9, 10, 0]
const inputSeq = [1, 2, 3]

console.log(isArrayInSeq(inputNotSeq)) // false
console.log(isArrayInSeq(inputSeq)) // true
