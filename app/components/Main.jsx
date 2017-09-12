import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import uuid from 'uuid';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: uuid(),
          text: 'Walk the dog',
          completed: false
        },
        {
          id: uuid(),
          text: 'Clean the yard',
          completed: true
        }, 
        {
          id: uuid(),
          text: 'Leave mail on porch',
          completed: true
        },
        {
          id: uuid(),
          text: 'Play video games',
          completed: false
        }
      ]
    };

    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleAddTodo(text) {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid(),
          text,
          completed: false
        }
      ]
    });
  }

  handleToggle(id) {
    const updatedTodos = this.state.todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }

      return todo;
    });

    this.setState({todos: updatedTodos});
  }

  handleSearch(showCompleted, searchText) {
    this.setState({
      showCompleted,
      searchText: searchText.toLowerCase()
    });
  }

  render() {
    const {todos} = this.state;
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-6 col-lg-5">
              <TodoSearch onSearch={this.handleSearch}/>
              <TodoList todos={todos} onToggle={this.handleToggle}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}