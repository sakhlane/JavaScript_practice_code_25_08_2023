console.log('we are going to learn conditionals in javascript')

/**
 * 1. if statement
 *  2. if else statement
 * 
 * if statement
 * if statement syntax :--->  
 * --------------------------------
 * if( condition )
 *  {
 *     block of code   
 *  } 
 * ---------------------------------
 * 
 * if else statement 
 * 
 * if-else syntax :-------> 
 * --------------------------------------
 * if( condition )
 * {
 *  block of code
 * }
 *  else 
 *   {
 *     else code     
 * } 
 * --------------------------------------------
 */

let num = 1; // expect '0' all values considered as true 
if(num){
    console.log('hello evey body')
}

let num2 = 0; //if condition is 0 then it consider as false and not entered into if block
if(num2){
    console.log(num2)
}

let name = 'sakhlane'; // string also consider as true
if(name){
    console.log('programmer')
}

let bool = true ;
 if(bool){
    console.log('we are in bool')
 }

 /** very imp,,,
  *  null , undefined , 0 , false ===> these are non satisfied condition for if condition...
  */

 let boole = false;
 if(boole){
    console.log('if block');
 }
 else{                    // if the condition is false then control goes to the else part
    console.log('else block')
 }

 // practice problems
 /**
  * Q.
    var length=200;
    var breadth=200;
    Take these values of length and breadth of a rectangle and check if it is square or not. Change values and see if your code works or not.

  */

    var length = 200;
    var breadth = 300;
    if(length === breadth){
        console.log('rectangle is square')
    }
    else{
        console.log('rectangle is not square')
    }

//     Q.
// var num1=5, num2=8, num3=20;
// Write some code to check which number is greatest. Change values and see if your code works or not.
  var numm1 =50;
  var  numm2 = 25;
  var numm3 = 20;

  if((numm1 > numm2) && (numm1 > numm3))
  {
    console.log('numm1 is greater',numm1);
  }
  else if((numm2 > numm1) && (numm2 > numm3 )){
    console.log('numm2 is greater',numm2)
  }
  else {
    console.log('numm3 is greater',numm3);
  }
  

  /**
   * Q.  
        var numberOfItemPurchased = 8
        A shop will give discount of 10% if the cost of purchased quantity is 1000 or more. Suppose, one unit will cost 100. Change the value of numberOfItemPurchased and print total cost for user.

   */

    var NOIP = 100;
    var cost_per_unit = 100;
    var total_cost = NOIP * cost_per_unit;
    console.log(total_cost) // total cost
    if(total_cost >= 1000){ // if the price amount is more than or equal to 1000
      var  dis = total_cost * 10 / 100;
        console.log(dis); // discount
    var final_amt = total_cost - dis;
    console.log(final_amt); // final amount
    }
    else{
        console.log(total_cost); // if price amount is less than 1000
    }

    /**
     * Q. 
        A school has following rules for grading system:
        a. Below 25 - F
        b. 25 to 45 - E
        c. 45 to 50 - D
        d. 50 to 60 - C
        e. 60 to 80 - B
        f. Above 80 - A

        var enteredMarks = 77
        Change value of enteredMarks and print the corresponding grade.

     */

        let marks = 77;
        if(marks < 25){
          console.log('F')
        }
        else if((marks >= 25) && (marks <=45)){
          console.log('E')
        }
        else if((marks >= 45) && (marks <=50)){
          console.log('D')
        }
        else if((marks >= 50) && (marks <=60)){
          console.log('C')
        }
        else if((marks >= 60) && (marks <=80)){
          console.log('B')
        }
        else if(marks > 80 )
        console.log('A')
