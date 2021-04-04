'use strict';



// review




let userscore = 0;


let guessAnOption = 'Name a Programming Language taught at Code Fellows';
let answers = ['java', 'javascript', 'c#', 'c-sharp', 'c sharp', 'python'];
let response = null
let attempts = 6;

// ************with label*********

// hasAttempts:while (attempts) {

//    response = prompt(guessAnOption + '. You have ' + attempts + ' left.').toLowerCase();
//     attempts -= 1;

//     for (let i = 0; i < answers.length; i++) {
//       if (response === answers[i]) {
//         alert('That is correct. here are all answers!\n'+answers);
//         userscore += 1;
//         break hasAttempts;
//       }
//     }

//     alert('Sorry that is incorrect.');
//   }
//   if (!attempts) {
//       alert('you ran out of tries here are the answers\n '+ answers)
//   }




// without label 
for (let j = 0; j < 6; j++) {

    response = prompt(guessAnOption + '. You have ' + attempts + ' left.').toLowerCase();
    attempts -= 1;

    for (let i = 0; i < answers.length; i++) {
        if (response === answers[i]) {
            alert('That is correct. Thanks for playing!');
            alert('here are the correct asnwers ' + answers);
            userscore += 1;
            // break hasAttempts;
            j = 6;
        }
    }
    console.log(j);
    if (j == 5) {
        alert('sorry no more tries ' + answers);
    } else if (j < 6) {
        alert('Sorry that is incorrect.');
    }
}















// function declaration 

// function welcomeMessage(){
//     alert('hello to our page');
// }

// welcomeMessage();

// let userInput = prompt('whats your name?');

// console.log(userInput);

// function getName(userName){
//     let output = 'hello '+ userName;
//     return output;
// }
// console.log(getName(userInput)); 
// console.log(getName('ahmad')); 
// console.log(getName('haneen')); 
// console.log(getName('shahd')); 
// console.log(getName('balqees')); 



// function square(length) {
//     let area = length **2;
//     let paremiter = length * 4;

//     return [area,paremiter];
//     // Math.pow(length,2)
//     // length^2 
// }
// let output =square(5)
// // log the full value
// console.log(output);

// // log the first item
// console.log(output[0]);

// console.log(sumArray(9,10)[1]);
// function sumArray(num1,num2) {
//     let output = num1+num2;
//     return[output,num1,num2];
// }



/////////////////
// Function expression
// you cant call it before declaraing
// alert(getAge(1990));

// let getAge = function (year) {
//     let output = 2021 -year;
//     return output
// }
// alert(getAge(2001));


// someFunctio()
// var someFunctio = function () {
//     alert('hello')
// }



// welcomeMessage()
// function welcomeMessage(){
//     alert('hello to our page');
// }
// let welcomeMessage =function(){
//     alert('hello to our page');
// }

// welcomeMessage()


// Immediatly invoked functions
// for (let i = 0; i < 5; i++) {
//     (function () {
//         console.log(('goobye'));
//     })();

// }

// (function () {
//         console.log(('goobye'));
//     })();

// (function  (userName) {
//     console.log(('goobye '+userName));
// })('ahmad');


// console.log(car);

// var car = 'bmw';

//////////////////////////////
// SCOPES

// Global variable can be used anywhere

// let firstName ='ahmad';

// function fullName() {
//     // local varibales
//     // var welcome= 'hello'
//     let firstName='othman';
//     alert(firstName);

// }
// console.log(welcome);

// console.log(firstName);
// fullName()

// for (let i = 0; i <3; i++) {
//     let welcome='hello'
//     console.log(i);   
// }
// console.log(welcome);


// function declaration

// console.log(welcomeMessage('samer'));

// function welcomeMessage(userName) {
//     let output = 'hello ' + userName
//    return output
// }
// console.log(welcomeMessage('duha'));


// function expressions

// let userAge = prompt('whats your age')
// let getAge = function (year) {
//     let output = 2021-year;

//     return output;

// }

// console.log(getAge(userAge));

// console.log(getAge(2001));


// I I F

// (function (user) {
//     console.log('hello ' + user);
// })('duha')

// global scope
// let firstName = 'omar ';

// function welcome() {
//     // loacl scope
//     let lastName = 'ramdan'
//     alert(firstName + lastName)
// }

// // console.log(lastName);
// welcome();

// let age = 22;
// let userName;

// if (age<50) {
//     // age = 33
//     userName='shad';
//     alert('wow '+userName+' so young')
// }
// console.log('outside if',userName);
// // console.log(userName);
