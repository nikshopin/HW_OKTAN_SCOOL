let arr = [-1,56,47];

function sumArrayElement(arr){
    let res=0;
    for (let item of arr){
        res+=item;
    }
    return res;
}

document.write(`<h1>${sumArrayElement(arr)}</h1>`);