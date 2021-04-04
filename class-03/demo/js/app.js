'use strict';

/*
read assignment should be submitted with
-live url
-repo link
-text

dont ask questions for TAs on slack during labtime
you can send a message for a TA on REMO if its a small question
please dont feel shy to ask and request for help


good news:

from now on we will end at 5:00 pm to have enough time to buy stuff

but also the TAs will leave at 5
ask on slack after that on the CLASS CHANNEL



new rules for lab time:

I expect all of you to stay in the remo until 5

if you are absent on remo the Ta's will send you a message if you dont respond the first half an hour you will be set as late

if you dont respond for an hour you will be as absent
even if you attended the lecture the lab time is just as important

also when they come to your room and ask you something and you
dont respond they will do the same thing

now if you have issues or any urgent condition please send a message
for me or a TA

and finally
DONT leave the meeting when you think that you finished the lab
after you finish the learning journal, read and the lab ask for a TA to come check your work and then they can tell you if you can leave




*/





// review file structure



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

10=='10' true
10==='10' false
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


// let userName=''
// if(userName){
//     alert('its truthy');
// }else{
    // alert('its falsy')
// }

/*
LOOPS
why:for repeating some code 



for loop:
if yoy know how many times you want to loop


for(intialiazation ; condition ; update){

    do stuff
}
increment:
intialiazation: let i=0;
condition: i<=10;
update: i++;

for(let i =0;i<5;i++){
    console.log(i);
}

example of decrement
intialiazation: let i=10;
condition: i>=0;
update: i--;

for(let i =5; i>0; i--){
    console.log(i);
}




// break: to stop the loop
// continue: to skip this iteration

// for(let i=0;i<=5;i++){
//     // if (i==1) {
//         //     break;
//         // }
//     // if (i==2) {
//     //     continue;
//     // }
//     console.log(i);
// }


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

//******  length will show you the number of elemnts in the array

// console.log('length of array',grades.length);


// ******* to add at the end of the array:

// grades.push(77)
// console.log(grades);

// console.log('length of array after pushing',grades.length);

// **********to remove an element from the end
// grades.pop()

// console.log(grades);

// console.log('length of array after removing',grades.length);

//*******  i want to know the index of an element in my array
// let index= grades.indexOf(89);
// console.log('index',index);


// elements in arrays can be any datatype
// let info=['mohammad',40,'tall',true,['walking','playing football','watching movies']];

// access an elemnt of an array inside an array
// console.log(info[4][1]);
// console.log(typeof Array.isArray(grades));



////////////////////////////////////////
// ########  DEMO  ######

/* to do list:
1) make sure the user name is not empty ( not a falsy value)

2)ask the user 2 yes or no questions the user can answer with yes/y or no/n

3)keep track of the score of the user and display it at the end add 1 point when the user answers correctly

4) show in the console these foods in order 'burger','steak','pizza','mansaf'
*/


alert('welcome to my page');


let score =0;



let userName=prompt('whats your name?');

while (!userName) {
    userName=prompt('please input value');
}

// if (userName !== 'mohammed') {
//     alert('too bad youre not mohammed');
// }

alert('hello ' + userName + ' glad to have you here');

let answer=prompt('is my favourtie food pasta','answer with yes or no');

console.log(answer);

if (answer.toLowerCase()==='yes') {
    alert('good job');
    score++
     // score =score+1
}else{
    alert('no thats wrong');

}

console.log(score);

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


// logging favourite food

let food=['mansaf','burger','steak','zeit w za\'ater'];

for(let i =0; i<food.length;i++){
    // let anotherFood='pizza';

    console.log(food[i]);
}

