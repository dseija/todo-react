import { Box, Container, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useAppDispatch } from '../common/hooks';
import { Layout } from '../features/layout';
import { getTodos, Todo, TodoList } from '../features/todo';
import { AddTodo } from '../features/todo';
import { setTodosAction } from '../features/todo/todoActions';
import { getUserSessionName, userHasSession } from '../features/user';

interface HomeLoaderData {
  todos: Todo[];
  displayName: string;
}

export const homeRouteLoader =
  (fallbackRedirect: () => Promise<void>) => async () => {
    const userLoggedIn = await userHasSession();
    if (!userLoggedIn) return fallbackRedirect();

    const [err, todos = []] = await getTodos();
    if (err) console.error(err);

    const displayName = await getUserSessionName();
    return { todos, displayName };
  };

const HomePage = () => {
  const { todos, displayName } = useLoaderData() as HomeLoaderData;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setTodosAction(todos));
  }, [todos]);

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
