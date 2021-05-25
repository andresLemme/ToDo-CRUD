import React from 'react'

export const CardToDo = () => {
  return (
   
       <div className="card">
       <div className="card-body">
         <h3 className="card-title text-end">Titulo de la tarea
         <button className="btn btn-sm btn-outline-success ms-2">Terminar</button>
         </h3>
         
         <p className="card-text text-end">Descripción de la tarea</p>
         <hr/>
         <div className="d-flex justify-content-end">
         <button className="btn btn-sm btn-outline-primary">Editar</button>
         <button className="btn btn-sm btn-outline-danger ms-2">eliminar</button>
         </div>
       </div>
     </div>
  
  )
}
