import { Avatar, Box, Container, Typography } from '@mui/material';
import { UserSignupForm } from '../features/user';

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
