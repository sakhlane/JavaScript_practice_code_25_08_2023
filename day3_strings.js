console.log('we are going to learn string')

let str = 'We are Learning about Strings';
console.log(str)

// string inbuilt methods

console.log(str.length) // to find the length of the string 

console.log(str.includes('learning'))// if the is there then it returns true

console.log(str.charAt(9)) // it returns a charater which is visible on position

console.log(str.charCodeAt(9) ) // it return the character code of the visible character in the string

console.log(str.toLocaleUpperCase()) // it convert a string into an upper case

console.log(str.toLowerCase())// it convert string into lower case

console.log(str.slice(3,6)); // it return from starting to end -1 size 

console.log(str.split()) ; // it convert a string to an array format 
// split(',') => split the string from ,
// split ('') => it splits all the single character

console.log(str.search('Learning'))
console.log(str.search('learning')) // it search the exact letter from the string if it fonund then it return its position elese it returns -1

// ------------------------ practice question --------------------
/* question no1.
Try to answer the following questions.
var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '
Result = 'Today is a beautiful day In Hawaii.'
1. Use the str1, str2, str3 variables to create the Result string. Keep the extra spaces, lowercase and uppercase letters in mind.
*/


var str1 = 'Today is';
var str2 = '      a beautiful day     '
var str3 = ' In Hawaii.     '

// Result = 'Today is a beautiful day In Hawaii.'
var Result = str1 + ' ' + str2.trim() + ' ' + str3.trim(); //trim function removes the spaces form the string
console.log(Result);

/** question no2
 * var mStr = 'Mo Tu We Th Fr Sa Su'
  2. Convert this string to an array which holds different days. Also, capitalize all the characters.
 */
  var mStr = 'Mo Tu We Th Fr Sa Su'
  var uppercase = mStr.toUpperCase();
 var arr_using_method = uppercase.split(' ');
  console.log(arr_using_method);

//   str.indexOf(subStr) //Returns -1 if not found. It is case-sensitive.
  console.log(mStr.indexOf('We')); 

//   str.indexOf(subStr,  fromPos) //fromPos matches the starting position of subStr.

 console.log(mStr.indexOf('We',6))

//  str.lastIndexOf(subString) //Searches for the last occurence.

console.log(mStr.indexOf('we',6))

/*
try to answer the following questions.

var mStr = "This is my test string to practice the JavaScript string function concepts. This is gonna be fun."
1. Find the length of the first sentence in the string.
2. Find the length of the second sentence in the string.
3. Find the first and last occurrence of the word "This".
4. Find the substring with length 12 from the START of the string mStr.
5. Find the substring with length 12 from the END of the string mStr.
*/

var mStr1 = "This is my test string to practice the JavaScript string function concepts. This is gonna be fun."
  // to find first sentence length
 mStr1.split('.');
 
 
 console.log(mStr1.indexOf('This',2))
console.log(mStr1.lastIndexOf('This'))
// console.log(mstr1.slice(76,80))

// mstr1.substr(0,6);
console.log(mStr1.substr('this').split('.').length)