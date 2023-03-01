import {
  Alert,
  Avatar,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  Container,
  FormControlLabel,
  Grid,
  Link,
  Snackbar,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../common/hooks';
import { userLogin } from '../features/user';
import { userLoginAction } from '../features/user';

const SigninPage = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [_, setCookie] = useCookies();
  const { action, status } = useParams();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(
    action === 'register' && status === 'success'
  );

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (username && password) {
      setSubmitting(true);
      const [err, user] = await userLogin({ username, password });
      if (user && user.token) {
        setCookie('sessionToken', user.token, { sameSite: 'lax', path: '/' });
        delete user.token;
        dispatch(userLoginAction(user));
        navigate('/', { replace: true });
      } else {
        setErrorMessage(
          err?.response?.status === 401
            ? 'Wrong username or password.'
            : 'Unexpected error, please try again.'
        );
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
            Sign in
          </Typography>

          <Box component="form" noValidate marginTop={1} onSubmit={onSubmit}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Email Address"
              name="username"
              autoComplete="email"
              autoFocus
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              error={Boolean(submitted && !username)}
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
              error={Boolean(submitted && !password)}
              disabled={submitting}
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="remember"
                  name="remember"
                  color="primary"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
              }
              label="Remember me"
              disabled={submitting}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={submitting}
            >
              Sign In
              {submitting && <CircularProgress size={24} sx={{ ml: 1 }} />}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={NavLink} to="/signup">
                  Don't have an account? Sign Up
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
      </Container>
    </>
  );
};

export default SigninPage;
