const express = require("express");
/************
 * import our templating library
 ************/
const nunjucks = require("nunjucks");
// nunjucks templating library -> allows us to use template tools

const app = express();
//creating server application that uses express

//all css and frontend js will go in public folder
app.use(express.static("public"));
//allows us to use request.body (below)
app.use(express.urlencoded({ extended: true }));

/************
 * add our nunjucks settings under our middleware
 * this links our express application to the templating tool (views folder)
 ************/
nunjucks.configure("views", {
  autoescape: true, //injects things correctly
  express: app,
});
app.set("view engine", "njk"); //hey express, letting u know that ur using templating tool
//u gotta tell nunjucks and express about each other (handshake)

///////// POST FIRE ALARM NOTES
app.get("/", (request, response) => {
  // response.render accepts 2 parameters:
  // 1: the name of the njk file
  // 2: a javascript object. the properties you pass into this object are the variables that you use in the .njk files
  // serverData is the name of the variable we used in baseLayout.njk
  response.render("baseLayout.njk", {
    serverData: "text from my server!!!",

    // so if we want the page to populate the template with different information based on the route
    //do we make a app.get + response.render and link it to the same .njk file but have different information in severData?)
  });
});

//like this??
app.get("/firstpage", (request, response) => {
  response.render("baseLayout.njk", {
    serverData: "first page information!",
  });
});

app.listen(8080, () => {
  // to run the server:
  // 1. make sure you are in the correct folder
  // if you type pwd it should print out the path to class_14_demo
  // if it does not show class_14_demo, you need to navigate to the folder using cd
  // 2. in terminal use the starting command: node --watch server.js
  // another way to do this is to add a script in package.json (go to that file and look at line 8)
  console.log("http://localhost:8080");
});

//public holds assets (images), frontend js (anything that mentions DOM), css files
// using templating files insted of html
