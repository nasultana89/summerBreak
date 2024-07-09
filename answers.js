// Part II: JavaScript Reps
////////////////////////////////
// Easy Going
////////////////////////////////
// // Write a for loop that will log the numbers 1 through 20.
// for (let i = 1; i <= 20 ; i++ ){
//     console.log(i);
// }

////////////////////////////////
// Get Even
////////////////////////////////
// // for (let i = 0; i <= 200 ; i++ ){
//      if (i % 2 === 0)
//      console.log(i);
// }



////////////////////////////////
// Fizz Buzz
////////////////////////////////
// for (let i = 1; i <= 100 ; i++ ) {
//     switch (true) {
//         case (i % 3 === 0 && i % 5 === 0):
//         console.log('FizzBuzz');
//         break;
//         case (i % 3 === 0 ):
//         console.log('Fizz');
//         break;
//         case ( i % 5 === 0):
//         console.log('Buzz');
//         break;
//         default:
//             console.log(i);
//     }
// }




////////////////////////////////
// Wild Wild Life
////////////////////////////////
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
// const sharky = ["Sharky", "shark", 20, "Left Coast"]
// const plantee = ["Plantee", "plant",  5000 , "Mordor"]
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
// const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

// plantee[2]+=1;
// console.log(plantee)
// wolfy[3]="Gotham City"
// console.log(wolfy)
// dart.push("Hawkins")
// console.log(dart)
// wolfy[0]="Gameboy"
// console.log(wolfy)


////////////////////////////////
// Yell at the Ninja Turtles
////////////////////////////////
// const turtles=["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// for(let turtle of turtles){
//   console.log(turtle.toUpperCase());
// }


////////////////////////////////
// Methods, Revisited
////////////////////////////////
const favMovies = [
    "Jaws",
    "The Fellowship of the Ring",
    "Howl's Moving Castle",
    "Django Unchained",
    "Cloud Atlas",
    "The Usual Suspects",
    "Toy Story",
    "Conan the Barbarian",
    "Titanic",
    "Harry Potter",
    "Fried Green Tomatoes",
    "Volver",
    "Oculus",
    "Seven",
    "Black Panther",
    "Harry Potter",
    "Imitation of Life",
    "Snatch",
    "Fast and Furious",
];
console.log(favMovies.indexOf("Titanic"));
console.log(favMovies.indexOf('Fast and Furious'));
console.log(favMovies);
console.log(favMovies.sort());
console.log(favMovies);
console.log(favMovies.pop());
console.log(favMovies);
console.log(favMovies.splice(1, 2))
console.log(favMovies)
console.log(favMovies.push("Guardians of the Galaxy"))
console.log(favMovies);
console.log(favMovies.reverse());
console.log(favMovies.shift())
console.log(favMovies)
console.log(favMovies.unshift("New Movie"))
console.log(favMovies)
console.log(favMovies.indexOf("Django Unchained"))
console.log(favMovies.splice(15, 1, "Avatar"))
console.log(favMovies);
console.log(favMovies);
let halfOfTheArray = favMovies.length / 2;
console.log(halfOfTheArray);
console.log(favMovies.slice(7))
console.log(favMovies);
const variable = favMovies.slice(7);
console.log(variable);
console.log(favMovies)


////////////////////////////////
// Where is Waldo
////////////////////////////////


////////////////////////////////
//  Excited Kitten
////////////////////////////////


////////////////////////////////
//  Find the Median
////////////////////////////////

// const nums = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14, 19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];

// function median(arr) {
//     // Sort the array
//     arr.sort((a, b) => a - b);

//     const length = arr.length;
//     const middle = Math.floor(length / 2);

//     // Check if the array length is even or odd
//     if (length % 2 === 0) {
//         // If even, return the average of middle two elements
//         return (arr[middle - 1] + arr[middle]) / 2;
//     } else {
//         // If odd, return the middle element
//         return arr[middle];
//     }
// }


// const arr1 = [14, 11, 16, 15, 13, 16, 15, 17, 19, 11, 12, 14,];
// console.log(median(arr1)); 

// const arr2 = [19, 11, 15, 17, 11, 18, 12, 17, 12, 71, 18, 15, 12];
// console.log(median(arr2)); 

