import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:4000/api/v1',
      withCredentials: true
    })
  }

  getAllTodos() {
    return this.api.get('/todos')
      .then(({ data }) => {
        return data
      })
  }

  NewTodo(object) {
    return this.api.post('/todos', object)
      .then(({ data }) => {
        return data
      })
  }

  getTodoDetails(id) {
    return this.api.get(`/todos/${id}`)
      .then(({ data }) => {
        return data
      })
  }

  deleteTodo(id) {
    return this.api.delete(`/todos/${id}`)
      .then(() => {
        console.log("BORRADO")
      })
  }

  updateTodo(object) {
    return this.api.put(`/todos/${object.id}`, object)
      .then(() => {
        console.log("BORRADO")
      })
  }



}

const apiTodos = new Api();

export default apiTodos;