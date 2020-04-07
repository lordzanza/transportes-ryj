const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')

// Crear una aplicacion servidor (o una API) para los rest endpoints
const app = express()
// CORS, para seguridad, cuando el back-end esta en un servidor o pc distito al del front-end
app.use(cors())

// body parser - analizador del formato del body del request & response (solicitud y respuesta)
app.use(express.json())
app.set('json spaces', 4)
app.use('/static', express.static('public'))

// dependencia para conectar a BD
const mysql = require('mysql')

// fuente de datos
const conex = mysql.createConnection({
  host: "localhost",
  user: "transportes",
  password: "",
  database: "transportesrj"
})

// iniciar conexion a fuente de datos
conex.connect(
  () => console.log("Connected to database!")
)

// levantar el servidor, escuchando al puerto 5000
app.listen(parseInt(process.env.PORT) || 5000,
  () => console.log('Server running at port:5000')
)

// ...ENDPOINTS...

app.get('/', (input, output) => {
  output.send(input.body)
})

app.get('/vehiculos', (input, output) => {
  console.log("get /vehiculos ...", input.body)
  conex.query("select * from vehiculo order by placa", (error, results) => {
    if (results) {
      console.log(results)
      output.send(results)
    } else {
      console.log([error.message])
      output.status(400).send([error.message])
    }
  })
})

app.post('/vehiculos', (input, output) => {
  console.log("post /vehiculos ...", input.body)
  conex.query("insert into vehiculo set ?", input.body, (error, results) => {
    if (results && results.affectedRows) {
      const body = {
        placa: input.body.placa
      }
      console.log(body)
      output.status(201).send(body)
    } else {
      console.log([error.message])
      output.status(400).send([error.message])
    }
  })
})

app.get('/usuarios', (input, output) => {
  console.log("get /usuarios ...", input.body)
  conex.query("select * from usuario order by nombres, apellidos", (error, results) => {
    if (results) {
      console.log(results)
      output.send(results)
    } else {
      console.log([error.message])
      output.status(400).send([error.message])
    }
  })
})

app.post('/usuarios', (input, output) => {
  console.log("post /usuarios ...", input.body)
  conex.query("insert into usuario set ?", input.body, (error, results) => {
    if (results && results.affectedRows) {
      const body = {
        tipo_documento: input.body.tipo_documento,
        documento: input.body.documento,
        nombres: input.body.nombres,
        apellidos: input.body.apellidos
      }
      console.log(body)
      output.status(201).send(body)
    } else {
      console.log([error.message])
      output.status(400).send([error.message])
    }
  })
})

app.get('/licencias', (input, output) => {
  console.log("get /licencias ...", input.body)
  conex.query("select * from licencia_conductor order by id_conductor", (error, results) => {
    if (results) {
      console.log(results)
      output.send(results)
    } else {
      console.log([error.message])
      output.status(400).send([error.message])
    }
  })
})

app.post('/licencias', (input, output) => {
  console.log("post /licencias ...", input.body)
  conex.query("insert into licencia_conductor set ?", input.body, (error, results) => {
    if (results && results.affectedRows) {
      const body = {
        id_conductor: input.body.id_conductor,
        categoria: input.body.categoria
      }
      console.log(body)
      output.status(201).send(body)
    } else {
      console.log([error.message])
      output.status(400).send([error.message])
    }
  })
})

app.get('/gastos', (input, output) => {
  console.log("get /gastos ...", input.body)
  conex.query("select * from gastos_vehiculos_mensual order by fecha_gasto desc, costo_gasto desc",
    (error, results) => {
      if (results) {
        console.log(results)
        output.send(results)
      } else {
        console.log([error.message])
        output.status(400).send([error.message])
      }
    })
})

app.post('/gastos', (input, output) => {
  console.log("post /gastos ...", input.body)
  conex.query("insert into gastos_vehiculos_mensual set ?", input.body, (error, results) => {
    if (results && results.affectedRows) {
      const body = {
        tipo_gasto: input.body.tipo_gasto,
        costo_gasto: input.body.costo_gasto
      }
      console.log(body)
      output.status(201).send(body)
    } else {
      console.log([error.message])
      output.status(400).send([error.message])
    }
  })
})

app.get('/historial', (input, output) => {
  console.log("get /historial ...", input.body)
  conex.query("select * from historial_gastos_vehiculo order by id desc", (error, results) => {
    if (results) {
      console.log(results)
      output.send(results)
    } else {
      console.log([error.message])
      output.status(400).send([error.message])
    }
  })
})
