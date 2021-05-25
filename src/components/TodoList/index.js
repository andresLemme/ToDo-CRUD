import React from "react";
import { CardToDo } from "../CardToDo";

export default function TodoList({
  todos,
  todoDelete,
  todoToggleCompleted,

}) {
  return (
    <div>
      <h2 className="text-center">Lista de Tareas</h2>
      {todos.map((todo, key) => {
        return (
          <CardToDo
            key={key}
            todo={todo}
            todoDelete={todoDelete}
            todoToggleCompleted={todoToggleCompleted}
           
          />
        );
      })}
    </div>
  );
}
