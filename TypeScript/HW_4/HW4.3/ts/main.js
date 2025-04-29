"use strict";
function square(h, r) {
    return h * radius(r);
}
function radius(radius) {
    return 3.14 * radius ** 2;
}
let result = square(7, 4);
console.log(result);
