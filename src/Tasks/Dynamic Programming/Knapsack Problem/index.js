/**
 * @param maxWeight
 * @param goods [{weight, cost}]
 */

function findMax(maxWeight, goods) {
  const count = goods.length;
  const field = Array.from(
    {length: count + 1},
    () => Array(maxWeight + 1).fill(0)
  );

  for (let i = 1; i <= count; i++) {
    const currentGoods = goods[i - 1];

    for (let j = 1; j <= maxWeight; j++) {
      const lastIteration = field[i - 1][j];
      const lessRoominess = ~~(field[i - 1][j - currentGoods.weight] + currentGoods.cost);

      field[i][j] = Math.max(lessRoominess, lastIteration);
    }
  }

  const resultArray = [];
  for(let weight = maxWeight, index = count; field[index][weight] > 0; index--) {
    if (field[index][weight] !== field[index - 1][weight]) {
      resultArray.push(goods[index - 1]);
      weight -= goods[index - 1].weight;
    }
  }

  return resultArray;
}

module.exports = findMax;
