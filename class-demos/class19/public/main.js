//this js will go inside of the makeStatus function in your bot
//your partner will make a request to http://your-ip-address:6001/get-data

//when we are testing it on our own machine, we use http://localhost:6001/get-data

//async and await
async function getData() {
  //url would be partner's ip
  let url = "http://localhost:6001/get-data"; //partners ip address in hw

  let response = await fetch(url); //await -> this needs to be done before proceeding to the rest of the code

  //eg. ordering at a restaurant and food all coming at the same time (dessert might come first)
  //await tells it that dessert only comes after im done with my dinner
  let json = await response.json();
  //what do you want to do with ur partner's data
  // it will use json object if you want to manipulate ur partners stuff
  console.log(json);
}

//call getData inside of the makeStatus function
getData();

//copy this code into bot, call getdata in makestatus function
