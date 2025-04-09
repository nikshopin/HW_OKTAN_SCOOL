let submit = document.getElementsByClassName("submit")[0];
let div = document.getElementById('text')
submit.addEventListener("click", function (event) {
    div.classList.toggle('hidden');
    if ( div.getAttribute("class") === "hidden" ) {
        submit.innerText = 'Отобразить красное пятно!!!';
    }else{
        submit.innerText = 'Убрать красное пятно!!!';
    }
})
