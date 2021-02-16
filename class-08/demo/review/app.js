'use strict';

// constructor function:

// we use it to not copy objects that has the same properties

let workers = [];

function Employee(userName, userSalary, position, experience) {
    this.name = userName;
    this.salary = userSalary;
    this.position = position;
    this.experience = experience;
    //    this.listOfWorkers=[this];
    console.log(this);
    workers.push(this);

}




Employee.prototype.work = function () {
    // console.log(this.name+' does this ..type type type...' + this.salary);
}


let qusai = new Employee('Qusai', 1500, 'senior developer', 8);

// console.log(qusai);

qusai.work();



let raneem = new Employee('Raneem', 25200, 'CEO', 150);
let mohammed = new Employee('mohammed', 25200, 'CEO', 150);
// console.log(raneem);



raneem.work()

// let workers2=[qusai,raneem,mohammed];

// console.log('wrokers2 ', workers2);
// console.log('workers', workers);
// console.log(qusai.name);
// for(let i = 0 ; i<workers.length;i++){
//    console.log(workers[i].name); 
// }

// Dom


let parent = document.getElementById('parent');

console.log(parent);

let table = document.createElement('table');
parent.appendChild(table);

// make header

let headerRow = document.createElement('tr');

table.append(headerRow);

let th1 = document.createElement('th')

headerRow.appendChild(th1);

th1.textContent = ' Name';


let th2 = document.createElement('th');

headerRow.appendChild(th2);

th2.textContent = ' Salary';


for (let i = 0; i < workers.length; i++) {
    // console.log(workers[i]);
    let dataRow = document.createElement('tr');
    table.appendChild(dataRow);

    for (let j = 0; j < 2; j++) {
        let td1 = document.createElement('td');

        dataRow.appendChild(td1);

        if (j==0) {
            td1.textContent=workers[i].name
        }else{
            td1.textContent=workers[i].salary
        }
    }

    // let td1= document.createElement('td');

    // dataRow.appendChild(td1);

    // td1.textContent = workers[i].name

    // let td2= document.createElement('td');

    // dataRow.appendChild(td2);

    // td2.textContent = workers[i].salary


}

