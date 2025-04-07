let coursesAndDurationArray = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}
];

let coursesAndDurationArrayWithId = coursesAndDurationArray.map((value, index) => {return {id: index, ...value}});
console.log(coursesAndDurationArrayWithId);