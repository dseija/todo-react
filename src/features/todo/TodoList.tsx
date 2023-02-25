import {
  Checkbox,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material';
import { useAppSelector, useAppDispatch } from '../../common/hooks';
import { removeTodoAction, toggleTodoAction } from './todoActions';

const TodoList = () => {
  const todos = useAppSelector((state) => state.todoReducer.present);
  const dispatch = useAppDispatch();

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
      <List>
        {todos.map((todo, index) => {
          const labelId = `todo-item-${todo.id || index}`;
          return (
            <ListItem
              key={labelId}
              disablePadding
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="remove todo"
                  onClick={() => dispatch(removeTodoAction(index))}
                >
                  <Icon>close</Icon>
                </IconButton>
              }
            >
              <ListItemButton onClick={() => dispatch(toggleTodoAction(index))}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    checked={Boolean(todo.completed)}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      'aria-labelledby': labelId,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  sx={{ textDecoration: todo.completed ? 'line-through' : '' }}
                >
                  {todo.description}
                </ListItemText>
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default TodoList;
