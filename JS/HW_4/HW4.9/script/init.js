function createUserCart(array){
    for (let person of array){
        document.write('<div css="border: 1px solid;">');
            document.write(`<p>id: ${person.id}</p>`);
            document.write(`<h2>name: ${person.name}</h2>`);
            document.write(`<p>age: ${person.age}</p>`);
        document.write('</div>');
    }
}

let users = [
    {id: 1, name: "John", age: 15},
    {id: 2, name: "Juli", age: 25},
    {id: 3, name: "Tom", age: 25},
]

createUserCart(users);