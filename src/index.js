import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/Docs';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Docs />,
  document.getElementById('root')
);
registerServiceWorker();