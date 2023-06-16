//UI logic
window.addEventListener("load", function (){
  document.querySelector("form#new-order").addEventListener("submit", handleFormSubmission);
});

//create global variable
let myPizza = new Pizza();
  
function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedSize = document.querySelector("#size-select").value;
  const checkboxes = document.getElementsByName('ingredient');
  const inputtedToppings = [];
  for (let i=0; i<checkboxes.length; i++) {
    if (checkboxes[i].checked) {
        inputtedToppings.push(checkboxes[i].value);
    }
  }
  //in order to recreate an instance of Pizza
  let myPizza = new Pizza(inputtedSize, inputtedToppings);
  displayPrice(myPizza.determineCost());
}

function displayPrice(price) {
    const priceElement = document.getElementById('price');
    priceElement.textContent = "Price: $" + price;
}




//Buisness logic

//adding Pizza constructor:
function Pizza(size, toppings){
  this.size = size;
  this.toppings = toppings;
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


