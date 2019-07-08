'use strict';

function main() {
  function getDog() {
    return fetch('https://dog.ceo/api/breeds/image/random')
   }
   
   async function initDogApi() {
     try {
      var dogPic = await getDog()
      var data = await dogPic.json()
      var image =  `<img src="${data.message}" alt="Random Photo of a Dog">`
      var nodeToAppend = document.querySelector('main');
      nodeToAppend.innerHTML = image;
   }
  
    catch(error) {
    console.error(error)
  }
}

 //initDogApi()

 function getRates() {
  return fetch('https://api.exchangeratesapi.io/latest')
 }
 
 async function initRates() {
   try {
    var exchange = await getRates()
    var ratesObject = await exchange.json()
    var object = ratesObject.rates;
    var markup = `<select id="rates">`
    for(var key in object) {
      markup += `<option value=${object[key]}>${key}</option>`
    }
    markup +=`</select>`
    var nodeToAppend = document.querySelector('main');
    nodeToAppend.innerHTML = markup;
    var rates = document.querySelector('#rates')
    console.log(rates)
    rates.addEventListener('change', function(event) {
      console.log(event.target.value)
    })
 }
  catch(error) {
  console.error(error)
}
}

//initRates() 

function getPosts(numPosts) {
  return fetch(`http://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts?per_page=${5}`)
 }

 async function initPosts() {
   try {
    debugger;
    var posts = await getPosts(5);
    var postsArray = await posts.json()
    console.log(postsArray)
    var postList = ''
    postsArray.forEach(post => {
      postList += `<li><a id="post ${post.id}" data-id=${post.id} href=${post.link}>${post.title.rendered}</a></li>`
    });
    var nodeToAppend = document.querySelector('main');
    nodeToAppend.innerHTML = postList;
    postsArray.forEach(post => {
      var postLink = document.querySelector(`#post ${post.id}`)
      postLink.addEventListener('click', function(event) {
        event.preventDefault()
    })
  })
 }
  catch(error) {
  console.error(error)
}
}


initPosts() 
};



window.addEventListener('load', main);