let div= document.createElement("div");
let h1 = document.createElement("h1");
let number;
if (!localStorage.getItem("countLoadPage")) {
    localStorage.setItem('countLoadPage' , 1);
}else{
    number = localStorage.getItem("countLoadPage");
    number ++;
    localStorage.setItem('countLoadPage' , number);
}
h1.innerText = number;
document.body.append(div);
div.appendChild(h1);
