// class constructor
class Car {
  drive() {
    console.log("room-doom-doom")
  }
}

// old school ES5 constructor
function Moto() {
  this.name = "Honda"
  this.sayName = "my favorite bike is " + this.name
}


// add methods with prototype to both constructors
Moto.prototype.drive = function() {return console.log("drr-drr-drr")}
Car.prototype.stop = function() {return console.log("shooooo!")}
const car1 = new Car
const moto1 = new Moto

console.log(car1.drive())
console.log(car1.stop())
console.log(moto1.drive())
console.log(moto1.sayName)

