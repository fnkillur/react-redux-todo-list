import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddTodo from './AddTodo';
import ShowTodoList from './ShowTodoList';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AddTodo/>
        <ShowTodoList/>
      </React.Fragment>
    );
  }
}

export default connect()(App);