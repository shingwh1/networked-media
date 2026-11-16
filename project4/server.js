// this is building off of class-19-demo
// the only difference is adding njk
const express = require("express");
const nunjucks = require("nunjucks");
let nedb = require("@seald-io/nedb");

const app = express();
let database = new nedb({
  filename: "mydatabase.db",
  autoload: true,
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
nunjucks.configure("views", {
  autoescape: true,
  express: app,
});
app.set("view engine", "njk");

app.get("/", (req, res) => {
  res.render("form.njk");
  //you can modify the njk files if you wanna add more submission stuff/fields
});

app.post("/add-data", (req, res) => {
  let dataToBeAdded = {
    //if you want extra data to be stored, you have to add them to the object
    name: req.body.studentName,
    action: req.body.action,
    number: req.body.count,
    location: req.body.location,
    timestamp: Date.now(),
  };
  //if u wanna delete shit just delete it in the .db file

  database.insert(dataToBeAdded, (error, newData) => {
    if (error) {
      console.log(error);
      res.send("error, data was not added");
    } else {
      console.log(newData);
      res.send("data added successfully");
    }
  });
});

app.get("/get-data", (request, response) => {
  let query = {};
  database.find(query, (error, retrievedData) => {
    console.log(retrievedData);
    response.json(retrievedData);
  });
});

app.listen(6004, () => {
  console.log("http://localhost:6004");
});
