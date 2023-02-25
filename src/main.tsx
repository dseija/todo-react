import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import { theme } from './config';
import { appRouter, store } from './app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={appRouter} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
