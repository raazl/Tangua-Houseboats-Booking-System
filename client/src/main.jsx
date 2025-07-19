import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

/**
 * Entry point of the React application.
 * Renders the App component into the DOM.
 */
ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode is a tool for highlighting potential problems in an application.
  // It activates additional checks and warnings for its descendants.
  <React.StrictMode>
    {/* The main application component is rendered here */}
    <App />
  </React.StrictMode>
);
