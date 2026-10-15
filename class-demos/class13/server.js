//importing express library to use it as our server
//naming conventions -> usually name the variable the library name
const express = require("express");

//initialize our application using express
const app = express();

//middleware
//settings that our app needs to know about our servers

//allows us to access frontend with GET requests by default
app.use(express.static("public")); // serves our frontend html that exists in the public folder
//allows us to access the body of a post request
app.use(express.urlencoded({ extended: true }));

// all of above with be in all server files 4EVER

//ROUTES -> all url pages we want accessible
//locations that we can send and receive information from server
//need app.get for every page

//when we get request from slash route
//GET (first-server, callback function) - what happens when we receive request on first-server
//syntax for GET: app.get(route, anonymous function)
//similar to document.addEventListener("eventName", (e)=>{})

app.get("/first-server", (request, response) => {
  //send info to client that makes request to /first-server
  response.send("this is my first server");
});

app.get("/", (request, response) => {
  //response will contain all information we send back from the server to the client
  console.log("received a reqeust at / route!");
  //we always need to have a response or the page will continuously load
  response.send("this is some <em>data!</em>"); //u can put html in the text
});

//POST looks exactly the same and will handle the form data
app.post("/form-upload", (request, response) => {
  //console.log in server js only shows up in terminal because it is a different console than one in browser
  //request.body retrieves the data from the form
  console.log(request.body);
  //send the client to a different route
  response.redirect("/");
});

//LAST THING TO ALWAYS ADD
//port, callback function
//waiting for server to receive request at URL (first-server)

//to start server, node server.js in terminal
app.listen(8080, () => {
  console.log("restarted the server!");
  console.log("http://127.0.0.1:8080/");
});

//likely to do a lot
//making server js, node --watch server.js, npm install
