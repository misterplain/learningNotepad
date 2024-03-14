// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

function isPalindrome(string) {
    let reversedString = "";

    if (string.length === 0) {
      return;
    }
    function reverseString(str) {
      let startCharacter = 0;
      let endCharacter = str.length - 1;
      reversedString = reversedString + str[endCharacter];
  
      if (startCharacter === endCharacter) {
        return;
      }
      return reverseString(str.slice(startCharacter, endCharacter));
    }
  
    reverseString(string);
    console.log(reversedString === string)
  
    return reversedString === string
}


// isPalindrome('awesome') // false
// isPalindrome('foobar') // false
// isPalindrome('tacocat') // true
// isPalindrome('amanaplanacanalpanama') // true
isPalindrome('amanaplanacanalpandemonium') // false