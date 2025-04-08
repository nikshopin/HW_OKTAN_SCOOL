let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

document.body.style.padding = "15px";

let divWrap = document.createElement("div");
divWrap.style.display = "grid";
divWrap.style.gridTemplateColumns = "33% 33% 33%";
divWrap.style.gridTemplateRows = "repeat(2, 1fr)";
divWrap.style.gap = "13px";
document.body.appendChild(divWrap);

for (let item of coursesArray) {
    let divBlock = document.createElement("div");
    divBlock.style.border = "1px solid black";
    divBlock.style.paddingLeft = "15px";
    divWrap.appendChild(divBlock);
    let divTitle = document.createElement("div");
    let divMonth = document.createElement("div");
    divMonth.style.marginRight = "50px";
    let divHours = document.createElement("div");
    divHours.style.margin = "5px";
    let divBottom = document.createElement("div");
    let h1 = document.createElement("h1");
    let pMonth = document.createElement("p");
    let pHour = document.createElement("p");
    h1.innerText = item.title;
    pMonth.innerText ='Длительность месяцев - ' + item.monthDuration;
    pHour.innerText = 'Количество часов - ' + item.hourDuration;
    divTitle.append(h1);
    divMonth.append(pMonth);
    divHours.append(pHour);
    divMonth.style.display = "inline-block";
    divHours.style.display = "inline-block";

    // не понятно в задании нижний блок должен быть в дивах или в лишках поэтоту на выбор розкоментируйте то фрагмент который правильный для задания

    // -----------//DIV//-----------

    for (let i of item.modules) {
        let divP = document.createElement("div");
        let p = document.createElement("p");
        p.innerText = i;
        divP.append(p);
        divBottom.append(divP);
    }
    // -------------//LI//---------------

    //
    // let ul = document.createElement("ul");
    // divBottom.append(ul);
    // for (let i of item.modules){
    //     let li = document.createElement("li");
    //     li.innerText = i;
    //     ul.append(li);
    // }

    divBlock.append(divTitle, divMonth, divHours, divBottom);
}

