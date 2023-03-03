import { Box, Drawer, Toolbar } from '@mui/material';
import SideBarList from './SideBarList';

interface SideBarProps {
  isOpen?: boolean;
  onClose: () => void;
}

const SideBar = ({ isOpen, onClose }: SideBarProps) => {
  const drawerWidth = 240;

  return (
    <>
      <Drawer
        sx={{
          display: { xs: 'block', sm: 'none' },
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        ModalProps={{ keepMounted: true }}
        onClose={onClose}
        open={isOpen}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <SideBarList />
        </Box>
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          width: drawerWidth,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <SideBarList />
        </Box>
      </Drawer>
    </>
  );
};

export default SideBar;
