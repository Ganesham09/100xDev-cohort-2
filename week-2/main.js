//write a function for sorting a numbre array in ascending order
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortArray([1, 3, 2, 5, 4])); // [1, 2, 3, 4, 5]
