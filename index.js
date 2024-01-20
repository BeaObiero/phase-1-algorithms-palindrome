function isPalindrome(word) {
  // Write your algorithm here

  function isPalindrome(str) {
      const lowercaseStr = convertToLowercase(str);
      const cleanStr = removeNonLetters(lowercaseStr);
      const reversedStr = reverseString(cleanStr);

      return cleanStr === reversedStr;
  }

  function convertToLowercase(str) {
      return str.toLowerCase();
  }

  function removeNonLetters(str) {
      return str.replace(/[^a-z]/g, '');
  }

  function reverseString(str) {
      return str.split('').reverse().join('');
  }

  // Test cases
  console.log(isPalindrome("abba"));
  console.log(isPalindrome("racecar"));
  console.log(isPalindrome("a"));
  console.log(isPalindrome("robot"));
  console.log(isPalindrome("ab"));

  /* 
    Add your pseudocode here
  */
  // function isPalindrome(str):
  //     lowercaseStr = convertToLowercase(str)//convert to lowercase
  //     cleanStr = removeNonLetters(lowercaseStr)//remove any non-letters
  //     reversedStr = reverseString(cleanStr)//reverse the string
  //     
  //     return cleanStr == reversedStr//compare the original string to the reversed string

  // function convertToLowercase(str):
  //   return str.toLowerCase()

  // function removeNonLetters(str):
  //     Use regular expression to remove non-letter characters
  //     return str.replace(/[^a-z]/g, '')

  // function reverseString(str):
  //     return str.split('').reverse().join('')


  /*
    Add written explanation of your solution here
  */
  // CODE EXPLANATION

  // We are creating an algorithm that will help determine whether a word or sentence is a palindrome or not. 
  // A palindrome is a word or phrase that can be read forwards from right to left and vice versa.

  // HOW THE CODE WILL WORK
  // Our tool will be given a word and our algorithm will go through the steps to accurately tell if the word is a palindrome or not.
  // 1. We will convert the input strings to lowercase to handle case-sensitive input types.
  // 2. We will also write a function to remove any non-letter characters from the string.
  // 3. The original string will be compared to its reverse. 
  // 4. It will return 'true' if they are the same; otherwise, it will return 'false'.

  // You can run `node index.js` to view these console logs
  if (require.main === module) {
      // add your own custom tests in here

      console.log(isPalindrome("kayak"));  // Should print true
      console.log(isPalindrome("bible"));  // Should print false
      console.log(isPalindrome("radar"));  // Should print true
      console.log(isPalindrome("mama"));  // Should print false
      console.log(isPalindrome("madam"));  // Should print true

      console.log("");

      console.log("Expecting: true");
      console.log("=>", isPalindrome("racecar"));

      console.log("");

      console.log("Expecting: false");
      console.log("=>", isPalindrome("robot"));
  }

  // Export the function
  module.exports = isPalindrome;

}
