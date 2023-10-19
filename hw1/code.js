console.log('Number: age');
let currentYear = 2023;
let userAge = +prompt('Enter your age');
const BirthYear = currentYear - userAge;
if (BirthYear <= 0) {
    alert('Your birth year is incorrect');
}
else alert('Your birth year is ' + BirthYear);

console.log('Number: temperature');
let Celsius = +prompt('write down degrees Celsius ')
const Fahrenheit = Celsius * 9/5 + 32;
alert(Fahrenheit);

console.log('Number: divide');
let firstNum = +prompt('enter the first number');
let secondNum = +prompt('enter the second number')
const answer = Math.floor(firstNum/secondNum);
alert(answer);

console.log('Number: currency');
const rate = 37; //dollar to grivna
let amountOfMoney = +prompt('enter the amount of dollars');
const dollarInGrivna = amountOfMoney * rate;
alert('in grivna\'s it\'ll be ' + dollarInGrivna);

console.log('Number: RGB');
let red = prompt('enter a number between 0 and 255');
let green = prompt('enter a number between 0 and 255');
let blue = prompt('enter a number between 0 and 255');
red = parseInt(red, 10);
green = parseInt(green, 10);
blue = parseInt(blue, 10);

let colorHex = '#' + red.toString(16).padStart(2, '0') + green.toString(16).padStart(2, '0') + blue.toString(16).padStart(2, '0');
alert(colorHex);

console.log('Number: flats');
const amountOfFloors = +prompt('enter the amount of floors');
const apartmentsPerFloor = +prompt('enter the amount of apartments per floor');
const targetFlat = +prompt('enter a target flat');
const totalApartments = amountOfFloors * apartmentsPerFloor;

const entrance = Math.ceil(targetFlat / totalApartments);
const floor = Math.ceil((targetFlat % totalApartments) / apartmentsPerFloor);
console.log(Math.ceil(targetFlat % totalApartments));
alert(`Квартира ${targetFlat} знаходиться на ${floor}-му поверсі ${entrance}-го під'їзду.`)
