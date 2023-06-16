//UI logic
window.addEventListener("load", function (){
  document.querySelector("form#new-order").addEventListener("submit", handleFormSubmission);
});

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedSize = document.querySelector("input#size-select").value;
  const checkboxes = document.querySelectorAll(".checkbox-input").value;
  console.log(checkboxes);
  const inputtedToppings = [];
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      inputtedToppings.push(checkbox.value);
    }
  })
  console.log(inputtedToppings);
//in order to recreate an instance of Pizza
  let myPizza = new Pizza(inputtedSize, inputtedToppings);
  displayOrderDetails(myPizza);
  // document.querySelector("input#size-select").value = null;
  // document.querySelector(".checkbox-input").value = null;
}

function displayOrderDetails(event) {
  const contact = addressBook.findContact(event.target.id);
  document.querySelector(".selected-toppings").innerText = myPizza.toppings;
  document.querySelector(".selected-size").innerText = myPizza.size;
  document.querySelector(".order-total").innerText = myPizza.determineCost();
  document.querySelector("div#order-summary").removeAttribute("class");
}


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