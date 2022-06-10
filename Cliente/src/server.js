import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import pg from 'pg'
const PORT = process.env.PORT || 3000

const pool = new pg.Pool({
    user: 'aewmoyxm', // Usuario de conexión.
    port: 5432, // Puerto de conexión.
    password: 'FuiR_MsqIhRN3jSlGF6xS5nLjN6-dAhS', // Contraseña de la base de datos.
    host: 'ziggy.db.elephantsql.com', // Host de la base de datos.
    database: '	aewmoyxm', // Base de datos.
    max: 10 // Cantidad máxima de conexiones.
})

// Conexión a la base de datos.
pool.connect((err, db, done) => {
    if (err) {
        console.log(err)
    } else {
        console.log('Conexión exitosa')
        
        // Query para la conexión de la base de datos.
        db.query('SELECT * FROM conection', (err, table) => {
            if (err) {
                console.log(err)
            } else {
                console.log(table.rows)
            }
        })
    }
})

const app = express() // Inicializamos express.

app.use(bodyParser.json()) // Permite que el servidor entienda los datos enviados en formato JSON.
app.use(bodyParser.urlencoded({ extended: true })) // Permite que el servidor entienda los datos enviados en formato URL.

app.use(morgan('dev')) // Permite que el servidor muestre los datos enviados por el cliente.


// Permite que el servidor entienda los datos enviados por el cliente.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// Iniciamos el servidor.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})