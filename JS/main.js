(function(){
  'use strict';

  var url = 'https://api.etsy.com/v2/listings/active?api_key=cdwxq4soa7q4zuavbtynj8wx&keywords=whiskey&includes=Images,Shop&sort_on=score';
  fetchJSON(url, app);

//copied code to fetch the data from the above place...where JSON lives


function fetchJSON(url, callback){
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function(){
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200){
            callback(JSON.parse(xmlhttp.responseText));
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

};
