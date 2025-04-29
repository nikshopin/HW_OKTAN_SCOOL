let str: string = 'Ревуть воли як ясла повні';

let arr: string[] = str.split(' ');
console.log(arr);

let stringToArray = (str: string, symbol: string):string[] => str.split(symbol);

console.log(stringToArray("sldfnak lsakd lasdkzfaskx laskdfna", ' '));
console.log(stringToArray("sldfnak;lsakd;lasdkzfaskx;laskdfna", ';'));
console.log(stringToArray("sldfnak,lsakd lasdkzfaskx,laskdfna", ','));
