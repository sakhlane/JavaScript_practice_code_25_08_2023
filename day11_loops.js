console.log('learning loops in js')

let a = 1;
while(a < 10){
    console.log('am in while loop');
    a++;
}

let b = 2;
do{
    console.log('do body');
    b++;
}
while(b < 12);

for(let i = 0; i<=10; i++){
    console.log(i);
}

// for each => for each loop is used for arrays

myarray = [2,3,4,5,5,6,6,7,9];

myarray.forEach(function(val,index,fullarray) {
    console.log(val, index, fullarray);
    
});

// forin => used for objects 

// myobj = {
//     name : 'sakhlane',
//     profession : 'web developer',
//     age : 26
// }

// for(let i in myobj){
//     console.log(myobj[i]);
// }

// Q. Find the smallest number from the following array: [13, 40, 10, 5, 1, 12, 24];

let array = [13, 40, 10, 5, 1, 12, 24];

var minvalue = array[0]; 
for (var i = 0; i < array.length; i++) {
    var minvalue = array[0];
    if(array[i]<minvalue)
    {
        console.log(array[i])
        minvalue = array[i];
        console.log(minvalue)
    }

}
  console.log(minvalue);
// console.log(array.length);

// Q. Find the name of people who are not invited to the wedding from the following list
// var invitationList = [
// {name: ‘Jacob’, invited: true},
// {name: ‘Alison’, invited: false},
// {name: ‘Winston’, invited: true},
// {name: ‘Lee’, invited: false},
// {name: ‘Bowry’, invited: true},
// {name: ‘Wan’, invited: false},
// {name: ‘Jovovich’, invited: true},
// ]


var invitationList = [
{ name: 'Jacob',
  invited: true},
{name: 'Alison',
 invited: false},
{name: 'Winston',
 invited: true},
{name: 'Lee', 
 invited: false},
{name: 'Bowry',
 invited: true},
{name: 'Wan', 
invited: false},
{name: 'Jovovich', 
 invited: true},
]


   invitationList.forEach(function(val){
        if(val.invited === false)
        console.log('the members who did not invite for wedding',val.name )
   })

//    Q. Add numbers from 1 to 100 until you get a sum more than or equal to 100.
    let sum = 0;
for(let i = 0; i<=100; i++){
    // console.log(i)
   console.log('sum is',sum ,'i is', i)
   sum = sum + i;
   if(sum >= 100){
    console.log(sum);
    break;
   }
}

// Q. Find first 20 even numbers.

    let count =1;
    for(let number = 2; ; number++ ){
         
        if(number % 2 == 0){
            console.log(count, number);
        }
        count++;
        if(count == 20)
        break;
        // console.log(count)
      
    }

