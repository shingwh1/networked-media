const express = require("express");
const multer = require("multer");
const nedb = require("@seald-io/nedb");
const nunjucks = require("nunjucks");

//new, import cookie parser library
const cookieParser = require("cookie-parser");

const app = express();
const upload = multer({
  dest: "public/uploads",
});
const database = new nedb({
  filename: "database.db",
  autoload: true,
});

nunjucks.configure("views", {
  autoescape: true,
  express: app,
  noCache: true,
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "njk");
//adding middleware to parse cookies
//let us access cookie property of request
//allows request.cookies -> similar to request.body
app.use(cookieParser());

app.get("/", (req, res) => {
  //tracking how many times a user has looked at a webpage
  //has user been here before?

  //local variable to track number of visits
  let totalVisits = 1;

  if (req.cookies.visits) {
    //if ts cookie exists
    let convertToNumber = parseInt(req.cookie.visits); //takes string value, gets it as number
    totalVisits = convertToNumber + 1;
  }

  //create cookie using response param
  //sends cookie back to client
  //3 parameters:
  //1. name of cookie in string format
  //2.the value of the cookie (totalVisits)
  //3. object of the cookie attribute that are passed into the header
  // date just has to be in the future
  res.cookie("visits", totalVisits, {
    expires: new Date(Date.now() + 100 * 365 * 24 * 60 * 60 * 1000),
  });

  //send data back to frontend
  res.render("home.njk", { serverData: totalVisits });
});

app.listen(6005, () => {
  console.log(`http://localhost:6005`);
});
