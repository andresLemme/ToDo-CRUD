import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  return (
  
      <div className="container mt-4">
      <div className="container col-12 text-center">
        <h1>Todo List - CRUD</h1>
      </div>
        <div className="row">
          <div className="col-8">            
            <TodoList/>
          </div>
          <div className="col-4">
          <TodoForm/>
          </div>
        </div>
      </div>
  
  );
}

export default App;
