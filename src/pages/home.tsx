import { Container, Typography } from '@mui/material';
import { TodoList } from '../features/todo';
import AddTodo from '../features/todo/AddTodo';

const HomePage = () => {
  return (
    <>
      <Container maxWidth="xs" sx={{ p: 4 }}>
        <Typography variant="h3" marginBottom={4}>
          {'User'}'s TODO list
        </Typography>
        <AddTodo />
        <TodoList />
      </Container>
    </>
  );
};

export default HomePage;
