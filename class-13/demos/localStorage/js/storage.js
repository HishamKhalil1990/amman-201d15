'use strict';


console.log(localStorage);


// addinng item to local storage
localStorage.setItem('name','shahed');
localStorage.setItem('age',24);


// get an item from local storage
console.log(localStorage.getItem('age')); 


localStorage.setItem('name','abdulhalem');


// removing an item
localStorage.removeItem('age');

// console.log(localStorage['name']);

// clear everything from local storage
localStorage.clear()
