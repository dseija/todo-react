import { AppBar, Toolbar, Typography } from '@mui/material';

const TopBar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <Typography variant="h6" component="h1">
          TODO React App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;