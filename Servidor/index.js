import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import pg from 'pg'
const PORT = process.env.PORT || 3000
const app = express() // Instancia de express.

app.use(cors()) // Configuración de CORS.
app.use(express.json()) // Configuración de body-parser.



// Iniciamos el servidor.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})