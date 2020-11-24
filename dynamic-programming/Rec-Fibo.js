function fibonacciTopDown(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fibonacciTopDown(num - 1) + fibonacciTopDown(num - 2);
}

function fibonacciTopDownMem(num, mem) {
  if (mem[num]) {
    return mem[num];
  }
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  const result = fibonacciTopDownMem(num - 1, mem) + fibonacciTopDownMem(num - 2, mem);
  mem[num] = result;

  return result;
}

function fibonacciBottomUp(num) {
    const fibResults = [0, 1]
    for (let i = 2; i<= num; i++) {
        fibResults.push(fibResults[i-1] + fibResults[i-2])
    }
    return fibResults[num]
}

var startDate = new Date();
// console.log(fibonacciTopDown(30)); // 832040
var endDate = new Date();
console.log(endDate.getTime() - startDate.getTime());

var startDate = new Date();
console.log(fibonacciTopDownMem(10, {})); // 832040
var endDate = new Date();
console.log(endDate.getTime() - startDate.getTime());

var startDate = new Date();
console.log(fibonacciBottomUp(10)); // 832040
var endDate = new Date();
console.log(endDate.getTime() - startDate.getTime());
