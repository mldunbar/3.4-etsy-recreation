(function(){
  'use strict';

  var url = 'https://api.etsy.com/v2/listings/active.js?api_key=o3atgk4l6n51xg5mz1jgjnag&keywords=whiskey&includes=Images,Shop&sort_on=score';
  fetchJSONP(url, app);

  /*
    Call this function with the URL where the JSON lives.
    We will pass a function as the second argument.
    That function will be called when the request finished.
    The argument to that function will be the JSON data.
    You will need to change the values for url.
  */

  var ulElement = document.querySelector('.items');

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

 function app(response) {
    var items = response.results;
    console.log(items);
    displayItems(items);
 }

 function displayItems(items) {
    var source   = document.querySelector("#item-template").innerHTML;
    var template = Handlebars.compile(source);
    items.forEach(function(item){
      var output = template(item);
      ulElement.insertAdjacentHTML('beforeend', output);
    });
  }
})();
