let temp: string|null = prompt("Put number from 1 to 10: ");
let variable: number = Number(temp);
if (variable !== 0) {
    console.log(`Вы ввели число ${variable} Верно!!!`);
}else {
    console.log(`Вы ввели число ${variable} Ошибка`);
}