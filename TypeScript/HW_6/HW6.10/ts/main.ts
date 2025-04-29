let cards: {value: number|string, cardSuit: string}[] =[];
let masti: string[] = ['spade', 'diamond', 'heart', 'clubs']
let nameclature: string[] = ['jack', 'queen', 'king', 'ace']

for (let i= 6; i <= 10; i++) {
    for (let item of masti){
        cards.push({ value: i, cardSuit: item });
    }
}
for (let itemNamenclature of nameclature) {
    for (let itemMasti of masti) {
        cards.push({value: itemNamenclature, cardSuit: itemMasti });
    }
}
let blackCards: {value: number|string, cardSuit: string, color: string}[] = cards.filter((value)=> {return value.cardSuit === 'clubs' || value.cardSuit === 'spade'}).map((value)=> ({...value, color: 'black'}));
let redCards: {value: number|string, cardSuit: string, color: string}[] = cards.filter((value)=> value.cardSuit === 'heart' ||  value.cardSuit === 'diamond').map((value)=> ({...value, color: 'red'}));

let fullCards:{value: number|string, cardSuit: string, color: string}[] = blackCards.concat(redCards);
// console.log(fullCards);

let firstTask:{value: number|string, cardSuit: string, color: string}[] = fullCards.filter((value: {value: number|string, cardSuit: string, color: string}): boolean=> { return value.cardSuit === 'spade' && value.value === 'ace'});
let secondTask:{value: number|string, cardSuit: string, color: string}[] = fullCards.filter((value: {value: number|string, cardSuit: string, color: string}): boolean => value.value === 6);
let thirdTask:{value: number|string, cardSuit: string, color: string}[] = fullCards.filter((value: {value: number|string, cardSuit: string, color: string}): boolean => value.color === 'red');
let fourthTask:{value: number|string, cardSuit: string, color: string}[] = fullCards.filter((value: {value: number|string, cardSuit: string, color: string}): boolean => value.cardSuit === 'diamond');
let fivethTask:{value: number|string, cardSuit: string, color: string}[] = fullCards.filter((value: {value: number|string, cardSuit: string, color: string}): boolean => value.cardSuit === 'clubs' && (typeof value.value === 'string' || value.value > 8 ) );

console.log(firstTask);
console.log(secondTask);
console.log(thirdTask);
console.log(fourthTask);
console.log(fivethTask);