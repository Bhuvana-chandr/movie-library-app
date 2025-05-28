// ✅ STEP 1: ENTRY POINT (main.jsx)
// 🔸 Why this file?
// It’s the first file React loads. We wrap everything in <BrowserRouter> and <AppProvider>
// to give routing and global state access.

// File: main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProvider>
        <App />
      </AppProvider>
    </BrowserRouter>
  </React.StrictMode>
);
