function minCostTopDown(costs, skipColorIdx, houseIdx, mem) {
  const key = `${skipColorIdx}:${houseIdx}`;
  const isAfterLastHouse = costs.length === houseIdx;
  if (isAfterLastHouse) {
    return 0;
  }
  if (mem[key]) {
    return mem[key];
  }
  const numColors = costs[0].length;
  const houseCosts = [];
  /**
  houseCosts has all costs of painting current house with each available color
  plus the rest of the houses, next house can not be painted of the same color as
  the current so we pass the skipColorIdx
   */
  for (let colorIdx = 0; colorIdx < numColors; colorIdx++) {
    if (colorIdx !== skipColorIdx) {
      const cost =
        costs[houseIdx][colorIdx] + minCostTopDown(costs, colorIdx, houseIdx + 1, mem);
      houseCosts.push(cost);
    }
  }
  mem[key] = Math.min(...houseCosts); // this can be avoided
  return mem[key];
}

function minCostBottomUp(costs) {
  //[h][i] Hold the acc min cost of painting house in index h with color in index c
  const resultsAcc = [];
  const numHouses = costs.length
  for (let houseIdx = 0; houseIdx < numHouses; houseIdx++) {
    // Hold all the costs of painting current and previous houses ACC with every available color
    // Solve the problem first for all colors of house zero then all colors of house one (plus min of house 0) then....
    const costsCurrentHouse = [];
    const numOfColors = costs[0].length
    for (let colorIdx = 0; colorIdx < numOfColors; colorIdx++) {
      // For current house, take every available color and compare with the previous house costs (different color than current color because i cant paint 2 consecutive houses with same color)
      // to calculate the min acc value of current house painted with current color -> resultsAcc[h][c]
      // take previous house costs and get the min cost of painting the house with colors different to current color
      // to this min cost append the cost of painting current house with current color
      // push this value to the acc costs of current house
      // The last array in resultsAcc will contain the cost of painting last house using every available color
      // taking into account the costs of the previous houses, so the result will be the min for that array

      const minCostPrevHouse = houseIdx === 0 ? 0 : getMinPrevHouseIgnoreColor(resultsAcc[houseIdx - 1], colorIdx);
      const minVal = minCostPrevHouse + costs[houseIdx][colorIdx];
      costsCurrentHouse.push(minVal);
    }
    resultsAcc.push(costsCurrentHouse);
  }

  return Math.min(...resultsAcc[resultsAcc.length - 1]);
}

function getMinPrevHouseIgnoreColor(array, skipIdx) {
  const arrayToComp = [...array.slice(0, skipIdx), ...array.slice(skipIdx + 1)];
  return Math.min(...arrayToComp);
}

/**
 *     C1   C2   C3   // colors
 * -----------------------
 * h1|17, 2,  17
 * h2|18, 33, 7
 * h3|6,  8,  17
 */

const costs = [
  [17, 2, 17], // House 0
  [16, 16, 5], // House 1
  [1, 3, 1], // House 2
];

console.log(minCostTopDown(costs, null, 0, {})); // 8
console.log(minCostBottomUp(costs, null, 0, {})); // 8
