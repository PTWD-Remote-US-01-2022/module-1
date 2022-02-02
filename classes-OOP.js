const basicInfoObject = {
    name: "Felix",
    age: 24,
    height: "5'9",
    isActive: true,
};

// const baseballPlayer1 = {
//   age: Number,
//   height: String,
//   isActive: Boolean,
//   name: String
//   hitRating: Number,
//   catchRating: String
//   runningSpeed: String
// }

const baseballPlayer1 = {
    ...basicInfoObject,
    name: "Matt",
    hitRating: 3.5,
    catchRating: "80%",
    runningSpeed: "6mph",
};

const teacher1 = {
    ...basicInfoObject,
    avgFsaScorePerClass: "7/10",
    gradeTeaching: "9th",
};

// console.log({basicInfoObject});
// console.log({baseballPlayer1});
// console.log({teacher1});

// Math.floor()

class Vehicle {
    constructor(wheels, color, maxSpeed, accelerationAmount = 5) {
        this.wheels = wheels;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.accelerationAmount = accelerationAmount;
        this.speed = 0;
    }

    brake() {
        if (this.speed > 0 && this.speed - 5 > -1) {
            this.speed -= 5;
        } else if (this.speed - 5 < 0) {
            this.speed = 0;
        }
    }

    accelerate() {
        // if (this.speed < this.maxSpeed && (this.speed + this.accelerationAmount) < this.maxspeed) {
        //   this.speed += this.accelerationAmount;
        // } else if ( this.speed + this.accelerationAmount > this.maxSpeed ) {
        //   this.speed = this.maxSpeed
        // }
        this.speed += this.accelerationAmount;
    }
}

const vehicle1 = new Vehicle(4, "yellow", 200);
const vehicle2 = new Vehicle(8, "red", 400);

// console.log({vehicle1, vehicle2})

// for(let i = 0; i < 4; i++) {
//   vehicle1.accelerate();
// }

// console.log({vehicle1, vehicle2})

class Car extends Vehicle {
    constructor(
        wheels,
        color,
        maxSpeed,
        accelerationAmount,
        doors,
        make,
        model
    ) {
        super(wheels, color, maxSpeed, accelerationAmount);

        this.doors = doors;
        this.make = make;
        this.model = model;
        this.isTurnedOn = false;
    }

    acceleration() {
        // this would morph the original method that was created in the Vehicle class but would only effect it in the Car class. You can create another new Vehicle and the original acceleration method that is in Vehicle will work as it was set up in that class.
    }

    turnOn() {
        this.isTurnedOn = true;
    }

    turnOff() {
        this.isTurnedOn = false;
    }
}

const car1 = new Car(4, "Black", 160, 7, 5, "Ford", "Focus");

const car2 = new Car(4, "Blue", 180, 8, 3, "Honda", "Civic Type S");

// console.log({car1, car2})

// car1.turnOn();

// for(let i = 0; i < 4; i++) {
//   car1.accelerate();
// }

// console.log({car1, car2})

let arrayOfCars = [];
const colorArray = ["blue", "white", "green", "black", "gray", "red"];

for (let i = 0; i < 7; i++) {
    arrayOfCars.push(
        new Car(
            4,
            colorArray[Math.floor(Math.random() * colorArray.length)],
            180,
            8,
            3,
            "Honda",
            "Civic Type S"
        )
    );
}
console.log({ oneCar: arrayOfCars[3] });
