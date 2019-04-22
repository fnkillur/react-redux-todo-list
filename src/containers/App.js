import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddTodo from './AddTodo';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <AddTodo/>
      </React.Fragment>
    );
  }
}

export default connect()(App);