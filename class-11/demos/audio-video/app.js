'use strict';

let randmoizer = document.getElementById('randomizer');


randmoizer.addEventListener('click',randomize);

function randomize(event) {
    let audioElement =document.getElementById('levees');

    audioElement.volume=Math.random();
    // 0=>1
    // 0.0 =>1.0
    
    console.log(audioElement.volume);
   
    
}