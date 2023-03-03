import { createTheme } from '@mui/material/styles';

const themeConfig = (mode: 'dark' | 'light') =>
  createTheme({
    palette: {
      mode,
      primary: {
        main: '#00D8FF',
      },
    },
  });

export default themeConfig;
