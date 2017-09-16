import React from 'react';
import TodoList from 'components/TodoList';
import AddTodo from 'components/AddTodo';
import TodoSearch from 'components/TodoSearch';

export default class Main extends React.Component {

  render() {
    return (
      <div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="app col-sm-12 col-md-6 col-lg-5">
              <h1 className="page-title">Todo App</h1>
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}