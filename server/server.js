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
app.use(bodyParser.json({ type: '*/*' }))
app.set('json spaces', 4)
app.use('/static', express.static('public'))


//mysql con
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "yourusername",
  password: "yourpassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.post('/crearUsuario', (err, res) =>{
    if(err) console.log("Error")
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
        con.query(sql, function (err, result) {
          if (err) throw err;
          console.log("1 record inserted");
        });
      });
})

app.get('/', (err, res) =>{
    if(err) console.log("Error")
    res.send({response: "Correcto"})
})

app.listen(process.env.PORT || 5000, (err, req) => {
    console.log('Server running')
})