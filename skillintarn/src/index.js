import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import AuthPage from './Public Entry/login';
import reportWebVitals from './reportWebVitals';
import AvailableInternships from './Public Entry/availableinterships';
import RegisterPage from './Public Entry/RegisterPage';
import Intershipinfo from './admin/CreateInternship';
import PaymentPage from './Public Entry/paymentpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/availableinterships" element={<AvailableInternships />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/admin/create-internship" element={<Intershipinfo />} />
        <Route path="/payment" element={<PaymentPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
