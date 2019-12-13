import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

Create.propTypes = {
  list: PropTypes.array.isRequired,
  add: PropTypes.func.isRequired,
};

export default Create;
