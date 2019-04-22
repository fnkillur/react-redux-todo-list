import React, {Component} from 'react';

class Todo extends Component {
  render() {
    return (
      <li>
        <section className='view'>
          {this.props.todo.task}
        </section>
        <section className='edit'>

        </section>
      </li>
    );
  }
}

export default Todo;