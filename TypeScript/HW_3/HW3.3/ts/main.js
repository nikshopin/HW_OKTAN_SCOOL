"use strict";
document.addEventListener('DOMContentLoaded', () => {
    for (let j = 0; j < 20; j++) {
        let h1 = document.createElement("h1");
        h1.innerText = "Заголовок";
        document.body.append(h1);
    }
});
