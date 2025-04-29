type myType = {name:string, secondNme:string, yearBirthday:number, howOld:()=>number, outPut:()=>void};

function copyDeplObject<T extends Record<string, any>>(obj: T): T{
    let json: string = JSON.stringify(obj);
    let newObj: T = JSON.parse(json);
    for (let objKey in obj){
        if (typeof obj[objKey as keyof  T] === "function"){
            newObj[objKey] = obj[objKey as keyof T].bind(newObj);
        }
    }
    return newObj as T;
}
let testObject:{name:string, secondNme:string, yearBirthday:number, howOld:()=>number, outPut:()=>void} = {
    name: "nik",
    secondNme: "shopin",
    yearBirthday: 1985,
    howOld: function(){return new Date().getFullYear() - this.yearBirthday},
    outPut: function(){console.log('hello ' + this.name)}
}


console.log( testObject );

let copyTestObject: myType = copyDeplObject(testObject);
console.log(copyTestObject);

console.log("Является ли копией объект ", testObject === copyTestObject);
console.log("howOld ли копией  ", testObject.howOld === copyTestObject.howOld );
console.log( "outPut ли копией  ", testObject.outPut === copyTestObject.outPut );
console.log("Является ли владельцем свойства outPut?? ", copyTestObject.hasOwnProperty('outPut'));
testObject.outPut();
copyTestObject.outPut();
copyTestObject.name = 'Vasya';
copyTestObject.outPut();

