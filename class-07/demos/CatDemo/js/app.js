// problem domain: the Seattle Kitten Rescue has tons of kittens who need good homes. One of the best ways to reach prospective adoptive homes is to have profiles for each kitten available on a website. There are hundreds of kittens, though, and only a few volunteers; it's too time-consuming to hand-code each kitten's profile on their website. They need a better way.

// Each kitten's profile should have:
// - name
// - random age assigned
// - a list of what they like
// - an image
// good with kids
// good with dogs
// good with other cats
// breed

// TODO: dynamically generate kitten objects using form data

'use strict';


///////constructor function
// name:'frankie',
//   age:0,
//   likes:['napping','cuddiling','eating'],
//   isGoodWithKids:true,
//   isGoodWithDogs:false,
//   isGoodWithOtherCats:true,



function random (min,max){
  return Math.floor( Math.random()*(max-min+1)+min);
}


function Kitten(name,intrests,isGoodWithKids,isGoodWithDogs,isGoodWithOtherCats){

  this.name = name;
  this.age=this.getAge();
  this.intrests=intrests;
  this.isGoodWithKids = isGoodWithKids;
  this.isGoodWithDogs = isGoodWithDogs;
  this.isGoodWithOtherCats = isGoodWithOtherCats

}

Kitten.prototype.getAge= function(){
  this.age = random(3,12) + ' months'
}

Kitten.prototype.sound=function () {
  console.log('meooow');
}



let frankie = new Kitten('frankie', ['napping','cuddiling','eating'],true,false,true);

let serena = new Kitten('serena', ['playing','climbing','sitting on laps'],true,false,false)

frankie.getAge()
frankie.sound()
console.log(frankie);

serena.getAge()
console.log(serena);


Kitten.prototype.render=function () {
  const parentElement = document.getElementById('kittenProfiles');

  const article = document.createElement('article');
  parentElement.appendChild(article);

  const h2 = document.createElement('h2');
  h2.textContent = this.name;
  article.appendChild(h2);

  const p = document.createElement('p');
  p.textContent = this.name + ' is adorable, and is ' + this.age + ' old.';
  article.appendChild(p);

  const ul = document.createElement('ul');
  article.appendChild(ul);

  for (let i = 0; i < this.intrests.length; i++) {
    const li = document.createElement('li');
    li.textContent = this.intrests[i];
    ul.appendChild(li);
  }
  const img = document.createElement('img');
  img.setAttribute('src', 'images/' + this.name + '.jpeg');
  img.setAttribute('alt', 'cute picture of ' + this.name + ', You should really adopt him.');
  article.appendChild(img);



  //create table:
  let tableElement= document.createElement('table');
  parentElement.appendChild(tableElement)
  console.log(parentElement);

  let headerRow = document.createElement('tr');
  tableElement.appendChild(headerRow)

  let th1 = document.createElement('th');
  headerRow.appendChild(th1);
  th1.textContent = 'good with Kids';


  let th2 = document.createElement('th');
  headerRow.appendChild(th2);
  th2.textContent = 'good with Dogs';

  
  let th3 = document.createElement('th');
  headerRow.appendChild(th3);
  th3.textContent = 'good with Cats';



  // make row for values

  let dataRow = document.createElement('tr');
  tableElement.appendChild(dataRow);

  // create table data:

  let td1 = document.createElement('td');
  dataRow.appendChild(td1);
  td1.textContent = this.isGoodWithKids;

  let td2 = document.createElement('td');
  dataRow.appendChild(td2);
  td2.textContent = this.isGoodWithDogs;


  let td3 = document.createElement('td');
  dataRow.appendChild(td3);
  td3.textContent = this.isGoodWithOtherCats;



}


frankie.render()
serena.render()