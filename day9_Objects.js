console.log('day 9 Objects in js')

/**
         Syntax:-
         -------------
        {
            key: value
        }
        value ->
        Properties: Number, String, Boolean, Object, Array //Object Property
        Method: Function //Object Method

 */

        var mCars = {
            p1: "350 kmph",
            gallardo: "320 kmph",
            veyron: "409 kmph",
            agera: "429 kmph"
        }
        // console.log(mCars);
        // console.log(typeof(mCars));
        // console.log(mCars.gallardo); //To access a value
        // console.log(mCars[gallardo]); //To access a value
        // mCars.gallardo = 350; //To update/add a value
        
        var student = {
            Name : 'mohamed sakhlane pasha',
            city : 'tumkur',
            talluk : {
                land : 'sira',
                local : 'pesh e mam mohalla'
            },
            univercity : 'edyoda digital university',
            course : 'mern stak developer'
        }
        console.log(student)

        console.log(student.univercity)// access properties or values
        console.log(student.Name) // to access value
        student.Name = 'saakhib'; //update new value to a property
        console.log(student)
        console.log(student.talluk.local)

        var mAgera = {
            name : "Agera",
            manufacturer : {
                 "name": "Koenigsegg",
                 "location": "Sweden",
                 fun : function (){
                    console.log(this.color); //undefined 
                 }
             },
            topSpeed: 429,
            color: "black",
            spoilers: false,
            applyBrakes: function() { console.log("Applying Brakes");},
            getDetails: function() { console.log(this.name +  "with color"  + this.color) }
            
       }
       
       mAgera.manufacturer.fun();
       mAgera.getDetails()
/*
       Create an object to represent an Athlete. The object should have following properties:
        First Name
        Last Name
        Age
        Sports
        Experience
        A method which prints the Full Name of the Athlete.
        A method which prints all the details about the Athlete.
*/

var Athlete = {
    First_Name : 'sakhlane',
    Last_Name : 'pasha',
    Age : 26,
    Sports : 'shuttle cock',
    Experience : 'fresher',
    Full_Name : function(){
        console.log(this.First_Name + this.Last_Name);
    },
    Details : function(){
        console.log(this.First_Name +  this.Last_Name + this.Age + this.Sports + this.Experience);
    }
}

Athlete.Details()
