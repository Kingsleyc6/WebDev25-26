/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/ 

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftip.jpg", "brisket.jpg","ribeye.jpg", "steak.jpg"];
let meat_prices = [8.99 , 10.99, 11.99, 12.99];
let meat_titles = ["Beef Tip", "Brisket", "Rib Eye", "Steak"];

let seafood_images = ["clams.jpg", "crabs.jpg", "lobster.jpg", "scallops.jpg", "shrimp.jpg", "tuna.jpg" ];
let seafood_prices = [11.99, 12.99, 18.99, 11.99, 9.99, 20.99];
let seafood_titles = ["Clam", "Carb", "Lobster", "Scallops", "Shrimp","Tuna"];

let dessert_images = ["flan.jpg", "oreocup.jpg", "passionberry.jpeg"];
let dessert_prices = [4.99, 5.99, 4.99];
let dessert_titles = ["Flan", "Oreocup", "Passionberry"];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;

  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
  for(let index =0; < meat_images.length; index++){
    build += `<div class="card">
                <h3>${meat_titles[index]}</h3>

  }
  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.

  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.

  }
