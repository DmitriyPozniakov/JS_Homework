'use strict';

//Number: odd
const oddOrEven = Number(prompt('enter a number'));
if(oddOrEven % 2 === 0) {
    console.log(`${oddOrEven} is even`);
} else {
    console.log(`${oddOrEven} is odd`);
}

//String: lexics
const userInput = prompt('enter a sentense');
if(userInput.includes('йолоп')) console.log('сам ти йолоп');
else console.log(':)')

//Boolean
const firstQuestion = confirm('Do you like JS?');
const secondQuestion = confirm('Are you a front-end enjoyer?');

//Boolean: if
if(firstQuestion) {
    console.log("yeaaah that's a great choice :)");
} else {
    console.log(":(");
}

if(secondQuestion) {
    console.log('good luck, bro!');
} else {
    console.log("have a nice day");
}

//Ternany
const sex = confirm('are you male?') ? 'male' : 'female';

Prompt: or
const age = Number(prompt('age'));
if(isNaN(age) || age === 0) alert('SOS!!! SOS!! INVALID SYNTAX AXTUNG AXTUNG');
else alert(`Your age is ${age}`);


//Confirm: or this days
const shopping = confirm('shopping') ? console.log('go') : alert('ти - бяка');

//Confirm: if this days
shopping = confirm('shopping');
if(shopping) console.log('go');
else alert('ти - бяка');

Default: or
let name = prompt('name');
let surmame = prompt('surname');
let patronymic = prompt('patronymic');


//login and password
const login = prompt('login');
const password = prompt('password');
if(login !== 'admin' || password !== 'qwerty') {
    alert('invalid login or password');
} else alert('congratulations')

//Currency exchange
const currency = prompt('usd or eur').toLocaleLowerCase();
const amountOfMoney = Number(prompt('enter how much money'));
const [usdBuy, usdSale] = [38, 36];
const [eurBuy, eurSale] = [40, 38];
let result;
let buyOrSale;
if(currency === 'usd') {
    buyOrSale = confirm('buy or sale');
    if(buyOrSale) {
        result = amountOfMoney * usdBuy;
        alert(`${amountOfMoney} $ в гривнах будет ${result}`);
    } else {
        result = amountOfMoney * usdSale;
        alert(`${amountOfMoney} $ в гривнах будет ${result}`);
    }  
}
if(currency === 'eur') {
    buyOrSale = confirm('buy or sale');
    if(buyOrSale) {
        result = amountOfMoney * eurBuy;
        alert(`${amountOfMoney} € в гривнах будет ${result}`)
    } else {
        result = amountOfMoney * eurSale;
        alert(`${amountOfMoney} € в гривнах будет ${result}`)
    } 
}

//Scissors
const userChoice = prompt("Виберіть: камінь, ножиці чи папір?").toLowerCase();
const computerChoices = ["камінь", "ножиці", "папір"];
const computerChoice = computerChoices[Math.floor(Math.random() * computerChoices.length)];

alert(`Комп'ютер вибрав: ${computerChoice}`);
if (userChoice === computerChoice) {
  alert("Нічия!");
} else if (
  (userChoice === "камінь" && computerChoice === "ножиці") ||
  (userChoice === "ножиці" && computerChoice === "папір") ||
  (userChoice === "папір" && computerChoice === "камінь")
) {
  alert("Ви виграли!");
} else {
  alert("Комп'ютер виграв!");
}


