// this builds off of class-18-demo
// we are adding the fetch request in our interval function

require("dotenv").config();

const m = require("masto");

const masto = m.createRestAPIClient({
  url: "https://networked-media.itp.io/",
  accessToken: process.env.TOKEN,
});

async function makeStatus(text) {
  const status = await masto.v1.statuses.create({
    status: text,
    // TODO: change visability to public when project ready to run
    visibility: "public",
  });
}

//randomizer helper function
function pickRandom(array) {
  return array[Math.floor(Math.random() * array.length)];
}

setInterval(async () => {
  // TODO: ADD API REQUEST

  // change localhost to your partner's droplet IP (their server must be running)
  // if needed, change the port (6003) to match your partner's app.listen in *their* server.js
  let url = "http://159.223.155.121:6001/get-data"; //lisa's databse
  //if you go to the url on the web it gives the database
  let now = new Date();
  let hour = now.getHours();

  if (hour >= 1 && hour < 4) {
    console.log("I am sleeping. Come back later ฅ≽^•⩊•^≼ฅ");
  } else {
    let response = await fetch(url);
    let json = await response.json();
    console.log(json);
    // what do you want to do with your partner's data?
    //     it will use the json variable for any manipulation
    // console.log(json)
    let names = [];
    let actions = [];

    for (let i = 0; i < json.length; i++) {
      names.push(json[i].name);
      actions.push(json[i].action);
    }

    let template = pickRandom(actions);
    let name1 = pickRandom(names);
    let name2 = pickRandom(names);
    while (name2 === name1 && names.length > 1) {
      name2 = pickRandom(names);
    }

    // TODO: SELECT ITEM FROM JSON AND MANIPULATE IT FOR YOUR BOT
    //    the json is an array, so you will need to select a specific item from it
    //    and whatever property you would like to access.
    //    likely, you will need to test your partner's data and see how they format it
    let post = template.replaceAll("{1}", name1).replaceAll("{2}", name2);

    console.log(post);
    //json variable is the array

    // make our status
    makeStatus(post);
  }

  // TODO: CHANGE 5000ms TO YOUR SPECIFIC INTERVAL; 5 second interval
  //whatever interval you want at 5 seconds
  //updated bot.js and env file has to go into cyberduck -> one way to get it visible is "show hidden files
  //right click in vs code, reveal in finder

  //rules in the server
  //5 posts per hour/ 1 every 12 minutes
  //sleeping time
  //name drop students
}, 900000); //this is 15 minutes
