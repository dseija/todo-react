import { Avatar, Box, Container, Typography } from '@mui/material';
import { userHasSession, UserSignupForm } from '../features/user';

export const signupRouteLoader =
  (fallbackRedirect: () => Promise<void>) => async () => {
    const userLoggedIn = await userHasSession();
    if (userLoggedIn) return fallbackRedirect();

    return {};
  };

const SignupPage = () => {
  return (
    <>
      <Container maxWidth="xs">
        <Box
          marginTop={8}
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Avatar sx={{ bgcolor: 'secondary.main', m: 1 }}></Avatar>
          <Typography component="h2" variant="h5">
            Sign up
          </Typography>

          <UserSignupForm />
        </Box>
      </Container>
    </>
  );
};

export default SignupPage;
