function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;

}

let arr = [];

// let objs = [
//     {id: "1", name: "vasya", surname: "chepux", email: 'vasya@gmail.com', phone: '+380501112221'},
//     {id: "2", name: "masha", surname: "dodikov", email: 'masha@gmail.com', phone: '+380501112222'},
//     {id: "3", name: "glasha", surname: "zabeykosyk", email: 'glasha@gmail.com', phone: '+380501112223'},
//     {id: "4", name: "oleg", surname: "millionov", email: 'oleg@gmail.com', phone: '+380501112224'},
//     {id: "5", name: "egor", surname: "zabey", email: 'egor@gmail.com', phone: '+380501112225'},
//     {id: "6", name: "dima", surname: "prihodko", email: 'dima@gmail.com', phone: '+380501112226'},
//     {id: "7", name: "yana", surname: "tormozov", email: 'yana@gmail.com', phone: '+380501112227'},
//     {id: "8", name: "anya", surname: "prigunkov", email: 'anya@gmail.com', phone: '+380501112228'},
//     {id: "9", name: "tany", surname: "tygninogu", email: 'tany@gmail.com', phone: '+380501112229'},
//     {id: "10", name: "zinna", surname: "pytachkov", email: 'zinna@gmail.com', phone: '+380501112230'},
// ]
//
// for (let item of objs){
//     arr.push( new User(item.id, item.name, item.surname, item.email, item.phone));
// }

arr.push(new User(1, 'vasya', 'chepux', 'vasya@gmail.com', '+380501112221'));
arr.push(new User(2, 'masha', 'dodikov', 'masha@gmail.com', '+380501112222'));
arr.push(new User(3, 'glasha', 'zabeykosyk', 'glasha@gmail.com', '+380501112223'));
arr.push(new User(4, 'oleg', 'millionov', 'oleg@gmail.com', '+380501112224'));
arr.push(new User(5, 'egor', 'zabey', 'egor@gmail.com', '+380501112225'));
arr.push(new User(6, 'dima', 'prihodko', 'dima@gmail.com', '+380501112226'));
arr.push(new User(7, 'yana', 'tormozov', 'yana@gmail.com', '+380501112227'));
arr.push(new User(8, 'tany', 'prigunkov', 'anya@gmail.com', '+380501112228'));
arr.push(new User(9, 'zinna', 'tygninogu', 'tany@gmail.com', '+380501112229'));
arr.push(new User(10, 'vitya', 'doikin', 'zinna@gmail.com', '+380501112230'));



console.log(arr);

let filterUsers = arr.filter((user) => {return user.id % 2 === 0});
console.log(filterUsers);