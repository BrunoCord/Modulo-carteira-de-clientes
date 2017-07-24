const express = require('express')
var mysql = require('mysql')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 8081

app.use(cors())

app.use(bodyParser.json());

var urlencodedParser = bodyParser.urlencoded({ extended: true });

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "23105200",
  database: "HELPBOOK"
});

app.post('/login', urlencodedParser, function (req, res) {

  console.log(req.body);
  var date  = req.body.dtNascimento.substr(0, 10);
  if (req.body.cpf != " ") {
    var sql = `INSERT INTO USUARIO_FISICO (NOME, DT_NASCIMENTO, TELEFONE, CPF, EMAIL, SENHA)
    VALUES ('${req.body.nome}', '${date}', '${req.body.telefone}', '${req.body.cpf}', '${req.body.email}', '${req.body.senha}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record write");
      res.send("OK");
    });
  } else if (req.body.cnpj != " ") {
    var sql = `INSERT INTO USUARIOS_JURIDICO (NOME, DT_NASCIMENTO, TELEFONE, CNPJ, EMAIL, SENHA)
    VALUES ('${req.body.nome}', '${date}', '${req.body.telefone}', '${req.body.cnpj}', '${req.body.email}', '${req.body.senha}')`;
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record write");
      res.end("OK");
    });
  }
})

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  } console.log(`server is listening on ${port}`)
})