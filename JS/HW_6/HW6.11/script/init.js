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

let sortFullCards = cards.reduce((acc, card) => {
    if (card.cardSuit === 'clubs') acc.clubs.push(card);
    if (card.cardSuit === 'spade') acc.spades.push(card);
    if (card.cardSuit === 'heart') acc.hearts.push(card);
    if (card.cardSuit === 'diamond') acc.diamonds.push(card);
    return acc;
},{spades:[], diamonds:[],hearts:[], clubs:[]});


let sortByColor = fullCards.reduce((result,item)=>{
    if (item.color ==='black') result[0].push(item);
    if (item.color === 'red') result[1].push(item);
    return result
},[[], []])

console.log(sortFullCards);

console.log(sortByColor);