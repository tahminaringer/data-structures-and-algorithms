const maxProfit = function (prices) {
  let min = prices[0];
  let dif = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] - min > dif) {
      dif = prices[i] - min;
    }
  }
  return dif;
};

maxProfit();
