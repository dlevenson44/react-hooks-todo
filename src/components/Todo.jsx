import React from 'react';

function Todo({ todo }) {
  return (
    <div>
      <p className="todo-item">{todo}</p>
      <ion-icon name="trash" onClick={() => console.log('clicking')}></ion-icon>
    </div>
  );
}

export default Todo;
