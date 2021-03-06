//1. What does DRY stand for? The acronym DRY in code stands for "Don't
// Repeat Yourself". It is important to pay attention and remember it
// because, it makes suggests that we shouldn't write repetitive code 
// which is poor practice. Also, one of the tools that we have learned
// that can help us write DRY code, are functions. 


//2. What is the difference between Var, Const and Let? Const and Let are
// block-scoped, while Var isn't. Also, Const values can't be reassined, while
// Let can be. Also Let var can't be declared again, while Var can be decla-
// red again. 


const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kelvin';
const f = false;
const g = 0;

  a !== b

  c > d

  'Name' == 'Name'

  a !== b !== c

  a !== a < d // WHY IS THIS TRUE?

  e !== 'Kevin'

  48 == '48'

  f !== e

  let g =0; 
console.log(g); // > 0
g = b + c;
console.log(g); // > 110
g = 10;
console.log(g); // > 10

// 10 = g;  > Syntax Error

//Answer Section 2,
//1. I used "let", because it would allow me to redefine the variable.
//2. For this test scenario I didn't used a variable to declare g = 0; 
//and at the end I would get an undefined, however, the results would 
//be correct e.g. g = b + c; > 110.
//3. I would get an error, saying "Invaled left-hand side in assigment expression".

// NEW CHALLENGER APPROACHS a _ (b || f) _ !f && e _ c vvv

 a < (b || f) === !f && e !== c

// CHALLENGER DEFEATED! KO! ^^^

//Answer Section 3,


// 1. Is the code ... an infinite loop? Why or why not?
// Yes, it is an infinite loop, because you're warning me to not run it,
// meaning it's dangerous! Jokes aside, it is an infinite loop because,
// I believe two things, if something is declared JS assumes it is true
// (JS so naive) unless it's stated false, second, I am never adding a 
// condition when to stop console.logging.

// 2. Infinite loop 2
// Is this an infinite loop? Why or why not?
// Of course it is, it's called "Infinite loop 2", jokes aside! The var-
// iable "runProgram" was declared as a constant. Meaning that even 
// if we attempt to change it to "false" or to anything at all. It will
// remain true forever, like my love for Nacho Cheese Fries from Taco 
// Bell. 

// Reading code beep beep.

let letters = "A"; // variable "letters" equals "A"; (string). ---> same
// sentence
let i = 0; // variable "i" equals 0; (int). ---> same sentence

while (i < 20) { // while variable "i" is less than 20 ---> same sentence
	letters += "A"; // I knew that A would add itself, but didn't know the 
    // proper logic ---> variable "letters" equals "letters" + "A" 
	i++; // add one to variable "i" ---> same sentence
}

console.log(letters); // print letters ("A") 20 times was expecting vertical
// prints ---> printed "A" 20 times horizontally.

// Section 4.

// Diff between for loop and while loop.

// For loop it is used when you want to run code specifically x number of times.
// While is used when you want to run code but you do not know how many times, 
// you want to run it. For has built-in vars and While do not. 

// Parts of a For loop 1. Initialization, 2. condition, 3. iteration.

// For loop II


 for (let i=0; i<1000; i++){
console.log(i)
}

// NEW CHALLENGER APPROACHS vvv

// Diff between \ and / \?????????/!!
// Forward slash / is used in URLs to specify the path, (\ can be used in Win
// to specify path as well), and \ in programming allows the next character
// to escape the format. 

// CHALLENGER DEFEATED! KO! (maybe not sure, I think that's mostly it) ^^^


// Code 999 to 0

  for (let i=999; i>-1; i--){
console.log(i)
}

// Code 1 to 10 along w/ i

for (let i=0; i<10; i++){
    console.log("The value of i is: " + i + " of 10");
    }
 
// NEW CHALLENGER APPROACHS ban concatenation invite interpolation vvv 

for (let i=0; i<10; i++){
    console.log(`The value of i is: ${i} of 10`);
    }

// CHALLENGER DEFEATED! KO! ^^^


// Iteration 


// print each element of the array

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (i=0; i<StarWars.length; i++){
    console.log(StarWars[i]);
}

// print each element + the value of the array

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (i=0; i<StarWars.length; i++){
    console.log(i+ " is the index value of " + StarWars[i]);
}

// NEW CHALLENGER APPROACHS! Print every second element!!! vvv

const StarWars = ["Han", "C3PO", "R2D2", "Luke", "Leia", "Anakin"];
for (i=0; i<StarWars.length; i++){
if (i % 2 == 0){
    console.log(StarWars[i]);
}
}

// CHALLENGER DEFEATED! ^^^

