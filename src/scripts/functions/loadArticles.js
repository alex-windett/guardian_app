import * as constants from '../constants';

let today           = new Date()
let previousWeek    = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
let day             = previousWeek.getDate();
let month           = previousWeek.getMonth();
let year            = previousWeek.getFullYear();
let formattedDate   = year + '-' + month + '-' + day;


const loadArticles = query => {
    let xhr = new XMLHttpRequest();
    let url = constants.apiURL + query + '?q=&show-fields=trail-text&from-date=' + formattedDate + '&api-key=' + constants.apiKey

    // start get request
    xhr.open('GET', encodeURI(url) );

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data    = JSON.parse(xhr.responseText);
            const results = data.response.results;

            // Create an empty list
            let list = '';

            // for each of the ajax respsonses loop over and create a list item
            // add that item to the list variable
            results.map( (result) =>
                list += '<li class="tab__content--item"> <a href=' + result.webUrl + '>' + result.webTitle + '</a> <p>' + result.fields.trailText + '</p> </li>'
            )

            // Set the HTML
            document.getElementById(query).innerHTML = '<ol>' + list +'</ol>'
        }
        else {
            console.log('Request failed.  Returned status of ' + xhr.status);
        }
    };
    xhr.send();
}

loadArticles('football')
loadArticles('news')
loadArticles('culture')
