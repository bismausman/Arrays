// Chapter 15 (Array I)
// question 1
let emptyArray = [];

// Add some elements
blankArray.push("item1");
blankArray.push("item2");
blankArray.push("item3");
// the elements in the array
console.log("Elements in the array:", emptyArray);


// Q no 2


let stringArray = ["Hello, Wassup!"];

//  string element in the array
console.log("String element in the array:", stringArray[0]);


// Q no 3

var alphabet = ["h", "i", "j", "k"];
var letterJ = alphabet[2];
// letter "j" in an alert
alert(letterJ);

// Q no 4

var alphabet = ["h", "i", "j", "k", "l", "m", "n", "o"];


var arrayLength = alphabet.length;

// length in an alert
alert("Total length of the array: " + arrayLength);


// Q no 5

//  array with one element
let myArray = ["firstElement"];

//  with index 1
myArray[1] = "secondElement";

// Display the new element in an alert
alert("New element in the array: " + myArray[1]);


// Chapter 16 (Array II)



// Q no 1

// Declare an array with one string element
let myArray = ["Hello, World!"];

// Access and display the string element
console.log("String element in the array:", myArray[0]);

// Q no 2


// Initial array
var Alphabet = ["h", "i", "j", "k"];


var removedElement = Alphabet.pop();


console.log("Array after removing the last element:", Alphabet);
console.log("Removed element:", removedElement);



// Q no 3
// Initial array
var Alphabet = ["h", "i", "j", "k"];

// Add a new element (number) to 
Alphabet.push(7);

//  modified array
console.log("Array after adding a number to the end:", Alphabet);

// Chapter 16 (Array III)


var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Remove the first element using shift
var removedElement = sizes.shift();


console.log("Array after removing the first element:", sizes);
console.log("Removed element:", removedElement);


// Q no 2
// Initial array
var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Add three number elements to the beginning using unshift
sizes.unshift(3, 2, 1);

// Display the modified array
console.log("Array after adding three numbers to the beginning:", sizes);



// Q no 3 

// Declare an array with one element
let fruits = ["apple"];


fruits.unshift("banana");


console.log("Array after adding a second element:", fruits);

alert("New first element in the array: " + fruits[0]);

// Q no 4
// Initial array
var sizes = ["S", "M", "XL", "XXL", "XXXL"];

// Find the index of "XL"
var indexXL = sizes.indexOf("XL");

// Insert "L" after "M"
if (indexXL !== -1) {
    sizes.splice(indexXL, 0, "L");
}


console.log("Array after inserting 'L' between 'M' and 'XL':", sizes);


// Q no 5

// Initial array
var sizes = ["S", "M", "XL", "XXL", "XXXL"];


var regSizes = sizes.slice(0, 3);

console.log("New array (regSizes) with the first 3 sizes:", regSizes);


// Q no 6


var pets = ["dog", "cat", "ox", "duck", "frog"];


var indexDog = pets.indexOf("dog");

// Add 2 elements after "dog" and remove "cat", "ox", and "duck"
if (indexDog !== -1) {
    pets.splice(indexDog + 1, 3, "parrot", "fish");
}


console.log("Array after adding 2 elements after 'dog' and removing 'cat', 'ox', 'duck':", pets);

// Q no 7

// Initial array
var pets = ["dog", "cat", "ox", "duck", "frog"];

var filteredPets = pets.filter(pet => pet !== "cat" && pet !== "ox");

console.log("Array after removing 'cat' and 'ox':", filteredPets);



// Q no 8

// Initial array
var pets = ["dog", "cat", "ox", "duck", "frog", "flea"];

// Reduce the array to "duck" and "frog" using slice
var reducedPets = pets.slice(3, 5);  


console.log("Array reduced to 'duck' and 'frog':", reducedPets);

                                                            


                                                          