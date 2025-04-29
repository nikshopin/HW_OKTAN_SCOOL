document.addEventListener('DOMContentLoaded', () => {
    for (let j:number = 0; j < 20; j++) {
        let h1: HTMLElement = document.createElement("h1");
        h1.innerText = `Заголовок ${j} созданный с помощью JS`;
        document.body.append(h1);
    }
})