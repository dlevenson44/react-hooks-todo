import React, { useState } from 'react';

function Todo({ index, todo, remove, update }) {
  const [isEditing, setEdit] = useState(false);
  const [text, setText] = useState(todo);

  function updateTask(text, index) {
    update(text, index);
    setEdit(!isEditing);
  };

  return (
    <div className="item">
      {!isEditing ? (
        <div className="item-container">
          <p className="todo-item bright-color">{text}</p>
          <ion-icon name="create" size="large" class="bright-color" onClick={() => setEdit(!isEditing)} />
          <ion-icon name="trash" size="large" class="bright-color" onClick={() => remove(todo)} />
        </div>
      ) : (
        <div className="item-container">
          <input
            className="todo-edit bright-color"
            placeholder="Create New Item"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <ion-icon name="create" class="bright-color" onClick={() => updateTask(text, index)} />
          <ion-icon name="close-circle" class="bright-color" onClick={() => setEdit(!isEditing)} />
        </div>
      )}
      
    </div>
  );
}

export default Todo;
