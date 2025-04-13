let users = [
    {id: 1, name: 'John', age: 14, email: 'john@gmail.com'},
    {id: 2, name: 'janett', age: 24, email: 'janett@gmail.com'},
]

let createBlock = (arr) => {
    for (let item of arr) {
        document.write('<div css="border: 2px solid black; margin-bottom: 10px;">');
            document.write(`<p> id : ${item.id}</p>`);
            document.write('<p>name: ' + item.name + '</p>');
            document.write('<p>age: ' + item. age + '</p>');
        document.write('</div>');

    }
}

createBlock(users);