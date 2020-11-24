function sumDigitsRec(integer) {
    if(integer < 10) {
        return integer
    }

    const lastDigit = integer % 10
    const newInteger = (integer - lastDigit) / 10
    return lastDigit + sumDigitsRec(newInteger)
}

function sumDigitsRecStr(integer) {
    if(integer < 10) {
        return integer
    }

    const lastDigit = integer
    const newInteger = (integer - lastDigit) / 10
    return lastDigit + sumDigitsRec(newInteger)
}

console.log(sumDigitsRec(12)) //3
console.log(sumDigitsRec(123456)) //21
