/**
 *  Destructuring challenge
 */

/**
 *  You will create three variables using destructuring on an 
 * array returned from a function. The first and second variables 
 * will be the first two items in the array and the final one will be 
 * the remainder of items in the array. You will also create an arrow function, 
 * Which should return an array containing all the subjects for whichever 
 * students name is supplied when the function is called.
 */

/**
 *  Declare a variable named: makeList using the keyword const
 *  The variable makeList should be assigned an arrow function
 *  The arrow function should take two parameters named: arr, student
 *  The arrow function should use a return statement
 *  The function should return an array of the subjects for the student whose name is passed into the function when called.
 *  Using destructuring on the return value from calling the function and passing in the students array,  and the string John, create 3 variables named: first, second, rest using the keyword let
 *  Log out the values  first, second, and rest to view their values
 */


/**
 *  Initializes an array named students containing objects 
 * representing different students, each with their name, 
 * subjects, teachers, and results.
 */
let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

/**
 * 
 * Defines an arrow function named makeList that takes 
 * two parameters: arr (an array of student objects) and 
 * student (the name of the student whose subjects we want
 *  to retrieve).
 */
const makeList = (arr, student) => {
    /**
     * Iterates through each item in the 
     * arr array using a for...of loop.
     */
    for(let itm of arr) {
        /**
         * Checks if the name property of the current 
         * item matches the student name provided.
         */
        if(itm.name == student) {
          /**
           * If a match is found, returns the subjects 
           * array of that student.
           */  
          return itm.subjects;
        }
    }
};

// Destructuring Assignment:
/**
 * Calls the makeList function with the students array 
 * and the name 'John', then uses destructuring to assign 
 * the first two subjects of John to variables first and 
 * second, and the rest of his subjects to the array rest.
 */
let [first, second, ...rest] = makeList(students, 'John');

/**
 * Outputs the values of first, second, and 
 * rest variables to view the subjects of John 
 * as extracted using destructuring.
 */
console.log(first, second, rest);