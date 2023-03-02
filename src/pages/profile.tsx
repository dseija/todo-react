import { Container, Box, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import { Layout } from '../features/layout';
import {
  getUserData,
  UserData,
  userHasSession,
  UserProfile,
} from '../features/user';

export const profileRouteLoader =
  (fallbackRedirect: () => Promise<void>) => async () => {
    const userLoggedIn = await userHasSession();
    if (!userLoggedIn) return fallbackRedirect();

    const [err, user] = await getUserData();
    if (err) return fallbackRedirect();

    return user;
  };

const ProfilePage = () => {
  const user = useLoaderData() as UserData;

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
              My Profile
            </Typography>
            <UserProfile user={user} />
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default ProfilePage;
