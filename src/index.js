import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MantineProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
