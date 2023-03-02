import { Box, Container, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import { Layout } from '../features/layout';
import { TodoList } from '../features/todo';
import AddTodo from '../features/todo/AddTodo';
import { getUserSessionName, UserData, userHasSession } from '../features/user';

export const homeRouteLoader =
  (fallbackRedirect: () => Promise<void>) => async () => {
    const userLoggedIn = await userHasSession();
    if (!userLoggedIn) return fallbackRedirect();

    const displayName = await getUserSessionName();
    return displayName;
  };

const HomePage = () => {
  const displayName = useLoaderData() as string;

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
              {displayName}'s TODO list
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
