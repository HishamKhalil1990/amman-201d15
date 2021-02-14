'use strict'

/* 
human
properties:
name: mohammed
age: 25

methods:
eat: function
sleep:function



phone

model:
height:
RAM:


methods:
calling:
taking pictures:




*/

let human= ['omar', 25,'student',['mansaf','mjaddrah','pasta'],75];

// object literal:

let omar = {
    name:'omar',
    age:25,
    job:'student',
    weight:75,
    height:180,
    likes:['mansaf','mjaddrah','pasta'],
    talk:function(){
        console.log(`hi my name is ${this.name} im ${this.age} nice to meet you`);
    },
    whatIsThis: function () {
        console.log('this',this);
    },

    jobDiscreption:{
        title:'senior developer',
        experience:1000,
        salary:750,
    },
    addWeight: function () {
        console.log(this.height+this.weight);
    }


}

// console.log(omar);

// accessing properties:
// dot notation
// console.log(omar.age);

// bracket notation
// console.log(omar['job']);
// talk()
// omar.talk();

// omar.whatIsThis()


// console.log(typeof omar);
// console.log(Math);
// console.log(omar.jobDiscreption.title);
// console.log(omar.likes);

// for(let i =0 ; i<omar.likes.length;i++){
//     console.log(omar.likes[i]);
// }
// console.log(omar);
// console.log(this);

// console.log('before',omar);


// add a new property:
// omar.deslikes=['read assignments','waking up early','math'];

// console.log('after',omar);

// const car={
//     name:'bmw',
// }

 // you cant do this with const
// car = 25

// but you can change properties
// car.age=25;
// car.drive = function () {
//     console.log('move');
// }
// console.log(car);
// console.log(car.drive());
// car.drive()

// deleting a property:
// delete car.age;
// console.log(car);

// omar.logInfo= function () {
//     console.log(`Hi my name is ${this.name} and my age is ${this.age}`);
// }
// // console.log(this);
// omar.logInfo();


// omar.addWeight()

// change value of property:
// omar.height=250;
// console.log(omar.height);



// DOM:

console.log(document);
// document.write('<h3>'+ 'hello'+ '</h3>')

// console.log(document.getElementById('parent'));



// get the parent tag
let parent =document.getElementById('parent');

console.log(parent);

// create the child elemnt
let child =document.createElement('p');
console.log(child);


// append child to parent
parent.appendChild(child);

// give text content
child.textContent='hello from javascript';


// create list

let unorderedList = document.createElement('ul');

parent.appendChild(unorderedList);


for(let i =0 ; i<omar.likes.length;i++){
    // console.log(omar.likes[i]);

    // create element
    let listItem = document.createElement('li');
    // append to parent
    unorderedList.appendChild(listItem);

    // give text content
    listItem.textContent=omar.likes[i]
}




// shop
// min customers
// max customers
// avg cookies

// random number function ( min,max)
// customers each hour => [ , , , , , , ,]

// multiply each custmoer per hour with avg

// avg cookies sold per hour => [ , , , , , ]


// render