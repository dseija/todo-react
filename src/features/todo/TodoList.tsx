import { List, Typography } from '@mui/material';
import { useAppSelector } from '../../common/hooks';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todos = useAppSelector((state) => state.todoReducer.present);

  return (
    <>
      {!todos.length && (
        <Typography
          variant="body2"
          color="text.secondary"
          marginTop={4}
          fontStyle="italic"
          align="center"
        >
          There's nothing to do yet.
        </Typography>
      )}
      <List sx={{ width: '100%' }}>
        {todos.map((todo, index) => {
          const labelId = `todo-item-${todo.id || index}`;
          return (
            <TodoItem
              key={labelId}
              labelId={labelId}
              index={index}
              todo={todo}
            />
          );
        })}
      </List>
    </>
  );
};

export default TodoList;
