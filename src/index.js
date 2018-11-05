import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import Header from './components/Header/Header';

ReactDOM.render(
  <Header>
    <App />
  </Header>,
  document.getElementById('root')
 );