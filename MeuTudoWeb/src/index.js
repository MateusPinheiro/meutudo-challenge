import App from './app/App';
import React from  'react';
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import './styles/index.scss';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.getElementById("app"));
