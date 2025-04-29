let variable: number[] = [1,3,6,7,8,9];

let sum = (arr: number[]): number => {
    let res = 0;
    for ( let item of arr ) {
        res += item;
    }
    return res;
}

document.write(`<p>${sum(variable)}</p>`);