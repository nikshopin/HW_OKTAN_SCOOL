class Cinderella {
    name: string;
    age: number;
    shoe_size: number;

    constructor (name:string ,age: number, shoe_size: number) {
        this.name = name;
        this.age = age;
        this.shoe_size = shoe_size;
    }
}

let cinderella = [
    new Cinderella('tanya' , 18, 36),
    new Cinderella('masha', 19, 37.5),
    new Cinderella('dasha', 20, 37.5),
    new Cinderella('glasha', 21, 38),
    new Cinderella('sasha', 22,38.5),
    new Cinderella('yliana', 23,39),
    new Cinderella('hristina', 24,39.5),
    new Cinderella('ulya', 20,36.5),
    new Cinderella('anna', 18, 40),
    new Cinderella('olya', 29, 40.5),
];

class Prince {
    name: string;
    age: number;
    find_shoe_size: number;
    constructor(name: string, age: number, find_shoe_size: number) {
        this.name = name;
        this.age = age;
        this.find_shoe_size = find_shoe_size;

    }
}

let prince: {name: string, age: number, find_shoe_size: number} = new Prince('georgyi',25, 37.5);
let coincidence: Record<string, any>= {};
for (let item of cinderella) {
    if (item.shoe_size === prince.find_shoe_size) {
        coincidence = item;
    }
}

console.log(coincidence)

let result :{name: string, age: number, shoe_size: number}|undefined = cinderella.find((value:{name: string, age: number, shoe_size: number}):boolean=> {
    return value.shoe_size === prince.find_shoe_size;
});
console.log(result);




// дополнительное задание #gsKLAsNWM

// export {};

// declare global {
    interface Array<T> {
        myForEach(callback: (value: T, index: number, array: T[]) => void): void;
        myFilter(callback: (value: T, index: number, array: T[]) => boolean): T[];
    }
// }




Array.prototype.myForEach = function<T>(this : T[], callback: (value: T, index: number, array: T[]) => void): void {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

Array.prototype.myFilter = function<T>(this: T[], callback: (value: T, index: number, array: T[]) => boolean): T[] {
    let result: T[] = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};


let resultMyFilter = cinderella.myFilter(girl => girl.shoe_size === prince.find_shoe_size);

console.log(resultMyFilter);


let resultMyForEach:Cinderella|null = null;

cinderella.myForEach(girl => {
    if (girl.shoe_size === prince.find_shoe_size) {
        resultMyForEach = girl;
    }
});

console.log(resultMyForEach);