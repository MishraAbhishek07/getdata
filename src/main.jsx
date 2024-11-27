import React from 'react'; // Add this line
import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App.jsx';
import { ScrollToTop } from './pages/Components/ScrollToTop.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </StrictMode>
);
