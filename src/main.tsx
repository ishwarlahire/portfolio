import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Set initial theme before render to avoid flash
const stored = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', stored);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
