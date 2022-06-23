/**
 * Diagrama entidad-relación: https://lucid.app/lucidchart/696bb8b0-bf97-4d0b-bebb-6636d2584710/edit?beaconFlowId=D7F5FADF353A9503&invitationId=inv_0932a71c-933a-4e7e-8a6f-13e365ef57cf&page=0_0#
*/

import React, {useState, useEffect, Fragment} from 'react'
import './inicio.css'
import registro  from './registro'


function Inicio() {

  const [visibilidad, setVisibilidad] = useState(false)
  
    return (
      <div className='Inicio'>
        <div className='Encabezado'>
          <h1>Bienvenido a Friends4Me</h1>
        </div>
         <Fragment>
          <button type='button' onClick={visibilidad ? <registro/>: null}>
            Registrarse
          </button>
         </Fragment>
      </div>
    )
}

export default Inicio
