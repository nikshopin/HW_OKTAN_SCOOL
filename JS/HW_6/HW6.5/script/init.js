let str = 'Ревуть воли як ясла повні';

let arr = str.split(' ');
console.log(arr);

let stringToArray = (str, symbol) => str.split(symbol);

console.log(stringToArray("sldfnak lsakd lasdkzfaskx laskdfna", ' '));
console.log(stringToArray("sldfnak;lsakd;lasdkzfaskx;laskdfna", ';'));
console.log(stringToArray("sldfnak,lsakd lasdkzfaskx,laskdfna", ','));
