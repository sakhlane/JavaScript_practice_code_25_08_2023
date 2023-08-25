console.log("javascript day-1");

// declaration of variable 
// we are declare a variable using var let and const 

// using var 
/** reulse for declaring a variable using var 
 * 
 * we can redeclare the same varibale 
 * we can reassaign the value to a same variable 
 * it has global levle scope
 */
var a ; // declare a variable
 a = 500; // assaign value to a variable
console.log(a) // print the value

var a = 800 ; // redeclare and assaign
 a = 1000; // re assaing
console.log(a);

{
    console.log(a); //a use with in a block level so its a global level 
    // it gives output as 1000
  {
        console.log('inner',a);
        {
          a = 5000; // re assaign to a same variable 
            console.log('inner inner',a) // it also works inside a block also
        }
    }
}

// using let 
/** rules for a declaring variable using let keyword
 * we cannot re declare same variable
 * we can re assaing a vlaue 
 * let is block level scope 
 */

let mark = 200;
 mark = 300;
console.log(mark);


let block = 'outer block'
// {
//     // let block = 'block';
//     {
//         console.log('inner block =',block)
//     }
//     console.log(block);
// }
// console.log(block)

// {
//     console.log('another block',block)
// }


{
    let block = 'another block 2'
    {
        let block = 'another block 3';
        console.log('another block 3',block)
    }
    console.log('another 2 block',block)
}

console.log(block)

/*  if there is no such variable declare in block then it looks its outer most block 
    and consider it to its block ****most imp point **** */

    let outerMostBlock = 'outer  most block';
    {
        console.log(outerMostBlock);
        {
            console.log(outerMostBlock);
            {
                console.log(outerMostBlock);
                {
                    outerMostBlock = 're assaign 4th inner block' // re assaing
                    outerMostBlock = 're assaign 4th with inside a scope' 
                    console.log(outerMostBlock);
                    {
                        let outerMostBlock = "re declare 5th inner block" // redeclare inside 5th block
                        // let outerMostBlock =====>  cant re declare in the same scope 
                        console.log(outerMostBlock);
                    }
                }
            }
        }
    }

    // using const keyword

    /** reules for const keyword 
     * we have to declare and inicialize a value in the same time using const keyword
     * we cant redeclare or re assagin with its scope 
     * if the variable not found its scope then it search with it nearist outer most scope and goes on one after anothe
     * 
     */

    const stu = 'sakhlane';
    console.log(stu)

    {
        //    const stu = 'saakhib'
           console.log(stu)
           {
            console.log('inner 3 ',stu)
            {
                const stu = 'sahil';
                    //   stu = 'tahir' ===> we cant re assaign within its scope also  <===> error <====>
                console.log('inner 4',stu)
                {
                    console.log('inner 5',stu)
                }
            }
           }
    }
