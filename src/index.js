import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';

// axios.defaults.baseURL = 'https://class-hub-backend.herokuapp.com/';
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.headers.common['Authorization'] =
  'Bearer ' + localStorage.getItem('classHub');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
