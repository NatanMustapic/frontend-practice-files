var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultField = document.getElementById("resultField")
var form = document.getElementById("xIsWhatPrecentOfY");

//numField1.value = "ENTER Number 1";
//numField2.value = "ENTER Number 2";
//resultField.innerText = "Result: 100%";

form.addEventListener("submit", function (event) {

    if (!numField1.value || !numField2.value) { //checks if its null or undefined (is it empty)
        alert("Please enter values in the fields!")
    } else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(numField2.value);

        var result = x / y;
        var percent = result * 100;

        resultField.innerText= "Answer: " + percent + "%";
        event.preventDefault(); //zaustavlja defaultno brisanje sadržaja forme
    }

});

