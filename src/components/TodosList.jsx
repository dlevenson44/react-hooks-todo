import React from 'react';
import { Container } from 'semantic-ui-react';
import Todo from './Todo';

function TodosList({ list, remove, update }) {
  return (
    <Container id="list-container">
      {!list.length ? (
        <p className="no-items"> There is nothing to do! </p>
      ) : (
        list.map((todo, index) => (
          <Todo
            key={todo}
            index={index}
            todo={todo}
            remove={remove}
            update={update}
          />
        ))
      )}
    </Container>
  );
}

export default TodosList;
