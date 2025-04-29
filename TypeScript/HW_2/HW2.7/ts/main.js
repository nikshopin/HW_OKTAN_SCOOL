"use strict";
let minuts = Math.floor(Math.random() * 60);
if (minuts >= 0 && minuts < 15) {
    console.log(`Сейчас ${minuts} и это первая четверть`);
}
else if (minuts >= 15 && minuts < 30) {
    console.log(`Сейчас ${minuts} и это вторая четверть`);
}
else if (minuts >= 30 && minuts < 45) {
    console.log(`Сейчас ${minuts} и это третья четверть`);
}
else if (minuts >= 45 && minuts < 60) {
    console.log(`Сейчас ${minuts} и это четвертая четверть`);
}
