class Person {
  // theName, theAge, theCountry ===> placeholders
  constructor(theName, theAge, theCountry){
    this.name = theName;
    this.age = theAge;
    this.country = theCountry;
  }

  getAge(){
    console.log(`${this.name} is ${this.age} years old.`)
  }
}

const jimmyPerson = new Person("Jimmy", 27, "USA");
console.log(jimmyPerson.getAge());

class Student extends Person {
  constructor(theName, theAge, theCountry, course, favSubject){
    super(theName, theAge, theCountry);

    this.course = course;
    this.favSubject = favSubject;
  }

  graduate(numOfProject){
    if(numOfProject >= 3){
      return {didGraduate: true, message: `${this.name} has graduated!`};
    } else {
      return {didGraduate: false, message: `${this.name} didn't graduate!`}
    }
  }
}


const rabiulStudent = new Student("Rabiul", 29, "USA", "web dev", "javascript");

console.log(rabiulStudent); // Jimmy is 27 years old.

console.log(rabiulStudent.graduate(2)); // { didGraduate: false, message: 'Rabiul didn\'t graduate!' }