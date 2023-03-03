import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { useAppSelector } from '../common/hooks';
import { themeConfig } from '../config';
import appRouter from './router';

const App = () => {
  const settings = useAppSelector((state) => state.settingsReducer);

  return (
    <ThemeProvider theme={themeConfig(settings.themeMode)}>
      <CssBaseline />
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  );
};

export default App;
