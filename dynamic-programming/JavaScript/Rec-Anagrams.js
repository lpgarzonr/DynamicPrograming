// Tutorial
function anagrams(str, anagram, used, index) {
    if (index === str.length) {
        console.log(anagram)
        return
    }
    for(let i=0; i<str.length; i++) {
        if(!used[i]) {
            used[i] = true
            anagram = anagram.substring(0, index) + str[i] + anagram.substring(index + 1)
            anagrams(str, anagram, used, index + 1)
            used[i] = false
        }
    }
}
// Mio
function printAnagrams(str, anagram) {
    if (!str.length) {
        console.log(anagram)
    }
    for (let i = 0; i < str.length; i++) {
        // I take every letter of the string and put it in front of anagram
        // Then i remove it from the string and get anagrams of the new string
        // when the str has no more letters it means that one anagram is done
        const newAnagram = anagram + str[i]
        const newStr = str.slice(0, i) + str.slice(i + 1)
        printAnagrams(newStr, newAnagram)
    }
}


console.log(printAnagrams('abcde', ''))

console.log(anagrams('abcde','', {}, 0))
