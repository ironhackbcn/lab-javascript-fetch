"use strict";

function main() {
  var mainElement = document.querySelector("main");

  async function initDogApi() {
    try {
      var response = await fetch("https://dog.ceo/api/breeds/image/random");
      var dogPic = await response.json();
      var dogImg = `<img src="${
        dogPic.message
      }" alt="Random Photo of a Dog" />`;
      var nodeToAppend = document.querySelector("header");
      nodeToAppend.innerHTML = dogImg;
    } catch (error) {
      console.error(error);
    }
  }
  initDogApi();
  function getRates() {
    initRates();
    async function initRates() {
      try {
        var response2 = await fetch("https://api.exchangeratesapi.io/latest");
        var exchange = await response2.json();
        var exchangeString = '';
        for (var rate in exchange) {
          exchangeString += exchange[rate];
          var nodeToAppend = document.querySelector("main");
          nodeToAppend.innerHTML = exchangeString;        }
      } catch (error) {
        console.error(error);
      }
    }
  }
  getRates();
}

window.addEventListener("load", main);
