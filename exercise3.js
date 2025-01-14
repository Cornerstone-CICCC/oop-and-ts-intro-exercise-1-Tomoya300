// Create a Book class with the following:
// - Private properties: #title, #author, #price
// - A method addDiscount(discount) that applies a discount to the price (discount is a percentage, e.g., 10 for 10%).
// - A getter for price that returns the discounted price.
// - A getter and setter for the title, with the setter allowing changes only if the new title is not empty.

// class Book {
//   #title
//   #author
//   #price

//   constructor(title, author, price) {
//     this.#title = title
//     this.#author = author
//     this.#price = price
//   }

//   addDiscount(discount) {
//     if (discount > 0) {
//       this.#price -= (this.#price * discount)/100
//     } else {
//       return
//     }
//   }

//   getPrice() {
//     return this.#price
//   }

//   getTitle() {
//     return this.#title
//   }

//   setTitle(newTitle) {
//     if (newTitle !== "") {
//       this.#title = newTitle
//     } else {
//       return
//     }
//   }
// }


// // TEST CASE / DRIVER CODE
// const book1 = new Book("JavaScript Basics", "John Doe", 50);
// console.log(book1.getTitle()); // Expected output: "JavaScript Basics"
// console.log(book1.getPrice()); // Expected output: 50

// book1.addDiscount(10); // Apply 10% discount
// console.log(book1.getPrice()); // Expected output: 45 (after 10% discount)

// book1.title = ""; // Should not change the title
// console.log(book1.getTitle()); // Expected output: "JavaScript Basics"

// book1.title = "Advanced JavaScript"; // Should update the title
// console.log(book1.title); // Expected output: "Advanced JavaScript"

class Book {
  #title
  #author
  #price

  constructor(title, author, price) {
    this.#title = title
    this.#author = author
    this.#price = price
  }

  addDiscount(discount) {
    if (discount > 0) {
      this.#price -= (this.#price * discount)/100
    } else {
      return
    }
  }

  get price() {
    return this.#price
  }

  get title() {
    return this.#title
  }

  set title(newTitle) {
    if (newTitle !== "") {
      this.#title = newTitle
    } else {
      return
    }
  }
}


// TEST CASE / DRIVER CODE
const book1 = new Book("JavaScript Basics", "John Doe", 50);
console.log(book1.title); // Expected output: "JavaScript Basics"
console.log(book1.price); // Expected output: 50

book1.addDiscount(10); // Apply 10% discount
console.log(book1.price); // Expected output: 45 (after 10% discount)

book1.title = ""; // Should not change the title
console.log(book1.title); // Expected output: "JavaScript Basics"

book1.title = "Advanced JavaScript"; // Should update the title
console.log(book1.title); // Expected output: "Advanced JavaScript"