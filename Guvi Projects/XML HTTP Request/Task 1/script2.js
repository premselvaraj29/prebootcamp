var request = new XMLHttpRequest();
var url_string = "https://dog.ceo/api/breeds/list/all";
// Open a new connection, using the GET request on the URL endpoint
request.open("GET", url_string, true);
request.onerror = function () {
  console.log("** An error occurred during the transaction");
};
request.send();
request.onload = function () {
  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  console.log(data);
};

/* task

1. Callback task - Task for callback ( in Slide )
2. Anyo & IIFE - Do the below programs in anonymous function & IIFE ( in Slide)


Rest countries:

Get the countries in asia - filter 
Get the countries with population less than 2L - fliter
Bumpup the current population  of all the counteirs by 1L - Map 
convert all the names in capital - map
print follwoig details  name , capital , flag  - foreach,filter

Print the total population of the countries  - reduce
Print the total population of the countries in asia - filter & reduce
 */
