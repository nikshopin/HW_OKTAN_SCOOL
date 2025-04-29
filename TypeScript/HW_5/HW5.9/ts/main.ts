let users: {id: number, name: string, age: number, email: string}[] = [
    {id: 1, name: 'John', age: 14, email: 'john@gmail.com'},
    {id: 2, name: 'janett', age: 24, email: 'janett@gmail.com'},
]

let createBlock = (arr :{id: number, name: string, age: number, email: string}[]): void => {
    for (let item of arr) {
        document.write('<div style="border: 2px solid black; margin-bottom: 10px;">');
        document.write(`<p> id : ${item.id}</p>`);
        document.write('<p>name: ' + item.name + '</p>');
        document.write('<p>age: ' + item. age + '</p>');
        document.write('</div>');

    }
}

createBlock(users);

