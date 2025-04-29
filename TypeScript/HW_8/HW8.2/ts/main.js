"use strict";
function copyDeplObject(obj) {
    let json = JSON.stringify(obj);
    let newObj = JSON.parse(json);
    for (let objKey in obj) {
        if (typeof obj[objKey] === "function") {
            newObj[objKey] = obj[objKey].bind(newObj);
        }
    }
    return newObj;
}
let testObject = {
    name: "nik",
    secondNme: "shopin",
    yearBirthday: 1985,
    howOld: function () { return new Date().getFullYear() - this.yearBirthday; },
    outPut: function () { console.log('hello ' + this.name); }
};
console.log(testObject);
let copyTestObject = copyDeplObject(testObject);
console.log(copyTestObject);
console.log("Является ли копией объект ", testObject === copyTestObject);
console.log("howOld ли копией  ", testObject.howOld === copyTestObject.howOld);
console.log("outPut ли копией  ", testObject.outPut === copyTestObject.outPut);
console.log("Является ли владельцем свойства outPut?? ", copyTestObject.hasOwnProperty('outPut'));
testObject.outPut();
copyTestObject.outPut();
copyTestObject.name = 'Vasya';
copyTestObject.outPut();
