this.car = "Honda Civic";

var myGarage = {
  car: "Aston Martin",
  getCar: function() {
    return this.car;
  }
}

console.log(myGarage.getCar());

var storeGetCarForLater = myGarage.getCar;
console.log(storeGetCarForLater()); // ispisuje prvi this.car jer smo izgubili scope this.car varijable te u getCar funkciji this.car pokazuje na "Hondu Civic"

var theRealGetCarFunction = myGarage.getCar.bind(myGarage);
console.log(theRealGetCarFunction()); //.bind govori programu na koji dio koda se odnosi this.car (u ovom slucaju na myGarage objekt)