let arr = ['Main','Products','About us','Contacts'];
let ul = document.createElement('ul');
document.body.append(ul);
for (let item of arr) {
    let li = document.createElement("li");
    li.innerText = item;
    ul.append(li);
}