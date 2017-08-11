import React from 'react';
import ReactDOM from 'react-dom';
import Docs from './docs/Docs';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'highlight.js/styles/far.css'; // // sunburst far (old terminal)

ReactDOM.render(
  <Docs />,
  document.getElementById('root')
);
registerServiceWorker();
