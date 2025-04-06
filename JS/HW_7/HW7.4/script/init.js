function Client (id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let client = [
    new Client("1",  "vasya",  "chepux", 'vasya@gmail.com',  '+380501112221', ['toyota', 'iphone' ,'notebook']),
    new Client("2",  "masha",  "dodikov", 'masha@gmail.com',  '+380501112222', ['mercedes', 'huawqi']),
    new Client("3",  "glasha",  "zabeykosyk", 'glasha@gmail.com',  '+380501112223', ['house', 'Porche']),
    new Client("4",  "oleg",  "millionov", 'oleg@gmail.com',  '+380501112224', ['books', 'pensel']),
    new Client("5",  "egor",  "zabey", 'egor@gmail.com',  '+380501112225', ['milk', 'bread']),
    new Client("6",  "dima",  "prihodko", 'dima@gmail.com',  '+380501112226', ['bool', 'soccer gloves', 'soccer net', 'soccer boots']),
    new Client("7",  "yana",  "tormozov", 'yana@gmail.com',  '+380501112227', ['monitor', 'office table']),
    new Client("8",  "anya",  "prigunkov", 'anya@gmail.com',  '+380501112228', ['keyboard', 'mouse']),
    new Client("9",  "tany",  "tygninogu", 'tany@gmail.com',  '+380501112229', ['javascript course', 'python course']),
    new Client("10", "zinna",  "pytachkov", 'zinna@gmail.com',  '+380501112230', ['socks', 'pants']),
]
console.log(client);