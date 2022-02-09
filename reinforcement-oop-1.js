// declaring objects

// object literal
const product = {
    name: "iPhone",
    price: 799.99
  }
  
  
  // using keyword "new"
  
  const book = new Object();
  book.title = "you don't know javascript";
  
  console.log(book);
  
  const person = {
    // properties (key: value pairs)
    name: "ana",
    age: 25,
  
    // methods
    greet: function() {
      console.log(this);
      console.log("Hello!");
    },
  
    getName: function() {
      console.log(`Person's name is: ${this.name}`)
    }
  }
  
  console.log(person.getName()); // Person's name is: ana

  console.log(person.greet());  // { name: 'ana', age: 25, greet: [Function], getName: [Function] }
                                // Hello! 