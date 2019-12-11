import React, { useState, useEffect } from 'react';
import Create from './components/Create';
import TodosList from './components/TodosList';
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    "Learn about React",
    "Meet friend for lunch",
    "Build really cool todo app",
  ]);

  const addTodo = text => {
    setTodos([...todos, text]);
  };

  const removeTodo = text => {
    const updatedTodos = todos.filter(todo => todo !== text);
    setTodos(updatedTodos);
  };

  const updateTodo = (text, index) => {
    todos[index] = text;
    setTodos(todos)
  }

  return (
    <div className="App">
      <h1 className="app-header">Todos Hooks</h1>
      <p className="app-description">A Todo app created in React using only hooks!</p>
      <Create
        list={todos}
        add={addTodo}
      />
      <TodosList
        list={todos}
        remove={removeTodo}
        update={updateTodo}
      />
    </div>
  );
}

export default App;
