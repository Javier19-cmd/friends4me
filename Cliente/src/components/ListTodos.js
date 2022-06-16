import React, {Fragment, useEffect, useState} from 'react'


/**
 * Tabla extraída de: https://www.w3schools.com/bootstrap5/bootstrap_tables.php
 */

// UseEffect se usará para hacer fecth al API cada vez que se renderize el componente.

const ListTodos = () => {

    const [todos, setTodos] = useState([]) // Estado que servirá para poder guardar todos los datos que se traen del API.

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
                    <tr>
                        <td>{todo.mensajeexito}</td>
                        <td>Edit</td>
                        <td>Delete</td>
                    </tr>
                ))} {/* Se mapeó todo lo que se trajo y luego se imprimió de manera gráfica la información que hay en el API. mensajeexito es la descripción
                 de lo que está en la lista de lo que se trajo*/}
                </tbody>
            </table>
        </Fragment>
    )
}

export default ListTodos
