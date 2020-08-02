var request = new XMLHttpRequest();
var url_string =
  "https://cors-anywhere.herokuapp.com/https://api.domainsdb.info/v1/domains/search?domain=facebook&zone=com";
// Open a new connection, using the GET request on the URL endpoint
request.open("GET", url_string, true);
request.onerror = function () {
  console.log("** An error occurred during the transaction");
};
request.send();
request.onload = function () {
  // Begin accessing JSON data here
  // console.log(this.responseText);
  var data = JSON.parse(this.responseText);
  console.log(data);
  //var data = JSON.parse(this.response);
  //console.log(data);
};
