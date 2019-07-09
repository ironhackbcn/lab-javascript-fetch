'use strict';

function main() {
  console.log('Your code goes here');
  console.log('Happy coding!');




//   function getDog() {
//     return fetch('https://dog.ceo/api/breeds/image/random');
    
//   }


//  async function initDogApi() {
//    var dogPic = await getDog();
//    var imageData = await dogPic.json();
//    console.log(imageData);
//    var image =  `
//    <img src="${imageData.message}" alt="Random Photo of a Dog" />
//    `;
//    var nodeToAppend = document.querySelector('main');
//    nodeToAppend.innerHTML = image;
//  }
 
 
   

//    initDogApi();

 
 
 
//   function getRates() {
//     return fetch('https://api.exchangeratesapi.io/latest');
//   }
 
//   async function initRates() {
//     var exchange = await getRates();
//     var dataExchange = await exchange.json();
//     let markup = `<select id="rates">`
//     for (const element in dataExchange.rates) {
//       markup += `
//       <option value="${dataExchange.rates[element]}">${element}</option>`
//     };
//     markup += `
//     </select>`
//     console.log(markup);
//     var nodeToAppend = document.querySelector('main');
//     nodeToAppend.innerHTML = markup;
//     window.addEventListener('change', function(e){printValue(e)});
//   }
 
//   function printValue(e) {
//     console.log(e.target.value);
//   }
//   initRates();
 
 
 
 
 function getPosts(numposts) {
  var proxyUrl = 'https://cors-anywhere.herokuapp.com/',
  targetUrl = `http://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts?per_page=${numposts}`
  return fetch(proxyUrl + targetUrl);
 }
 
 async function initPosts() {
  var requestPosts = await getPosts(5);
  var posts = await requestPosts.json();
  console.log(posts)
  var list = `<ul>`;
  list += posts.map(function(element) {
    return  `<li><a data-id="${element.id}" href="${element.link}">${element.title.rendered}</a></li>`;
  });
  
  list += `</ul>`

  var nodeToAppend = document.querySelector ('main')
  nodeToAppend.innerHTML = list;
  nodeToAppend.addEventListener('click', function(e){
    e.preventDefault();

  })


}

 initPosts()



}

main(); 