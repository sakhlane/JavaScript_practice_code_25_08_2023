console.log('day 8 coercion');
/**
 * Type coercion is conversion of a value from one type to another data type. 

        This can be done either programmatically by us or automatically by JavaScript. This results in two types of coercion:
        Implicit Type Coercion which is done automatically.
        Explicit Type Coercion which is done programmatically by us. 

 */
            // ---------------------
            // Implicit conversion
            // --------------------------


        // Let's see some more example for conversion to string types
            console.log(typeof('hola' + true))  // string + bool  ==> string
            console.log(typeof(null + 'hola' )) // null + string ==> string
            console.log(typeof(5 + 'hola')) // number + string ==> string

            // '+' act as a concatination 

            // Let's see some example for conversion to integer types
            console.log(typeof(+'2')) // + string ==> number
            console.log(typeof(-'10')) // - string ==> number
            console.log(typeof(+'2')) // + string ==> number
            console.log(typeof(2 >= '2')) //number (comparision) string ==> boolean
            console.log(typeof(2 === '2')) // number (comparision) string ==> boolean
            console.log(typeof('2' == 'true'))// string (comparision) string ==>boolean
            console.log(typeof(true + 'str')) // bool + string ==>string
            console.log(typeof(true + true )) // bool  bool ==> number

            // What will be printed in the console.
            console.log(true + false) // 1
            console.log(12 / "6") // 2
            console.log("number" + 15 + 3) //number153
            console.log(15 + 3 + "number") //18number
            console.log(1 > null) //true
            console.log("foo" + + "bar") //fooNaN
            console.log('true' == true) // false
            console.log(false == 'false') //false
            console.log(null == '') //false
            console.log(!!"false" == !!"true") //true
        
        
            // -----------------------------------
            // Explicit Type Coercion
            // -----------------------------------

            // Let's see some more example for conversion to string types
            console.log(typeof(String(true))) //string
            console.log(typeof(String(-98.13)))// string
            console.log(typeof(String(null)))//string
            console.log(typeof(String(undefined))) // string

            // Similarly, to convert a value to number datatype, we need to use the inbuilt Number() function. Let's try some examples.
                console.log(typeof(Number('2'))) //number
                console.log(typeof(Number('-20.198')))//number
                console.log(typeof(Number('apple')))//number
                console.log(typeof(Number(true)))//number
                console.log(typeof(Number(false)))//number

                // Similarly, to convert a value to boolean datatype, we need to use the inbuilt Boolean() function. 

                // Let's see some examples for conversion to boolean types
                console.log(typeof(Boolean(1))) //boolean
                console.log(typeof(Boolean(0))) //boolean
                console.log(typeof(Boolean('abc'))) // boolean
                console.log(typeof(Boolean(''))) //boolean
                console.log(typeof(Boolean(null))) //boolean
                console.log(typeof(Boolean(undefined))) //boolean

                //  What will be printed in the console?
                String(123)   //123
                String(-12.3) //-12.3
                String(null) //null
                String(undefined) //undefined
                String(true) // true
                String(false)//false
               
                // What will be printed in the console?
                Boolean('')//false 
                console.log(Boolean(''))
                Boolean('Hello')//true
                console.log(Boolean('Hello'))
                Boolean(0)//false
                console.log(Boolean(0))
                Boolean(200)//true
                console.log(Boolean(200))
                Boolean(-0)//false
                console.log( Boolean(-0))
                Boolean(-200)//true
                console.log(Boolean(-200))
                Boolean(NaN)//false
                console.log( Boolean(NaN))
                Boolean(null)//false
                console.log( Boolean(null))
                Boolean(undefined)//false
                console.log(Boolean(undefined))
                Boolean(false)//false
                console.log( Boolean(false))
                
                // What will be printed in the console?
                Number(null) //0
                console.log(Number(null))
                Number(undefined)//Nan
                console.log(Number(undefined))
                Number(true)//1
                console.log(Number(true))
                Number(false)//0
                console.log(Number(false))
                Number(" 12 ")//12
                console.log( Number(" 12 "))
                Number("-12.34")//-12.34
                console.log( Number("-12.34"))
                Number("\n")//0
                console.log( Number("\n"))
                Number(" 12s ")//NaN
                console.log(Number(" 12s "))
                Number(123) //123
                console.log( Number(123))

                


