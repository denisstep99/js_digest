/**
 * @param maxWeight
 * @param goods [{weight, cost}]
 */

function findMax(maxWeight, goods) {
  const resultArray = Array(goods.length).fill(0);
  const field = Array(maxWeight + 1).fill(0);
  const previousField = Array(maxWeight + 1).fill(-1);


  for (let i = 1; i <= maxWeight; i++) {
    for (let [j, currentGoods] of goods.entries()) {
      const newPrice = currentGoods.cost + field[i - currentGoods.weight];

      if (currentGoods.weight <= i && newPrice > field[i]) {
        field[i] = newPrice;
        previousField[i] = j;
      }
    }
  }

  for (let current = maxWeight; current > 0;) {
    if (field[current] === field[current - 1]) {
      current--;
    } else {
      resultArray[previousField[current]]++;
      current -= goods[previousField[current]].weight;
    }
  }
  return resultArray;
}

module.exports = findMax;
