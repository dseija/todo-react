import { Container, Box } from '@mui/material';
import { SettingsList } from '../features/settings';

const SettingsPage = () => {
  return (
    <>
      <Container maxWidth="xs">
        <Box
          marginTop={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <SettingsList />
        </Box>
      </Container>
    </>
  );
};

export default SettingsPage;
