'use strict';

// comments for one line 

/* 
for multible lines of comments

Data types:

-String
is something data instide " " ,' '

-Number
2.3 float, 3 integer 

-boolean
true or flase

*/


// let userName='samer';
// let age =prompt('what\'s your age?');

// console.log(age);
// console.log(typeof age);

// change data type of prompt from string to number

// age = Number(age);

// age = parseInt(age);

// console.log(age);

// console.log('after Number',typeof age );


/* if(condition is true){

    do this
} else{
    do this if ondition is false
}

=== datatype and the value
== value

*/


let answer1 = confirm('Are you ready to rumble?');
if (answer1 === true) {
  console.log('LET\'S GET READY TO RUMBLE!!!');
} else {
  console.log('Oh. Well then.');
}

// let age =0;
// if(age === 21){
//     alert('you are 21');
// }else if(age>18){
//     alert('welcome')
// }else{
//     alert('go away you\'re too young');
// }
// // console.log(age);
// alert(age);



// Switch
/* 

switch(variable){
   case 'value1':
       do code...
       break;
    case 'value2':
        do something else..
        break;

    default:
        do if nothing matches the casses
        break;

    
}

*/

// let mood=confirm('are you good?')
// console.log(mood);

// switch(mood){
//     case true:
//         document.write('have agood day');
//         break;
//     case false:
//         document.write('I hope you get better');
//         break;
// }


let fruit=prompt('what do you want');

switch(fruit.toUpperCase()){
    case 'ORANGE':
        // console.log(fruit.toUpperCase());
        console.log('oranges are 1 dinar a kilo');
        break;
    case 'MELON':
    case 'APPLE':
        console.log('apples and melons are 3 dinar a kilo');
        break;
        
    default:
        console.log('we dont have that sorry');
}

console.log(fruit.toUpperCase());





// logical operator example
let myBool = true;
let anotherBool = false;
let thirdBool = true;

// And = both conditions have to be true
if (myBool && thirdBool) {
  console.log('myBool and thirdBool were both true');
} // only one of these have to be true
else if (myBool || anotherBool) {
  console.log('My bool or anotherBool was true!');
} // only thirdBool can be true
else if (thirdBool) {
  console.log('myBool and anotherBool were false, but thirdBool was true.');
} // none of the above conditions were true
else {
  console.log('Were any of my variables true?');
}

/*
And
true && true => true
true && false => false 
false && true => false
false && false=> false

OR

true || true => true
true || false => true
false || false => false

Git:
VCS 
Local machine

GitHub:
the cloud 
store code and collaberate with other developers
*/ 