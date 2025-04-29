"use strict";
let variable = [1, 3, 6, 7, 8, 9];
let sum = (arr) => {
    let res = 0;
    for (let item of arr) {
        res += item;
    }
    return res;
};
document.write(`<p>${sum(variable)}</p>`);
