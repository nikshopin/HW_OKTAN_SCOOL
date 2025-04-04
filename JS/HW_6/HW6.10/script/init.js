let cards=[];
let masti = ['spade', 'diamond', 'heart', 'clubs']
let nameclature = ['jack', 'queen', 'king', 'ace']

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
let blackCards = cards.filter((value)=> {return value.cardSuit === 'clubs' || value.cardSuit === 'spade'}).map((value)=> ({...value, color: 'black'}));
let redCards = cards.filter((value)=> value.cardSuit === 'heart' ||  value.cardSuit === 'diamond').map((value)=> ({...value, color: 'red'}));

let fullCards = blackCards.concat(redCards);
// console.log(fullCards);

let firstTask = fullCards.filter((value)=> { return value.cardSuit === 'spade' && value.value === 'ace'});
let secondTask = fullCards.filter((value) => value.value === 6);
let thirdTask = fullCards.filter((value) => value.color === 'red');
let fourthTask = fullCards.filter((value) => value.cardSuit === 'diamond');
let fivethTask = fullCards.filter((value) => value.cardSuit === 'clubs' && (value.value > 8 || typeof value.value === 'string' ) );

console.log(firstTask);
console.log(secondTask);
console.log(thirdTask);
console.log(fourthTask);
console.log(fivethTask);