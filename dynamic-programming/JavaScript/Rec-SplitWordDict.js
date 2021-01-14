function getWords(inputStr, dict, results) {
    if(!inputStr.length) {
        return
    }

    let isWordInDic = false
    let idx = 0
    while(idx <= inputStr.length) {
        const subst = inputStr.substring(0, idx)
        isWordInDic = dict.includes(subst)
        if(isWordInDic) {
            results.push(subst)
            getWords(inputStr.substring(idx), dict, results)
        }
        idx++
    }
    return results
}
/* 
take inputStr start to take every single letter and concat and check if word is in dictionary
if so call again the function with inputStr removing the found word (recursively)
keep also checking the rest of the word bcs can be that other word can be form out of the already found one ex cat and cats
*/

const input = "catsanddog"
const dict = ["cat", "cats", "and", "sand", "dog"]
console.log(getWords(input, dict, []))
