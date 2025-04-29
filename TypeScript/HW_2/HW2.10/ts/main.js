"use strict";
let a = Number(prompt('Put first number:'));
let b = Number(prompt('Put second number:'));
if (a > b) {
    console.log(`Number ${a} greater`);
}
else if (a < b) {
    console.log(`Number ${b} greater`);
}
else {
    console.log(`both numbers are equal `);
}
