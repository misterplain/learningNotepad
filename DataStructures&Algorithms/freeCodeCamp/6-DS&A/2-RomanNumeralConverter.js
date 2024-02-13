//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/roman-numeral-converter

// Convert the given number into a roman numeral.

// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// All roman numerals answers should be provided in upper-case.


function convertToRoman(num) {
  //set 5 10 50 100 500 and 1000 to be the markers

  const romanNumerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
  };

  const markers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  let value = num;
  let romanNumeral = "";


  for (let i = 0; i < markers.length; i++) {
    while (value >= markers[i]) {
      romanNumeral += romanNumerals[markers[i]];
      value -= markers[i];
    }
  }

  console.log(value);
  console.log(romanNumeral, "roman numeral");

  return romanNumeral
}

console.log(convertToRoman(4));
