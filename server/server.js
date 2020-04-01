const express  = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

var app = express()
// cors
app.use(cors())

// body parser
app.use(bodyParser.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }))
app.set('json spaces', 4)
app.use('/static', express.static('public'))


//mysql con
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  database: "transportesrj",
  user: "transportes",
  password: ""
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post('/vehiculo', (err, res) =>{
    if(err) console.log("Error")
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "insert into vehiculo (decripcion, placa, cilindraje, color, modelo) values ('tracto-mula','FAO267',50000, 'azul', 2012)";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
})

app.get('/', (err, res) =>{
    if(err) res.send({response: err.body})
    else res.send({response: "Correcto"})
})

app.listen(process.env.PORT || 5000, (err, req) => {
    console.log('Server running')
})