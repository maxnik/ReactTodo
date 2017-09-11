import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCompleted: false,
      searchText: '',
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
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleAddTodo(text) {
    alert('new todo: ' + text);
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
              <TodoList todos={todos}/>
              <AddTodo onAddTodo={this.handleAddTodo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}