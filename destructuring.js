/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let joe = ages[2];


/**
 * This method does  
   not use destructuring. We have to declare each  variable individually on 
   its own line of code, and we also need to reference the index of the item
   in the array we want to assign to each variable. 
 */

// If we use the destructuring, so insteda declare an array of names.
// In this way automatically john is assigned at 30, mary at 26 and joe at 27.
let [john, mary, joe] = ages
console.log(john, mary, joe);

// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "developer",
    alicia: "accountant",
};
// we can destructuring in this way
let { mike, jill, alicia} = jobs;
console.log(mike, jill, alicia)

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary, johnThird] = languages;
console.log(johnNative, johnSecondary, johnThird);

let [, , , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

// Using Object
// Destructure Object
let languages2 = {
    firstLanguage: "english",
    secondLanguage: "french",
    thirdLanguage: "german",
    fourthLanguage: "Italian"
}

let {firstLanguage, fourthLanguage} = languages2;
console.log(firstLanguage, fourthLanguage);



// Using rest parameter syntax

let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
console.log(others);


let favoriteFoods = {
    brian: "pizza",
    anna: "pasta",
    sarah: "vegetarian",
    andrea: "steak"
};

let {brian, sarah, ...rest} = favoriteFoods
console.log(brian);
console.log(sarah);
console.log(rest);


