var express = require('express');
var app = express();
var request = require('request');
var parseData
app.use(express.static(__dirname + '/public'));
app.get('/',function (req,res){
request('https://corona.lmao.ninja/all', function (error, response, body) {
   if(!error && response.statusCode == 200){
   	   parseData = JSON.parse(body);

          request('https://corona.lmao.ninja/countries/india', function (error, response, body2) {
            if(!error && response.statusCode == 200){
                parseData2 = JSON.parse(body2);

  	 res.render("home.ejs",{parseData:parseData,parseData2:parseData2})

   }})}})})


app.get('/sources',function(req,res){
  res.render('sources.ejs')
})

app.get('/helplines',function(req,res){
  res.render('helplines.ejs')
})

app.get('/about',function(req,res){
  res.render('about.ejs')
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
