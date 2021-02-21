'use strict';
function main (){
var nodeToAppend = document.querySelector('main');
async function dogInit() {
 try {
    var response = await fetch('https://dog.ceo/api/breeds/image/random') ;
    var data = await response.json();
    var imageElement = `
      <article>
      <img src="${data.message}" alt="Random Photo of a Dog" />
      </article>
      ` ;
      nodeToAppend.innerHTML += imageElement;	
    } 
  catch(error){
  console.error(error);
  }

};
dogInit();
var valor = null;
async function initRates(valor){
  try {
    var getRates = await fetch ('https://api.exchangeratesapi.io/latest');
    var data = await getRates.json();
    if (valor !== null){
      console.log(data.rates[valor])
    } else {
      var markup = `<select id="rates">` 
      for ( var key in data.rates){
        markup += `<option>${key}</option>`
      }
    };
    markup += `</select>` ; 
    nodeToAppend.innerHTML += markup;
    var selector = document.querySelector('#rates');	
    document.addEventListener("change", changeListener);
  }
  catch(error){
    console.error(error);
  }
}
initRates(valor);
function changeListener(event) {
initRates(event.target.value);
  }

  async function getPosts( numPosts ) {
  try {
    var posts = await fetch ('https://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts?per_page=5')
    var data = await posts.json();
    
   } catch(error){
      console.error(error);
        }
  }
  
  }
window.addEventListener('load', main);