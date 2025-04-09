let arrJSON = localStorage.getItem("session");
let arr = JSON.parse(arrJSON);
console.log(arr)
let div = document.createElement("div");
document.body.appendChild(div);
for (let item in arr) {
    let p = document.createElement("p");
    p.innerText = item + ": " + arr[item];
    div.appendChild(p);
}