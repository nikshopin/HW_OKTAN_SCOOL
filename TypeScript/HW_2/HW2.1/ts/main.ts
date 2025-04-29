type MyFistType = [number, number, string, {userid: number, name: string, age:number}, null, string,  number, string, string, string, undefined];
let arr: MyFistType = [1, 6, 'element', {userid: 1, name: 'vasya', age: 18}, null, 'person', 45, '0', 'name', 'status', undefined];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);
console.log(arr[10]);

console.log(arr[3].name);
console.log(arr[3].age);
console.log(arr[3].userid);
