## Introduction

This repository contains code solutions for various **codility** programming challenges, including:

- Counting down from 999 to 100.
- Checking for palindromes.
- Removing duplicate words from a string.
- Flattening and sorting a multidimensional array.

### Code Snippets

#### 1. Counting Down

```
// Question 3
for (let num = 999; num >= 100; num--) {
    console.log(num);
}
```

This code iterates from 999 until it reaches 100. In each iteration, the current number is logged to the console.

#### 2. Palindrome Check

```
// Question 4
function isPalindrome(x) {
  if (x < 0) {
    return false;
  }
  const reversed = parseInt(x.toString().split("").reverse().join(""));
  return x === reversed;
}

// Usage example (uncomment to test)
// let x = 181;
// x = 1331; // Uncomment this line to test a different palindrome
// console.log(isPalindrome(x));
```

This function determines whether a given number (x) is a palindrome. The function first checks if x is negative (negative numbers are not palindromes). Then, it reverses the digits of x and compares it with the original number. If they are equal, the function returns `true`, indicating a palindrome; otherwise, it returns `false`.

#### 3. Removing Duplicate Words

```
// Question 5
function removeDuplicates(inputString) {
  const words = inputString.split(" ");
  const uniqueWords = Array.from(new Set(words));
  return uniqueWords.join(" ");
}

// Usage example (uncomment to test)
// let inputs = "Hello I am so Hello";
// console.log(removeDuplicates(inputs));
```

This function takes a string `(inputString)` and removes any duplicate words, preserving the order of the unique words. It achieves this by first splitting the string into an array of words (words). Then, it utilizes a `Set` object, which by nature only stores unique values. By converting the words array to a Set using `new Set(words)`, duplicates are automatically eliminated. Finally, the function converts the unique word set back into an array (`uniqueWords`) using `Array.from` and joins the array elements back into a string with spaces using `join(" ")`.

#### 4. Flattening and Sorting 2D Array

```
// Question 6
function flattenAndSort(array) {
  let flattened = [].concat(...array);
  return flattened.sort((a, b) => a - b);
}

// Usage example (uncomment to test)
let arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]];
// arr = [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]; // WIP 3D (uncomment to test)
// arr = [[3, 2, 1], [4, 6, 5, [10, 11]], [], [9, 7, 8]]; // WIP 3D (uncomment to test)
console.log(flattenAndSort(arr));
```

This function flattens a 2D array `(array)` into a single-dimensional `array` and `sorts` the elements in ascending order. The `[].concat(...array)` syntax efficiently flattens the array by combining all sub-arrays into a single array. The sort function then sorts the elements in place using a comparison function that compares two elements `(a and b)` and returns `a` negative number if `a` is less than `b`, zero if they are equal, or `a` positive number if `a` is greater than `b`.
