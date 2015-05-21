(function(){
  'use strict';

/*Then you can call the function like this,
where you would replace logResults with the name
of the function you want to be called with the results. */



  var url = "https://api.etsy.com/v2/listings/active?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=tacos&includes=Images,Shop";
fetchJSONP(url, logResults);

//copied code to fetch the data from the above place...where JSON lives

function fetchJSONP(url, callback) {
    var callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
    var script = document.createElement('script');

    window[callbackName] = function(data) {
        delete window[callbackName];
        document.body.removeChild(script);
        callback(data);
    };

    script.src = url + (url.indexOf('?') >= 0 ? '&' : '?') + 'callback=' + callbackName;
    document.body.appendChild(script);
}

};
