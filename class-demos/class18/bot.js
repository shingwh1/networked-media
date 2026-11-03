//imports .env variables so we don't put passwords in our js files
require("dotenv").config();

//set up mastodon library
const m = require("masto");

//setting up masto variable to connect to:
//1. url (our mastodon server)
//2. Token
const masto = m.createRestAPIClient({
  url: "https://networked-media.itp.io/",
  accessToken: process.env.TOKEN,
});

//write a function that creates a status for us
// async -> hey this is making request to something externally
//await -> make sure the external request happens before we do anything in our code
async function makeStatus(text) {
  const status = await masto.v1.statuses.create({
    status: text,
    // change visibility to public when project is ready to run
    visibility: "private",
  });
}

//interval to use this function
//pick random emoji, make a post with this random emoji
setInterval(() => {
  //array of emojis to select
  let emoji = ["😭", "🤩", "💖"];

  //randomly generate number within list
  let rand = Math.floor(Math.random() * emoji.length);

  //select an emoji from the array using random index
  let post = emoji[rand];

  //make our status with an emoji
  makeStatus(post);
}, 5000); //interval happens every five seconds
