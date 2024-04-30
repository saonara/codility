// Question 3
// for (let num = 999; num >= 100; num--) {
//   console.log(num);
// }

// Question 4
function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  const reversed = parseInt(x.toString().split("").reverse().join(""));
  return x === reversed;
}

// let x = 181;
// x = 1331;
// console.log(isPalindrome(x));

// Question 5
function removeDuplicates(inputString) {
  const words = inputString.split(" ");
  const uniqueWords = Array.from(new Set(words));
  return uniqueWords.join(" ");
}

// let inputs = "Hello I am so Hello";
// console.log(removeDuplicates(inputs));

// Question 6
function flattenAndSort(array) {
  let flattened = [].concat(...array);
  return flattened.sort((a, b) => a - b);
}

let arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
// arr = [[3, 2, 1], [4, 6, 5, [10, 11]], [], [9, 7, 8]]; WIP 3D
console.log(flattenAndSort(arr));
