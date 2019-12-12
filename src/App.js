import React, { useState } from 'react';
import { Container, Header, Label } from 'semantic-ui-react'
import Create from './components/Create';
import TodosList from './components/TodosList';
import 'semantic-ui-css/semantic.min.css';
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
    <Container textAlign="center" text={true}>
      <Header 
        as="h1"
        dividing={true}
        id="header"
      >
        Todos Hooks
      </Header>
      <Header 
        as="h4"
        id="sub-header"
      >
        A Todo app created in React using only hooks!
      </Header>
      <Create
        list={todos}
        add={addTodo}
      />
      <TodosList
        list={todos}
        remove={removeTodo}
        update={updateTodo}
      />
    </Container>
  );
}

export default App;
