import { Box, Container, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import { Layout } from '../features/layout';
import { TodoList } from '../features/todo';
import AddTodo from '../features/todo/AddTodo';
import { UserData } from '../features/user';

const HomePage = () => {
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
            width="100%"
          >
            <Typography variant="h4" component="h2" marginBottom={4}>
              {user.firstname}'s TODO list
            </Typography>
            <AddTodo />
            <TodoList />
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default HomePage;
