// object literals

let person1 = {
    name: 'TJ',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person2 = {
    name: 'Wendy',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person3 = {
    name: 'Brittany',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person4 = {
    name: 'Rachel',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }
}

let person5 = {
    name: 'Jack',
    sayHello: function () {
        console.log(`Hello! My name is ${this.name}.`)
    }

}

person1.sayHello()
person2.sayHello()
person3.sayHello()
person4.sayHello()
person5.sayHello()



//pseudo-class
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
Person.prototype.sayHi = function () {
    console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`)
}

let person6 = new Person('Billy', 29, 'Los Angeles');
let person7 = new Person('Jacob', 48, 'New York City');
let person8 = new Person('Jessica', 12, 'Birmingham');
let person9 = new Person('Hillary', 23, 'Nashville');
let person10 = new Person('Nick', 35, 'Atlanta');
person6.sayHi();
person7.sayHi();
person8.sayHi();
person9.sayHi();
person10.sayHi();





//inheritance 

class Vehicle {
    constructor(vehicleType, manufacturer, wheels) {
        this.manufactuturer = manufacturer;
        this.wheels = wheels;
        this.vehicleType = vehicleType;
    }
    aboutVehicle() {
        console.log(`This is a ${this.vehicleType} made by ${this.manufacturer} with ${this.wheels} wheels.`)
    }
}


class Truck extends Vehicle {
    constructor(vehicleType, manufacturer, wheels) {
        super(vehicleType, manufacturer, wheels) 
    }
    aboutVehicle() {
        console.log(`This is a ${this.vehicleType} made by ${this.manufacturer} with ${this.wheels} wheels.`)
    }
}

class Sedan extends Vehicle {
    constructor(size, vehicleType, manufacturer, wheels, mpg) {
        super(vehicleType, manufacturer, wheels)
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`This is a ${this.size} size ${this.vehicleType} made by ${this.manufacturer} with ${this.wheels} wheels that gets ${this.mpg} miles per gallon. `)
    }
}

class Motorcycle extends Vehicle {
    constructor(vehicleType, manufacturer, wheels, steering, doors) {
        super(vehicleType, manufacturer, wheels)
        this.steering = steering;
        this.doors = doors;
    }
    aboutVehicle() {
        console.log(`This is a ${this.vehicleType} made by ${this.manufacturer} with ${this.wheels} wheels. A ${this.steering} for steering and ${this.doors} doors}`)
    }

}


let t = new Truck('truck', 'RAM', '4');
let s = new Sedan('medium', 'sedan', 'Honda', '4', '26');
let m = new Motorcycle('motorcycle', 'Harley-Davidson', '2', 'handlebars', '0');

console.log(t);
console.log(s);
console.log(m);