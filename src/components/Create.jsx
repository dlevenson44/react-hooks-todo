import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';

function Create({ add }) {
  const [text, setText] = useState('');
  const isButtonDisabled = !text.length;

  function addTask(e) {
    if (!e || e === 13) {
      add(text);
      setText('');
    }
  }

  return (
    <div className="create-container">
      <Input
        id="create-field"
        placeholder="Create New Item"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => addTask(e.charCode)}
        size="mini"
        inverted
      />
      <button
        type="submit"
        id="create-button"
        disabled={isButtonDisabled}
        onClick={() => addTask()}
      >
        Add New Item
      </button>
    </div>
  );
}

Create.propTypes = {
  add: PropTypes.func.isRequired,
};

export default Create;
