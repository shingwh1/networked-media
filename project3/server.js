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

const allProducts = [
  {
    id: 1,
    name: "Flight",
    brand: "Tokay Ultimate",
    price: 141,
    image:
      "https://tokay-ultimate.com/cdn/shop/files/3_dd455650-9cee-4de9-a3ef-32bfd751d958.png?v=1790864150&width=1080",
    description:
      "Built for sharp cuts, quick pivots and long tournament days on grass or turf, with no break-in period needed. Its traction comes from a stud layout that includes a toe stud and an extra heel stud for sprint-stop-restart moves, plus small side studs that add control on tight cuts, especially on turf. For comfort, it has a lightweight build, a breathable fabric upper with a 3D mesh lining, and a wider shape with a higher toe box than typical soccer cleats; it also comes with two insole thicknesses so you can adjust the fit.TOKAY Flight are ultimate frisbee cleats built for sharp cuts, quick pivots, grip, and tournament-day comfort.",
  },
  {
    id: 2,
    name: "Stellar",
    brand: "Tokay Ultimate",
    price: 155,
    image:
      "https://tokay-ultimate.com/cdn/shop/files/stellar-ultimate-cleats-metal-blue-both-top.png?v=1791296469&width=1080",
    description:
      "The Stellar was built to improve on the Flight with more power, stability and control on every cut. The reinforced midfoot and a structured forefoot for a more explosive push-off. The sole is stiffer through the stride but still flexible in torsion for natural cuts, and wider heel studs, a wide outsole and a reinforced heel cup give a stable base when you plant hard. It has wide toe room and a secure heel, and it adds a more supportive double-layer TPU-and-mesh upper and a sock collar for ankle protection.",
  },
  {
    id: 3,
    name: "Helia Elite",
    brand: "IDA",
    price: 155,
    image:
      "https://www.idasports.com/cdn/shop/files/IDA-Helia-Elite-FG-pur-1.jpg?v=1776729233&width=1080",
    description:
      "The IDA Helia Elite is a women’s soccer cleat for firm ground and artificial grass, shaped from the upper to the soleplate specifically for the female foot, and IDA calls it their lightest cleat yet. Its WAVEKNIT+ upper pairs a lightweight, breathable mesh with a knit collar for a secure, sock-like fit and better touch on the ball. The soleplate has flex zones placed where the foot naturally bends, which helps with powerful push-offs, and its shorter, rounded studs grip well for quick pivots on both natural grass and 3G turf.",
  },
  {
    id: 4,
    name: "FreezeLX v5",
    brand: "New Balance",
    price: 140,
    image:
      "https://nb.scene7.com/is/image/NB/freezwt5_nb_02_i?$dw_detail_main_lg$&bgc=f1f1f1&layer=1&bgcolor=f1f1f1&blendMode=mult&scale=10&wid=1600&hei=1600",
    description:
      "The New Balance FreezeLX v5 is a unisex lacrosse cleat weighing 12.7 oz (360.6 g). Its updated traction plate is built for lacrosse-specific movement: QUIXRAIL technology grips during quick lateral cuts, and a TPU molded outsole provides traction on both turf and grass while helping you rotate and release out of cuts faster. For support and durability, it has an external heel counter that locks the heel in on lateral cuts, an inner bootie for a snug fit, a synthetic and engineered mesh upper, and a plate with an improved bond to the upper so it lasts through full seasons.",
  },
  {
    id: 5,
    name: "FreezeLX v4",
    brand: "New Balance",
    price: 120,
    image:
      "https://topstringlacrosse.com/cdn/shop/files/new-balance-freeze-4-le-unity-of-sport-lacrosse-cleats-left.jpg?v=1728833464&width=2048",
    description:
      "The New Balance FreezeLX v4 Low is a unisex low-cut lacrosse cleat weighing 9.7 oz (274 g). For traction, its QUIX outsole grips during quick cutting movements, and its TPU molded cleat plate works on both turf and natural grass. A lightweight synthetic and mesh upper, a hybrid tongue for added support, and adjustable laces give it a comfortable, light-on-your-feet fit.",
  },
  {
    id: 6,
    name: "Adizero Impact II",
    brand: "Adidas",
    price: 110,
    image:
      "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/7c570e80d9b1449882739ed879e8fa14_9366/Adizero_Impact_II_Football_Cleats_Black_JQ1390_01_00_standard.jpg",
    description:
      "The New BThe adidas Adizero Impact II is a speed-focused football cleat. For performance, its Future of Agility Plate maximizes contact with the ground for sharp cuts, and Repetitor foam gives lightweight, responsive cushioning to help you cut, pivot and accelerate quickly. Flex zones above the instep aid agility, while a sock construction with a lace closure gives a snug, secure fit.alance FreezeLX The adidas Adizero Impact II is a speed-focused football cleat. For performance, its Future of Agility Plate maximizes contact with the ground for sharp cuts, and Repetitor foam gives lightweight, responsive cushioning to help you cut, pivot and accelerate quickly. Flex zones above the instep aid agility, while a sock construction with a lace closure gives a snug, secure fit.v5 is a unisex lacrosse cleat weighing 12.7 oz (360.6 g). Its updated traction plate is built for lacrosse-specific movement: QUIXRAIL technology grips during quick lateral cuts, and a TPU molded outsole provides traction on both turf and grass while helping you rotate and release out of cuts faster. For support and durability, it has an external heel counter that locks the heel in on lateral cuts, an inner bootie for a snug fit, a synthetic and engineered mesh upper, and a plate with an improved bond to the upper so it lasts through full seasons.",
  },
  {
    id: 7,
    name: "BurnX5",
    brand: "New Balance",
    price: 120,
    image:
      "https://www.lacrosseunlimited.com/cdn/shop/files/2017389.png?v=1772117230&width=1920",
    description:
      "The New Balance BurnX5 is a lacrosse cleat weighing 12.3 oz (349 g). It was designed to be lightweight with a snug, cinched-up fit for a faster feel that helps you separate from defenders, and its TPU molded cleat outsole provides traction on both turf and natural grass. A straight eye row with webbing locks down the midfoot when you lace up, while an engineered mesh upper adds breathability and durability.",
  },
  {
    id: 8,
    name: "United Tiempo Maestro Academy",
    brand: "Nike",
    price: 95,
    image:
      "https://static.nike.com/a/images/t_web_pdp_936_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/3fad2df6-ff6c-4f6a-bb1e-c535c51fc106/TIEMPO+MAESTRO+ACAD+SG-PRO+AC.png",
    description:
      "The Nike United Tiempo Maestro Academy is a low-top, multi-ground soccer cleat designed for ball control. Its main feature is a lightweight FlyTouch engineered leather upper that gives a soft, consistent touch in wet or dry conditions and moulds to your foot, working with a knit tongue for a secure fit. For traction on natural and artificial grass, bladed studs at the heel and forefoot help you sprint, while twisted conical studs help you plant and pivot quickly.",
  },
];
//for every new njk file we need app.get
//response.render always goes inside app.get OR appp.post
app.get("/", (request, response) => {
  //regular home page rendering
  response.render("home.njk");
});

app.get("/about", (request, response) => {
  response.render("about.njk");
});

app.get("/catalog", (request, response) => {
  response.render("catalog.njk", { products: allProducts });
});

app.get("/credits", (request, response) => {
  response.render("credits.njk", { messagesArrayFromServer: allData });
});

app.get("/add-your-experience", (request, response) => {
  response.render("addYourExperience.njk", { products: allProducts });
});

app.get("/catalog/:id", (request, response) => {
  // 1. read the id from the URL
  const productId = Number(request.params.id);

  // 2. find the matching product in the array
  const product = allProducts.find((item) => item.id === productId);

  const productExperiences = allData.filter(
    (entry) => Number(entry.productId) === productId,
  );

  response.render("product.njk", {
    product: product,
    experiences: productExperiences,
  });
});

//for every form, we need an app.post
app.post("/send-message", (request, response) => {
  //this action will handle:
  //1. storing the date from the form on the server (in array)
  console.log(request.body);
  allData.push(request.body);
  //2. redirect to where we want the data to be displayed
  response.redirect("/catalog/" + request.body.productId);
});

//ALWAYS GOES LAST
app.listen(8080, () => {
  // now listening for requests like addEventListener
  console.log("http://localhost:8080");
});

//public holds assets (images), frontend js (anything that mentions DOM), css files
// using templating files insted of html
