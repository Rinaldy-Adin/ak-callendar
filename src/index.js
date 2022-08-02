import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import Theme from './themes/Theme';
import GlobalStyle from './themes/GlobalStyles';
import { ThemeProvider } from 'styled-components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
