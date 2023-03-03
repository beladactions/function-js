/* 
===================
JAVASCRIPT FUNCTION
===================

JavaScript functions are defined with the function keyword.

You can use a function declaration or a function expression.

====================
FUNCTION DECLARATION
====================
*/

function myFunction(a, b) {
    return a * b;
  }

  // A function declaration is not an executable statement
  
  console.log(myFunction(5,6)) // Invoked the function here
 

  /*
  ===================
  FUNCTION EXPRESSION
  ===================

  A function expression can be stored in variable
  A function stored in variable are anonymous function i.e a function without name
  and function stored in variable does not need names.
  They are always invoked using the variable name

  */

    const x = function (a, b) {return a * b};
    let z = x(8, 4);
    console.log(z)

/*
====================
FUNCTION CONSTRUCTOR
====================

Function can also be defined with Function () constructor

*/

const myFunction = new Function("a", "b", "return a * b");

let x = myFunction(6, 5);

console.log(x)

