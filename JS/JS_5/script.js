// COMPARISON OPERATORS
// == equal to
// === equal to (value and type of value)
// <= less than or equal to
// >= greater than or equal to
// !== not equal to


if(1 == 1) {
    console.log("We should see this!");
}

if(1 == 2) {
    console.log("We should't see this!");
}


var myAccountBalance = 200;
var nikeSBShoes = 799;
var coupon = 500;

if(nikeSBShoes <= myAccountBalance){
    myAccountBalance -=nikeSBShoes;
    console.log("We just bought dope ass shoes! Account balance left: " + myAccountBalance);
} else if(nikeSBShoes - coupon <= myAccountBalance){
    myAccountBalance -= (nikeSBShoes - coupon);
    console.log("We used a coupon to by some nice shoes! Acount balance left: "+ myAccountBalance);
} else {
    console.log("You too broke for anything except rent and air my friend!");
}


var val1 = 23;
var val2 = "23";

if (val1 === val2)
    console.log("These are the same!");
else
    console.log("One of these is not like the other...");
// za jednu liniju koda ne moramo koristiti {}