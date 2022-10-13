// Week 2 Day 1: Javascript Total Recall (this is found in W3D2 folder on canvas)



/* 
I. Variables & Datatypes

To answer these questions, you can add them in a multiline comment section inside of script.js
like this:
1. How do we assign a value to a variable? A. With the assignment operator
2. How do we change the value of a...
*/



/*
A. Q + A

1. How do we assign a value to a variable?
    Using the key words, var, let, or const.
    ex) let x = 5

2. How do we change the value of a variable?
    First, the variable must be name with 'let or 'var'. 
    Const variables cannot be changed.
    ex) let x = 5
    x = 10 will change the value of x

3. How do we assign an existing variable to a new variable?
    Using another keyword, remember to look at the scope of each variable.
    ex)let x = 5
    let y = x 
    so both x and y will equal to 5 

4. Remind me, what are declare, assign, and define?
    Declaring - you are naming a variable, using let,const, or var
    Assigning - you assign a value to a variable using the = operator, it can be a string, number, boolean, object
    Define - when a variable is assigned a value, the variable is defined. If the variable does not contain a value, the variable is undefined.

5. What is pseudocoding and why should you do it?
    Pseudocoding is coding in an informal language, but not in a specific programming language. It is used in order to get ideas/concepts/logic/algothrims on the editor, before actual hardcoding the program. Pseudocode summarizes a program's flow, but excludes underlying details.

6. What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
    There can be multiple ways/solutions to solve a problem, so I would take time to figure out what type of method you want to first try, then start typing and using trial and error. It also depends on the complexity of the problem, but breaking down the question into smaller parts before typing out the code can be helpful.
*/



/*
B. Strings
For all other questions that involve writing code, you can solve them via the following instructions.

1. Create a variable called firstVariable
2. Assign it the value of the string "Hello World"
3. Change the value of this variable to some number
4. Store the value of firstVariable in a new variable called secondVariable
5. Change the value of secondVariableto any string.
6. What is the value of firstVariable?
7. Create a variable called yourName and set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourName so that it returns a new string with them concatenated.
ex: Hello, my name is Jean Valjean
*/

// let firstVariable = "Hello World"
// firstVariable = 20
// let secondVariable = firstVariable
// secondVariable = "another string"
// console.log(firstVariable) // prints: 20
// const yourName = "Kathleen"
// console.log("Hello my name is " + yourName)



/* 
C. Booleans
Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print true to the console.
const a = 4;
*/

  // const a = 4;
  // const b = 53;
  // const c = 57;
  // const d = 16;
  // const e = 'Kevin';

  // console.log(a < b);
  // console.log(c > d);
  // console.log('Name' === 'Name');
  // // FOR THE NEXT TWO, USE ONLY && OR ||
  // console.log(true || false);
  // console.log(false && false && false && false && false || true);
  // console.log(false === false)
  // console.log(e === 'Kevin');
  // console.log(a + b === c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
  // console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
  // console.log(48 == '48');



/*
D. The farm
1. Declare a variable animal. Set it to be either "cow" or something else
2. Write code that will print out "mooooo" if the it is equal to cow
3. Change your code so that if the variable animal is anything other than a cow, it will print "Hey! You're not a cow."
4. Commit
*/

// let animal = "cow"
// if (animal === "cow") {
//     console.log("mooooo")
// } else {
//     console.log("Hey! You're not a cow.")
// }



/*
E. Driver's Ed
1. Make a variable that holds a person's age; be semantic
2. Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."
*/

// let age = 21
// if (age >= 16) {
//     console.log("Here are the keys!")
// } else {
//     console.log("Sorry, you're too young.")
// }



/*
II. Loops
Remember: USE let when you initialize your for loops!
This is GOOD: for(let i = 0; i < 100; i++)
This is NO GOOD: for(i = 0; i < 100; i++)
*/



/*
A. The basics
1. Write a loop that will print out all the numbers from 0 to 10, inclusive
2. Write a loop that will print out all the numbers from 10 up to and including 400
3. Write a loop that will print out every third number starting with 12 and going no higher than 4000
*/

// //1.
// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// //2.
// for (let i = 10; i >= 10 && i <= 400; i++) {
//     console.log(i)
// }

// //3.
// for (let i = 12; i < 4000; i += 3) {
//         console.log(i)
// }



/*
B. Get even
1. Print out the numbers that are within the range of 1 - 100
2. Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
*/

// for (i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " is an even number")
//     } else {
//         console.log(i)
//     }
// }



/*
C. Give me Five
1. For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
Example Output:
I found a 5. High five!
I found a 10. High five!

2. Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
Example Output:
I found a 3. Three is a crowd
I found a 5. High five!
I found a 6. Three is a crowd
I found a 9. Three is a crowd
I found a 10. High five!

3. For numbers divisible by both three and five, be sure your code prints both messages
*/

// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0 && i % 3 != 0) {
//         console.log("I found a "+ i + ". High five!")
//     } else if (i % 3 === 0 && i % 5 != 0) {
//         console.log("I found a " + i + ". Three is a crowd")
//     } else if (i % 3 === 0 && i % 5 === 0) {
//         console.log ("I found a "+ i + ". High five! " + "I found a " + i + ". Three is a crowd")
//     }
// }



/*
D. Savings account
Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
Check your work! Your bank_account should have $55 in it.

You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
Check your work! Your bank_account should have $10,100 in it.
*/

// let bank_account = 0
// for (let i = 1; i <= 10; i++) {
//     bank_account = bank_account + i
//     //bank_account += i (this is another way to type above expression)
// } 
// console.log(bank_account) //prints: 55

// bank_account = 0
// for (let i = 1; i <= 100; i++) {
//     bank_account = bank_account + (2 * i) 
// }
// console.log(bank_account) //prints: 10100



/*
II. Arrays & Control flow

A. Talk about it:
1. What are the things in an array called?
    Elements, which all have an index number
2. Do Arrays guarantee those things will be in order?
    Yes, because they are organized by index
3. What real-life thing could you model with an array?
    Storing your phone contacts, Logging your daily routine, any list that needs an order
*/



/*
B. Easy Does It
1. Create an array that contains three quotes and store it in a variable called quotes
*/

// let quotes = ["Just do it", "Don't worry, be happy", "You never fail until you stop trying"]




/*
C. Accessing elements
Given the following array const randomThings = [1, 10, "Hello", true]

1. How do you access the 1st element in the array?
2. Change the value of "Hello"to "World"
3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
*/

// const randomThings = [1, 10, "Hello", true]
// //1. 
// console.log(randomThings[0])
// //2.
// randomThings[2] = "World"
// //3.
// console.log(randomThings)



/*
D. Change values
Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

1. What would you write to access the 3rd element of the array?
2. Change the value of "Github" to "Octocat"
3. Add a new element, "Cloud City" to the array
*/

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// //1.
// console.log(ourClass[2])
// //2. 
// ourClass[4] = "Octocat"
// console.log(ourClass)
// //3.
// ourClass.push("Cloud City")
// console.log(ourClass)



/*
E. Mix It Up
Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.

Given the following array: const myArray = [5, 10, 500, 20]

1. Add the string "Aegon" to the end of the array. Add another string of your choice to the end of the array.
2. Remove the 5 from the beginning of the array.
3. Add the string "Bob Marley"to the beginning of the array.
4. Remove the string of your choice from the end of the array.
5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
*/

// const myArray = [5, 10, 500, 20]
// //1.
// myArray.push("Ageon", "another string")
// console.log(myArray)
// //2. 
// myArray.shift()
// console.log(myArray)
// //3.
// myArray.unshift("Bob Marley")
// console.log(myArray)
// //4.
// myArray.pop()
// console.log(myArray)
// //5.
// myArray.reverse() 
// console.log(myArray)
// //The array was mutated and the elements order changed in reverse.



/*
F. Biggie Smalls
Create a variable that contains an integer.

Write an if ... else statement that:

1. console.log()s "little number" if the number is entered is less than 100
2. console.log()s big numberif the number is greater than or equal to 100.
*/

// let int = 5
// if (int < 100) {
//     console.log("little number")
// } else if (int >= 100) {
//     console.log("big number")
// }



/*
G. Monkey in the Middle
Write an if ... else if ... elsestatement:

1. console.log()little number if the number entered is less than 5.
2. If the number entered is more than 10, log big number.
3. Otherwise, log "monkey".
*/

// let num = 5
// if (num < 5) {
//     console.log("little number")
// } else if (num > 10) {
//     console.log("big number")
// } else {
//     console.log("monkey")
// }



/*
H. What's in Your Closet?
Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.
*/
const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "GA hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];
/*
1. What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirts array.
5. In the same way, access one item from Thom's pants array.
6. Access one item from Thom's accessories array.
7. Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas
*/

// //1.
// console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")
// //2.
// kristynsCloset.splice(6, 0, "raybans")
// console.log(kristynsCloset)
// //3.
// kristynsCloset.splice(5, 1, "stained knit hat")
// console.log(kristynsCloset)
// //4.
// console.log(thomsCloset[0][0])
// //5.
// console.log(thomsCloset[1][0])
// //6.
// console.log(thomsCloset[2][0])
// //7.
// console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][0]}, and ${thomsCloset[2][0]}.`)
// //8.
// thomsCloset[1].splice(2, 1, "Footie Pajamas")
// console.log(thomsCloset)



/*
IV. Functions

A. printGreeting
Do you think you could write a function called printGreeting with a parameter name that returns a greeting with the argument interpolated into the greeting? Like so?
console.log(printGreeting("Slimer"));
You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.
*/

// function printGreeting(name) {
//     console.log(`Hello ${name}!`)
// }
// printGreeting("Slimer")



/*
B. printCool
Write a function printCool that accepts one parameter, name as an argument. The function should print the name and a message saying that that person is cool.
console.log(printCool("Captain Reynolds")); => "Captain Reynolds is cool";
*/

// const printCool = (name) => {
//     console.log(`${name} is cool!`)
// }
// printCool("Captain Reynolds")



/*
C. calculateCube
Write a function calculateCube that takes a single number and prints the volume of a cube made from that number.
console.log(calculateCube(5)); => 125
*/

// const calculateCube = (num) => {
//     console.log(Math.pow(num, 3))
// }
// calculateCube(5)



/*
D. isVowel
Write a function isVowel that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.
console.log(isVowel("a")); => true
*/

// let isVowel = (character) => {
//     let lowerChar = character.toLowerCase()
//     if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(isVowel("a")) //prints: true
// console.log(isVowel("E")) //prints: true
// console.log(isVowel("b")) //prints: false
// console.log(isVowel("H")) //prints: false



/*
E. getTwoLengths
Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.
console.log(getTwoLengths("Hank", "Hippopopalous")); => [4, 13]
*/

// function getTwoLengths (strOne, strTwo) {
//     return [strOne.length, strTwo.length]
// }
// console.log(getTwoLengths("Hank", "Hippopopalous"))



/*
F. getMultipleLengths
Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.
console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"])); => [5, 4, 2, 2, 4]
*/

// function getMultipleLengths(arr) {
//     let resultArray=[]

//     arr.forEach (
//       function(str) {
//         resultArray.push(str.length)
// })

//     return resultArray
// }
// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]))


