//Given []
function printPermutation(arr, permutationAcc) {
    if(!arr.length) {
        console.log(permutationAcc)
    }
    for (let idx = 0; idx < arr.length; idx++) {
        const element = arr[idx];
        const newArr = [...arr.slice(0, idx), ...arr.slice(idx+1)]
        printPermutation(newArr, `${permutationAcc} ${element}`)
    }
}

const input = [1,2,3]
printPermutation(input, '')
/* return 
123
132
213
231
312
321
*/
