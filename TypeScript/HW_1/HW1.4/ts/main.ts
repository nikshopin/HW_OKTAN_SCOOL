let firstName: string|null = prompt("Введите свое имя: ");
let middleName: string|null = prompt("Введите свое отчество: ");
let lastName: string|null = prompt("Введите свое фамилию : ");

let person: string|null = `${lastName} ${firstName} ${middleName}`;

console.log(person);
