'use strict';
/*
//!Selecting Elements
console.log(document.documentElement); //selects body and head
console.log(document.head); //head only
console.log(document.body); //body only

const header = document.querySelector('.header'); //know this already
//creates a nodelist of all the sectioons
const allSections = document.querySelectorAll('.section');
console.log(allSections);

//HTMlCollections
//These are live and gets updated automatically if there's a change in the html elements.Note that nodelists are not live and do not get updated automatically
document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
console.log(document.getElementsByClassName('btn'));

//!Creating and Inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookied Blah blah. <button class="btn btn--close-cookie">Got it!</button>';
header.prepend(message); //first child
header.append(message); //last child
// header.append(message.cloneNode(true)); clones it and then appending
// header.before(message);
// header.after(message);

//!Deleting elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.parentElement.removeChild(message);before ES5 i guess})
    message.remove();
  });

//!Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
console.log(message.style.color); //won't work as hidden under class
console.log(message.style.backgroundColor); //will work as inline style?
//gives everything in the page for the 'message' element
console.log(getComputedStyle(message).paddingTop);
console.log(getComputedStyle(message).color);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';
//Using set property. This is mandatory for setting properties of custom css properties. but can also be used for others, e.g. color and background color
document.documentElement.style.setProperty('--color-primary', 'orangered');
// message.style.setProperty('backgroundColor', '#37383d');doesn;t work

//!Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

//Non-standard attributes dont work
console.log(logo.student);
console.log(logo.getAttribute('designer')); //so read with this

//changing the alt
logo.alt = 'Beautiful minimalist logo';

//creating non-standard attribute and giving value to it
logo.setAttribute('teacher', 'Jonas');

console.log(logo.getAttribute('src')); //gets the relative(index.html)source
console.log(logo.src); //gets the absolute(browser)source

//Data Attributes
console.log(logo.dataset.versionNumber);

//!mouseenter event and cancelling event handlers
const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('This will execute once and then the event will cancel');
  h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);
console.log('Commenting');

//!Generating Random rgb colour and Capturing,Target,Bubbling of events
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomRGB = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(
  0,
  255
)})`;
console.log(randomRGB);
//for the rest watch the video!
console.log('too tired');
console.log('too tired');
console.log('too tired');
console.log('too tired');
//!DOM traversing
const h1 = document.querySelector('h1');

//Going downwards:child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); //gives everything under h1
console.log(h1.children); //only html elements in livehtml collctn
console.log(h1.firstElementChild);
console.log(h1.lastElementChild);

//going upwards
console.log(h1.parentNode);
console.log(h1.parentElement);

//closest method?
//It is opposite of query selector. While queryselector finds a child of a parent based on the'.query_string',closest follows the same procedure but to find the parent of the child.
console.log(h1.closest('.header'));

//Sideways:Siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
//for nodes
console.log(h1.nextSibling);
console.log(h1.previousSibling);
//trick for all siblings
console.log(h1.parentElement.children);
*/
