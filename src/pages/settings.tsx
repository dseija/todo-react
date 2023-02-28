import { Container, Box, Typography } from '@mui/material';
import { SettingsList } from '../features/settings';

const SettingsPage = () => {
  return (
    <>
      <Container maxWidth="xs">
        <Box
          marginTop={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Typography variant="h4" component="h2" marginBottom={4}>
            Settings
          </Typography>
          <SettingsList />
        </Box>
      </Container>
    </>
  );
};

export default SettingsPage;
