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
        console.log("My name is " + this.firstName + " " + this.lastName + " and my phone number is" + this.phone + ".");
    }
}

let jed = new Contact("Jed", "Walker", "123-456-7890");