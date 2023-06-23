# _Pizza_

#### By _**Natalie Benjes**_

#### _An application that generates a different price based off of user inputs. Pizza price is dependent on number of toppings selected and size of pizza_

## Technologies Used

* _HTML_
* _JavaScript_

## Description

_This website takes an input from the user returns a price based of what the user selected. The price of pizza increases by a dollar depending on what size the user selects. The price of pizza also increases by 3 dollars if the user selects in between 3 and 4 toppings, or 4 dollars if above 4 toppings._

## Setup/Installation Requirements

* _Download the repository "pizza
" to your device._
* _Open index.html_


## Known Bugs

* _No known bugs_
_If issues with the code are found please contact Natalie Benjes. GitHub username is nataliebenjes_

## Test Driven Development
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

## License

[MIT License](https://opensource.org/licenses/MIT).
Copyright (c) _2023_Natalie Benjes_
