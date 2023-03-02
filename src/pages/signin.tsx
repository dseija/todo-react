import {
  Alert,
  Avatar,
  Box,
  Container,
  Snackbar,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { userHasSession, UserSigninForm } from '../features/user';

export const signinRouteLoader =
  (fallbackRedirect: () => Promise<void>) => async () => {
    const userLoggedIn = await userHasSession();
    if (userLoggedIn) return fallbackRedirect();

    return {};
  };

const SigninPage = () => {
  const { action, status } = useParams();
  const [registerSuccess, setRegisterSuccess] = useState(
    action === 'register' && status === 'success'
  );

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
            Sign in
          </Typography>

          <UserSigninForm />

          <Snackbar
            open={registerSuccess}
            autoHideDuration={5000}
            anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
            onClose={() => setRegisterSuccess(false)}
          >
            <Alert severity="success" onClose={() => setRegisterSuccess(false)}>
              Your account has been created! Now you can sign in.
            </Alert>
          </Snackbar>
        </Box>
      </Container>
    </>
  );
};

export default SigninPage;
