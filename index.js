///back-end index.js
const express = require('express'); 
const cors = require('cors');
//setup back end to handle React 
const { resolve } = require('path'); 
const PORT = process.env.PORT || 8000;

const app = express();
//when doing get 
app.use(cors());
//when doing POST
app.use(express.json());
//for the React statily serve a folder
app.use(express.static(resolve(__dirname,'client','dist')));



//MAKING POST request///////////////




//MAKING get request /////////////// 

app.get('/api/user-data',(req, res)=>{
  const user ={
   name : 'Jim Bob',
   email: 'jimhebob@gmail.com'
 }
  res.send(user);
});

app.get('/', function (req, res){
  res.send ('<h1>Hello Katy!</h1>')
})


///last end point 
app.get('*',(req, res)=>{
  res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
})

////do not touch code below////
app.listen( PORT, function(){
  console.log('Express Server running at localhost! ' + PORT);
}).on('error', (err)=>{
  console.log('Server Error', err.message); 
  console.log('Do you already have a server running on PORT: ' + PORT +'?')
}); 

