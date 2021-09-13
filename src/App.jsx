import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';

import storeInput from './components/storeInput';

const message = 'Welcome to ReactExam1';
const App = () => (
  <div className="App">
    <h1>{message}</h1>
    <br />
    <storeInput />
  </div>
);

export default hot(module)(App);
