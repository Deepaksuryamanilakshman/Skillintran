import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthPage from './Public Entry/AuthPage';
import reportWebVitals from './reportWebVitals';
import AvailableInternships from './Public Entry/availableinterships';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/authentication" element={<AuthPage />} />
        <Route path="/availableinterships" element={<AvailableInternships />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
