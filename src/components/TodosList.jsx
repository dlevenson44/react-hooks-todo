import React from 'react';
import PropTypes from 'prop-types';
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

TodosList.propTypes = {
  list: PropTypes.array.isRequired,
  remove: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};

export default TodosList;
