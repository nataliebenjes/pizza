//UI logic
window.addEventListener("load", function (){
  document.querySelector("form#new-order").addEventListener("submit", handleFormSubmission);
});

//create global variable
let myPizza = new Pizza();
  
function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedSize = document.querySelector("#size-select").value;
  console.log(inputtedSize);
  const checkboxes = document.getElementsByName('ingredient');
  const inputtedToppings = [];
  for (let i=0; i<checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        inputtedToppings.push(checkboxes[i].value);
    }
  }

  console.log(inputtedToppings);
//in order to recreate an instance of Pizza
  let myPizza = new Pizza(inputtedSize, inputtedToppings);
console.log(myPizza);
console.log(inputtedToppings);
console.log(myPizza.toppings);
  listPrice();
}

function listPrice(priceToDisplay) {
  let orderSummaryDiv = document.querySelector("div#order-summary");
  orderSummaryDiv.innerText = null;
  const ul = document.createElement("ul");
Object.keys(priceToDisplay.myPizza).forEach(function(key);{
  const price = myPizza.determineCost(key);
  const li = document.createElement("li");
  li.append(myPizza.size);
  ul.append(li);
});
  orderSummaryDiv.append(ul);
}


// function displayOrderDetails(pizzaResultsToDisplay) {
//   let orderSummaryDiv = document.querySelector("div#order-summary");
//   orderSummaryDiv = null;
//   const p = document.createElement("p");


// }


//Buisness logic

//adding Pizza constructor:
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
  // this.price = 0
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


