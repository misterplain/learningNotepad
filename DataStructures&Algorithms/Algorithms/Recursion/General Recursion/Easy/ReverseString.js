// reverse
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.

function reverse(string) {
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

  return reversedString
}

// reverse("awesome"); // 'emosewa'
reverse("rithmschool"); // 'loohcsmhtir'

//alt solution

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}
