// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
// app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/api/whoami", function (request, response) {
  var ip = request.headers['x-forwarded-for'].split(',')[0];
  var lang = request.headers['accept-language'].split(',')[0];
  
  var ua = request.headers['user-agent'];
  var soft = ua.slice(ua.indexOf('(') + 1, ua.indexOf(')'));
  
  var res = {
    "ipaddress": ip,
    "language": lang,
    "software": soft
  }
  
  response.end(JSON.stringify(res));
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
