let div = document.createElement('div');
let inputColumn = document.createElement('input');
let inputRow = document.createElement('input');
let inputContent = document.createElement('input');
inputContent.placeholder = 'Enter content';
inputColumn.placeholder = 'Enter count column';
inputRow.placeholder = 'Enter count row';
let button = document.createElement('button');
button.innerText = 'Submit';
document.body.append(inputColumn, inputRow, inputContent, button);
document.body.append(div);

button.addEventListener('click', (e) => {
    div.style.display = 'grid';
    div.style.gridTemplateColumns = `repeat(${inputColumn.value}, 1fr)`;
    div.style.gridTemplateRows = `repeat(${inputRow.value}, 1fr)`;
    let count = inputRow.value * inputColumn.value;

    for (let i = 0; i < count; i++) {
        let h1 = document.createElement('h1');
        h1.innerText = inputContent.value;
        div.append(h1);
    }

})


