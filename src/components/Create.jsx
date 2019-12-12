import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react'

function Create({ add }) {
  const [text, setText] = useState('');
  const isButtonDisabled = !text.length ? true : false;

  function addTask(text) {
    add(text);
    setText('');
  }
  return (
    <div className="create-container">
      <Input
        id="create-field"
        placeholder="Create New Item"
        value={text}
        onChange={e => setText(e.target.value)}
        size="mini"
        inverted={true}
      />
      <button
        id="create-button"
        disabled={isButtonDisabled}
        onClick={() => addTask(text)}
      >
        Add New Item
      </button>
    </div>
  );
}

export default Create;
