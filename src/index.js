/* eslint import/first: 0 */
import D from 'discord.js/webpack/discord'
window.Discord = D
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
