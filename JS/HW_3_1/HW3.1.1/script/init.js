let integerVariable = [4, 6, 8, 3, 0];
let stringVariable =['masha', 'glasa', 'sasha', 'pasha', 'dasha'];
let mixVariable = ['sasha', '18', 'fasle', 'Krechatik street', 'student'];

for (let item in integerVariable) {
    console.log(integerVariable[item]);
}

for (let item of integerVariable) {
    console.log(item);
}


for (let item of stringVariable) {
    console.log(item);
}

for (let item in stringVariable) {
    console.log(stringVariable[item]);
}

for (let item of mixVariable) {
    console.log(item);
}

for (let item in mixVariable) {
    console.log(mixVariable[item]);
}

