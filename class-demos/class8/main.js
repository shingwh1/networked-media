// this is a comment

alert("javascript!");
// shows a popup like when you reload an unsaved page
// alert always happen when the page loads

console.log("log this info into the console");

// window = the browser window
//shorthand for waiting for webpage to load
//setup in p5, all our code should go inside of the window.onload
//things that you want to happen on the webpage
window.onload = () => {
  console.log("page has loaded");

  //global variables
  let colors = ["#360568", "#5b2a86", "#7758ac", "#9ac6c5", "#a5c6ba"];

  //get element by id
  //retrieves SINGLE js element using an ID
  //annoying to type this over and over, make it a variable to make life easier
  let mainElement = document.getElementById("main");
  mainElement.style.color = "blue"; //js changes superceeds changes in css file
  console.log(mainElement);

  //query selector -> select the FIRST, SINGLE element using css selector/css tag
  //retrieves the first element in the webpage
  //use exact css selector name
  let firstParagraph = document.querySelector("p"); //this would grab the first paragraph
  let blueParagraph = document.querySelector(".blue");
  document.querySelector("#main");

  firstParagraph.textContent = "I have updated the text with js";
  blueParagraph.style.backgroundColor = "navy"; //camelcase no dash

  //query selector for ID works the same as getElementById
  let containerDiv = document.querySelector("#blue-div");
  for (let i = 0; i < 60; i++) {
    // creating element on webpage:
    //1. delcare what type of element we are creating
    let newSpan = document.createElement("span"); //references html -> create span in html
    //2. modify the element/content
    newSpan.textContent = "new span";
    newSpan.classList.add('all-spans')
    //generate a random color
    let c = Math.floor(Math.random() * colors.length); //multiply by numbers we want; floor rounds the number down for integer
    newSpan.style.backgroundColor = colors[c];
    //3. add the created element to the page
    //anywhere on bottom of html: document.body
    //in specific container: select thst element -> we did in containerDiv
    containerDiv.appendChild(newSpan);
  }

  //set interval is built into js
  //2 parameters:
  //1. callback
  //2. amount of time in ms

  let rotation = 0
  setInterval(()=>{
    console.log('2 seconds have passed')
    //two ways to retrieve all elements of class
    //document.getElementsbyClassName('all-spans')
    let allSpans = document.querySelectorAll('.all-spans')
    console.log(allSpans)
    //shorthand for let s =0; s<allSpans.length; s++)
    //for s of allspans instead of in because it's an array
    for (let s of allSpans){
        //` (backtick)is above tab and next to 1
        s.style.transform = `rotate(${rotation}deg)` //backtick lets u put variable in string $ is string literal
        rotation++
        console.log(s.style.transform)
    }

  },2000)
  //you could also do (function() {},2000)
  //or (intervalFunction, 2000)
};

//helper functions go after window.onload{}
//function intervalFunction(){}

//order of priority
// html -> what shows up on the website/structure
// css -> styling of what shows up on the website
// js -> anything that changes based on interaction goes in here

//anything that uses {} is object, properties are in the object
//access propety in object -> use  object name.property

//anything that has document is referring to the html code
//document.getElementById('') → grabs a single element using the id attribute
//document.querySelector('')→ returns a single element that first matches the CSS selector string.
//document.getElementsByClassName('')→ grabs many elements using the class. This also returns an array instead of an individual item. We typically do not do this.
//document.querySelectorAll('') → returns many elements that match the CSS selector string.
