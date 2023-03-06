var balances = [54, 655.44, 2727.3];
var students = ["Timmy", "Janessa", "Arun"];
var person = ["John", 12, "USA"]; //u pravilu ne mješamo vrste elemenata u istom nizu

var naughtyList = [];

naughtyList.push(students[0]);

console.log(students);
console.log(naughtyList);

var index = naughtyList.indexOf("Timmy"); // hvatamo index traženog studenta
if (index > -1){
    naughtyList.splice(index, 1); //skidamo 1 element na traženom indeksu
}
console.log(naughtyList);