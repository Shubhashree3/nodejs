var express = require('express');
var app = express();
var fs = require("fs");

app.post('/addfoot', function (req, res) {
fs.readFile(__dirname + "/" + "foot.csv", 'UTF-8', function(err, csv) {
   data=csv.split(/\r?\n/);
   data.push("46,Sun Apr 21 2002,Shree City FC,2-0,Sheffield United FC");
   console.log(data);
   res.end(JSON.stringify(data));

   });
})
var server = app.listen(1585, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})



