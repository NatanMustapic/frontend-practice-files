//FOR
var students = ["John", "Jacob", "Inge", "Anna", "Derek"];
for(var i = 0; i < students.length; i++){
    console.log(students[i]);
}


//FOR...IN
const capitals = {
    a: "Athens",
    b: "Belgrade",
    c: "Cairo"
};
for (let key in capitals) {
    console.log(key + ": " + capitals[key]);
}


//FOR...OF
const arr = [ "Fred", "Tom", "Bob" ];
for (let i of arr) {
  console.log(i);
}


//WHILE
let x = 1;
while (x < 10) {
  console.log(x);
  x++;
}


//DO...WHILE
let y = 1;
do {
  console.log(y);
  y++;
} while (y < 10);
