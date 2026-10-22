// all the libraries we are importing
//npm install express nunjucks
const express = require("express");
const nunjucks = require("nunjucks");
// nunjucks templating library -> allows us to use template tools

const app = express();
//creating server application that uses express
//app is express server that uses express library variables

//MIDDLEWARE -> between app starting and receiving requests
// settings for server happening between when server runs and when it receives request
//all css and frontend js will go in public folder
app.use(express.static("public")); // all static assets (frontend)lk, go into public folder

//allows us to use request.body (below)
//allows us to process post requests
//if we have app.post we NEED this line
app.use(express.urlencoded({ extended: true }));

/************
 * add our nunjucks settings under our middleware
 * this links our express application to the templating tool (views folder)
 ************/
//more settings for njk file
//views are where all njk files live because that's what we configured
nunjucks.configure("views", {
  autoescape: true, //injects things correctly
  express: app,
});
app.set("view engine", "njk"); //hey express, letting u know that ur using templating tool
//u gotta tell nunjucks and express about each other (handshake)

//NEW store data on our server using array variables
let allData = [];

//for every new njk file we need app.get
//response.render always goes inside app.get OR appp.post
app.get("/", (request, response) => {
  //regular home page rendering
  response.render("home.njk");
});

app.get("/form", (request, response) => {
  response.render("form.njk");
});

//display all my data on my array
app.get("/viewAll", (request, response) => {
  //optional second param in response.render: data from server
  //always an object
  response.render("viewAll.njk", { messagesArrayFromServer: allData });
});

//for every form, we need an app.post
app.post("/send-message", (request, response) => {
  //this action will handle:
  //1. storing the date from the form on the server (in array)
  console.log(request.body);
  allData.push(request.body);
  //2. redirect to where we want the data to be displayed
  reponse.redirect("/viewAll");
});

//ALWAYS GOES LAST
app.listen(8080, () => {
  // now listening for requests like addEventListener
  console.log("http://localhost:8080");
});

//public holds assets (images), frontend js (anything that mentions DOM), css files
// using templating files insted of html
