import React, {Component} from 'react';
import {connect} from 'react-redux';
import TodoList from '../components/TodoList';

class ShowTodoList extends Component {
  render() {
    const {todoList} = this.props;

    return (
      <TodoList
        todoList={todoList}
      />
    );
  }
}

const mapStateToProps = state => ({
  todoList: state.todoList,
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ShowTodoList);