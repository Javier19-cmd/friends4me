import React, {Fragment, useState} from 'react'

const EditTodo = ({ todo }) => {

    const [description, setDescription] = useState(todo.mensajeexito) // Estado que servirá para poder guardar los datos que se traen del API.

    // Editar la descripción del todo.
    const updateDescription = async e => {
        
        e.preventDefault() // Se evita que se refresque la página.

        try {
            
            const body = { description } // Se guarda la descripción en un objeto.
            const response = await fetch(`http://localhost:3000/todos/${todo.id_mensaje}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body) // Se convierte el objeto en un JSON.
            }) // Se hace una petición PUT al servidor.

            window.location = "/" // Se recarga la página.

        } catch (error) {
            console.error(error.mensaje)
        }
    }

    return (
        <Fragment>
            {/*Se hace target al id del mensaje que se quiere editar*/}
            <button type="button" 
                className="btn btn-warning" 
                data-bs-toggle="modal" 
                data-bs-target={`#id${todo.id_mensaje}`}>
            Edit
            </button>

            {/*El modal hace referencia al id del mensaje que está en la base de datos*/}
            <div className="modal" id={`id${todo.id_mensaje}`} onClick={()=> setDescription(todo.mensajeexito)}>
                <div className="modal-dialog">
                    <div className="modal-content">

                    <div className="modal-header">
                        <h4 className="modal-title">Edit Todo</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=> setDescription(todo.mensajeexito)}></button>
                    </div>

                    <div className="modal-body">
                        {/*Se despliega en el input el mensaje que se quiere modificar. Este input también settea la nueva descripción que se quiere desplegar*/}
                        <input type="text" className="form-control" 
                        value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>

                    <div className="modal-footer">
                        <button type="button" 
                            className="btn btn-warning" 
                            data-bs-dismiss="modal" 
                            onClick={e => updateDescription(e)}>
                        Edit
                        </button> {/*Este botón hace un request para poder actualizar los datos.*/}
                        <button type="button" 
                            className="btn btn-danger" 
                            data-bs-dismiss="modal" onClick={()=> setDescription(todo.mensajeexito)}>
                        Close
                        </button>
                    </div>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default EditTodo