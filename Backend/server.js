const express = require('express')  
var mysql = require('mysql'); 
const bodyParser = require('body-parser')
const app = express()  
const port = 3001

app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }  console.log(`server is listening on ${port}`)
})

app.use(bodyParser.urlencoded({ extended: false }))

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "23105200",
  database: "HELPBOOK"
});

 app.post('/login', function(req, res){
  var teste = 2;
  var teste2 = 3;
  var teste3 = teste+teste2;

   console.log("chegou no metodo");
   /*
   var user = req.body.user;
   var senha = req.body.senha;
   consoe.log(user+" "+senha)
   */
 })