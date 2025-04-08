let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}

];

let divWrapper = document.createElement("div");
divWrapper.style.display = "flex";
divWrapper.style.flexDirection = "row";
divWrapper.style.gap = "20px";
document.body.appendChild(divWrapper);


for ( let item of coursesAndDurationArray ) {
    let div = document.createElement("div");
    div.className = "item";
    div.style.display = "flex";
    div.style.padding = "20px";
    div.style.flexDirection = "column";
    div.style.gap = "10px";
    div.style.width = "350px";
    div.style.backgroundColor = "yellow";
    div.style.height = "200px";
    div.style.justifyContent = "center";
    div.style.alignItems = "center"
    div.style.border = "1px solid black";
    let h1 = document.createElement("h1");
    h1.className = "heading";
    let p = document.createElement("p");
    p.className = "description";
    h1.innerText = item.title;
    p.innerText = 'Длительность курса - ' + item.monthDuration;
    div.append(h1, p);
    divWrapper.append(div);
}