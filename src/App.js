import React, { useState } from 'react';
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
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };

  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // });

  return (
    <div className="App">
      <h1 className="app-header">Todos Hooks</h1>
      <p className="app-description">A Todo app created in React using only hooks and localStorage!</p>
      <Create
        list={todos}
        add={addTodo}
      />
      <TodosList
        list={todos}
        addTodo={addTodo}
      />
    </div>
  );
}

export default App;
