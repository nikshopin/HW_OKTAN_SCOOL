class Car{
    mark: string;
    model: string;
    year: number;
    max_speed: number;
    liters: number;
    driver!: Record<string, any>;


    constructor(mark: string, model: string, year: number, max_speed: number, liters: number){
        this.mark = mark;
        this.model = model;
        this.year = year;
        this.max_speed = max_speed;
        this.liters = liters;
        this.driver = [];
    }

    drive(): string {
        return `Едем со скоростью ${this.max_speed}/km в час`
    };

    info(): Record<string, any> {
        let fields: Record<string, any> = {};
        for (let key in this){
            if (typeof this[key] !== 'function') {
                fields[key] = this[key];
            }
        }
        return fields;
    }

    increaseMaxSpeed(newMaxSpeed: number):void { this.max_speed = this.max_speed + newMaxSpeed};
    changeYear(newYear: number): void {this.year = newYear};
    addDriver (driver:Record<string, any>):void {
        for (let property in  driver) {
                this.driver.push({['driver_'+property]: driver[property]});
        }
    }
}

let car = new Car('lexus', 'lx570', 2021, 180, 5.7);
console.log(car);
console.log(car.drive());
console.log(car.info());
car.changeYear(2022);
car.addDriver({name: 'nik', age: 40, category: "B", experience: 22})
car.increaseMaxSpeed(40);
console.log(car.info());
// console.log(car.infoAll());
