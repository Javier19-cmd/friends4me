/**
 * Hacer formulario de registro: https://www.youtube.com/watch?v=kvJLiKLOPtk&ab_channel=CodeStepByStep
 * https://www.youtube.com/watch?v=9KaMsGSxGno&ab_channel=HHVTechnology
 * Insertando datos en el API: https://www.youtube.com/watch?v=W-sZo6Gtx_E&ab_channel=PedroTech
 * Cifrar un mensaje con el cifrado md5: https://www.npmjs.com/package/md5
 */
import React, { useState } from 'react' 
import axios from 'axios'
import md5 from 'md5'
import './registroo.css'


function Registro() {
 
    const [primernombre, setPrimerNombre] = useState('')
    const [segundoNombre, setSegundoNombre] = useState('')
    const [primerApellido, setPrimerApellido] = useState('')
    const [segundoApellido, setSegundoApellido] = useState('')
    const [correoo, setCorreo] = useState('')
    const [usuarioo, setUsuario] = useState('')
    const [contrasenaa, setContrasena] = useState('')
    const [confirmarContrasenaa, setConfirmarContrasena] = useState('')
    const [error, setError] = useState(false)

    // Método para insertar datos de registro en la base de datos.
    const handleSubmit = async (e) => {
        
        e.preventDefault() // Evita que se recargue la página.

        // Validación de campos.
        if (primernombre.length === 0 || segundoNombre.length === 0 || primerApellido.length === 0 || segundoApellido.length === 0 || correoo.length === 0 || usuarioo.length === 0 || contrasenaa.length === 0 || confirmarContrasenaa.length === 0) {
            setError(true)
        }else{
            setError(false)
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

            window.location.reload() // Recarga la página.
        }
    }

    return (
      <div className='formulario'>
        <form onSubmit={handleSubmit}>
          <h1>Registro</h1>

          <div>
            <input type='text' className='Nombre1' placeholder='Primer nombre' value={primernombre} onChange={(e) => setPrimerNombre(e.target.value)} />
            
            {error && primernombre.length <= 0 ? 
              <label> *Campo obligatorio</label>: ""
            }
            
          </div>
          
          <div>
            <input type='text' className='Nombre2' placeholder='Segundo nombre' value={segundoNombre} onChange={(e) => setSegundoNombre(e.target.value)} />
            
            {error && segundoNombre <=0 ? 
              <label> *Campo obligatorio</label>:""
            }

          </div>

          <div>
            <input type='text' className='Apellido1' placeholder='Primer apellido' value={primerApellido} onChange={(e) => setPrimerApellido(e.target.value)} />
            
            {error && primerApellido <= 0 ? 
              <label> *Campo obligatorio</label>:""
            }

          </div>

          <div>
            <input type='text' className='Apellido2' placeholder='Segundo apellido' value={segundoApellido} onChange={(e) => setSegundoApellido(e.target.value)} />
            
            {error && segundoApellido <= 0 ? 
              <label> *Campo obligatorio</label>:""
            }

          </div>
          
          <div>
            <input type='text' className='Correo' placeholder='Correo' value={correoo} onChange={(e) => setCorreo(e.target.value)} />
            
            {error && correoo <= 0 ? 
              <label> *Campo obligatorio</label>:""
            }

          </div>

          <div>
            <input type='text' className='Usuario' placeholder='Usuario' value={usuarioo} onChange={(e) => setUsuario(e.target.value)} />
            
            {error && usuarioo <= 0 ? 
              <label> *Campo obligatorio</label>:""
            }

          </div>

          <div>
            <input type='password' className='Contrasena' placeholder='Contraseña' value={contrasenaa} onChange={(e) => setContrasena(e.target.value)} />
            
            {error && contrasenaa <=0 ? 
              <label> *Campo obligatorio</label>:""
            }

          </div>

          <div>
            <input type='password' className='ConfirmarContrasena' placeholder='Confirmar contraseña' value={confirmarContrasenaa} onChange={(e) => setConfirmarContrasena(e.target.value)} />
            
            {error && confirmarContrasenaa <= 0 ? 
              <label> *Campo obligatorio</label>:""
            }

          </div>

          <button type='button' onClick={handleSubmit} className='boton'>Registrarse</button>
        </form>
        
      </div>
    )
}

export default Registro
