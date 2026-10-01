//window.onload is shorthand for
//window.addEventListener("load", ()=>{})

window.onload = () => {
  //document.body is selector to retrieve body html element
  //e is parameter in anonymous arrow function, automatically populated by js
  //contains all information about the event
  //can be called event, can be called eventlistener
  //target showed you what you clicked on
  document.body.addEventListener("click", (e) => {
    console.log(e);
    console.log("document.body was clicked");
    console.log(`${e.clientX}, ${e.clientY}`);
  });

  // ids are good for js
  //any time we have an interaction, using id is best practice
  let textDiv = document.getElementById("text");

  //key presses need to be on document itself
  //if you want specific ket, use e.key parameter
  document.addEventListener("keydown", (e) => {
    console.log("key pressed!");
    console.log(e.key);

    //adding key that was typed to div on page
    textDiv.textContent += e.key;

    if (e.key == " ") {
      textDiv.textContent += "!";
    }
  });
};
