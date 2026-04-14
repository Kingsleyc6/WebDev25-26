/* Challenges 4,5, and 6 below task you to transform the following parallel arrays into arrays of JSON
let meat_titles = ["Beef Tips","Brisket","Ribeye","Steak"]
let meat_images = ["beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg"];
let meat_prices = [18.99,27.99,21.99,15.99];

let seafood_titles = ["Clams","Crabs","Lobster","Scallop","Shrimp","Tuna"]
let seafood_images = ["clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg"];
let seafood_prices = [8.99,12.99,30.59,23.95,10.99,5.99];

let dessert_titles = ["Flan","Passion Berry","Oreo Cup"]
let dessert_images = ["flan.jpg","passionberry.jpeg","oreocup.jpg"];
let dessert_prices = [4.15,3.99,2.99];
*/

// Challenge 4: Create an array of JSON where each JSON contains the name, an image source and price for each Meat item.  
// Solution to Challenge 4 is provided below as an example in order to complete Challenges 5 and 6.
let meats = [
  { title: "Beef Tips", image: "beeftips.jpg", price: 18.99 },
  { title: "Brisket", image: "brisket.jpg", price: 27.99 },
  { title: "Ribeye", image: "ribeye.jpg", price: 21.99 },
  { title: "Steak", image: "steak.jpg", price: 15.99 }
];
// Challenge 5: Create an array of JSON where each JSON contains the name, an image source and price for each Seafood item.  


// Challenge 6: Create an array of JSON where each JSON contains the name, an image source and price for each Dessert item.  


function showMeats(){
  let title = document.getElementById("title");
  let output = document.getElementById("output");
  let build = ``;
  /* Challenge 7
     1) Using a 'for' loop and the array of JSON from Challenge 4, produce cards for all the items.
     Make the title a heading(h3), place the image in the middle, and make the price a paragraph.
     2) Change the title to "Meats". 
  */


  output.innerHTML = build;
  // Write the title "Meats" in the div with id 'title'
  title.innerHTML = "Meats";
}

function showSeafood(){
  let title = document.getElementById("title");
  let output = document.getElementById("output");
  let build = ``;
  /* Challenge 8
     1) Using a 'for' loop and the array of JSON from Challenge 5, produce cards for all the items.
     Make the title a heading(h3), place the image in the middle, and make the price a paragraph.   
     2) Change the title to "Seafood".
  */


  output.innerHTML = build;
  // Write the title "Seafood" in the div with id 'title'

}

function showDesserts(){
  let title = document.getElementById("title");
  let output = document.getElementById("output");
  let build = ``;
  /* Challenge 9
     1) Using a 'for' loop and the array of JSON from Challenge 6, produce cards for all the items.
     Make the title a heading(h3), place the image in the middle, and make the price a paragraph.
     2) Change the title to "Desserts".
  */


  output.innerHTML = build;
  // Write the title "Desserts" in the div with id 'title'

}
