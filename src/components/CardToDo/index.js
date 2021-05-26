import React from "react";

export const CardToDo = ({ todo, todoDelete, todoToggleCompleted,setTodoEdit }) => {
  return (
    <div className="card mt-2">
      <div className="card-body">
        <h3 className="card-title text-end">
          {todo.title}
          <button
            className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} ms-2`}
            onClick= {() => todoToggleCompleted(todo.id)}>
            {todo.completed ? "terminado" : "Terminar"}
          </button>
        </h3>

        <p className="card-text text-end">{todo.description}</p>
        <hr />
        <div className="d-flex justify-content-end">
          <button className="btn btn-sm btn-outline-primary" onClick={() => setTodoEdit(todo)}>Editar</button>
          <button
            className="btn btn-sm btn-outline-danger ms-2"
            onClick={() => todoDelete(todo.id)}>
            eliminar
          </button>
        </div>
      </div>
    </div>
  );
};
