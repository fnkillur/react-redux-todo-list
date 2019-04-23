import React from 'react';
import {connect} from 'react-redux';
import AddInput from '../components/AddInput';
import {input, add, increaseId} from '../actions';

const AddTodo = ({task, onChange, onSubmit, id, increaseId}) => {

  const handleSubmit = task => {
    onSubmit({
      id,
      task,
      complete: false
    });

    increaseId(id);
  };

  return (
    <AddInput
      value={task}
      onChange={onChange}
      onSubmit={handleSubmit}
    />
  );
};

const mapStateToProps = state => ({
  task: state.task,
  id: state.todoId
});

const mapDispatchToProps = dispatch => ({
  onChange: task => dispatch(input(task)),
  onSubmit: todo => dispatch(add(todo)),
  increaseId: id => dispatch(increaseId(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);