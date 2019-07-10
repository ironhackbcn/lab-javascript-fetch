'use strict';

function main() {

  function getDog(){
    return fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response){
      return response.json()
      .then(function(data){
        var randomImage =  ` <img src="${data.message}" alt="Random Photo of a Dog" />
        `;
        return randomImage;
      })
      .catch(function(error){
        console.error(error);
      })
    })
    .catch(function(error){
      console.error(error);
    }) 
  }

  async function initDogApi(){
    var dogPic = await getDog();
  }
  initDogApi();

  function getRates(){
    return fetch('https://api.exchangeratesapi.io/latest')
    .then(function(response){
      return response.json()
      .then(function(data){
        var markup = `<select id="rates">`
        for(var rate in data.rates){
          markup += `<option value="${data.rates[rate]}">${rate}</option> `
        } 
        markup += `</select>`
        var mainElement = document.querySelector('main');
        mainElement.innerHTML= markup; 
        console.log(markup);
        return markup;
      })
      .catch(function(error){
        console.error(error);
      })
    })
    .catch(function(error){
      console.error(error);
    })
  }

  async function initRates(){
    var exchange = await getRates();
    var selectElement = document.querySelector('#rates');
    selectElement.addEventListener('change', function(event){
      console.log(event.target.value);
    })
  }
  
  initRates();

  function getPosts(numPosts){
    return fetch(`https://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts?per_page=${numPosts}`)
    .then(function(response){
      return response.json()
      .then(function(data){
        var postList = `<ul>`
        data.forEach(function(post){
          postList += `<li><a data-id="${post.id}" href="${post.link}">${post.title.rendered}</a></li>`;
          console.log(postList);
        });        
        console.log(data);
        postList += `</ul>`;
        return postList;
      })
      .catch(function(error){
        console.error(error);
      })
    })
    .catch(function(error){
      console.error(error);
    })
  }

  async function initPosts(){
    var posts = await getPosts(5);
    var sectionList = document.createElement('section');
    sectionList.innerHTML = posts;
    var mainElement = document.querySelector('main');
    mainElement.appendChild(sectionList); 
    var arrayLi = document.querySelectorAll('li');
    arrayLi.forEach(function(el){
      el.addEventListener('click', function(event){
        event.preventDefault();
      });
    })
  }
  initPosts();

};




window.addEventListener('load', main);

