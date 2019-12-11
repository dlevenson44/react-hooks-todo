import React from 'react';
import Todo from './Todo';

function TodosList({ list }) {
  return (
    <div className="list-container">
      {!list ? (
        <p> No List </p>
      ) : (
        list.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))
      )}
    </div>
  );
}

export default TodosList;
