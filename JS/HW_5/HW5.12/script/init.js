let a = [1, true, 'string', false, [1]]

let changePosition = (arr, position1, position2) => {
    let timeVar = arr[position1];
    arr[position1] = arr[position2];
    arr[position2] = timeVar;
}
changePosition(a, 2,4 );
document.write(`<p>${a}`);