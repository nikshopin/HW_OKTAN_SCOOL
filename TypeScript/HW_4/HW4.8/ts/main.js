"use strict";
function createUnorderedList(array) {
    document.write('<ul>');
    for (let item of array) {
        document.write(`<li> ${item}</li>`);
    }
    document.write('</ul>');
}
let array = [1, 2, "test", true, "string", 5];
createUnorderedList(array);
