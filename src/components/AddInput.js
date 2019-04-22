import React, {Component} from 'react';
import './AddInput.scss';

class AddInput extends Component {

  handleChange = e => {
    this.props.onChange(e.target.value);
  };

  handleKeyDown = e => {
    if (e.keyCode !== 13) return;

    this.props.onSubmit(this.props.value);
    this.props.onChange('');
  };

  render() {
    return (
      <input
        type='text'
        name='task'
        className='input-task'
        placeholder='+ add a new task'
        value={this.props.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    );
  }
}

export default AddInput;