let coursesAndDurationArray:{title: string, monthDuration: number}[] = [

    {title: 'JavaScript Complex', monthDuration: 5},

    {title: 'Java Complex', monthDuration: 6},

    {title: 'Python Complex', monthDuration: 6},

    {title: 'QA Complex', monthDuration: 4},

    {title: 'FullStack', monthDuration: 7},

    {title: 'Frontend', monthDuration: 4}
];

let coursesAndDurationArrayWithId: {title: string, monthDuration: number}[] = coursesAndDurationArray.map((value: {title: string, monthDuration: number}, index: number): {id: number, title: string, monthDuration: number} => {return {id: index, ...value}});
console.log(coursesAndDurationArrayWithId);