function sum(num1, num2, fnTocall) {
  let result = num1 + num2;
  fnTocall(result); //* this is a callbacks function in JS (fnToCall)
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
  console.log("Sum's of Result is : " + data);
}

//* you are allowed to call one function from another function or after the function declaration
//? how you will you display the result of the sum function in the console?

const ans = sum(2, 3, displayResultPassive);
//* this is where we perform callbacks function in this case we are passing the displayResultPassive function as a parameter to the sum function
