let iterArrElement = (arr: number[]): void =>{
    for (let iter of arr) {
        console.log(iter);
    }
}
let array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(iterArrElement(array));