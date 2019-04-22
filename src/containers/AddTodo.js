import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddInput from '../components/AddInput';
import {input, add} from '../actions';

class AddTodo extends Component {

  render() {
    const {task, onChange, onSubmit} = this.props;

    return (
      <AddInput
        value={task}
        onChange={onChange}
        onSubmit={onSubmit}
      />
    );
  }
}

const mapStateToProps = state => ({
  task: state.task
});

const mapDispatchToProps = dispatch => ({
  onChange: task => dispatch(input(task)),
  onSubmit: task => dispatch(add(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);