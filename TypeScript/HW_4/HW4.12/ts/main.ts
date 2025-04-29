let arr:[number, string, number, boolean] = [ 1,'text', 5 ,true];

function changePositionElemetnInArray(arr: any[], position1:number, position2:number) {
    let variable = arr[position1];
    arr[position1] = arr[position2];
    arr[position2] = variable;
    return arr;
}

document.write(`<h1>${changePositionElemetnInArray(arr, 0,3)}</h1>`);