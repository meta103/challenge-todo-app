import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import apiTodos from '../lib/api-services';

class NewTodo extends Component {
  state = {
    title: '',
    body: '',
    redirect: false
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, body } = this.state;
    apiTodos.NewTodo({ title, body })
      .then((data) => {
        return this.setState({
          redirect: true
        })
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state.title)
    console.log(this.state.body)

  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/todos" />
    } else {
      return (
        <div>
          <h1>Create a new todo</h1>
          <form onSubmit={this.handleFormSubmit}>
            <label>
              Title:
          <input name="title" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              Body:
          <textarea name="body" type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }


}

export default NewTodo;