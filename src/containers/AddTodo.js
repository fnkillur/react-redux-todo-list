import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddForm from '../components/AddForm';
import {input} from '../actions';

class AddTodo extends Component {

  render() {
    const {task, onChange} = this.props;

    return (
      <AddForm
        value={task}
        onChange={onChange}
      />
    );
  }
}

const mapStateToProps = state => {
  task: state.task
};

const mapDispatchToProps = dispatch => ({
  onChange: task => dispatch(input(task)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);