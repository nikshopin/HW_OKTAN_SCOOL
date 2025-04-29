"use strict";
let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];
let desc = coursesAndDurationArray.sort((a, b) => a.monthDuration < b.monthDuration ? 1 : a.monthDuration === b.monthDuration ? 0 : -1);
console.log(desc);
let filter = coursesAndDurationArray.filter((value) => value.monthDuration > 5);
console.log(filter);
let addField = coursesAndDurationArray.map((value, index) => (Object.assign({ id: index + 1 }, value)));
console.log(addField);
