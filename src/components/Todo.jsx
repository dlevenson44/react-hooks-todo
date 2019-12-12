import React, { useState } from 'react';
import { Popup } from 'semantic-ui-react';

function Todo({ index, todo, remove, update }) {
  const [isEditing, setEdit] = useState(false);
  const [isComplete, setComplete] = useState(false);
  const [text, setText] = useState(todo);

  function updateTask(text, index) {
    update(text, index);
    setEdit(!isEditing);
  };

  return (
    <div className="item">
      {!isEditing ? (
        <div className="item-container">
          <p className={`todo-item bright-color ${isComplete ? 'completed' : ''}`}>{text}</p>
          <Popup
            content="Complete Task"
            size="tiny"
            style={{ 'backgroundColor': 'rgba(0,0,0,0)', 'color': '#49FCE4', 'border': 'hidden' }}
            basic={true}
            trigger={<ion-icon name="checkbox" size="large" class="icon bright-color" onClick={() => setComplete(!isComplete)} />}
          />
          <Popup
            content="Edit Task"
            size="tiny"
            style={{ 'backgroundColor': 'rgba(0,0,0,0)', 'color': '#49FCE4', 'border': 'hidden' }}
            basic={true}
            trigger={<ion-icon name="create" size="large" class="icon bright-color" onClick={() => setEdit(!isEditing)} />}
          />
          <Popup
            content="Remove Task"
            size="tiny"
            style={{ 'backgroundColor': 'rgba(0,0,0,0)', 'color': '#49FCE4', 'border': 'hidden' }}
            basic={true}
            trigger={<ion-icon name="trash" size="large" class="icon bright-color" onClick={() => remove(todo)} />}
          />
        </div>
      ) : (
        <div className="item-container">
          <input
            className="todo-edit bright-color"
            placeholder="Create New Item"
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <ion-icon name="create" class="icon bright-color" onClick={() => updateTask(text, index)} />
          <ion-icon name="close-circle" class="icon bright-color" onClick={() => setEdit(!isEditing)} />
        </div>
      )}
      
    </div>
  );
}

export default Todo;
