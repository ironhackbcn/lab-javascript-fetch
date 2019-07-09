'use strict';

/* traditional spelling
function main() {
  //api call
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var image = `<img src="${data.message}" alt="Random Photo of a Dog" />`
      var main = document.querySelector('main');
      main.innerHTML = image; // mételo ahí
    })
    .catch(function(error) {
      console.error(error);
    })
};
*/

function main() {
/* async spelling */
  async function getDog() {
    try {
      var response = await fetch('https://dog.ceo/api/breeds/image/random');
      var data = await response.json();
      var image = `<img src="${data.message}" alt="Random Photo of a Dog"/>`
      var main = document.querySelector('main');
      main.innerHTML = image;
    } catch(error) {
      console.log(error);
    }
  }

  function getRates() {
    return fetch('https://api.exchangeratesapi.io/latest'); // sólo petición
  }
  async function initRates() { // se trabaja con los datos
    var response = await getRates();
    var data = await response.json();
    var rates = data.rates;
    var main = document.querySelector('main');
    let markup = `<select id="rates">`;
    
    for (var rate in rates) {
     markup += `<option value="${rates[rate]}">${rate}</option>`
    }
    markup += `</select>`;
    main.innerHTML = markup;
     window.addEventListener('change', (event)=>{
      console.log(event.target.value)
    })
  }
  initRates();

  function getPost(post) {
    return fetch(`https://cors-anywhere.herokuapp.com/https://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts?per_page=${post}`);
  }

  async function initPost() {
    var posts = await getPost(5);
    var data = await posts.json();
    var main = document.querySelector('main');
    var ul = document.createElement('ul');
    main.appendChild(ul); // ul printed in html
    var li = '';
    data.forEach(function(post) {
      li += `<li><a data-id="${post.id}" href="${post.link}">${post.title.rendered}</a></li>`; 
  })
  var ulSelected = document.querySelector('ul');
  ulSelected.innerHTML = li;
  var lis = document.querySelectorAll('a');
  lis.forEach((itemLi) => {
    itemLi.addEventListener('click',(e)=> {
      generateDetails(itemLi.dataset.id);
      e.preventDefault();
      
    })
  }) 
}

async function generateDetails(id){
  var response = await fetch(`https://cors-anywhere.herokuapp.com/https://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts/${id}`);
  var data = await response.json();
  var article = document.createElement('article');
  var ulSelected = document.querySelector('ul');
  ulSelected.append(article);
  var articleSelected = document.querySelector('article');
  articleSelected.innerHTML = `
  Titulo: ${data.title.rendered}
  Content: ${data.content.rendered}
  `;  
}
  initPost();
}

window.addEventListener('load', main);