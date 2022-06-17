import React, {Fragment, useState} from 'react'

const InputTodo = () => {

    const [description, setDescription] = useState("") // Estado que va a servir para guardar lo que se ingresa en el input.

    const onSubmitForm = async e => {

        e.preventDefault() // Evita que se recargue la pagina.
        
        try {
            const body = {description} // Se guarda en una variable el valor que se ingresa en el input.
            const response = await fetch('http://localhost:3000/todos', {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })  // Se hace una peticion POST al servidor, para poder ingresar los valores que se ingresaron en el input.
            
            console.log(response)

            window.location = '/' // Se recarga la pagina.

        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Fragment>
            <h1 className='text-center mt-5'>Interacción de CRUD</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control" 
                    value={description} onChange={e => setDescription(e.target.value)}/>
                <button className="btn btn-success">agregar</button>
            </form>
        </Fragment>
    )
}

export default InputTodo
