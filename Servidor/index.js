/**
 * Referncias: https://www.youtube.com/watch?v=ldYcgPKEZC8&ab_channel=freeCodeCamp.org
 * Como iniciar el servidor con nodemon: https://www.youtube.com/watch?v=_X-QZ-_X-_Q&ab_channel=freeCodeCamp.org
*/

import express from 'express'
import cors from 'cors'
const PORT = process.env.PORT || 3000
const app = express() // Instancia de express.
import pool from './db.js'


app.use(cors()) // Configuración de CORS.
app.use(express.json()) // Configuración de body-parser.

// Rutes

// Insertando un todo. (Se está insertando datos en la base de datos alojada en Elephant.)

// El async hace el request más fácil.
app.post('/todos', async (req, res) => {
    try {
        
        const { description } = req.body // Se destructura la descripción que se manda.
        const newTodo = await pool.query('INSERT INTO conection (mensajeExito) VALUES ($1) RETURNING *', [description]) 
        // conection es la tabla. mensajeExito es la columna. $1 es el valor. RETURNING * sirve para devolver todos los datos de la tabla. 
        //[description] es el valor que se va a insertar en la tabla.
        // El RETURNING * hay que verlo en postman para ver que nos devuelve.
        res.json(newTodo) // El json es para enviar los datos.

    } catch (error) {
        console.log(error.message)
    }
})

// Registro de usuarios.
app.post('/registro', async (req, res) => {
    
    try {
        const  primer_nombre  = req.body.primer_nombre
        const  segundo_nombre  = req.body.segundo_nombre
        const  primer_apellido  = req.body.primer_apellido
        const  segundo_apellido  = req.body.segundo_apellido
        const  correo  = req.body.correo
        const  usuario  = req.body.usuario
        const  contrasena  = req.body.contrasena

        
        const perfil = await pool.query('INSERT INTO info_usuario (primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, usuario, contrasena) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *', [primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, usuario, contrasena])
        res.json(perfil)
    } catch (error) {
        console.log(error.message)
    }
})

// Obteniendo todos los todos de una tabla. (Esto se manda a pedir a la base de datos alojada en Elephant.)

app.get("/todos", async (req, res) => {
    try {
        // Seleccionando objetos de una tabla de la base de datos.
        const allTodos = await pool.query('SELECT * FROM conection')
        res.json(allTodos.rows) // El json es para enviar los datos.

    } catch (error) {
        console.log(error.message)
    }
})

// Obteniendo un todo con un id específico.(Esto se manda a pedir a la base de datos alojada en Elephant.)

// Este request permite ser dinámico.
app.get("/todos/:id", async (req, res) => {

    try {
        
        const { id } = req.params // Se destructura el id que se manda.
        const todo = await pool.query("SELECT * FROM conection WHERE id_mensaje = $1", [id]) 
        // Seleccionando objetos de una tabla de la base de datos. En el WHERE se pone el id que se quiere jalar. [id] se especifica el id que se quiere jalar.

        res.json(todo.rows[0]) // Se jala el primer ítem que se jaló.
    } catch (error) {
        console.log(error.message)
    }
})

// Actualizando un todo. (Esto se actualiza en la base de datos alojada en Elephant.)

app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params // Se destructura el id que se manda.
        const { description } = req.body // Se destructura la descripción que se manda.
        
        
        const updateTodo = await pool.query("UPDATE conection SET mensajeExito = $1 WHERE id_mensaje = $2", [description, id])
        //  Se actualiza el mensaje específico con el id que se manda.

        res.json("Todo actualizado") // El json es para enviar los datos.


    } catch (error) {
        console.log(error.message)
    }
})


// Eliminando un todo. (Esto se elimina en la base de datos alojada en Elephant.)
app.delete("/todos/:id", async (req, res) => {
    try {
        
        const { id } = req.params // Se destructura el id que se manda. 
        const deleteTodo = await pool.query("DELETE FROM conection WHERE id_mensaje = $1", [id]) 
        // Se elimina el mensaje específico con el id que se manda.

        res.json("Todo eliminado") // El json es para enviar los datos.
    } catch (error) {
        console.log(error.message)
    }
})

// Iniciamos el servidor.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})

