window.onload = () => {
  //darkness overlay
  function isEven(n) {
    return n % 2 == 0;
  }

  function time() {
    // what is the difference between var and let?
    let today = new Date();
    let h = today.getHours();

    //lights turning on or off
    let darkness = document.getElementById("darkness");
    if (h > 21 || h < 7) {
      console.log("night time!");
      darkness.style.backgroundColor = "rgba(23, 35, 54, 0.8)";
    } else {
      console.log("day time!");
      darkness.style.backgroundColor = "rgba(255, 255, 255, 0)";
    }

    let m = today.getMinutes();
    let s = today.getSeconds();

    // odd even ticker
    // if (isEven(s)) {
    //   console.log("even!");
    // } else {
    //   console.log("odd!");
    // }

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("clock").innerHTML = h + ":" + m + ":" + s;

    let t = setTimeout(time, 500);
  }
  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  time();
};
