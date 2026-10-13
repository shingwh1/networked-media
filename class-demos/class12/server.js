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

//ROUTES
//locations that we can send and receive information from server

//when we get request from slash route
//GET (first-server, callback function) - what happens when we receive request on first-server
app.get("/first-server", (request, response) => {
  //send info to client that makes request to /first-server
  response.send("this is my first server");
});

//LAST THING TO ALWAYS ADD
//port, callback function
//waiting for server to receive request at URL (first-server)

//to start server, node server.js in terminal
app.listen(8080, () => {
  console.log("http://127.0.0.1:8080/");
});
