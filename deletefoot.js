var express = require('express');
var app = express();
var fs = require("fs");

app.delete('/deletefoot/:id', function (req, res) {
   
   fs.readFile( __dirname + "/" + "foot.csv", 'utf8', function (err, csv) {
      data=csv.split(/\r?\n/);
      for(var i=0;i<data.length;i++)
      {
         dataline=data[i].split(",");
         for(var j=1;j<dataline.length;j++)
         {
               word= dataline[3].split("-");
         } 
  
         if(dataline[0]==req.params.id)
         {
            delete data; 
         }
               
      }        
            console.log(data);
            res.write(JSON.stringify(data));   
    
   res.end();

   });
})

var server = app.listen(1585, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})