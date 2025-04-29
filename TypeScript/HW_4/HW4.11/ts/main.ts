let arr: number[] = [-1,56,47];

function sumArrayElement(arr:number[]): number {
    let res=0;
    for (let item of arr){
        res+=item;
    }
    return res;
}

document.write(`<h1>${sumArrayElement(arr)}</h1>`);