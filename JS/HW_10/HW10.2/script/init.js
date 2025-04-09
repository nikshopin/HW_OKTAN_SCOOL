let submit =document.getElementsByClassName("submit")[0];
let input = document.getElementById("inputAge");
submit.addEventListener("click", function (ev) {
    if (input.value < 18) {
        alert("Еще молоко на губах не обсохло")
        ev.preventDefault();
        input.value = "";
    }else{
        alert("Доступ разрешен");
        input.value = "";
    }
})
