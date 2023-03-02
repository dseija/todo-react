import {
  ListItem,
  IconButton,
  Icon,
  ListItemButton,
  ListItemIcon,
  Checkbox,
  ListItemText,
} from '@mui/material';
import { useAppDispatch } from '../../common/hooks';
import { removeTodoAction, toggleTodoAction } from './todoActions';
import { removeTodo, updateTodo } from './todoService';
import { Todo } from './todoTypes';

interface TodoItemProps {
  labelId: string;
  index: number;
  todo: Todo;
}

const TodoItem = ({ labelId, index, todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  const toggleCompleted = () => {
    dispatch(toggleTodoAction(index));

    if (todo.id) updateTodo(todo.id, !Boolean(todo.completed));
  };

  const removeTodoItem = () => {
    dispatch(removeTodoAction(index));

    if (todo.id) removeTodo(todo.id);
  };

  return (
    <ListItem
      key={labelId}
      disablePadding
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="remove todo"
          onClick={removeTodoItem}
        >
          <Icon>close</Icon>
        </IconButton>
      }
    >
      <ListItemButton onClick={toggleCompleted}>
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
};

export default TodoItem;
