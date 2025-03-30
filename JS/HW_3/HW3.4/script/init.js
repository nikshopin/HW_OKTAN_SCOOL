document.addEventListener('DOMContentLoaded', () => {
    for (let j = 0; j < 20; j++) {
        let h1 = document.createElement("h1");
        h1.innerText = `Заголовок ${j} созданный с помощью JS`;
        document.body.append(h1);
    }
})