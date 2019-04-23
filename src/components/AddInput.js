import React from 'react';
import './AddInput.scss';

const AddInput = ({onChange, onSubmit, value}) => {
  const handleChange = e => {
    onChange(e.target.value);
  };

  const handleKeyDown = e => {
    if (e.keyCode !== 13) return;

    onSubmit(value);
    onChange('');
  };

  return (
    <input
      type='text'
      name='task'
      className='input-task'
      placeholder='+ add a new task'
      value={value}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};

export default AddInput;