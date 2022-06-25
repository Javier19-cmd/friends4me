/**
 * Diagrama entidad-relación: https://lucid.app/lucidchart/696bb8b0-bf97-4d0b-bebb-6636d2584710/edit?beaconFlowId=D7F5FADF353A9503&invitationId=inv_0932a71c-933a-4e7e-8a6f-13e365ef57cf&page=0_0#
 * Como hacer un router: https://dev.to/salehmubashar/react-router-dom-36a2
*/

import React from 'react'
import './principal.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Login from './login'
import Registro  from './registro'


function Principal() {
  return(
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
      <div className='listado'>
        <Link to="/">Login</Link>
        <Link to="/registro">Registro</Link>
      </div>
    </Router>
    </div>
  )
}

export default Principal
