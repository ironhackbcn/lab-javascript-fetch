'use strict';

//Iteration 1

function main() {
  console.log('Your code goes here');
  console.log('Happy coding!');

  fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(response) {
    response.json()
    .then(function(data) {
      var imageElement =  `
        <img src="${data.message}" alt="Random Photo of a Dog" >
        `;
      var nodeToAppend = document.querySelector('main');
      nodeToAppend.innerHTML = imageElement;
    })
    .catch(function(error) {
    console.error(error);
    })
  })
 .catch(function(error) {
	console.error(error);
})
}


window.addEventListener('load', main);

//Iteration 1 - Refactor


/*async function getDog(){
  try {
    var response = await fetch('https://dog.ceo/api/breeds/image/random');
    var data = await response.json();
    var secondResponse = await fetch('https://dog.ceo/api/breeds/image/random/${data.message}');
    var dogPic = await secondResponse.json();
    var imageElement = `
    <img src="${data.message}" alt="Random Photo of a Dog" >
    `;  
    var nodeToAppend = document.querySelector('main');
    nodeToAppend.innerHTML = imageElement;
  }
  catch(error){
    console.log(error);
  }
}



getDog();

window.addEventListener('load', main);*/

//Iteration 2 - 


  fetch('https://dog.ceo/api/breeds/image/random')
  .then(function(getRates) {
    getRates.json()
    .then(function(initRates) {
      var ratesElement =  
      `<select id="rates">`
      '${initRates.rates}'
      ratesElement += '</select>';
      var nodeToAppend = document.querySelector('main');
      nodeToAppend.innerHTML = ratesElement;
    })
    .catch(function(error) {
    console.error(error);
    })
  })
 .catch(function(error) {
	console.error(error);
})

initRates()

/*

async function getRates() {
	var response = await fetch('https://financialmodelingprep.com/api/v3/financials/income-statement/AAPL');
  var data = await response.json();
	var listTodos = data.map(function(initRates) {
    console.log(listTodos)
		return `
      <article>
          <h3>${initRates.rates}</h3>
			</article>
		`;
    }).toString().split(',').join('');
    var nodeToAppend = document.querySelector('h1');
    console.log(data);
	nodeToAppend.innerHTML = listTodos;				
}

getRates()*/