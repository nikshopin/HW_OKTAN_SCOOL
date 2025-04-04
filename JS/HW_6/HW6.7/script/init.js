let descending = (a, b) => a > b;
let ascending = (a, b) => a < b;
let nums = [11,3,21,3,3];

function sortNumsArray(arr, callback) {
    return arr.slice().sort((a, b) => {
        return callback(a, b)? 1 : -1;
    });
}

console.log(nums.sort((a, b) => (a === b) ? 0 : a < b ? 1 : -1  ));
console.log(nums.sort((a, b) => (a === b) ? 0 : a >b ? 1 : -1  ));
console.log(  nums.sort((a, b) => {
   return a > b
} ) );

console.log(sortNumsArray(nums, descending));
console.log(sortNumsArray(nums, ascending));
// let desArr = sortNumsArray(arr, ascending);

