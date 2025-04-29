let arr: [number, string, boolean, undefined] = [1, 'string', true, undefined];

let structureLi = (arr: any[]) => {
    document.write('<ul>');
    for (let i: number = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}

structureLi(arr);