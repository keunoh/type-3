import axios from "axios";

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

// Fetch todos
export const getTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data.slice(0, 10);
}

// Post a new todo
export const postTodo = async (newTodo) => {
  const response = await axios.post(API_URL, newTodo);
  return response.data;
}