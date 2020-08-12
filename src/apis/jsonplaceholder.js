import axios from 'axios';

const jsonplaceholder = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
});

export const createUser = user => jsonplaceholder.post('/users', user);

export const deleteUser = userName =>
  jsonplaceholder.delete(`/users/${userName}`);

export const readUsers = () => jsonplaceholder.get('/users');
