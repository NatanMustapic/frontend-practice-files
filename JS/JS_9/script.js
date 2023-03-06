var length1 = 10;
var width1 = 15;
var area1 = length1 * width1;
console.log(area1);

function area(length, width) { //funkcije nam olakšavaju pisanje koda i povećavaju čitljivost
  return length * width;
}

console.log(area(10,15));
console.log(area(43,45));


var bankBalance = 500;

function makeTransaction (priceOfSale){
  if (priceOfSale <= bankBalance){
    bankBalance -= priceOfSale;
    console.log("Purchase Successful!");
  } else
    console.log("Insufficient funds!");
}

console.log(bankBalance);
makeTransaction(79.99);

console.log(bankBalance);
makeTransaction(2.32);

console.log(bankBalance);
makeTransaction(10.99);

console.log(bankBalance);
makeTransaction(450.99);


var transaction = function(priceOfSale){ //funkcije možemo definirati i kao varijable pa nam je lakse korištenje sa kompleksnijim tipovima podataka kao nizovima ili objektima
  if (priceOfSale <= bankBalance){
    bankBalance -= priceOfSale;
    console.log("Purchase Successful!");
  } else
    console.log("Insufficient funds!");
}

console.log(bankBalance);
transaction(10);

var printCustomerName = function(first, last){
  // kod
}

var applyForCreditCard = function(creditScore, soul){
  // kod
}

var bankOperations = [];
bankOperations.push(transaction);
bankOperations.push(printCustomerName);
bankOperations.push(applyForCreditCard);