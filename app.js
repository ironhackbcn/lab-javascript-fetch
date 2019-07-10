'use strict';

function main() {
    var domMain = document.querySelector('main');

    function ourLabAsync() {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(function(response) {
                response.json()
                    .then(function(data) {
                        console.log(data)
                        domMain.innerHTML += `<img src="${data.message}" alt="Random Photo of a Dog" />`
                    })
                    .catch(function(error) {
                        console.error(error);
                    })
            })
            .catch(function(error) {
                console.error(error);
            })
    }

    function changeListener(event) {
        console.log(event.target.value);
        somethingUseful(event.target.value)
    }
    var valu = null;

    function somethingUseful(valu) {
        fetch('https://api.exchangeratesapi.io/latest')
            .then(function(response) {
                response.json()
                    .then(function(data) {
                        if (valu !== null) {
                            console.log(data.rates[valu])
                        } else {
                            console.log(data)
                            initRates(data.rates)
                            var selector = document.querySelectorAll('#rates')
                            console.log(selector);
                            document.addEventListener("change", changeListener);
                        }
                    })
                    .catch(function(error) {
                        console.error(error);
                    })
            })
            .catch(function(error) {
                console.error(error);
            })
    }

    function initRates(data) {
        console.log(data)
        let markup = `<select id="rates">`;
        for (let key in data) {
            markup += `<option id="${data[key]}">${key}</option>`
        }
        markup += `</select>`
        domMain.innerHTML += markup;
    }

    async function getPosts(numPosts) {
        try {
            var response = await fetch('https://dev-js-explained-api.pantheonsite.io/wp-json/wp/v2/posts?per_page=5');
            var data = await response.json();
            data.forEach(element => {
                initPosts(element)
            })
            console.log(data)
        } catch (error) {
            console.error(error);
        }
    }

    function initPosts(posts) {
        console.log(posts)
        domMain.innerHTML += `<li><a data-id=${posts.id} href="${posts.link}">${posts.title.rendered}</a></li>`;
    }

    somethingUseful(valu);
    ourLabAsync();
    getPosts(5);
};

window.addEventListener('load', main);