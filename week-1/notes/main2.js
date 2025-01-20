//? Callbacks in JavaScript

// //* you are allowed to call one function from another function or after the function declaration
// //? how you will you display the result of the sum function in the console?

// function sum(num1, num2, fnTocall) {
//   let result = num1 + num2;
//   fnTocall(result); //* this is a callbacks function in JS (fnToCall)
// }

// function displayResult(data) {
//   console.log("Result of the sum is : " + data);
// }

// function displayResultPassive(data) {
//   console.log("Sum's of Result is : " + data);
// }

// const ans = sum(2, 3, displayResultPassive);
// //* this is where we perform callbacks function in this case we are passing the displayResultPassive function as a parameter to the sum function

//? SetTimeOut in JavaScript

// function greet() {
//   console.log("Hello World");
// }

// setTimeout(greet, 2000); //* this is how you can use the setTimeout function in JS

//? SetInterval in JavaScript

//? What is setInterval in JS?
//* setInterval is a function in JS that is used to call a function or evaluate an expression at specified intervals (in milliseconds).

// function greet() {
//   console.log("Hello World");
// }

// function greet2() {
//   console.log("Hello World 2");
// }

// setInterval(greet2, 1500); //* this is how you can use the setInterval function in JS
