function maxProfitTopDown(houses, mem) {
  if (!houses.length) {
    return 0;
  }
  if (houses.length === 1) {
    return houses[0];
  }
  const key = houses.length;
  if (mem[key]) {
    return mem[key];
  }

  const subArr = houses.slice(0, houses.length - 2);
  const profIncludingHouse =
    houses[houses.length - 1] + maxProfitTopDown(subArr, mem);
  const profNotIncludingHouse = maxProfitTopDown(
    houses.slice(0, houses.length - 1),
    mem
  );
  mem[key] = Math.max(profIncludingHouse, profNotIncludingHouse);
  return mem[key];
}

function maxProfitBottomUp(houses) {
  let twoHousesBeforeProfit = 0;
  let prevHouseProfit = 0;
  let currentHouseProfit = 0;

  for (let i = 0; i < houses.length; i++) {
    currentHouseProfit = Math.max(
      prevHouseProfit,
      twoHousesBeforeProfit + houses[i]
    );
    twoHousesBeforeProfit = prevHouseProfit;
    prevHouseProfit = currentHouseProfit;
  }
  return currentHouseProfit;
}
/**
 * This use an extra array to store the best accumulated profits
 * be aware that this will generate an Space Complexity O(n)
 * the maxProfitBottomUp does not use the array so the Space Complexity is O(1)
 */
function maxProfitBottomUpWithArray(houses) {
  // Max profit of robbing houses in index i and previous ones
  const maxProfitsAcc = [];

  for (let i = 0; i < houses.length; i++) {
      // to decide if we rob house i, we need to check the max of skipping robbing current house (profit of previous house), and robbing house i-2 plus profit of current house (because i cant rob previous house) 
    const currentHouseProfit = Math.max(
      houses[i - 1] || 0,
      houses[i - 2] || 0 + houses[i]
    );
    maxProfitsAcc.push(currentHouseProfit);
  }
  return maxProfitsAcc[maxProfitsAcc.length - 1];
}

const houses = [35, 1, 15, 30, 10];
console.log(maxProfitTopDown(houses, {})); // 65
console.log(maxProfitBottomUp(houses)); // 65
console.log(maxProfitBottomUpWithArray(houses)); // 65
