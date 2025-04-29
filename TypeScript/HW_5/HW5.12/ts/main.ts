let a:[number, boolean, string, boolean, number[]] = [1, true, 'string', false, [1]]

let changePosition = (arr: any[], position1: number, position2: number) => {
    let timeVar = arr[position1];
    arr[position1] = arr[position2];
    arr[position2] = timeVar;
}
changePosition(a, 2,4 );
document.write(`<p>${a}`);