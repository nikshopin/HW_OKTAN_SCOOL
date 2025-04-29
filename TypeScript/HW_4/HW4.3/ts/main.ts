function square(h: number, r: number): number{
    return h * radius(r);
}

function radius(radius: number): number{
    return 3.14 * radius ** 2;
}

let result = square(7,4);
console.log(result);