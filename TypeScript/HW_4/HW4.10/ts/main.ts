let arr: number[] = [2,5,8,1,-1,8,4,-7,8];

function minNumberInArray(array: number[]): number|undefined {
    let result;
    for (let item of array){
        if (result == null){
            result = item ;
        }else {
            if (result > item){
                result = item;
            }
        }

    }
    return result;
}

document.write(`<h1> ${minNumberInArray(arr)}</h1>`);