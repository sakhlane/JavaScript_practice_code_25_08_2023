console.log('learning about switch case');

/**
 * We use switch when based on certain known values we need to perform certain tasks.
 * syntax :-
 * -------------
  switch(value) {
    case a:
        break;
    case b:
        break
    default:
}
 */

/**
 * Answer the following questions.

Q. 
var monthNumber = 3;
Write a program to print name of month and number of days in a month. Change the value of monthNumber and check if your code works fine.
Example:
monthNumber = 3
Output
Month = March
Total number of days = 31

 */

var monthNumber = 12;

switch(monthNumber){
    case 1 : 
        console.log("Month = January")
        console.log('Total number of days = 31')
        break;
    case 2 : 
        console.log("Month = february")
        console.log('Total number of days = 28')
        break;
    case 3 : 
        console.log("Month = march")
        console.log('Total number of days = 31')
        break;
    case 4 : 
        console.log("Month = aprel")
        console.log('Total number of days = 30')
        break;
    case 5 : 
        console.log("Month = may")
        console.log('Total number of days = 31')
        break;
    case 6 : 
        console.log("Month = june")
        console.log('Total number of days = 30')
        break;
    case 7 : 
        console.log("Month = july")
        console.log('Total number of days = 31')
        break;
    case 8 : 
        console.log("Month = august")
        console.log('Total number of days = 31')
        break;
    case 9 : 
        console.log("Month = september")
        console.log('Total number of days = 30')
        break;
    case 10 : 
        console.log("Month = october")
        console.log('Total number of days = 31')
        break;
    case 11 : 
        console.log("Month = november")
        console.log('Total number of days = 30')
        break;
    case 12 : 
        console.log("Month = december")
        console.log('Total number of days = 31')
        break;
    default :
       console.log('enter a valid month no')
}

/**
 * Q. 
        var enteredAlphabet = 'd'
        Write a program to check vowel or consonant using switch case. Change value of enteredAlphabet and check if your code works fine.
        vowels: ‘a’, ‘e’, ‘i’, ‘o’, ‘u’, ‘A’, ‘E’, ‘I’, ‘O’, ‘U’
        Example
        enteredAlphabet: c
        Output: 'c' is consonant
        enteredAlphabet: a
        Output: 'a' is vowel
 */
      var alphabet ;
    //  alphabet = prompt('enter an alphabet');
    switch(alphabet){
        case 'A' :
        case  'E':
        case  'I':
        case  'O':
        case  'U':
        case 'a' :
        case  'e':
        case  'i':
        case  'o':
        case  'u':
            console.log('vovel');
            break;
        case  'b' :
        case 'c' :
        case 'd' :
        case 'f' :
        case 'g' :
        case 'h' :
        case 'j' :
        case 'k' :
        case 'l' :
        case 'm' :
        case 'n' :
        case 'p' :
        case 'q' :
        case 'r' :
        case 's' :
        case 't' :
        case 'v' :
        case 'w' :
        case 'x' :
        case 'y' :
        case 'z' :
        case  'B' :
        case 'C' :
        case 'D' :
        case 'F' :
        case 'G' :
        case 'H' :
        case 'J' :
        case 'K' :
        case 'L' :
        case 'M' :
        case 'N' :
        case 'P' :
        case 'Q' :
        case 'R' :
        case 'S' :
        case 'T' :
        case 'V' :
        case 'W' :
        case 'X' :
        case 'Y' :
        case 'Z' :
            console.log('consonent');
            break;
        default: 
           console.log('enter valid alphabet')
}

/**
 * Q.
    var enteredNumber = 41
    Write a program to check even or odd number using switch case. Change value of enteredNumber and check if your code  works fine.
    Example
    enteredNumber: 41
    Output: 41 is an odd number
 */

    // var number = parseInt(prompt('enter a number'));
    switch(number){
        case number : 
           if(number % 2 == 0)
           console.log('even number');
           else 
            console.log('odd number')
    }