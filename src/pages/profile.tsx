import { Container, Box, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import { UserData, UserProfile } from '../features/user';

const ProfilePage = () => {
  const user = useLoaderData() as UserData;

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
            My Profile
          </Typography>
          <UserProfile user={user} />
        </Box>
      </Container>
    </>
  );
};

export default ProfilePage;
