"use strict";
let day = Math.floor(Math.random() * 31) + 1;
if (day >= 1 && day <= 10) {
    console.log(`Сейчас ${day} и это первая декада`);
}
else if (day > 10 && day <= 20) {
    console.log(`Сейчас ${day} и это вторая декада`);
}
else if (day > 20 && day < 32) {
    console.log(`Сейчас ${day} и это третья декада`);
}
