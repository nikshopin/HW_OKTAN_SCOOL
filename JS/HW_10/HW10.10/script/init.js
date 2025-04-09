let from;
let to;
let array = [];
for (let i = 0; i < 100; i++) {
    array.push(i+1 + " блок");
}
let divElement = document.createElement("div");
divElement.style.display = "grid";
divElement.style.gridTemplateColumns="repeat(5, 1fr)";
divElement.style.gridTemplateRows = "repeat(2, 1fr)";
divElement.style.gap = "20px";
divElement.style.width = "97%";

let divBlockButton = document.createElement("div");
divBlockButton.style.display = "flex";
divBlockButton.style.justifyContent = "center";
divBlockButton.style.gap = "30px";
divBlockButton.style.margin ="100px";
divBlockButton.style.marginBottom ="100px";

let prevButton = document.createElement("button");
prevButton.innerText = 'Предыдущая';
let nextButton = document.createElement("button");
nextButton.innerText = 'Следующая';

document.body.append(divBlockButton, divElement);

let numberPage = localStorage.getItem('pagination');
if (!numberPage) {
    let pagination = {
        from: 0,
        to: 10,
    }
    from = pagination.from;
    to = pagination.to;
    localStorage.setItem('pagination', JSON.stringify(pagination));
}else{
    let result = JSON.parse(localStorage.getItem('pagination'));
    from = result.from;
    to = result.to;
}


function nextRangeItem (){
    let result = JSON.parse(localStorage.getItem('pagination'));
    from = result.from +10;
    to = result.to + 10;
    let arr ={
        from: from,
        to: to
    }
    localStorage.setItem('pagination', JSON.stringify(arr));
}

function prevRangeItem (){
    let result = JSON.parse(localStorage.getItem('pagination'));
    from = result.from - 10;
    to = result.to - 10;
    let arr ={
        from: from,
        to: to
    }
    localStorage.setItem('pagination', JSON.stringify(arr));
}

function displayButtons(){
    if (from < 10){
        divBlockButton.appendChild(nextButton);
    }else if (to >= array.length){
        divBlockButton.append(prevButton);
        to = array.length;
    }else{
        divBlockButton.append(prevButton, nextButton);
    }
}

function renderElements(){
    for (let i = from; i < to; i++) {
        let div = document.createElement("div");
        div.style.border = "1px solid #ccc";
        div.style.display = "flex";
        div.style.justifyContent = "center";
        div.style.alignItems = "center"
        let h1 = document.createElement("h1");
        h1.innerText = array[i];
        div.appendChild(h1);
        divElement.append(div);

    }
}


displayButtons();
renderElements();


nextButton.addEventListener("click",(event)=>{
    nextRangeItem();
    location.reload();
});
prevButton.addEventListener("click",(event)=>{
    prevRangeItem();
    location.reload();
})








