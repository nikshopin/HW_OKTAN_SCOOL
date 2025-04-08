let div = document.createElement("div");
div.classList.add("wrap", "collapse", "alpha", "beta");
// div.classList.add("wrap");
// div.classList.add("collapse");
// div.classList.add("alpha");
// div.classList.add("beta");
div.style.color = "white";
div.style.backgroundColor = "grey";
div.style.fontSize = "24px";
div.style.width = "250px";
div.style.height = "250px";
div.style.marginBottom = "50px";
document.body.append(div);

let cloneDiv = div.cloneNode(true);
document.body.append(cloneDiv);

