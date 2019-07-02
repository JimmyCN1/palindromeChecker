// Palindrome Checker

// this will filter out anything of a passed string anything that is not alphanumeric, and then
// check when everything is the same case, whether or not the string is a palindrome.
// Palindrom meaning the string spellt the same forwards as it is backwards

function palindrome(str) {
  // filter string and convert it to lower case
  const strFilteredArr = str
    .split(/[^a-zA-Z0-9]+/)
    .map(word => word.toLowerCase());
  // seperate each word into an array of single letters
  let letterArr = [];
  strFilteredArr.forEach(word => {
    for (let i = 0; i < word.length; i++) {
      letterArr.push(word.charAt(i));
    }
  });
  // flip the second half of the string onto a new array
  let secondHalfIndex;
  let secondHalfArr = [];
  if (letterArr.length % 2 === 0) {
    secondHalfIndex = letterArr.length / 2;
  } else {
    secondHalfIndex = letterArr.length / 2 + 0.5;
  }
  for (let i = letterArr.length - 1; i >= secondHalfIndex; i--) {
    secondHalfArr.push(letterArr[i]);
  }
  // compare the two arrays to determine whether the string is a palindrome
  let isPalindrome = true;
  for (let i = 0; i < secondHalfArr.length; i++) {
    if (secondHalfArr[i] !== letterArr[i]) {
      isPalindrome = false;
      break;
    }
  }
  return isPalindrome;
}

// Tests
palindrome("eye"); // should return a boolean.
palindrome("eye"); // should return true.
palindrome("_eye"); // should return true.
palindrome("race car"); // should return true.
palindrome("not a palindrome"); // should return false.
palindrome("A man, a plan, a canal. Panama"); // should return true.
palindrome("never odd or even"); // should return true.
palindrome("nope"); // should return false.
palindrome("almostomla"); // should return false.
palindrome("My age is 0, 0 si ega ym."); // should return true.
palindrome("1 eye for of 1 eye."); // should return false.
palindrome("0_0 (: /- :) 0-0"); // should return true.
palindrome("five|_; ///|Four"); // should return false.
