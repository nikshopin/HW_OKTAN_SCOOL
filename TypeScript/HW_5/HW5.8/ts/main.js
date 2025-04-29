"use strict";
let arr = [1, 'string', true, undefined];
let structureLi = (arr) => {
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
};
structureLi(arr);
