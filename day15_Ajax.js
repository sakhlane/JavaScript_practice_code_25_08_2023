
console.log('learning Ajax ')

// ajax is used for requset send to the server snd recive response form the server .

// ajax request object 

/*
  ####################################
  ############ ajax code #############
  ####################################
let requestObj = new XMLHttpRequest();

console.log(requestObj);

// request for send and recive data from a server 

function request(){
   requestObj.onreadystatechange = content; // onreadystate change is an event handler 
   requestObj.open('GET','https://dummyjson.com/products',true) // initialize of a request 
   requestObj.send(); // request to a server for data 

}

function content(){
   if(requestObj.readyState === 4){
      if(requestObj.status === 200){
         // console.log(requestObj.responseText);
         let result = JSON.parse(requestObj.responseText);
         console.log(result);
         console.log(result.products)

         // iterate products
         result.products.forEach(function(element){
            console.log(element)
            let display = document.getElementById('container');
            display.innerHTML += `<p>${element.brand}</p>`;
            element.images.forEach(function(img){
               console.log(img)
            let imgDisplay = document.createElement('div');
            display.appendChild(imgDisplay)
            imgDisplay.innerHTML = `<img src= ${img}>`
            })    

         })        

      }
      else{
         console.log('something went wrong ')
      }
   }
}

request();

*/

// try and catch method 

try{
   console.log('try block')
   blakjsdkj;
}
catch(error){
   console.log(error,'error')
}
finally{
   console.log('finally')
}
