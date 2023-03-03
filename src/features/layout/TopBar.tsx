import { AppBar, Icon, IconButton, Toolbar, Typography } from '@mui/material';

interface TopBarProps {
  onMenuClick: () => void;
}

const TopBar = ({ onMenuClick }: TopBarProps) => {
  return (
    <AppBar
      position="fixed"
      sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ display: { xs: 'block', sm: 'none' }, mr: 2 }}
          onClick={onMenuClick}
        >
          <Icon>menu</Icon>
        </IconButton>
        <Typography variant="h6" component="h1">
          TODO React App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
