console.log('we are going learn about undefined and null value')

/** 
 * null ====> it is a value Assaigned to a variable . may be it represents a variable holds no value
 * undefined ====> the variable value which variable is declared but not assaigned any vlaue is called undefined
 */

//undefined
 let x;
 console.log(x); // x is undefined 

 //null 
 let y = null;
 console.log(y)

 console.log(null == undefined) // true ===> because both values are empty
 console.log(null === undefined) // false  ====> because values are empty but type is diffirent


/**
 * DIALOGS IN JAVASCRIPT
 * 
 * there are three types of dialog box in javascript 
 * 1. window.alert();
 * 2.window.confirm();
 * 3.window.prompt()
 */

//  window.alert()
//  this shows a alert box to the user 
//  window.alert('hi am alert')

// window.confirm()
// confirm() instructs the browser to display a dialog with an optional message, and to wait until the user either confirms or cancels the dialog.
// let con = window.confirm('are you ready');
//  if(con === true){
//     console.log('haaaaa')
//  }

// window.prompt()
// it ask to user to input something  other words it take values from the user
let name1 = window.prompt('enter your name')

   if(name1 !== null){
    console.log(name1)
   }
   else {
    console.log('please enter your name')
   }



