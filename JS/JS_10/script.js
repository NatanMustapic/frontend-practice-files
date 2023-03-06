//object constructor
function student(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.greeting = function() {
    return "Hello my name is " + this.firstName + " " + this.lastName + " and i am " + this.age + " years old."
  };
}

var students = [];
students.push(new student("Anton", "Franc", 44));
students.push(new student("Timmy", "Turner", 8));
students.push(new student("Ivanka", "Krawitch", 28));
console.log(students);

for ( var i = 0; i < students.length; i++){
  console.log(students[i].greeting());
}

var osoba = students[0]; 
for (var key in osoba){ //for in loop used for iterating objects, keys and values
  console.log(osoba[key]);
}


//nacin 2
var student0 = {
  firstName: "John",
  lastName: "Smith",
  age: 7,
  greeting: function() {
    return "Hello my name is " + this.firstName + " " + this.lastName + " and i am " + this.age + " years old."
  }
};

console.log(student0.firstName);
console.log(student0.lastName);

console.log(student0["firstName"]);
console.log(student0["lastName"]);

console.log(student0.greeting());


//nacin 3
var student1 = new Object();
student1.firstName = "Peter";
student1.lastName = "Parker";
student1.age= 18;


//nacin 4
var student2 = {};
student2.firstName = "Anna";
student2.lastName = "Doe";
student2.age = 86;

var studentsAll = [];
studentsAll.push(student0);
studentsAll.push(student1);
studentsAll.push(student2);

console.log(studentsAll);