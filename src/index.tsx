import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import theme from './core/themes';
import { ThemeProvider } from '@emotion/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>

);

