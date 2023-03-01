import {
  Alert,
  Avatar,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Link,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { isValidEmail } from '../common/utils';
import { userRegister } from '../features/user';

const SignupPage = () => {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const isEmailInvalid = () =>
    Boolean((submitted && !username) || (username && !isValidEmail(username)));
  const isPasswordInvalid = () =>
    Boolean((submitted && !password) || (password && password.length < 6));

  const onSubmit = async (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    if (firstname && lastname && !isEmailInvalid() && !isPasswordInvalid()) {
      setSubmitting(true);
      const [err, user] = await userRegister({
        username,
        password,
        firstname,
        lastname,
      });
      if (user) {
        navigate('/signin/register/success', { replace: true });
      } else {
        let message = 'Unexpected error, please try again.';
        if (err?.response?.status === 409) {
          message = 'An account with that email already exists.';
          setUsername('');
        }

        setErrorMessage(message);
      }

      setPassword('');
      setSubmitting(false);
    }

    setSubmitted(true);
  };

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

          <Box component="form" noValidate marginTop={1} onSubmit={onSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  name="firstname"
                  autoComplete="given-name"
                  autoFocus
                  onChange={({ target }) => setFirstname(target.value)}
                  error={submitted && !firstname}
                  disabled={submitting}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="family-name"
                  onChange={({ target }) => setLastname(target.value)}
                  error={submitted && !lastname}
                  disabled={submitting}
                />
              </Grid>
            </Grid>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              error={isEmailInvalid()}
              disabled={submitting}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="password"
              label="Password"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              error={isPasswordInvalid()}
              helperText={
                submitted && password && password.length < 6
                  ? 'Password must be at least 6 characters long'
                  : ''
              }
              disabled={submitting}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
              {submitting && <CircularProgress size={24} sx={{ ml: 1 }} />}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={NavLink} to="/signin">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Snackbar
          open={Boolean(errorMessage)}
          autoHideDuration={5000}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
          onClose={() => setErrorMessage('')}
        >
          <Alert onClose={() => setErrorMessage('')} severity="error">
            {errorMessage}
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
};

export default SignupPage;
