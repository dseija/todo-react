import { Container, Typography } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import { TodoList } from '../features/todo';
import AddTodo from '../features/todo/AddTodo';
import { UserData } from '../features/user';

const HomePage = () => {
  const user = useLoaderData() as UserData;

  return (
    <>
      <Container maxWidth="xs" sx={{ p: 4 }}>
        <Typography variant="h3" marginBottom={4}>
          {user.firstname}'s TODO list
        </Typography>
        <AddTodo />
        <TodoList />
      </Container>
    </>
  );
};

export default HomePage;
