import React from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './store';
import './app.css';

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
