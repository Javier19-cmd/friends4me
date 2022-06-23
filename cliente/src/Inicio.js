/**
 * Diagrama entidad-relación: https://lucid.app/lucidchart/696bb8b0-bf97-4d0b-bebb-6636d2584710/edit?beaconFlowId=D7F5FADF353A9503&invitationId=inv_0932a71c-933a-4e7e-8a6f-13e365ef57cf&page=0_0#
*/

import React,{useState, useEffect} from 'react'
import './inicio.css'

function Inicio() {

  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  const syncUsuario = (usuario) => {

  }

    return (
      <div className='Inicio'>
        <div className='Encabezado'>
          <h1>Bienvenido a Friends4Me</h1>
        </div>
        
        {/*Formulario para iniciar sesión*/}
        <div className='formulario'>
          <form>
            <input 
              type='text' 
              value={setUsuario}
              onChange={(ev) => ev.target.value} 
              placeholder='usuario' />
            <input type='password' value={setPassword} placeholder='*****' />

            <input type='submit' value='iniciar sesión'/>
          </form>
        </div>
      </div>
    )
}

export default Inicio
