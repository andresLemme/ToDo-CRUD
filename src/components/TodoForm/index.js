import React, { useState } from "react";

const initialFormValue = {
  title: "",
  description: "",
};

export default function TodoForm({todoAdd}) {
  const [formValue, setformValue] = useState(initialFormValue);
  const [error, setError] = useState(null)
  const { title, description } = formValue;

  const handleInputChance = (e) =>{
    const changeFormValue = {
      ...formValue,
      [e.target.name] : e.target.value
    }
    setformValue(changeFormValue)
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    // console.log("submit")
    if(title.trim() === ""){
      setError("Debes indicar un titulo")
      return
    }
    if(description.trim() === ""){
      setError("Debes indicar una descripcion")
      return
    }
   
    //se agrega una nueva tarea
    todoAdd(formValue)
    setError(null)
   
   
  }
 
  return (
    <div>
      <h2>Nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="titulo"
          className="form-control"
          value={title}
          name="title"
          onChange={handleInputChance}
        />
        <textarea
          placeholder="Descripcion de tarea"
          className="form-control mt-4"
          value={description}
          name="description"
          onChange={handleInputChance}
        />
        <button className="btn btn-primary mt-2">Agregar Tarea</button>
        {error &&

        <div className="alert alert-danger mt-2">{error}</div>
        }
      </form>
    </div>
  );
}
