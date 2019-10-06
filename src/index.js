import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { timeline } from './data';

ReactDOM.render(<App timeline={timeline} />, document.getElementById('root'));
