function besttimetobuyorsell(prices){
    let min_price = Infinity;
    let max_profit = 0;

    prices.forEach(price => {
        if (price < min_price){
            min_price = price;
        }else if (price - min_price > max_profit){
            max_profit = price - min_price;
        }
    });
    return max_profit;
}

const prices = [7, 1, 5, 3, 6, 4];

console.log(besttimetobuyorsell(prices))