
// 1. How do we assign a value to a variable? 
// A. With the assignment operator
// 2. How do we change the value of a.variable? 
// a. way of changing a value of a variable is simply to reassign it.
// 3. How do we assign an existing variable to a new variable?
// example let numberofCats = 4; numberofCats = 5;
// 4.what are declare, assign, and define?
// A.declare use var (in older programs),let,const
// assign using the assignment operator
// define a variable to give variable a value
// What is pseudocoding and why should you do it?
// pseudocoding is to use plain language to describe what the code is doing.it helps to think a problem and devise a plan for solving it.
// What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
// spend over half the time planning(60% the )the time should be spent on solving


// Strings//
// ////let firstVariable ="Hello World";
// firstVariable = 32;
// let secondVariable = firstVariable;
// secondVariable = "Nice!"
// console.log(firstVariable);
// let yourName = "nahid";
// let greeting = 'hello,my name is${yourName}';
// console.log(greeting);
// 

// Booleans
// const a =4;
// const b = 53;
// const c = 57;
// const d = 16;
// const e = "kevin";

//  console.log(a ! __ b);
//   console.log(c ! __ d);
//   console.log('Name' == 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false && false && false || true);
//   console.log(false == false)
//   console.log(e =='Kevin');
//   console.log(a < b! = c); // 
//   console.log(a == a!= d); // 
//   console.log(48 =='48');


// The farm
// if the animal is cow print mooo
// if the animal is not a cow print "Hey! You're not a cow."

// let animal = "cow";
// if (animal === "horse"){
// console.log("moooo")
// }else{
// console.log("Hey! You're not a cow.");
// }


// E. Driver's Ed
// let personAge = 8;
// if (personAge >= 16){
// console.log("Here are the keys!",)
// }else{
// console.log("Sorry, you're too young.");
// }

///II. Loops///
// Write a loop that will print out all the numbers from 0 to 10, inclusive

// for(let i = 0; i < 11; i++){
// console.log(i)
// }
// Write a loop that will print out all the numbers from 10 up to and including 400
// for(let i = 10; i < 401; i++){
// console.log(i)
// }

// Write a loop that will print out every third number starting with 12 and going no higher than 4000
// for(let i = 12; i < 4000; i+=3){
// console.log(i)
// }
// B. Get even
// Print out the numbers that are within the range of 1 - 100

// for(let i = 1; i < 100; i++){
// if(i % 2===0){
// console.log(i)
// }

// Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
// for(let i = 1; i < 100; i++){
// if(i % 2===0){
// console.log(i +'<-- is an even number');
// } else{
//      console.log(i);
// }

// C. Give me Five
// For the numbers 0 - 100, print out "I found a number. High five!" if the number is a multiple of five
// for(let i =0;i<=100; i++){
//      if(i%5 ===0){
//        console.log(i+"I found a number. High five!");
// }else{
//      console.log(i);
// }
//  }
// Add to the code from above to print out "I found a number. Three is a crowd" if the number is a multiple of three
// for(let i =0;i<=100; i++){
//      if(i%3 ===0){
//        console.log(i+"I found a number. Three is a crowd");
// }else{
//      console.log(i);
// }
//  }

// D. Savings account

// let bank account =0;

// for(let i =0;i<=10; i++){
//    bank_account +=i;
// }

// for(let i =0;i<=10; i++){
//     bank_account +=i*2;
// }

//     console.log(bank_account)
// }


// III. Arrays & Control flow



// A. Talk about it:
// What are the things in an array called?
// A. element or items
// Do Arrays guarantee those things will be in order?
// A. yes
// What real-life thing could you model with an array?
// A. colours for a project

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
// let quotes = ["live & let live","do not let making a living prevent you from making a life","life is a long lesson in humility"];
// console.log(quotes)

// C. Accessing elements
// Given the following array 
// const randomThings = [1, 10, "Hello", true]

// How do you access the 1st element in the array?
// console.log(randomThings[0]);

// Change the value of "Hello" to "World"
// randomThings[2] = "world"
// console.log(randomThings[2]);

// Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
// consoile.log(randomThings)
// the array did update :the string did Change the value of "Hello" to "World"


// D. Change values
// Given the following array

//  const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

// What would you write to access the 3rd element of the array?
// console.log(ourClass[2])

// Change the value of "Github" to "Octocat"
// ourClass[4]="Octocat";
// console.log(ourClass);

// Add a new element, "Cloud City" to the array
// ourClass.push("cloud City")
// console.log(ourClass)

// E. Mix It Up

// Given the following array: 
// const myArray = [5, 10, 500, 20]
// Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
// myArray.push("Aegon");
// console.log(myArray);


// Remove the 5from the beginning of the array.
// myArray.shift(0)
// console.log(myArray);

// Add the string "Bob Marley"to the beginning of the array.
// myArray.unshift("Bob Marley");
// console.log(myArray);

// Remove the string of your choice from the end of the array.
// myArray.pop(4);
// console.log(myArray);
// Reverse this array using Array.prototype.reverse().
// const myArrayReversed = myArray.reverse();
// console.log(myArray);
// Did you mutate the array? What does mutate mean?
// yes,mutate means to change the array and order of array was changed
// Did the .reverse() method return anything?
// yes,it returned the array in reversed order.

// F. Biggie Smalls
// let num =10;
// if(num <= 100){
// console.log("Little number");
// }else {
// console.log("Big number");
// }


// G. Monkey in the Middle
// let num1 =11;
// if (num1<5){
// console.log("Little number");
// }else if (num1>10){
// console.log("Big number");
// }else {
// console.log("Monkey");
// }


// H. What's in Your Closet?

// const kristynsCloset = [
//     "left shoe",
//     "cowboy boots",
//     "right sock",
//     "Per Scholas hoodie",
//     "green pants",
//     "yellow knit hat",
//     "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//     [
//         // These are Thom's shirts
//         "grey button-up",
//         "dark grey button-up",
//         "light blue button-up",
//         "blue button-up",
//     ], [
//         // These are Thom's pants
//         "grey jeans",
//         "jeans",
//         "PJs"
//     ], [
//         // Thom's accessories
//         "wool mittens",
//         "wool scarf",
//         "raybans"
//     ]
// ];

// console.log("Kristyn is rocking that" + kristynsCloset[3] + "today!");
// kristynsCloset.splice(5, 0, "raybans");
// console.log(kristynsCloset)
// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset)
// thomsCloset[0][0];
// thomsCloset[1][1];
// thomsCloset[2][1];
// console.log("Thom is looking fierce in a grey button-up,jeans and wool scarf");
// thomsCloset[1][2] = "Footie Pajamas";
// console.log(thomsCloset)

// // functions//

// B. printCool
// const printCool = (agrument) => {
//     return  agrument + "is cool";
// };
// console.log(printCool("Captian Reynolds"));


// C. calculateCube

// const calculateCube = (singleNumber) => {
//     return singleNumber * singleNumber * singleNumber;
//     };
//     console.log(calculateCube(5));
// D. isVowel

//     const isAvowel = (character) => {
//     if (character === "a"  character === "A"  character === "e"  character === "E"  character === "i"
//         character === "I"  character === "o"  character === "O" character == "u"|| character === "U"){
//     return true;
// } else {
//     return false;
//         }
// };
// console.log(isAvowel("e"));

// E. getTwoLengths

// function lengths(arr){
// return arr.map(str => str.length);
// }
// console.log(lengths(['Hank','Hippopalous']));

// F. getMultipleLengths
// const getMultipleLengths = (strArr) => {
//     const getMultipleLengthArray = [];
//     for (f = 0; f <strArr.length; f++){
//         getMultipleLengthArray.push(strArr[f].length);
//     };
//     return getMultipleLengthArray;
// }
// console.log(getMultipleLengths(["hello","what","is","up","dude"]));

// G. maxOfThree

// const maxofThree = (n1,n2,n3) => {
//     const threeNumArray = [n1, n2, n3];
//     threeNumArray.sort(function(a,b){return a-b});
//     return threeNumArray[2];
// };
// console.log(maxofThree(6,9,1))


// H.printLongestWord
// function longest(str){

//     return str.sort((a, b) => b.length - a.length)[0]
// }

// console.log(longest(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));



// //OBJECTS////
// const user =
// {
//     name: "Nahid",
//     email: "nahid@gmail.com",
//     age: 32,
//     purchased: []
// }

// user.email = "nahid100@gmail.com"
// console.log(user);
// user.age++;
// console.log(user);
// user.location = "Chicago";
// console.log(user);
// user.purchased.push("cabrohydrates");
// console.log(user)
// user.purchased.push("peace of mind");
// console.log(user)
// user.purchased.push("Merino jodhpurs");
// console.log("Merino jodhpurs")

// // E. Object-within-object
// user.friend = {
//     name: "Grace Hopper",
//     age: 85,
//     location: "USA",
//     purchased: []
// }
// console.log(user)

// ///////////Remember that you can add an object to an existing object in the///////////////////////
// ///////////same way that you can add any new property/value pair.------------------------------------

// console.log(user.friend)
// console.log(user.friend.name)
// console.log(user.friend.location)
// user.friend.age = 55

// console.log(user.friend)
// user.friend.purchased.push("The One Ring")
// user.friend.purchased.push("A latte")
// console.log(user.friend)
// console.log(user.friend.purchased[1])

// for (let i = [3]; i < user.purchased; i++) {
//     console.log(user.purchased);
// }
// for (let i = [3]; i < user.friend.purchased; i++) {
//     console.log(user.friend.purchased);
// }

// userUpdate = user
// user.age = user.age + 1

// console.log(user)
// console.log(user.name.toUpperCase())