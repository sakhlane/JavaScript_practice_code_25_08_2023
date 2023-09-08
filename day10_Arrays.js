console.log('we are going to learn arrays :)')


let arr = [ ] // empty array
console.log(arr)

let arr1 = [ 1, 2, 3, 4, 5, 6, 7]
console.log(arr1);

arr1.push(8)
console.log(arr1)

arr1.pop()
console.log(arr1)

// arr1.reverse()
// console.log(arr1.slice(1,5));
console.log(arr1)

// console.log(arr1.splice(2, 2))

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits.splice(2, 2);
console.log(fruits)

array2 = ['sakhlane' , 'saakhib', 'sahil' , 'noorain', 'tahir']
console.log(array2)
array2.splice(1,2)
console.log(array2);

const array3 = [20, 30, 40, 50, 60, 70]
console.log(array3);
array3.splice(1,2);
console.log(array3)

array3.splice(1, 2, 100, 200, 300)
console.log(array3) // 20, 80, 90, 100, 50, 60, 70

/**
 * var mObj = [{
    “name”: “John”,
    “score”: 98
},{
    “name”: “Alice”,
    “score”: 99
},{
    “name”: “Johnathan”,
    “score”: 90
}]

Sort the above array in ascending order based on the score.
Sort the above array in descending order based on the name.

 */
 var mObj = [
    {
        name: 'john',
        score : 98
    },
    {
        name : 'alice',
        score : 99
    },
    {
        name : 'johnathan',
        score : 90
    }
 ]

 mObj.forEach(function(val,index){
    console.log(val.name ,index)
    
 })

// mObj.sort(mObj.score);
let arrsort = mObj.reverse();
console.log(arrsort)

mObj.sort((a,b,c)=>{
    console.log(a.name , b.name)
})

var mArr = [1,  2, 3, 4];
var marr = [ 5, 6, 7]
let mmm = mArr.concat(marr);
console.log(mmm)
console.log(mArr);
let nnn = mArr.concat([5, 6, 7]); 
console.log(nnn)
let ooo = mArr.concat(8, 9);
console.log(ooo)
mArr.push(10, 11, 12);
console.log(mArr);


var mArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Replace 3, 4 and 5 by 13, 14 and 15.
// Remove 7, 8 and 9.

mArr.splice(2,3,13,14,15);
console.log(mArr)

mArr.splice(6,3)
console.log(mArr)
