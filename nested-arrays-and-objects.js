// array of objects

const students = [
    {
      firstName: "kamila",
      lastName: "kowalczyk",
      bootcamp: "web dev",
      isCareerChanger: true,
      favs: ["javascript"]
    },
      {
      firstName: "lisa",
      lastName: "kilker",
      bootcamp: "cybersecurity",
      isCareerChanger: false,
      favs: ["defense", "offense"]
    },
      {
      firstName: "francisco",
      lastName: "cano",
      bootcamp: "ux ui",
      isCareerChanger: true,
      favs: ["prototyping", "figma"]
    }
  ]
  
  console.log(students[0].lastName); // kowalczyk
  console.log(students[1].bootcamp); // cybersecurity
  console.log(students[2].firstName); // francisco
  
  for (let i = 0; i < students.length; i++){
    console.log(students[i].firstName);
  }
  
  // array of arrays
  
  const developers = [
    ["ana", "will", "ivan"],
    ["ema", "sofia", "george"],
    ["francisco", "rob", "chris"]
  ]
  
  console.log(developers[0]); // [ 'ana', 'will', 'ivan' ]
  console.log(developers[0][0]); // ana
  
  console.log(developers[2][1]); // rob
  console.log(developers[1][2]); // george
  
  for (let i = 0; i < developers.length; i++){
    console.log(developers[i][1])
  }
  
  // will
  // sofia
  // rob
  
  
  // object with nested object(s)
  
  const classRoom = {
    teacher:  {
      firstName: 'Greg',
      lastName: 'Dach',
      age: 38,
      address: {
        street: "3085 Kelton Knolls",
        city: "Aldaside",
        state: "Maryland"
      }
    }
  };
  
  console.log(classRoom.teacher.firstName); // Greg
  console.log(classRoom.teacher.address.city); // Aldaside