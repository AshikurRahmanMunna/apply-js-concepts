function inchToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = inchToFeet(myInches);
console.log(feet);

var dadiInches = 144;
var feet = inchToFeet(dadiInches);
console.log(feet);

var naniInches = 156;
var feet = inchToFeet(naniInches);
console.log(feet);

var nanaInches = 168;
var feet = inchToFeet(nanaInches);
console.log(feet);


// mile ti kilometer
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = 26.2;
var km = mileToKilometer(marathon);
console.log(km);