const express  = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

var app = express()
// cors
app.use(cors())

// body parser
app.use(express.json())
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

con.connect((err)=>{
  if (err) throw err;
  console.log("Connected!");
});

app.get('/', (req, res) =>{
     res.send(req.body) 
})

app.post('/vehiculo', (req, res) =>{
  console.log(req.body)
  con.query("insert into vehiculo set ?", req.body, (err, result)=> {
    if(result && result.affectedRows) {
      const body = { placa: req.body.placa }
      console.log(body)
      res.status(201).send(body)
    } else {
      const body = { error: err.message }
      console.log(body)
      res.status(400).send(body)
    }
  })
})

app.listen(process.env.PORT || 5000, (err, req) => {
    console.log('Server running')
})