import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { CookiesProvider } from 'react-cookie';
import { RouterProvider } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';

import { theme } from './config';
import { appRouter, store } from './app';
import { cookies } from './common/lib';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider cookies={cookies}>
      <ReduxProvider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={appRouter} />
        </ThemeProvider>
      </ReduxProvider>
    </CookiesProvider>
  </React.StrictMode>
);
