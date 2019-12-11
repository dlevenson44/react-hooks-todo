import React, { useState } from 'react';

function Create({ add }) {
  const [text, setText] = useState('');
  const isButtonDisabled = !text.length ? true : false;

  function addTask(text) {
    add(text);
    setText('');
  }
  return (
    <div className="create-container">
      <input
        id="create-field"
        placeholder="Create New Item"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button
        className="create-button"
        disabled={isButtonDisabled}
        onClick={() => addTask(text)}
      >
        Add New Item
      </button>
    </div>
  );
}

export default Create;
