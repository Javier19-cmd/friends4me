/**
 * Hacer formulario de registro: https://www.youtube.com/watch?v=kvJLiKLOPtk&ab_channel=CodeStepByStep
 */
import React, { useState } from 'react' 

function Registro() {
 
    const [primernombre, setPrimerNombre] = useState('')
    const [segundoNombre, setSegundoNombre] = useState('')
    const [primerApellido, setPrimerApellido] = useState('')
    const [segundoApellido, setSegundoApellido] = useState('')
    const [correoo, setCorreo] = useState('')
    const [usuarioo, setUsuario] = useState('')
    const [contrasenaa, setContrasena] = useState('')

    // Método para insertar datos de registro en la base de datos.
    const handleSubmit = async (e) => {
        
        e.preventDefault() // Evita que se recargue la página.

        const primer_nombre = {primernombre}
        const segundo_nombre = {segundoNombre}
        const primer_apellido = {primerApellido}
        const segundo_apellido = {segundoApellido}
        const correo = {correoo}
        const usuario = {usuarioo}
        const contrasena = {contrasenaa}


        try {
            // Insertando datos en la base de datos.

          // Enviando datos a la BD.
          const response = await fetch('http://localhost:3000/registro', {
            method: 'POST',
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ primer_nombre, segundo_nombre, primer_apellido, segundo_apellido, correo, usuario, contrasena })
          })

          console.log(response) // Muestra en consola la respuesta del servidor.

          //window.location = '/' // Recarga la página.
        }
        catch (error) {
            console.log(error.message) // Muestra en consola el error.
        }

    }

    return (
      <div className='col-sm-6 offset-sm-3'>
        <h1>Registro</h1>

        <input type='text' className='form-control' placeholder='Primer nombre' value={primernombre} onChange={(e) => setPrimerNombre(e.target.value)} />
        <br />

        <input type='text' className='form-control' placeholder='Segundo nombre' value={segundoNombre} onChange={(e) => setSegundoNombre(e.target.value)} />
        <br />

        <input type='text' className='form-control' placeholder='Primer apellido' value={primerApellido} onChange={(e) => setPrimerApellido(e.target.value)} />
        <br />

        <input type='text' className='form-control' placeholder='Segundo apellido' value={segundoApellido} onChange={(e) => setSegundoApellido(e.target.value)} />
        <br />

        <input type='text' className='form-control' placeholder='Correo' value={correoo} onChange={(e) => setCorreo(e.target.value)} />
        <br />

        <input type='text' className='form-control' placeholder='Usuario' value={usuarioo} onChange={(e) => setUsuario(e.target.value)} />
        <br />

        <input type='password' className='form-control' placeholder='Contraseña' value={contrasenaa} onChange={(e) => setContrasena(e.target.value)} />
        <br />

        <button type='button' onClick={handleSubmit} className='btn btn-primary'>Registrarse</button>
        
      </div>
    )
}

export default Registro
