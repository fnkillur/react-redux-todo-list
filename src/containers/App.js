import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddTodo from './AddTodo';
import ShowTodoList from './ShowTodoList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='app'>
        <AddTodo/>
        <ShowTodoList/>
      </div>
    );
  }
}

export default connect()(App);