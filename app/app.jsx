import React from 'react';
import ReactDOM from 'react-dom';
import Main from 'components/Main';

const store = require('configureStore').configure();

require('./styles/main.scss');

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);