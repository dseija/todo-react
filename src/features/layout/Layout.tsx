import { Box, Toolbar } from '@mui/material';
import { ReactElement } from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box display="flex">
      <TopBar />
      <Box flexShrink={0}>
        <SideBar />
      </Box>
      <Box component="main" flexGrow={1}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
