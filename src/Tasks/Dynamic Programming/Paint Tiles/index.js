function paint(data) {
  // number of colors
  const colorsCount = data[0] && data[0].length;

  // matrix where we keep positions of colors from the last step
  const dynamicData = Array.from({length: data.length},
    () => Array(colorsCount).fill(0)
  );

  // array where we keep the best sum price for each the last color
  const dynamicPrice = Array(colorsCount).fill(0);

  for (let tileIndex = 0; tileIndex < data.length; tileIndex++) {
    const oldDynamicPrice = [...dynamicPrice];
    for (let priceIndex = 0; priceIndex < colorsCount; priceIndex++) {

      let min = Number.MAX_SAFE_INTEGER;
      for (let oldPriceIndex = 0; oldPriceIndex < colorsCount; oldPriceIndex++) {
        if (min > oldDynamicPrice[oldPriceIndex] + data[tileIndex][priceIndex] && oldPriceIndex !== priceIndex) {
          dynamicData[tileIndex][priceIndex] = oldPriceIndex;
          min = oldDynamicPrice[oldPriceIndex] + data[tileIndex][priceIndex];
        }
      }
      dynamicPrice[priceIndex] = min;
    }
  }

  // determining the best path and the best price
  let bestPrice = Math.min(...dynamicPrice);
  let lastIndex = dynamicPrice.indexOf(bestPrice);
  const path = [];

  for (let i = data.length - 1; i >= 0; i--) {
    path.push(lastIndex);
    lastIndex = dynamicData[i][lastIndex];
  }

  return {
    price: bestPrice,
    path: path.reverse()
  }
}

module.exports = paint;

