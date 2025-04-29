"use strict";
function Client(id, name, surname, email, phone, order) {
    // this.id = id;
    // this.name = name;
    // this.surname = surname;
    // this.email = email;
    // this.phone = phone;
    // this.order = order;
    return { id, name, surname, email, phone, order };
}
let client = [
    Client(1, "vasya", "chepux", 'vasya@gmail.com', '+380501112221', ['toyota', 'iphone', 'notebook']),
    Client(2, "masha", "dodikov", 'masha@gmail.com', '+380501112222', ['mercedes', 'huawqi']),
    Client(3, "glasha", "zabeykosyk", 'glasha@gmail.com', '+380501112223', ['house', 'Porche']),
    Client(4, "oleg", "millionov", 'oleg@gmail.com', '+380501112224', ['books', 'pensel']),
    Client(5, "egor", "zabey", 'egor@gmail.com', '+380501112225', ['milk', 'bread']),
    Client(6, "dima", "prihodko", 'dima@gmail.com', '+380501112226', ['bool', 'soccer gloves', 'soccer net', 'soccer boots']),
    Client(7, "yana", "tormozov", 'yana@gmail.com', '+380501112227', ['monitor', 'office table']),
    Client(8, "anya", "prigunkov", 'anya@gmail.com', '+380501112228', ['keyboard', 'mouse']),
    Client(9, "tany", "tygninogu", 'tany@gmail.com', '+380501112229', ['javascript course', 'python course']),
    Client(10, "zinna", "pytachkov", 'zinna@gmail.com', '+380501112230', ['socks', 'pants']),
];
console.log(client);
let sortArr = client.sort((a, b) => { return a.order.length > b.order.length ? 1 : a.order.length === b.order.length ? 0 : -1; });
console.log(sortArr);
