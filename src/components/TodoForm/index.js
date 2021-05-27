import React, { useState, useEffect } from "react";

const initialFormValue = {
  title: "",
  description: "",
};

export default function TodoForm({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) {
  const [formValue, setformValue] = useState(initialFormValue);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const { title, description } = formValue;

  useEffect(() => {
    if (todoEdit) {
      setformValue(todoEdit);
    } else{
      setformValue(initialFormValue)
    }
  }, [todoEdit]);

  const handleInputChance = e => {
    const changeFormValue = {
      ...formValue,
      [e.target.name]: e.target.value,
    };
    setformValue(changeFormValue);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // console.log("submit")
    if (title.trim() === "") {
      setError("Debes indicar un titulo");
      return;
    }
    if (description.trim() === "") {
      setError("Debes indicar una descripcion");
      return;
    }
    if (todoEdit){
      //Actualizando la tarea
      todoUpdate(formValue)
      setSuccess("Modificada con exito");
    } else{
      todoAdd(formValue)
      setSuccess("Tarea agregada con exito");
    }

    //se agrega una nueva tarea
    todoAdd(formValue);
    setformValue(initialFormValue);

    setTimeout(() => {
      setSuccess(null);
    }, 2000);

    setError(null);
  };

  return (
    <div>
      <h2 className="text-center display-4">{todoEdit ? "Editar tarea" : "Nueva Tarea"}</h2>
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
        <button className="btn btn-primary mt-2">{todoEdit ? "Editar tarea" : "Agregar Tarea"}</button>
        {todoEdit && <button className="btn btn-warning mt-2 mx-2" onClick={() => setTodoEdit(null)}>Cancelar edicion</button>}
        
        {error && <div className="alert alert-danger mt-2">{error}</div>}
        {success && <div className="alert alert-success mt-2">{success}</div>}
      </form>
    </div>
  );
}
