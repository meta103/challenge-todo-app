import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Todolist from './components/Todolist';
import NewTodo from './components/Newtodo';
import Tododetails from './components/Tododetails';
import TodoEdit from './components/Todoedit';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/todos" component={Todolist} />
          <Route exact path="/todos/edit" component={TodoEdit} />
          <Route exact path="/new" component={NewTodo} />
          <Route path="/todos/:id" component={Tododetails} />
        </Switch>
      </div>
    );
  }
}

export default App;
