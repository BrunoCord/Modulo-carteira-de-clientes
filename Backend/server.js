const express = require('express')
var mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 8081

app.use(cors())

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  } console.log(`server is listening on ${port}`)
})

app.use(bodyParser.urlencoded({ extended: false }))

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "23105200",
  database: "HELPBOOK"
});

app.post('/login', function (req, res) {

  console.log("chegou no metodo");
  var user = req.body.user;
  console.log(user);
  res.end("OK");
  /*
  var senha = req.body.senha;
  consoe.log(user+" "+senha)
  */
})