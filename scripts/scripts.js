//UI logic
window.addEventListener("load", function (){
  document.querySelector("form#new-order").addEventListener("submit", handleFormSubmission);
  document.querySelector("div#contacts").addEventListener("click", displayOrderDetails);
});

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedSize = document.querySelector("input#size-select").value;
  const inputtedToppings = document.querySelectorAll(".checkbox-input").value;
//in order to recreate an instance of Pizza
  let myPizza = new Pizza(inputtedSize, inputtedToppings);

}

//in order to recreate an instance of Pizza
let myPizza = new Pizza("small", ["cheese", "pepp", "moose"]);

//Buisness logic

//adding Pizza constructor:
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  this.price = 0;
}

//function to determine cost based off properties of Pizza
Pizza.prototype.determineCost = function(){
  let sizeFactor = 0;
  let toppingFactor = 0;
  if (this.size = "small") {
    sizeFactor = 1;
  } else if (this.size = "medium") {
    sizeFactor = 1.5;
  } else if (this.size = "large") {
    sizeFactor = 1.75;
  }

  if (this.toppings.length < 3) {
    toppingFactor = 1;
  } else if (this.toppings.length >= 3 && this.toppings.length <= 4) {
    toppingFactor = 3;
  } else if (this.toppings.length > 4) {
    toppingFactor = 5;
  }
  return 10 * sizeFactor + toppingFactor;
}