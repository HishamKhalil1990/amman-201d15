'use strict';


let parent=document.getElementById('container');

let button = document.getElementById('btn');
let button2 = document.getElementById('btn2');



button.addEventListener('dblclick',makeParagraph);


button2.addEventListener('dblclick',makeParagraph)


function makeParagraph(){
    let paragraph=document.createElement('p');
    parent.appendChild(paragraph);
    paragraph.textContent='hello from java script';
}


let paragraphElement = document.getElementById('paragraph1');

console.log(paragraphElement.textContent);

// paragraphElement.addEventListener('mouseleave',function(){
//     paragraphElement.textContent='hello there from javascript we changed the text'
// })

paragraphElement.addEventListener('mouseover',function(){
    paragraphElement.textContent='newparagraph'
})
