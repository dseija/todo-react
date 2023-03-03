import React from 'react';
import ReactDOM from 'react-dom/client';
import { CookiesProvider } from 'react-cookie';
import { Provider as ReduxProvider } from 'react-redux';

import { App, store } from './app';
import { cookies } from './common/lib';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CookiesProvider cookies={cookies}>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </CookiesProvider>
  </React.StrictMode>
);
