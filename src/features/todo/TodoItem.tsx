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
import { Todo } from './todoTypes';

interface TodoItemProps {
  labelId: string;
  index: number;
  todo: Todo;
}

const TodoItem = ({ labelId, index, todo }: TodoItemProps) => {
  const dispatch = useAppDispatch();

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
};

export default TodoItem;
