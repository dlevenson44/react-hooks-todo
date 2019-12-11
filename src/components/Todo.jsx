import React from 'react';

function Todo({ todo, remove }) {
  return (
    <div>
      <p className="todo-item">{todo}</p>
      <ion-icon name="trash" onClick={() => remove(todo)} />
      <ion-icon name="create" onClick={() => console.log('editing task')} />
    </div>
  );
}

export default Todo;
