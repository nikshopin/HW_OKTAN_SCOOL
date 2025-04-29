"use strict";
let arr = [10, 2, 3, 4, -5, 6];
let minNumber = (arr) => {
    let res = arr[0];
    for (let iter of arr) {
        if (iter < res)
            res = iter;
    }
    return res;
};
document.write(`<p>${minNumber(arr)}</p>`);
