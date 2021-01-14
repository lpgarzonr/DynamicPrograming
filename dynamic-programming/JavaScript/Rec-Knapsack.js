function knapsackTopDown(weights, values, capacity, idx) {
  if (capacity < 1 || idx === weights.length) {
    return 0;
  }
  
  const valNotIncludingCurr = knapsackTopDown(
    weights,
    values,
    capacity,
    idx + 1
  );
  const canTakeCurrent = weights[idx] <= capacity;

  if (!canTakeCurrent) {
    return valNotIncludingCurr;
  }

  const newCapacity = capacity - weights[idx];
  const valIncludingCurr =
    values[idx] + knapsackTopDown(weights, values, newCapacity, idx + 1);
  return Math.max(valIncludingCurr, valNotIncludingCurr);
}

function knapsackTopDownMem(weights, values, capacity, idx, mem) {
  if (capacity < 1 || idx === weights.length) {
    return 0;
  }
  const memKey = `${capacity}:${idx}`;
  if (mem[memKey]) {
    return mem[memKey];
  }
  console.log(memKey);
  const valNotIncludingCurr = knapsackTopDownMem(
    weights,
    values,
    capacity,
    idx + 1,
    mem
  );
  const canTakeCurrent = weights[idx] <= capacity;
  if (!canTakeCurrent) {
    return valNotIncludingCurr;
  }

  const newCapacity = capacity - weights[idx];
  const valIncludingCurr =
    values[idx] +
    knapsackTopDownMem(weights, values, newCapacity, idx + 1, mem);
  mem[memKey] = Math.max(valIncludingCurr, valNotIncludingCurr);
  return mem[memKey];
}
/*
    4   14  10 items Values
    2   1   3 items size
-----------------
0|  0   0   0
1|  0   0   0   
2|  4   0   0
3|
4|

Maximo valor entre llevar (a) solo los anteriores items o (b) los items anteriores mas el actual 
(a) solo los anteriores es el valor en la columna item - 1
(b) los anteriores es el valor en la columna item - 1 y para sumar el actual debo ir
a la capacidad actual - el size del item actual 
(el saco cuando en el pasado tenia espacio para el item actual y le sumo el valor del item)
// si los indices se salen pues devuelvo cero
Debo ir llenando la tabla con cada capacidad, 1 luego 2, luego 3...
Resulevo el problema para un saco de capacidad 1 con cada item
*/

function knapsackBottomUp(weights, values, capacity) {
  const resultsAcc = [];

  for (let c = 0; c <= capacity; c++) {
    resultsAcc.push([]);
    // Resolver el problema para saco de capacidad C
    for (let i = 0; i < weights.length; i++) {
      const valNotIncludingCurr = i === 0 || c === 0 ? 0 : resultsAcc[c][i - 1];
      const capacityIfCurrent = c - weights[i];
      const valIncludingCurr =
        capacityIfCurrent < 0
          ? 0
          : values[i] + (resultsAcc[capacityIfCurrent][i - 1] || 0);

      resultsAcc[c].push(Math.max(valIncludingCurr, valNotIncludingCurr));
    }
  }
  return resultsAcc[capacity][weights.length-1];
}

const weights = [3, 7, 10, 6];
const values = [4, 14, 10, 5];

// console.log(knapsack(weights, values, 9, 0)) //14 -> take elem in 1
//console.log(knapsackTopDownMem(weights, values, 20, 0, {})); //19 -> take elem in 1 and in 3
console.log("--------------");
console.log(knapsackTopDown(weights, values, 20, 0, {})); //19 -> take elem in 1 and in 3
console.log(knapsackBottomUp(weights, values, 20)); //19 -> take elem in 1 and in 3
