import React from 'react';
import Todo from './Todo';

function TodosList({ list, remove, update }) {
  return (
    <div className="list-container">
      {!list.length ? (
        <p className="no-items"> There is nothing to do! </p>
      ) : (
        list.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            remove={remove}
            update={update}
          />
        ))
      )}
    </div>
  );
}

export default TodosList;
