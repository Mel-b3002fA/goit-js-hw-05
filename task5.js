class Car {
    // Static method to display car specifications
    static getSpecs(car) {
        console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
    }

    constructor({ maxSpeed, price }) {
        this.speed = 0;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.isOn = false;
        this.distance = 0;
    }

    // Getter for price
    get price() {
        return this._price;
    }

    // Setter for price
    set price(value) {
        this._price = value;
    }

    // Turn on the car
    turnOn() {
        this.isOn = true;
    }

    // Turn off the car
    turnOff() {
        this.isOn = false;
        this.speed = 0;
    }

    // Increase speed
    accelerate(value) {
        if (this.speed + value <= this.maxSpeed) {
            this.speed += value;
        }
    }

    // Decrease speed
    decelerate(value) {
        if (this.speed - value >= 0) {
            this.speed -= value;
        }
    }

    // Drive for a certain number of hours
    drive(hours) {
        if (this.isOn) {
            this.distance += hours * this.speed;
        }
    }
}