import React, {Component} from 'react';
import './AddForm.scss';

class AddForm extends Component {

  handleChange = e => {
    this.props.onChange(e.target.value);
  };

  render() {
    return (
      <form>
        <input
          type='text' name='task' className='input-task'
          placeholder='+ add a new task'
          value={this.props.task} onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default AddForm;