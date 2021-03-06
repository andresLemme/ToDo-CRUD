import React, { useEffect, useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const initialTodo = [
  {
    id: 1,
    title: "Tarea #1",
    description: "Descripcion de la tarea #1",
    completed: false,
  },
  {
    id: 2,
    title: "Tarea #2",
    description: "Descripcion de la tarea #2",
    completed: true,
  },
  {
    id: 3,
    title: "Tarea #3",
    description: "Descripcion de la tarea #3",
    completed: false,
  },
];

const localTodos = JSON.parse(localStorage.getItem("todos"))

function App() {
  const [todos, setTodos] = useState(localTodos || initialTodo);
  const [todoEdit, setTodoEdit] = useState(null);

  useEffect(() =>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const todoDelete = todoId => {
    const changeTodos = todos.filter(todo => todo.id !== todoId);
    if (todoEdit && todoId === todoEdit.id){
      setTodoEdit(null)
    }

    setTodos(changeTodos);
  };

  const todoToggleCompleted = todoId => {
    // const changeTodos = todos.map(todo => {
    //   const todoEdit = {
    //     ...todo,
    //     completed: !todo.completed,
    //   };
    //   if (todo.id === todoId) {
    //     return todoEdit;
    //   } else {
    //     return todo;
    //   }
    // });
    const changeTodos = todos.map(todo =>
      todo.id == todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(changeTodos);
  };

  const todoAdd = todo => {
    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false,
    };

    const changedTodo = [newTodo, ...todos];
    setTodos(changedTodo);
  };

  const todoUpdate = todoEdit => {
    const changedTodo = todos.map(todo =>
      todo.id === todoEdit.id ? todoEdit : todo
    );

    setTodos(changedTodo);
  };

  return (
    <div className="container mt-4">
      <div className="container col-12 text-center">
        <h1>Todo List - CRUD</h1>
      </div>
      <div className="row">
        <div className="col-8">
          <TodoList
            todos={todos}
            todoDelete={todoDelete}
            todoToggleCompleted={todoToggleCompleted}
            setTodoEdit={setTodoEdit}
          />
        </div>
        <div className="col-4">
          <TodoForm
            todoAdd={todoAdd}
            todoEdit={todoEdit}
            todoUpdate={todoUpdate}
            setTodoEdit={setTodoEdit}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
