import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import apiTodos from '../lib/api-services';

class Tododetails extends Component {

  state = {
    todoid: this.props.match.params.id,
    title: '',
    body: '',
    redirect: false
  }

  handleForDelete = () => {
    apiTodos.deleteTodo(this.state.todoid)
      .then(() => {
        return this.setState({
          redirect: true
        })
      })
  }

  componentDidMount = () => {
    apiTodos.getTodoDetails(this.state.todoid)
      .then((data) => {
        return this.setState({
          title: data.title,
          body: data.body
        })
      })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/todos" />
    } else {
      return (
        <div>
          <h1>{this.state.title}</h1>
          <h2>{this.state.body}</h2>
          <button onClick={this.handleForDelete}>DELETE</button>
          <Link to={{ pathname: '/todos/edit', state: { id: this.state.todoid, title: this.state.title, body: this.state.body } }}>EDIT</Link>
        </div>
      )
    }
  }

}

export default Tododetails;