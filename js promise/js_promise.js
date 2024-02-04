console.log('javascript promises');

// // creating promise  ---> producing code 
// let myPromise = new Promise(function(myResolve, myReject){
//     let x = 1;
//     if(x == 0){
//         myResolve();
//     }
//     else {
//         myReject();
//     }
// })

// // consuming code 
// myPromise.then(
//     // function for success
//     function(value){
//         console.log('promise resolved')
//     },
//     // function for fail
//     function(error){
//         console.log('promise rejected');
//     }
// )

// // producing code 


// function trueReturn(){
//     return 0;
// }
// let trueval = trueReturn;

// // promise 2 function 
// let promise2 = new Promise(function(resolve,reject){
//     if(trueval){

//         resolve();
//     }
//     reject();
// })

// // consuming code 
// promise2.then(
//     function(){
//         console.log('resolved');
//     },
//     function(){
//         console.log('reject')
//     }
// )

// promise using async await

async function hello(){
    let test = 1;
    function success(){
        return 'success code exicuted';
    }
    let successval = success;
    
    function fail(){
        console.log('fail')
    }
    let helloPromis = new Promise(function(resolve){
        if(test == 1){
           resolve(console.log(success()))
            
        }
        else{
           resolve(fail()) 
        }
    });
     await helloPromis;
    // console.log(result);
}
hello();