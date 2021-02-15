'use strict';


// let omar = {
//     name:'omar',
//     age:26,
//     weight:75,
//     walk:function(){
//         console.log('im walking here...');
//     }

// }

// console.log(omar);

// let nihad = {
//     name:'nihad',
//     age:23,
//     weight:175,
//     walk:function(){
//         console.log('im also walking here...');
//     }

// }

// console.log(nihad);

// camel 
// userNameForStudent


// Pascal:
// User
// Shop
// Car



function Student(name,age,weight){
    this.name=name;
    this.age=age;
    this.weight=weight;

    this.walk=function(){
        console.log('im walking here..');
    }
    
}


let omar = new Student('omar',105,70);
let osama = new Student('osama', 26,80);
let shahd = new Student('shahd',23,65);

let students = [omar,osama,shahd];

// you call methods like this:
omar.walk();



// you can't do this
// Student.walk();

// let nums= [1,2,3,4];
// console.log(nums);

Student.prototype.talk=function(){
    console.log('hello there');
    console.log(this.name);
}

Student.prototype.drive=function(){
    console.log('driving');
}

omar.talk();
osama.talk();

// console.log(omar);
// console.log(osama);
// console.log(shahd);

// console.log(Student.prototype);


// get element by id

let parent = document.getElementById('container');

console.log(parent);

/* 

<table >
<tr>
    <th>
       name
    </th>
    <th>
       age
    </th>
    <th>
    weight
    </th>
</tr>



</table> */

let table = document.createElement('table');

parent.appendChild(table)

let headingRow = document.createElement('tr');

table.appendChild(headingRow);

let nameElement = document.createElement('th');

headingRow.appendChild(nameElement);
nameElement.textContent='name'


let ageElement = document.createElement('th');

headingRow.appendChild(ageElement);
ageElement.textContent='age';



let weightElement = document.createElement('th');

headingRow.appendChild(weightElement);
weightElement.textContent='wight';


for(let i =0; i<students.length;i++){
    let studentRow=document.createElement('tr');
    table.appendChild(studentRow);

    let nameData=document.createElement('td');
    studentRow.appendChild(nameData);
    nameData.textContent=students[i].name;


    let ageData=document.createElement('td');
    studentRow.appendChild(ageData);
    ageData.textContent=students[i].age;


    let weightData=document.createElement('td');
    studentRow.appendChild(weightData);
    weightData.textContent=students[i].weight;


}

