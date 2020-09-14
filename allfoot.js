var express = require('express');
var app = express();
var fs = require("fs");
var fname=__dirname + "/" + "foot.csv";

app.get('/listFoot', function (req, res) {
   fs.readFile(fname, 'utf8', function (err, data) {
     
      console.log( data );
      res.end( data );
   });
})

app.post('/addfoot', function (req, res) {
fs.readFile(fname, 'UTF-8', function(err, csv) {
   data=csv.split(/\r?\n/);
   data.push("46,Sun Apr 21 2002,Shree City FC,2-0,Sheffield United FC");
   console.log(data);
   res.end(JSON.stringify(data));

   });
})  

app.post('/showfoot/:id', function (req, res) {
fs.readFile(fname, 'UTF-8', function(err, csv) {
   data=csv.split(/\r?\n/);
   for(var i=0;i<data.length;i++)
   {
      dataline=data[i].split(",");
      for(var j=1;j<dataline.length;j++)
      {
        word= dataline[3].split("-"); } 
         if(Number(word[0])<Number(word[1]) && dataline[0]==req.params.id)
            { 
               console.log(dataline[2]);
               res.write(JSON.stringify(dataline[2]));
            }  
      }                  
    res.end();

  });
})
app.delete('/deletefoot/:id', function (req, res) {
   
   fs.readFile(fname, 'utf8', function (err, csv) {
      var data=csv.split(/\r?\n/);
      for(var i=0;i<data.length;i++)
      {
         dataline=data[i].split(",");
         for(var j=1;j<dataline.length;j++)
         {
               word= dataline[3].split("-");
         
               if(dataline[0]==req.params.id)
            {
               delete data[i];
                 
            }
         }  
         console.log(data);
         res.write(JSON.stringify(data));      
      }        
            
    
   res.end();

   });
})


var server = app.listen(1585, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})
