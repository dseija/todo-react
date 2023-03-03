import { Box, Toolbar } from '@mui/material';
import { ReactElement, useState } from 'react';
import SideBar from './SideBar';
import TopBar from './TopBar';

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Box display="flex">
      <TopBar onMenuClick={toggleSidebar} />
      <Box flexShrink={0}>
        <SideBar isOpen={sidebarOpen} onClose={toggleSidebar} />
      </Box>
      <Box component="main" flexGrow={1}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
