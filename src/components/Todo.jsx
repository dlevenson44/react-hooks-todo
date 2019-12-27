import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';

function Todo({
  index, todo, remove, update,
}) {
  const [isEditing, setEdit] = useState(false);
  const [isComplete, setComplete] = useState(false);
  const [text, setText] = useState(todo);
  const style = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#49FCE4',
    border: 'hidden',
  };

  function updateTask(task, idx, e) {
    if (!e || e === 13) {
      update(task, idx);
      setEdit(!isEditing);
    }
  }

  return (
    <div className="item">
      {!isEditing ? (
        <div className="item-container">
          <p className={`todo-item bright-color ${isComplete ? 'completed' : ''}`}>{text}</p>
          <Popup
            content="Complete Task"
            size="tiny"
            style={style}
            basic
            trigger={isComplete
              ? <ion-icon name="checkbox" size="large" class="icon bright-color" onClick={() => setComplete(!isComplete)} />
              : <ion-icon name="square-outline" size="large" class="icon bright-color" onClick={() => setComplete(!isComplete)} />}
          />
          <Popup
            content="Edit Task"
            size="tiny"
            style={style}
            basic
            trigger={<ion-icon name="create" size="large" class="icon bright-color" onClick={() => setEdit(!isEditing)} />}
          />
          <Popup
            content="Remove Task"
            size="tiny"
            style={style}
            basic
            trigger={<ion-icon name="trash" size="large" class="icon bright-color" onClick={() => remove(todo)} />}
          />
        </div>
      ) : (
        <div className="item-container">
          <input
            className="todo-edit bright-color"
            placeholder="Create New Item"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onClick={() => updateTask(text, index)}
            onKeyPress={(e) => updateTask(text, index, e)}
          />
          <div className="popup-container">
            <Popup
              content="Submit Edit"
              size="tiny"
              style={style}
              basic
              trigger={<ion-icon name="create" size="large" class="icon bright-color" onClick={() => updateTask(text, index)} />}
            />
            <Popup
              content="Cancel Edit"
              size="tiny"
              style={style}
              basic
              trigger={<ion-icon name="close-circle" size="large" class="icon bright-color" onClick={() => setEdit(!isEditing)} />}
            />
          </div>
        </div>
      )}
    </div>
  );
}

Todo.propTypes = {
  index: PropTypes.number.isRequired,
  todo: PropTypes.string.isRequired,
  remove: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
};

export default Todo;
