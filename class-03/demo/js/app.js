'use strict';

/*
If statement:

if (condition){
    do this stuff
}else if(anotherCondition){

    do this other things
}else{
    do the last
}


Switch statment
switch(variable){
   case 'value1':
       do this thing
       break;
    case 'value2:
        do these other things
        break;
    default:
        do the last thing
}


comparision operators:

== value
=== value and datatype
> 
<
!= not equal value
!== not equal value and datatype
>=
<=

'samer' === 'ahmad' => false

logical operators

And 
&&
the only its true if both are true


OR
||

the only its false when BOTH are false

NOT
!a
!true => false

truthy:

true
1
'car'
5/2
'true'
'false'
'0'


falsy:

flase
0
'' 
'string'/2

*/


// let userName=prompt('whats your name?');
// let anotherUser=''
// if(userName || anotherUser){
//     alert('hello '+userName);
// }

/*
LOOPS
why:for repeating some code 



for loop:
if yoy know how many times you want to loop


for(intialiazation ; condition ; update){

    do stuff
}
intialiazation: let i=0;
condition: i<=10;
update: i++;

example of decrement
intialiazation: let i=10;
condition: i>=0;
update: i--;


while:
if you don't know how many times you'll loop through and run the code

while(condition){

    the code
}
*/



// let userName=prompt('whats your name?');


// while(!userName){
//  userName=prompt('please input name')
// }

// for(let i=0;i<=5;i++){
//     // if (i==1) {
//         //     break;
//         // }
//     // if (i==2) {
//     //     continue;
//     // }
//     console.log(i);
// }

// let car;

// console.log(car);


// DO WHILE LOOP:
// let i =0;
// do{
//     console.log(i);
//     i++
// }while(i<1)



// let grade1=50;
// let grade2=20;

/*
Arrays:

let grades = [50,100,89,66,22,33]

*/
// let grades = [50,100,89,66,22,33,100];

// console.log('whole array',grades);
// console.log('first index',grades[0]);
// console.log('fifth index',grades[5]);

// // length will show you the number of elemnts in the array
// console.log('length of array',grades.length);


// // to add at the end of the array
// grades.push(77)
// console.log(grades);

// console.log('length of array after pushing',grades.length);

// to remove an element from the end
// grades.pop()

// console.log(grades);

// console.log('length of array after removing',grades.length);

// i want to know the index of an element in my array
// let index= grades.indexOf(89);
// console.log('index',index);

// let info=['mohammad',40,'tall',true,['walking','playing football','watching movies']];

// console.log(info[4][1]);
// console.log(typeof Array.isArray(grades));



////////////////////////////////////////
// ########  DEMO  ######

alert('welcome to my page');


let score =0;



let userName=prompt('whats your name?');

while (!userName) {
    userName=prompt('please input value');
}

if (userName !== 'mohammed') {
    alert('too bad youre not mohammed');
}

alert('hello ' + userName + ' glad to have you here');

let answer=prompt('is my favourtie food pasta','answer with yes or no');

console.log(answer);

if (answer.toLowerCase()==='yes') {
    alert('good job');
    score++
}else{
    alert('no thats wrong');

}

console.log(score);

let food=['mansaf','burger','steak','zeit w za\'ater'];

for(let i =0; i<food.length;i++){
    // let anotherFood='pizza';

    console.log(food[i]);
}

// console.log(anotherFood);

let question2=prompt('do pigs fly');

if (question2.toLowerCase()==='no'||question2.toLowerCase()==='n') {
    score++
    // score =score+1
    alert('good job')
    
}else{
    alert('wrong')
}
console.log(score);

alert('score is ' + score);

