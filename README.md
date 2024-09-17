# The Hairy Potter

In this project, your task to build a workflow for making, and firing pottery, and then determining if it should be sold at a craft show. Then you will display the pottery to be sold in the DOM.

> 🧨 Make sure you answer the vocabulary and understanding questions at the end of this document before notifying your coaches that you are done with the project

## Setup

```sh
cd hairy-potter
cd src
code .
```

1. Run the `serve` command to start the web server.
1. Open the URL provided by `serve` in your browser.

## Requirements

### Making Pottery at the Wheel

1. Create a `scripts/PotteryWheel.js` module.
1. Define a variable in the module to have the value of the primary key for each piece of pottery. It should have an initial value of 1.
1. Define and export a function named `makePottery`.
1. The `makePottery` function must accept the following values as input _(i.e. it needs parameters)_, in the following order.
   1. Shape of the piece of pottery (e.g. "Mug", "Platter")
   1. Weight of the piece (e.g. 1, 5)
   1. Height of the piece (e.g. 3, 7)
1. The `makePottery` function must return an object with the following properties on it.
   1. `shape`
   1. `weight`
   1. `height`
   1. `id` _(increment this value each time the function is invoked)_

#### Checking Your Work

In the `main.js` module, invoke the `makePottery` function and provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the object.

Once you have it working, make 5 pieces of pottery in `main.js`.

**THEN PUSH YOUR CODE TO GITHUB**

### Firing the Pottery in the Kiln

1. Define a `scripts/Kiln.js` module.
1. Define and export a function named `firePottery` that is responsible for acting as a kiln.
1. The function must accept the following values as input _(i.e. it needs parameters)_, in the following order. If you don't remember, you can easily [add new properties to objects in JavaScript](https://www.dyn-web.com/tutorials/object-literal/properties.php).
   1. An object representing a piece of pottery that was made at the wheel in the `makePottery` function.
   1. A number specifying the firing temperature of the kiln.
1. The function must add a new property of `fired` with the value of `true` to the object.
1. The function must add a new property of `cracked` to the object.
   1. If the temperature of the kiln is above 2200 degrees then `cracked` property must have a value of `true`.
   1. If the temperature of the kiln is at, or below, 2200 degrees then `cracked` property must have a value of `false`.
1. After both of the new properties have been added, return the augmented object.

#### Checking Your Work

In the `main.js` module, invoke the `firePottery` function for each of the 5 pieces of pottery you created. Ensure you provide the required values as arguments. Store the object that gets returned into a variable, and then use `console.log()` to view the objects and make sure it has the right properties on each.

To check your work, make sure that at least one of your pieces of pottery is fired at a temperature that is too high.

**THEN PUSH YOUR CODE TO GITHUB**

### Pricing Uncracked Pottery

1. Create a `scripts/PotteryCatalog.js` module.
1. Define a variable in the module with a value of an empty array. This array will store pottery that will be sold. Do not export this array.
1. Define and export a function named `toSellOrNotToSell` that is responsible for determining if a piece of pottery should be sold.
1. The `toSellOrNotToSell` function must accept a pottery object as input.
1. If the weight of the piece of pottery is greater than, or equal to, 6 then the function must add a `price` property with a value of 40.
1. If the weight of the piece of pottery is less than 6 then the function must add a `price` property with a value of 20.
1. If the piece of pottery is cracked, do not add a `price` property to it.
1. If the pottery is **not** cracked, add the object to the module-level array of items to be sold.
1. Return the augmented object.
1. Define and export a function named `usePottery` returns a copy of the array of items to be sold. Recall which array method creates a copy of the array.

#### Checking Your Work

In the `main.js` module, invoke the `toSellOrNotToSell` function for each of the 5 pieces of pottery you created. Ensure you provide the required value as an argument.

**THEN PUSH YOUR CODE TO GITHUB**

### Display the Catalog

Your next task is to create HTML representations of the pottery you want to sell at the craft fair and display them on the DOM. Then you will track which ones you sell.

#### Define DOM Target

1. Create an `<article>` element in the `index.html` file.
1. The article element must have a class of `potteryList`.

#### Create Pottery HTML

1. Create a `scripts/PotteryList.js` module.
1. Define and export a `PotteryList` function.
1. The `PotteryList` function must get the items to be sold from the `PotteryCatalog.js` module.
1. The `PotteryList` function must convert each object in the array to an HTML representation string. Use the following template to generate the representations.
   ```html
   <section class="pottery" id="pottery--1">
     <h2 class="pottery__shape">Mug</h2>
     <div class="pottery__properties">
       Item weighs 3 grams and is 6 cm in height
     </div>
     <div class="pottery__price">Price is $20</div>
   </section>
   ```
1. The `PotteryList` function must then return a single string that contains ALL of the pottery HTML representation.

#### Checking Your Work

In the `main.js` module, invoke the `PotteryList` component function. Take its return value and update the inner HTML of the article element you created above. When you start your web server, you should see your non-cracked pottery list appear (_example below_).

![example output](./src/images/pottery.png)

**THEN PUSH YOUR CODE TO GITHUB**


## Vocabulary and Understanding

> 🧨 Before you click the "Assessment Complete" button on the Learning Platform, add your answers below for each question and make a commit. It is your option to request a face-to-face meeting with a coach for a vocabulary review.

1. Explain how you got the HTML, with the correct data, displayed in the browser?
   > Your answer here: So first and foremost the usePottery function is invoked in the main.js which just returns a copy of the array of objects we will actually be selling. This is relevant because on line 39 the newPotteryHTML is initialized to be equal to the value of the potteryListHTML function, because it is invoked. Looking at the potteryListHTML, it creates a potteryHTML variable and sets it to be equal to a blank string. The reason behind this is so when the variable is initialized, the computer know what data type will be passed into that variable. It then runs a for loop which is pot of usePottery, the copy array of items we'll be selling from earlier. It then adds the lines of HTML to the potteryHTML initialized at the beginning of the function, and since it's in a for of loop, it iterates over every key of every object in the array. The concatenated string is then returned to the newPotteryHTML variable that is initialized in the main, because it is set to the value of the function, which returns the variable potteryHTML. Next on line 40 of the main file, potteryArticle is set to all documents with the class of "potteryList" as that's what .getElementsByClass does. However, this is returned as a group of HTML elements, even if it is only one class with that name. I learned this the hard way. So after some research I learned it is basically returning a array of HTML elements, so i used bracket notation and 0 to index the first thing returned in the group because there was only one item. I set that element that is returned to potteryArticle, and then on line 41, I used .innerHTML which basically just changes the dom of whatevever it is attached to, to whatever you set it to. So in this instance it's saying "I am going to change the HTML of the first article with the class "potteryList" (it's ony the first one because of the bracket notation used before). I then sat that element property equal to newPotteryHTML which is the value of potteryListHTML. So, in shorter terms, the string of HTML that is returned from potteryListHTML is put directly into the DOM of the index.html by using the element property .innerHTML on the article with the class "potteryList".
2. In the **PotteryList** module, when you iterate your pottery, you need to show the evidence of what the **weight** property's value is for the 2nd piece of pottery. Use [Loom](https://www.loom.com/) to record your browser window with the developer tools open and show those values.
   > Paste your video's public URL here - https://www.loom.com/share/9cef3ee32ad44fe395f89061e922bc8c?sid=3c04f624-dc0c-458a-86bc-de7b3385cbc6
3. The **PotteryWheel** module has a single function named `makePottery`. Why doesn't that module have all of the other code in it?
   > The primaryKey variable is declared outside of this function, although it serves it's purpose still if declared in the functions scope and incremented the same as it being declared in the global scope becuase it's value is set to a key and then pushed to the objects we're creating. However, the array pottery must be declared in the global scope so when the function returns the the "createdPottery" objects to that array, it is able to be used else where if need be. The reason you have to have it in the global scope for that is because anything within the functions scope cannot be accessed outside the function unless it is returned.
4. The pottery shop has learned that there is a set of customers that are willing to buy cracked pottery at a discounted price of $2.50. That means that the cracked pottery should now be displayed in the catalog. Explain the changes that this new business strategy would cause to your algorithm.
   > To make this change I would remove the if statement that checks if the crack key is equal to true and ends the function, and turn the final else function that checks if the wait is anything less then 6 into an if else statement so it doesn't end the if statement. Then I would just add the final if statement and have it check for cracks (by doing if (pot.cracked === true){pot.price = 2.50}) which will check if the objects key cracked is true, and will add the price key to that object with a value of 2.50. I set my function up in a way to every item that gets past the first if statement will get pushed to the forSale array so no further changes should be needed.
5. In the **Kiln** module, you have a `firePottery()` function. You need to demonstrate how to use the debugger to verify the values of the parameters for that function when your code runs. Use [Loom](https://www.loom.com/) to record your browser window with the developer tools open and show those values.
   > (https://www.loom.com/share/0257167c25114f2cbc48390ccf7a5b7a?sid=74d82a93-4b98-4f7b-bd21-3b2401de7b61)
