import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { ThemeContextProvider } from './contexts/themeContext';

const element = document.getElementById('root');
const root = ReactDOM.createRoot(element);

root.render(
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
);
