import React from "react";
import { CardToDo } from "../CardToDo";

export default function TodoList({
  todos,
  todoDelete,
  todoToggleCompleted,
  setTodoEdit,

}) {
  return (
    <div>
      <h2 className="text-center display-4">Lista de Tareas</h2>
      {todos.length === 0
      ? (<div className="alert alert-primary"> No tenes texto para mostrar. Agrega una tarea</div>)
      : todos.map((todo, key) => {
        return (
          <CardToDo
            key={key}
            todo={todo}
            todoDelete={todoDelete}
            todoToggleCompleted={todoToggleCompleted}
            setTodoEdit={setTodoEdit}
           
          />
        );
      })
      }
      
    </div>
  );
}
