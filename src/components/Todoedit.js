import React, { Component } from 'react';
import apiTodos from '../lib/api-services';
import { Redirect } from 'react-router-dom';

class TodoEdit extends Component {
  state = {
    title: '',
    body: '',
    id: '',
    redirect: false
  }

  componentDidMount = () => {
    const { id, title, body } = this.props.location.state
    this.setState({
      title: title,
      body: body,
      id: id
    })
  }

  handleFormSubmit = () => {
    const { title, body, id } = this.state;
    apiTodos.updateTodo({ id, title, body })
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
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/todos" />
    } else {
      return (
        <div>
          <h1>EDIT A TODO</h1>
          <form onSubmit={this.handleFormSubmit}>
            <label>
              Title:
        <input name="title" type="text" value={this.state.title} onChange={this.handleChange} />
            </label>
            <label>
              Body:
        <textarea name="body" type="text" value={this.state.body} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
      )
    }
  }
}

export default TodoEdit;