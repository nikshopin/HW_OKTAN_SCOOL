"use strict";
class Car {
    constructor(mark, model, year, max_speed, liters) {
        this.mark = mark;
        this.year = year;
        this.max_speed = max_speed;
        this.model = model;
        this.year = year;
        this.liters = liters;
        this.driver = [];
    }
    drive() {
        return `Едем со скоростью ${this.max_speed}/km в час`;
    }
    ;
    info() {
        let result = {};
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                result[key] = this[key];
            }
        }
        return result;
    }
    increaseMaxSpeed(newMaxSpeed) { this.max_speed = this.max_speed + newMaxSpeed; }
    ;
    changeYear(newYear) { this.year = newYear; }
    ;
    addDriver(driver) {
        for (let property in driver) {
            this.driver.push({ ['driver_' + property]: driver[property] });
        }
    }
}
let car = new Car('lexus', 'lx570', 2021, 180, 5.7);
console.log(car.drive());
console.log(car.info());
car.changeYear(2022);
car.addDriver({ name: 'nik', age: 40, category: "B", experience: 22 });
car.increaseMaxSpeed(40);
console.log(car.info());
