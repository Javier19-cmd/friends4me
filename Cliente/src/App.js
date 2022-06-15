import './App.css'
import React, { Fragment } from 'react'
//const { Client } = require('pg');

/**
 * Usar en caso de que de problema el lint: 
 * https://stackoverflow.com/questions/70377211/error-when-deploying-react-app-and-it-keeps-sayings-plugin-react-was-confli
*/

//Componentes a usar.
import InputTodo from './components/InputTodo' // Input del Todo.

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
      </div>
    </Fragment>
  )
}

export default App;
