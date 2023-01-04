// const car = {
//     make: "VW",
//     model: "Bug",
//     color: "Orange",
//     start: function() {
//         console.log("starting the car")
//     }
// }

// const car2 = {
//     make: "Ferrari",
//     model: "812",
//     color: "Rosso Fuoco",
//     start: function() {
//         console.log("starting the car")
//     }
// }

class Contact {
    constructor(first, last, phone) {
        this.firstName = first;
        this.lastName = last; 
        this.phone = phone;
    }

    info() {
        console.log("My name is " + this.firstName + " " + this.lastName + " and my phone number is " + this.phone + ".");
    }
}

let jed = new Contact("Jed", "Walker", "123-456-7890");
jed.info();

class Vehicle {
    constructor(clr, numWheels, fuelLevel, numDoors) {
        this.color = clr;
        this.numOfWheels = numWheels;
        this.fuelLvl = fuelLevel;
        this.doors = numDoors;
        this.state = "stopped";
    }

    go() {
        this.state = "moving";
    }

    stop() {
        this.state = "stopped";
    }

    status() {
        if (this.state === "moving") {
            alert("Here we go!");
        } else {
            alert("Did you start the Vehicle?");
        }
    }

    message() {
        console.log("My vehicle is a " + this.color + " " + this.doors + " door SUV with " + this.numOfWheels + " wheels and a fuel level of " + this.fuelLvl + " of a tank.")
    }
}

// initialize a new Vehicle object
let myCar = new Vehicle("gray", 4, 0.5, 4);

// call class methods using dot notation
myCar.go();
myCar.status();
myCar.message(); 