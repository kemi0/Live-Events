const express = require('express'); 

const PORT = process.env.PORT || 8000;

const app = express(); 

//using .get  creating one end point 

app.get('/', function (req, res){
  res.send ('<h1>Hello World!</h1>')
})




////do not touch code below////
app.listen( PORT, function(){
  console.log('Express Server running at localhost! ' + PORT);
}).on('error', (err)=>{
  console.log('Server Error', err.message); 
  console.log('Do you already have a server running on PORT: ' + PORT +'?')
}); 

