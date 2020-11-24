function getLongestAscSeq(array) {
  const subSeqs = [];
  for (i = 0; i < array.length; i++) {
    if (i === 0) {
      subSeqs.push([array[0]]);
      continue;
    }
    const prevSubSeq = [];
    for (let j = 0; j < i; j++) {
      if (array[j] <= array[i]) {
        prevSubSeq.push(subSeqs[j]);
      }
    }
    const longestPrevSubSeq = getLongestSubSeq(prevSubSeq);
    subSeqs.push([...longestPrevSubSeq, array[i]]);
  }
  const idxLongestSubSeq = getLongestSubSeq(subSeqs);
  return idxLongestSubSeq;
}

function getLongestSubSeq(array) {
  const lengths = array.map((a) => a.length);
  const maxIdx = lengths.indexOf(Math.max(...lengths));
  return array[maxIdx] || [];
}

const array = [4, 5, 30, 3, 6, 8];
console.log(getLongestAscSeq(array));
/*
subSeqs[i] will store the longest sub sequence (array) until item i
to calculate it, we need to iterate over every element before i
for every item before i, if it is lover than element at i
then we take the subsequence and store it in prevSubSeq
then we select the longes prev subsequece and append the i

cada elemento en subSeqs, alamacenara la subsequencia mas larga en ese elemento
comenzamos por 0, la subsequencia mas larga en 0 es un array con el elemento,
liego vamos al elemento 1 y para definir la sequencia mas larga de 1, miramos si el elemento en 0 es menor (igual para todos los anteriores), si lo es entonces la subse en 1 sera la subseq en 0 mas el elememnto en 1
si no lo es entonces la subseq sera el arreglo con el elemento
*/
