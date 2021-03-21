import React from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes';
import store from './store';
import './app.css';
import SnackBar from './shared/components/snackbar/Snackbar';

const App = () => (
  <Provider store={store}>
    <SnackBar />
    <Routes />
  </Provider>
  );

export default App;
