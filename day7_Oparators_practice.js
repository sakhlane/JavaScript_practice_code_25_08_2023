console.log('day 7 oparators practice problem')

//##### Try to answer the following questions without executing the code in codepen.

/**
 * Q. 
    What will be printed in the console.
    var num1 = 1 + 5; 
    var num2 = num1 / 4;
    var num3 = 3 + 5;
    var num4 = num3 / 4;
    console.log(num2 + " " + num4);

 */

    var num1 = 1 + 5; //6
    var num2 = num1 / 4; //1.5
    var num3 = 3 + 5; // 8
    var num4 = num3 / 4; // 2
    console.log(num2 + " " + num4); // 1.5  2

    /**
     * Q. What will be printed in the console.*/
        var a = 1;
        var b = 2;
        var c;
        var d;
        c = ++b;
        d = a++; //a=1; d=
        c++;
        b++;
        ++a;
        console.log(a + " " + b + " " + c + " " + d);

        // Q. What will be printed in the console.
        var input = 7;
        var output1 = ++input + ++input + ++input; //27
        var output2 = input++ + input++ + input++; //33
        var output3 = input++ + ++input + input++; //43
        console.log(output1 + ' ' + output2 + ' ' + output3);

        /**
         * Assignment Operators (Shorthand)
            +=
            var sum += value
            This is a shorthand for var sum = sum + value

            Similarly,
            -=,
            *=,
            /=,
            %=
         */

           // Try to answer the following questions without executing the code in codepen.

// Q.
// With x = 0, which of the following statements will produce a value of 1?
             x = 0;
             console.log(x++); //0
             x = x + 1; console.log(x); // 2
             x += 1; console.log(x); // 3
             x =+ 1; console.log(x); // 1

             
// With x = 1, which of the following statements will produce a value of 0?
            x = 1; 
            console.log(x--); // 1
           x = x - 1; console.log(x); //-1
           x -= 1; console.log(x); // -2
           x =- 1; console.log(x); // -1

        //    What will be the result of following statements?
            var num =+ 5 * 10 / 2;  console.log(num);


            // What will be printed in the console?
            var a = 10;
            var b = 5;
            var c = 12; 
            var e = 8;
            var d;
            d = parseInt((a * (c - b) / e + (b + c)) <= (e * (c + a) / (b + c) + a));
            console.log(d);
            if (d == 1){
                console.log((a * (c - b) / e + (b + c)));
            } else {
                console.log((e * (c + a) / (b + c) + a)); //20.3
            }
            
            // What will be printed in the console?
            var n = 2;
            var p = 4;
            var q = 5;
            var w = 3;
            if ( !((p * q) /n <= (q * w) + n/p ))
            {
                console.log( ++p + w++ + " " + ++n);
            }
            else
            {
                console.log(--p + q-- + " " + --n);
            }

            // What will be printed in the console?
            var a = 2;
            var b = 4;
            var c = 5;
            var d = 3;
            if ( ((b * c) /a <= (c * d) + a/p ))
            {
                console.log( ++b + d++ + " " + ++a);
            }
            else
            {
                console.log(--b + c-- + " " + --a);
            }


