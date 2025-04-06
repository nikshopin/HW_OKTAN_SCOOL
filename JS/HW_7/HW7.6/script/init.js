function Car(mark, model, year, max_speed, liters){
    this.mark = mark;
    this.model = model;
    this.year = year;
    this.max_speed = max_speed;
    this.liters = liters;
    this.drive = () => {
        return `Едем со скоростью ${this.max_speed}/km в час`
    };
    this.infoAll = () => {
        let info = {};
        for (let key in this){
            if (typeof this[key] !== 'function') {
                info[key] = this[key];
            }
        }
        return info;
    }
    this.info = ()=> {
        return {
            max_speed: this.max_speed,
            liters: this.liters,
            model: this.model,
            mark: this.mark,
            year: this.year
        }
    }
    this.increaseMaxSpeed = (newMaxSpeed) => { return this.max_speed = this.max_speed + newMaxSpeed};
    this.changeYear = (newYear) => {this.year = newYear};
    this.addDriver = (driver) => {
        for (let property in  driver) {
            this['driver_'+property] = driver[property];
        }
    }
}

car = new Car('lexus', 'lx570', 2021, 180, 5.7);
console.log(car);
console.log(car.drive());
console.log(car.info());
car.changeYear(2022);
car.addDriver({name: 'nik', age: 40, category: "B", experience: 22})
console.log(car.increaseMaxSpeed(40));
console.log(car.info());
console.log(car.infoAll());
