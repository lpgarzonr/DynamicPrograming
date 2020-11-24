// Using accumulator
function findMax(array) {
    return findMaxRec(array, 0, -Infinity)
}

function findMaxRec(array, idx, max) {
    if (idx === array.length) {
        return max
    }
    const maxVal = array[idx] > max ? array[idx] : max
    return findMaxRec(array, idx + 1, maxVal)
}

// Using dynamic programing approach
const findMaxDPApproachRec = array => !array.length ? -Infinity : Math.max(array[0], findMaxDPApproachRec(array.slice(1)))

const input = [1, 5, -3, 9, 10, 0]
console.log(findMax(input))
// 10
console.log(findMaxDPApproachRec(input))
// 10
