import React, {Fragment, useEffect, useState} from 'react'


/**
 * Tabla extraída de: https://www.w3schools.com/bootstrap5/bootstrap_tables.php
 */

// UseEffect se usará para hacer fecth al API cada vez que se renderize el componente.

const ListTodos = () => {

    const [todos, setTodos] = useState([]) // Estado que servirá para poder guardar todos los datos que se traen del API.

    // Función para eliminar un todo.
    const deleteTodo = async (id) => {
        try {
           const eliminarTodo = await fetch(`http://localhost:3000/todos/${id}`, {
                method: 'DELETE'
            })
            console.log(eliminarTodo)
            setTodos(todos.filter(todo => todo.id_mensaje !== id)) // Se elimina el todo que se elimino del estado y de la base de datos.
        } catch (error) {
            console.log(error.message)
        }
    }

    // Método para traer los datos del API.
    const getTodos = async () => {
        try {
            
            const response = await fetch('http://localhost:3000/todos') // Se hace una peticion GET al servidor.
            const jsonData = await response.json() // Se convierte la respuesta en un JSON.

            setTodos(jsonData) // Se guardan los datos en el estado.

            //console.log(jsonData) // Se imprime el JSON.

        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getTodos()
    }, []) // Se ejecuta el useEffect cada vez que se renderize el componente.

    console.log("Datos: ", todos) // Se imprime el estado.

    return (
        <Fragment>
            <table className="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {/*
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>*/}

                {todos.map(todo => (
                    <tr key={todo.id_mensaje}>
                        <td>{todo.mensajeexito}</td>  {/*Se imprime el mensaje que se trae del API. Se imprime en la columna mensajeexito*/}
                        <td>Edit</td>
                        <td>
                            <button className="btn btn-danger" onClick={() => deleteTodo(todo.id_mensaje)}>Delete</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodos
