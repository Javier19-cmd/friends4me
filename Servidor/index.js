import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import pg from 'pg'
const PORT = process.env.PORT || 3000
const app = express() // Instancia de express.
import pool from './db.js'


app.use(cors()) // Configuración de CORS.
app.use(express.json()) // Configuración de body-parser.

// Rutes

// Creando un todo. (Se está insertando datos en la base de datos alojada en Elephant.)

// El async hace el request más fácil.
app.post('/todos', async (req, res) => {
    try {
        
        const { description } = req.body // El body-parser nos permite acceder a los datos que nos llegan por el body.
        const newTodo = await pool.query('INSERT INTO conection (mensajeExito) VALUES ($1) RETURNING *', [description]) 
        // todos es la tabla. description es la columna. $1 es el valor. RETURNING * sirve para devolver todos los datos de la tabla. [description] es el valor.
        // El RETURNING * hay que verlo en postman para ver que nos devuelve.
        res.json(newTodo) // El json es para enviar los datos.

    } catch (error) {
        console.log(error.message)
    }
})

// Obteniendo todos los todos.

// Obteniendo un todo.

// Actualizando un todo.

// Eliminando un todo.

// Iniciamos el servidor.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})