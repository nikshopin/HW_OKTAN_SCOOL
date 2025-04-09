let price = JSON.parse(localStorage.getItem("price"));
if (!price) {
    let data = {
        price: 100,
        lastTimeUpdate: Date.now()
    }
    localStorage.setItem("price", JSON.stringify(data));

}else{
    if (Date.now() - price.lastTimeUpdate >=  10000){
        data = {
            price: price.price +10,
            lastTimeUpdate: Date.now()
        }
        localStorage.setItem("price", JSON.stringify(data));
    }
}

let ls = JSON.parse(localStorage.getItem("price"));
console.log(ls);
let h1 = document.createElement("h1");
h1.innerText = ls.price + " грн";
document.body.appendChild(h1);