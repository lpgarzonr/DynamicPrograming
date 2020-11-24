function maxProfitTopDown(length, prices, mem) {
  if (length === 0) {
    return 0;
  }
  if (mem[length]) {
    return mem[length];
  }
  const profits = [];
  /*
  Profits will have all profits of cutting the rob in different lengths (under the current length of the rob)
  So if rob has length 3, then it will consider
  cutting rob of length 1, plus maxProfitTopDown of a rob length 2
  cutting rob of length 2, plus maxProfitTopDown of a rob length 1
  cutting rob of length 3, plus maxProfitTopDown of a rob length 0
  then we return the max os this 3 options
  */
  for (let i = 0; i < length; i++) {
    const profit = prices[i] + maxProfitTopDown(length - (i + 1), prices, mem);
    profits.push(profit);
  }
  mem[length] = Math.max(...profits);
  return mem[length];
}

const long = 2;
const prices = [1, 5, 8, 9, 10, 14];

console.log(maxProfitTopDown(long, prices, {}));
