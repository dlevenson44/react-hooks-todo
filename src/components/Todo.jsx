import React, { useState, useEffect } from 'react';

function Todo({ index, todo, remove, update }) {
  const [isEditing, setEdit] = useState(false);
  const [text, setText] = useState(todo);

  function updateTask(text, index) {
    update(text, index);
    setEdit(!isEditing);
  };

  return (
    <div>
      {!isEditing ? (
        <div>
          <p className="todo-item">{text}</p>
          <ion-icon name="create" onClick={() => setEdit(!isEditing)} />
          <ion-icon name="trash" onClick={() => remove(todo)} />
        </div>
      ) : (
        <div>
          <input
            id="create-field"
            placeholder="Create New Item"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <ion-icon name="create" onClick={() => updateTask(text, index)} />
          <ion-icon name="close-circle" onClick={() => setEdit(!isEditing)} />
        </div>
      )}
      
    </div>
  );
}

export default Todo;
