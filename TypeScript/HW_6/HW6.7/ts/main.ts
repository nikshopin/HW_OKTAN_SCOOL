let descending = (a: number, b: number): boolean => a > b;
let ascending = (a: number, b: number): boolean => a < b;
let nums: number[] = [11,3,21,3,3];

function sortNumsArray(arr: number[], callback:(a: number, b: number) => boolean  ) {
    return arr.slice().sort((a:number, b: number) => {
        return callback(a, b)? 1 : -1;
    });
}

console.log(nums.sort((a: number, b: number): number => (a === b) ? 0 : a < b ? 1 : -1  ));
console.log(nums.sort((a: number, b: number): number => (a === b) ? 0 : a >b ? 1 : -1  ));
console.log(nums.sort((a: number, b: number): number => {
    return a > b ? 0 : a >b ? 1 : -1;
} ) );

console.log(sortNumsArray(nums, descending));
console.log(sortNumsArray(nums, ascending));
// let desArr = sortNumsArray(arr, ascending);

