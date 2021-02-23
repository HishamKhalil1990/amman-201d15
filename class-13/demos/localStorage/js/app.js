'use strict';

// target our order form from the html
var orderForm = document.getElementById('orderForm');
var orders = document.getElementById('orders');

// let normalObject = {name:'mohammed',
// age:24,

// weight:100}
// console.log('normal',normalObject);

// console.log('stringfy',JSON.stringify(normalObject));


// constructor function to create a basic drink
function Coffee(name, size, milk, isHot, drinkType){
  this.name = name;
  this.size = size;
  this.isHot = isHot;
  this.drinkType = drinkType;
  this.milk = milk;

  // add every drink that gets created into an array
  Coffee.drinks.push(this);
  // console.log('not from local',Coffee.drinks);

  settingItems();

}

// Coffee.prototype.drinking=function () {
//   console.log('drinking');
// }

// set the array to empty
Coffee.drinks = [];


// function for setting items:
function settingItems() {
  
  // console.log(JSON);
  
  let data = JSON.stringify(Coffee.drinks);
  // console.log(data);
  
  localStorage.setItem('coffee',data);

}  

function gettingItems() {
  // console.log( );

 let stringObject= localStorage.getItem('coffee');

//  console.log(stringObject);
  let normalObject=JSON.parse(stringObject);
  // console.log(noramlObject);
   if ( normalObject!== null) {
     Coffee.drinks=normalObject;
    //  console.log('comingfrom local',normalObject);
   }

  renderOrders();


 
}


// event handler function to run everytime the form is submitted
function handleSubmit(event){
  event.preventDefault();
  console.log(event.target);

  // get all the values from the form
  var drink = event.target;
  var name = drink.name.value;
  var size = drink.size.value;
  var isHot = drink.isHot.value;
  var dType  = drink.drinkType.value;
  var milk = drink.milk.value; 

  new Coffee(name, size, milk, isHot, dType);

  // update the previous orders with the new order
  renderOrders();

}


function renderOrders(){
  // clear all my current uls to prevent duplicate information
  orders.textContent = "";

  // go through the array and output the details of each drink in the array
  for(var i=0; i < Coffee.drinks.length; i++){
    var drinkLI = document.createElement('li');
    var infoP = document.createElement('p');
    var temp;
    if(Coffee.drinks[i].isHot === 'on'){
      temp = 'cold';
    } else{
      temp = 'hot';
    }
    infoP.textContent = `${Coffee.drinks[i].name} orderd a ${temp} ${Coffee.drinks[i].size} ${Coffee.drinks[i].drinkType} with ${Coffee.drinks[i].milk}`;
    drinkLI.appendChild(infoP);
    orders.appendChild(drinkLI);
  }
}

// Add an event listener to the submit button
orderForm.addEventListener('submit', handleSubmit)



gettingItems();