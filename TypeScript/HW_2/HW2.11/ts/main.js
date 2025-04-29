"use strict";
// let x;
// let x: string = '';
// let x: string = ' ';
// let x: string = 'string';
let x = '5';
// let x: number = 6;
// let x: null = null;
// let x: undefined = undefined;
// let x: boolean = false;
// let x: boolean = true;
// let x: array = [];
// let x: object = {};
// let x: object = function(){};
switch (typeof x) {
    case 'number':
    case 'function':
        break;
    case 'string':
        if (x === '') {
            x = 'default';
        }
        break;
    case 'object':
        if (x === null) {
            x = 'default';
        }
        break;
    case 'boolean':
        if (x === false) {
            x = 'default';
        }
        break;
    default:
        x = 'default';
        break;
}
console.log(x);
