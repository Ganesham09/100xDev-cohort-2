// * week 1.2
// * JS Foundation

// ? assignment questions 3

// const allUsers = [
//   {
//     firstName: "Ganesham",
//     gender: "Male",
//   },
//   {
//     firstName: "gandu",
//     gender: "Male",
//   },
//   {
//     firstName: "roshni",
//     gender: "female",
//   },
// ];

// for (let i = 0; i < allUsers.length; i++) {
//   if (allUsers[i]["gender"] === "Male") {
//     console.log(allUsers[i]["firstName"]);
//   }
// }

// ? functions in js

// function sum(a, b) {
//   return a + b;
// }

// const value = sum(2, 3);
// console.log(value);

// ? bounty question :- why is this code taking so long to execute?

let sum = 0;
for (let i = 0; i < 100000000000; i++) {
  sum = sum + i;
}

console.log(sum);

//* answer :-  the code is taking so long to execute because the loop is running 100000000000 times and the sum is being calculated for each iteration. This is a very large number of iterations and the sum is being calculated for each iteration, which is why it is taking so long to execute.
