// src/services/todoService.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/todos';

export const getTodos = () => axios.get(API_URL);
export const createTodo = (todo) => axios.post(API_URL, todo);
export const deleteTodo = (id) => axios.delete(`${API_URL}/${id}`);
