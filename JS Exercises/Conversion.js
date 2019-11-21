var kelvinTemp = 301;
var celsiusTemp = kelvinTemp - 273.15;
// conversion from kelvin to celsius
var result = celsiusTemp * (9 / 5) + 32;
// Calculation of Fahrenheit

var fahrenheitTemp = result;
fahrenheitTemp = Math.floor(fahrenheitTemp);

console.log("The temperature is " + fahrenheitTemp + " degress Fahrenheit.");

// New project

var myAge = 17;
// This is my age

var earlyAge = 2 * 25;

var laterYears = myAge;

var laterYears = laterYears * 4;

var myAgeInCatYears = laterYears + myAge;

var myName = "Felix";

console.log(
  "My name is " +
    myName +
    "." +
    " I am " +
    myAge +
    " in human years which is " +
    myAgeInCatYears +
    " years old in cat years."
);
