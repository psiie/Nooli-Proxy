var express = require('express'),
    cheerio = require('cheerio'),
    request = require('request'),
    app = express();




app.get('/', (req,res) => {
  request('http://www.3dsiso.com/cia-downloads/', (err, response, html) => {
    // let $ = cheerio.load(html);
    // console.log($);
    // console.log(html);
    res.send(html);
  })
})



console.log("Regular Express server listening on port 3000");
var server = app.listen(process.env.PORT || 3000);