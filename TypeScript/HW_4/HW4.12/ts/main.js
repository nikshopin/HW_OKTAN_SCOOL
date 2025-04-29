"use strict";
let arr = [1, 'text', 5, true];
function changePositionElemetnInArray(arr, position1, position2) {
    let variable = arr[position1];
    arr[position1] = arr[position2];
    arr[position2] = variable;
    return arr;
}
document.write(`<h1>${changePositionElemetnInArray(arr, 0, 3)}</h1>`);
