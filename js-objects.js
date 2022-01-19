// [] --> arrays ---> naming convention is plural

// {} --> objects

// naming convention ---> singular
const student = {
    // key : value
    // proprty: value
    firstName: "gian carlo",
    lastName: "sosa",
    age: 24,
    bootcamp: "web development",
    isCareerChanger: true,
    favorites: ["javascript", "html"]
  };
  
  // using dot notation to access the values of object properties
  console.log(student.firstName);
  
  // not so common - using [] to access values of object properties
  
  console.log(student["bootcamp"]);
  
  // add a new property to an object
  student.year = 2022;
  console.log(student);
  
  // { firstName: 'gian carlo',
  //   lastName: 'sosa',
  //   age: 24,
  //   bootcamp: 'web development',
  //   isCareerChanger: true,
  //   favorites: [ 'javascript', 'html' ],
  //   year: 2022 
  //  }
  
  
  // to delete/remove a property
  delete student.age;
  console.log(student);
  
  // { firstName: 'gian carlo',
  //   lastName: 'sosa',
  //   bootcamp: 'web development',
  //   isCareerChanger: true,
  //   favorites: [ 'javascript', 'html' ],
  //   year: 2022 
  //  }
  
  // update
  student.isCareerChanger = false;
  
  console.log(student);
  
  // { firstName: 'gian carlo',
  //   lastName: 'sosa',
  //   bootcamp: 'web development',
  //   isCareerChanger: false,
  //   favorites: [ 'javascript', 'html' ],
  //   year: 2022 
  //  }
  
  student.favorites.push("css");
  
  console.log(student);
  
  // { firstName: 'gian carlo',
  //   lastName: 'sosa',
  //   bootcamp: 'web development',
  //   isCareerChanger: false,
  //   favorites: [ 'javascript', 'html', 'CSS' ],
  //   year: 2022 
  //  }
  
  // list the properties (keys)
  
  const objKeys = Object.keys(student);
  
  console.log(objKeys);
  
  // [ 'firstName',
  //   'lastName',
  //   'bootcamp',
  //   'isCareerChanger',
  //   'favorites',
  //   'year' ]
  
  // list the values of the object properties
  
  const objValues = Object.values(student);
  
  console.log(objValues);
  
  // [ 'gian carlo',
  //   'sosa',
  //   'web development',
  //   false,
  //   [ 'javascript', 'html', 'css' ],
  //   2022 ]
  
  console.log("------------------------------------");
  
  // to loop through the object we use FOR ... IN loop
  for (let key in student){
    console.log(key)
  }
  
  // firstName
  // lastName
  // bootcamp
  // isCareerChanger
  // favorites
  // year
  
  // check if some property exist in an object
  console.log("firstName" in student); // true
  
  console.log("name" in student); // false