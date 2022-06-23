/**
 * Hacer formulario de registro: https://www.youtube.com/watch?v=kvJLiKLOPtk&ab_channel=CodeStepByStep
 * https://www.youtube.com/watch?v=9KaMsGSxGno&ab_channel=HHVTechnology
 * Insertando datos en el API: https://www.youtube.com/watch?v=W-sZo6Gtx_E&ab_channel=PedroTech
 * Cifrar un mensaje con el cifrado md5: https://www.npmjs.com/package/md5
 */
import React, { useState } from 'react' 
import axios from 'axios'
import md5 from 'md5'


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

        console.log(md5(contrasenaa))

        
        axios.post("http://localhost:3000/registro", {
            primer_nombre: primernombre,
            segundo_nombre: segundoNombre,
            primer_apellido: primerApellido,
            segundo_apellido: segundoApellido,
            correo: correoo,
            usuario: usuarioo,
            contrasena: md5(contrasenaa)
        }).then(res => {
            console.log(res)
        }) // Se manda a dejar a la base de datos alojada en Elephant.

        //window.location.reload() // Recarga la página.
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
