import * as constants from '../constants';

let today           = new Date()
let previousWeek    = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000)
let day             = previousWeek.getDate();
let month           = previousWeek.getMonth();
let year            = previousWeek.getFullYear();
let formattedDate   = year + '-' + month + '-' + day;


const loadArticles = query => {
    let xhr = new XMLHttpRequest();

    xhr.open('GET', encodeURI(constants.apiURL + query + '?q=&show-fields=trail-text&from-date=' + formattedDate + '&api-key=' + constants.apiKey) );

    xhr.onload = function() {
        if (xhr.status === 200) {
            const data    = JSON.parse(xhr.responseText);
            const results = data.response.results;

            let list = '';

            results.map( (result) =>
                list += '<li> <a href=' + result.webUrl + '>' + result.webTitle + '</a> <p>' + result.fields.trailText + '</p> </li>'
                // console.log(result)
            )

            document.getElementById(query).innerHTML = list
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
