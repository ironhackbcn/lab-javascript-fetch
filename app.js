'use strict';


  console.log('Your code goes here');
  console.log('Happy coding!');

  function getDog(){
    return fetch('https://dog.ceo/api/breeds/image/random');
  
   }

    async function initDogApi(){
      
             var dogPic = await getDog();
             var data = await dogPic.json();
             var imageElement = 
             `<img src="${data.message}" alt="Random Photo of a Dog"/>`;
             var container = document.querySelector('main');
             container.innerHTML = imageElement; 
             };


 initDogApi();


// function getRatest(){
//   return fetch('https://api.exchangeratesapi.io/latest');
// }
// async function initRatest(){
//         var exchange = await getRatest();
//         var data = await exchange.json();
//         let markUp = `<select ${data.rates}/></select>`;
//         var container = document.querySelector('main');
//         container.innerHTML = markUp; 
//         };
// getRatest();

// let markup = `<select id="rates">`

// // your code

// markup += `</select>`