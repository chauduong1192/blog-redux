import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

render(    
  <div>
    <App />
  </div>,
    document.getElementById('root')
);
registerServiceWorker();
