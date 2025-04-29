function createUnorderedList(array: any[]){
    document.write('<ul>');
    for (let item of array){
        document.write(`<li> ${item}</li>`);
    }
    document.write('</ul>');
}

let array: any [] = [1,2, "test", true, "string", 5];

createUnorderedList(array);