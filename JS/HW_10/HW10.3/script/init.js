let name = document.getElementById("name");
let surname = document.getElementById("surname");
let age = document.getElementById("age");
let submit = document.getElementById("submit");

submit.addEventListener("click", function(event) {
    if (name.value === '' || surname.value === '' || age.value === '') {
        alert("Все поля должны быть заполнены !!!");
        event.preventDefault();
    }else{
        event.preventDefault();
        let greeting = document.createElement("p");
        let div = document.createElement("div");
        let userName = document.createElement("h2")
        let userSurname = document.createElement("h2");
        let userAge = document.createElement("p");

        greeting.innerText = 'Привет';
        userName.innerText = name.value;
        userSurname.innerText = surname.value;
        userAge.innerText = age.value;
        // name.classList.add("hidden");
        // surname.classList.add("hidden");
        // age.classList.add("hidden");
        // submit.classList.add("hidden");
        document.body.append(div);
        div.append(greeting, userName, userSurname, userAge);
    }
});

