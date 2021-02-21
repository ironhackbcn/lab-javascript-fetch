'use strict';

function main() {

  //iteration 1
  // var main = document.querySelector('main');
  // var getDog = function(){
  //    return fetch('https://dog.ceo/api/breeds/image/random');
  // }
  // async function initDogApi(){
  //   try{
  //     var response = await getDog();
  //     var data = await response.json();
  //     var img = `
  //       <img src="${data.message}" alt="Random Photo of a Dog"> 
  //     `;
  //     main.innerHTML = img;
  //   }
  //   catch(error){
  //     console.log(error);
  //   }
  // }
  // initDogApi();
  
  // fetch('https://dog.ceo/api/breeds/image/random')
  // .then( function(response){
  //   response.json()
  //   .then( function(data){
  //     var img = `
  //       <img src="${data.message}" alt="Random Photo of a Dog"> 
  //     `;
  //     main.innerHTML = img;
  //   })
  //   .catch( function(error){
  //     console.log(error);
  //   })
  // })
  // .catch( function(error){
  //   console.log(error);
  // })


  //iteration 2
  var main = document.querySelector('main');

  var getRates = function(base = 'EUR'){
     return fetch(`https://api.exchangeratesapi.io/latest?base=${base}`);
  }
  
  function addEvent(currency, selectedValue){
    var dropDown = document.querySelector('#rates');
    dropDown.addEventListener('change', function(event){
      selectedValue.innerHTML = currency[event.target.value];
    });
  }

// function changeBase(currency) {
//   var newMarkup = '<p>Base: </p><select id="base">';
//   for( var key in currency){
//     newMarkup += `
//           <option>${key}</option>
//         `;
//       }
//       newMarkup += '</select>'
//   //return newMarkup;
//   console.log(newMarkup);
//   //var dropDown = document.querySelector('')
//}

  // function buildDom(){
     
  // }

  async function initRates(){
    try{
      var response = await getRates();
      var data = await response.json();
      var markup = '<p>Rates: </p><select id="rates">';
      for( var rate in data.rates ){
        markup += `
          <option>${rate}</option>
        `;
      }
      markup += '</select>'
      
      // var nodeToAppend = document.createElement('section');   
      // nodeToAppend.innerHTML = markup;
      main.innerHTML = markup;
      var selectedValue = document.createElement('p'); 
      main.appendChild(selectedValue);
      addEvent(data.rates, selectedValue);
      // changeBase(data.rates);
      // main.appendChild();
    }
    catch(error){
      console.log(error);
    }
  }
  initRates();


  //iteration3
  // var getPosts = function(numPosts){
  //   return fetch(`https://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts?per_page=5`);

  //   //return fetch(`http://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts?per_page=${numPosts}`);
  //   //  const request = new Request(`http://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts?per_page=${numPosts}`, {
  //   //         method: 'GET',
  //   //         mode: 'cors',
  //   //         redirect: 'follow',
  //   //         cache: 'no-cache',
  //   //     })
  //   //   return fetch(request);
  // }
  
  // async function initPosts(){
  //   try{
  //     var response = await fetch(`https://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts?per_page=5`);
  //     var posts = await response.json();
  //     console.log(posts);
  //     //<li><a data-id="POST_ID" href="POST_URL">POST_TITLE</a></li>.
  //     var listItems = '<ul>';
  //     posts.forEach( function(post){
  //     listItems += `
  //           <li><a data-id="${post[id]}" href="${post[link]}">${post[title][rendered]}</a></li>
  //         `;
  //     })
  //     listItems += '</ul>'    }
  //   catch(error){
  //     console.log(error);
  //   }
  // }
  // initPosts();


};

window.addEventListener('load', main);