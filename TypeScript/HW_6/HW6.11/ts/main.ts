let cards: {value: number|string, cardSuit: string}[]=[];
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
let blackCards:{value: number|string, cardSuit: string, color: string}[] = cards.filter((value:{value: number|string, cardSuit: string}): boolean=> {return value.cardSuit === 'clubs' || value.cardSuit === 'spade'}).map((value)=> ({...value, color: 'black'}));
let redCards:{value: number|string, cardSuit: string, color: string}[] = cards.filter((value:{value: number|string, cardSuit: string}): boolean=> value.cardSuit === 'heart' ||  value.cardSuit === 'diamond').map((value)=> ({...value, color: 'red'}));

let fullCards:{value: number|string, cardSuit: string, color: string}[] = blackCards.concat(redCards);

type Card = {
    value: number | string;
    cardSuit: string;
    color?: string; // цвет добавляется позже
};

type SortedCards = {
    spades: Card[];
    diamonds: Card[];
    hearts: Card[];
    clubs: Card[];
};

type SortedCardsByColor = [
     Card[],
     Card[]
];

let sortFullCards:SortedCards = cards.reduce<SortedCards>((acc:SortedCards, card: Card):SortedCards => {
    if (card.cardSuit === 'clubs') acc.clubs.push(card);
    if (card.cardSuit === 'spade') acc.spades.push(card);
    if (card.cardSuit === 'heart') acc.hearts.push(card);
    if (card.cardSuit === 'diamond') acc.diamonds.push(card);
    return acc;
},{spades:[], diamonds:[],hearts:[], clubs:[]});


let sortByColor: SortedCardsByColor  = fullCards.reduce<SortedCardsByColor>((result:SortedCardsByColor,item: Card): SortedCardsByColor=>{
    if (item.color ==='black') result[0].push(item);
    if (item.color === 'red') result[1].push(item);
    return result
},[[], []])

console.log(sortFullCards);

console.log(sortByColor);