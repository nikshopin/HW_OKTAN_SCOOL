// let x;
let x = '';
// let x = ' ';
// let x = 'string';
// let x = '5';
// let x = 6;
// let x = null;
// let x = undefined;
// let x = false;
// let x = true;
// let x = [];
// let x = {};
// let x = function(){};


switch (typeof x){
    case 'number':
    case 'function':
        break;
    case 'string':
        if (x === ''){
            x = 'default';
        }
        break;
    case 'object':
        if (x === null) {
            x = 'default';
        }
        break;
    case'boolean':
        if (x === false){
            x = 'default';
        }
        break;
    default:
        x = 'default'
        break;
}

console.log(x);