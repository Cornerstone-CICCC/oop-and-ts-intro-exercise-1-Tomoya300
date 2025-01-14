// Create a Car class with private properties for make, model, and year.
// Include a method getCarInfo() that returns the car info as a string.
// Add a method setYear(newYear) that updates the year only if newYear >= the current year.

class Car {
  #make
  #model
  #year

  constructor(make, model, year) {
    this.#make = make
    this.#model = model
    this.#year = year
  }

  getCarInfo() {
    return `Make: ${this.#make}, Model: ${this.#model}, Year: ${this.#year}`
  }

  setYear(newYear) {
    if (newYear >= this.#year) {
      this.#year = newYear
    } else {
      return
    }
  }
}


// TEST CASE / DRIVER CODE
const car1 = new Car("Toyota", "Corolla", 2010);
console.log(car1.getCarInfo()); // Expected output: "Make: Toyota, Model: Corolla, Year: 2010"
car1.setYear(2015); // Should update the year
console.log(car1.getCarInfo()); // Expected output: "Make: Toyota, Model: Corolla, Year: 2015"
car1.setYear(2005); // Should not update the year
console.log(car1.getCarInfo()); // Expected output: "Make: Toyota, Model: Corolla, Year: 2015"

// const studentA = {
//   firstname: "John",
//   lastname: "Doe",
//   age: 50,
//   course: ["WAD", "UI/UX"],
//   greeting: function(message) {
//     return `My name is ${this.firstname} ${this.lastname}. I am ${this.age} years old. I am studying ${this.course.join(",")}`
//   },
// }

// function Student(fname, lname) {
//   this.firstname = fname
//   this.lastname = lname
// }

// const studentC = new Student("John", "Doe")
// console.log(studentC)

// class Student {
//   constructor(fname, lname, age) {
//     this.firstname = fname
//     this.lastname = lname
//     this.age = age
//   }
// }

// const student1 = new Student("John", "Smith", 30)
// console.log(student1)
// const student2 = new Student("John", "Doe", 27)
// console.log(student2)
// const student3 = new Student("Jane", "Smith", 32)
// console.log(student3)

// class Car {
//   constructor(carBrand, carModel, carColor, carYear) {
//     this.brand = carBrand
//     this.model = carModel
//     this.color = carColor
//     this.year = carYear
//     this.isNew = false
//     this.isSale = true
//   }

//   describe() {
//     return `My car is a ${this.isNew ? "brand-new" : "old"} ${this.year} ${this.brand} ${this.model}. It is color ${this.color}. It is ${!this.isSale ? "not " : ""}for sale. It is ${this.calcAge()} year/s old.`
//   }

//   calcAge() {
//     // return 2025 - this.year
//     return new Date().getFullYear() - this.year
//   }
// }

// const firstCar = new Car("Toyota", "Corolla", "white", 2022)
// console.log(firstCar.describe())
// const secondCar = new Car("Ford", "F-150", "black", 2020)
// console.log(secondCar.describe())
// const thirdCar = new Car("Honda", "Civic", "blue", 2015)
// console.log(thirdCar.describe())
// const fourthCar = new Car("Toyota", "Lexus", "white", 2024)
// console.log(fourthCar.describe())

// secondCar.isNew = true
// console.log(secondCar.describe())

// class Authur {
//   constructor(fname, lname) {
//     this.firstname = fname
//     this.lastname = lname
//     this.books = []
//   }

//   describe() {
//     return `${this.firstname} ${this.lastname} wrote ${this.books.length > 0 ? this.books.join(", ") : "no book"}.`
//   }
// }

// const authur1 = new Authur("John", "Doe")
// authur1.books.push("Beneath the wheel")
// authur1.books.push("Wizard of Oz")
// authur1.books.push("Witcher")
// console.log(authur1.describe())

// class Person {
//   static counter = 0

//   constructor(fname) {
//     Person.counter++

//     this.firstname = fname
//   }
// }

// class Person {
//   static counter = 0

//   constructor(fname) {
//     Person.addPerson()

//     this.firstname = fname
//   }

//   static addPerson() {
//     Person.counter++
//   }

//   static resetCounter() {
//     console.log(`Resetting...`)
//     Person.counter = 0
//   }
// }

// const person1 = new Person("John")
// const person2 = new Person("Jane")
// const person3 = new Person("Bob")

// console.log(`the number of persons: ` + Person.counter)
// Person.resetCounter()

// const person4 = new Person("Ashe")
// console.log(`the number of persons: ` + Person.counter)

// class Person {
//   static persons = []

//   constructor(fname) {
//     this.firstname = fname
//   }

//   static addPerson() {
//     pe
//   }
// }

// class Pizza {
//   #size

//   constructor(size) {
//     this.#size = size
//   }

//   getSize() {
//     return this.#size
//   }

//   setSize(newSize) {
//     if(!["sm", "md", "lg"].includes(newSize)) {
//       console.error("invalid size")
//     } else {
//       this.#size = newSize
//     }
//   }
// }

// const pizza1 = new Pizza("md")
// console.log(pizza1.getSize())
// pizza1.setSize("xl")
// console.log(pizza1.getSize())
// pizza1.setSize("lg")
// console.log(pizza1.getSize())