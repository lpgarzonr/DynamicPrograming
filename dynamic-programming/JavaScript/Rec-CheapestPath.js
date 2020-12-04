function findCheapestPath(matrix) {
  return findCheapestPathRec(
    matrix,
    0,
    0,
    matrix.length - 1,
    matrix[0].length - 1
  );
}

function findCheapestPathRec(matrix, i, j, iEnd, jEnd) {
  if (i === iEnd && j === jEnd) {
    return matrix[i][j];
  }

  const currentCost = matrix[i][j];
  const rightCost =
    j + 1 <= jEnd
      ? findCheapestPathRec(matrix, i, j + 1, iEnd, jEnd)
      : Infinity;
  const bottomCost =
    i + 1 <= iEnd
      ? findCheapestPathRec(matrix, i + 1, j, iEnd, jEnd)
      : Infinity;
  return currentCost + Math.min(rightCost, bottomCost);
}

function findCheapestPathMatrix(matrix) {
  let iIdx = matrix.length - 1;
  let jIdx = matrix[0].length - 1;
  for (i = iIdx; i >= 0; i--) {
    for (j = jIdx; j >= 0; j--) {
      const currentCost = matrix[i][j];
      const isLastItem = i === iIdx && j === jIdx;
      // If is the last item we have nothing to calculate, we leave the same value
      if (!isLastItem) {
        const rightCost = j === jIdx ? Infinity : matrix[i][j + 1];
        const bottomCost = i === iIdx ? Infinity : matrix[i + 1][j];
        matrix[i][j] = currentCost + Math.min(rightCost, bottomCost);
      }
    }
  }
  return matrix[0][0];
}

const input1 = [
  [0, 47, 8, 18, 1],
  [43, 25, 39, 36, 13],
  [22, 8, 13, 38, 46],
  [41, 41, 40, 25, 44],
  [29, 43, 22, 50, 10],
];
const input = [
  [0, 47, 8],
  [1, 1, 39],
  [22, 8, 13],
];

console.log(findCheapestPath(input));
console.log(findCheapestPathMatrix(input));
