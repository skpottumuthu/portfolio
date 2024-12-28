import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import HashRouter instead of BrowserRouter
import { HashRouter as Router } from 'react-router-dom';

// Create the root element
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Wrap the App component in Router */}
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

// Log performance metrics if needed
reportWebVitals();
