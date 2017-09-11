import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        }, 
        {
          id: 3,
          text: 'Leave mail on porch'
        },
        {
          id: 4,
          text: 'Play video games'
        }
      ]
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  handleAddTodo(text) {
    alert('new todo: ' + text);
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-5">
              <TodoList todos={todos}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}