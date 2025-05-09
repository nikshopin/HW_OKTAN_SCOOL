"use strict";
class Cinderella {
    constructor(name, age, shoe_size) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoe_size;
    }
}
let cinderella = [
    new Cinderella('tanya', 18, 36),
    new Cinderella('masha', 19, 37),
    new Cinderella('dasha', 20, 37.5),
    new Cinderella('glasha', 21, 38),
    new Cinderella('sasha', 22, 38.5),
    new Cinderella('yliana', 23, 39),
    new Cinderella('hristina', 24, 39.5),
    new Cinderella('ulya', 20, 36.5),
    new Cinderella('anna', 18, 40),
    new Cinderella('olya', 29, 40.5),
];
class Prince {
    constructor(name, age, find_shoe_size) {
        this.name = name;
        this.age = age;
        this.findShoeSize = find_shoe_size;
    }
}
let prince = new Prince('georgyi', 25, 37.5);
let coincidence = {};
for (let cinderl of cinderella) {
    if (cinderl.shoeSize === prince.findShoeSize) {
        coincidence = cinderl;
    }
}
console.log(coincidence);
let result = cinderella.find((value) => {
    return value.shoeSize === prince.findShoeSize;
});
console.log(result);
