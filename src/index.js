import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routes/AppRouter';
import './styles/App.css';
// axios.defaults.baseURL = 'https://ridemw.herokuapp.com/api/v1/';
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
const App = () => (
  <Router>
    <AppRouter />
  </Router>
);

const root = document.getElementById('root');

render(<App />, root);
