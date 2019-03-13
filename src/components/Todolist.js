import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import apiTodos from '../lib/api-services';

class Todolist extends Component {

  state = {
    todosArray: []
  }

  componentDidMount = () => {
    apiTodos.getAllTodos()
      .then((data) => {
        this.setState({
          todosArray: data
        })
        console.log(this.state.todosArray)
      })
  }

  render() {
    return (
      <div>
        <h1>TODO LIST</h1>
        {this.state.todosArray.map((todo) => {
          return <Link to={`todos/${todo._id}`} id={todo._id}><h2>{todo.title}</h2></Link>
        })}
        <Link to='new'>CREATE NEW TODO</Link>
      </div>
    )
  }


}

export default Todolist;