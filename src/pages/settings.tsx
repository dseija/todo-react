import { Container, Box, Typography } from '@mui/material';
import { Layout } from '../features/layout';
import { SettingsList } from '../features/settings';

const SettingsPage = () => {
  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
};

export default SettingsPage;
