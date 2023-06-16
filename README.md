Describe: Pizza()

Test: "It should return a Pizza object with two properties for toppings and size"
Code: const myPizza = new Pizza("medium", ["anchovies", "pineapple"]);
Expected Output: Pizza { toppings: size: "medium" ["anchovies", "pineapple"], }

Describe: Pizza.prototype.cost();

Test: "It should return a Pizza object with one property for cost depending on the inputs for toppings and size"
Code: const myPizza = new Pizza("small", ["cheese", "pepp", "moose"])
myPizza.determineCost();
Expected output myPizza.determineCost();  
13;


