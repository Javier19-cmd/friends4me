import './App.css'
import React from 'react'
//const { Client } = require('pg');

/**
 * Usar en caso de que de problema el lint: 
 * https://stackoverflow.com/questions/70377211/error-when-deploying-react-app-and-it-keeps-sayings-plugin-react-was-confli
*/

//Componentes a usar.
import InputTodo from './components/InputTodo' // Este componente ingresa datos a la base de datos.
import ListTodos from './components/ListTodos' // Este componente enseña los datos de la base de datos.

function App() {
  return (
    <div className='container'>
      <InputTodo />
      <ListTodos />
    </div>
  )
}

export default App;
