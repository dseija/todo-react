import { Container, Link, Typography } from '@mui/material';

const Error404Page = () => {
  return (
    <>
      <Container maxWidth="sm" sx={{ p: 4 }}>
        <Typography variant="h2" marginBottom={4}>
          Aw, Snap!
        </Typography>
        <Typography variant="subtitle1">
          The section you're looking for doesn't exist. Go to the{' '}
          <Link href="/">Home Section</Link>!
        </Typography>
      </Container>
    </>
  );
};

export default Error404Page;
