let inputKg = document.createElement("input");
inputKg.placeholder = 'Введите вес в киллограмах'
let h1 = document.createElement("h1");
document.body.append(inputKg);
inputKg.addEventListener("input", () => {
    h1.innerText = inputKg.value + " кг =  " +inputKg.value * 2.20462 + ' Фунтов';
    document.body.append( h1);
})

