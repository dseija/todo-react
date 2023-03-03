import { Icon, IconButton, InputBase, Paper } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../common/hooks';
import { addTodoAction, updateTodoIdAction } from './todoActions';
import { createTodo } from './todoService';

const AddTodo = () => {
  const todos = useAppSelector((state) => state.todoReducer);
  const dispatch = useAppDispatch();
  const [description, setDescription] = useState('');

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(target.value);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextIndex = todos.length;

    dispatch(addTodoAction(description));

    createTodo(description).then(([err, todo]) => {
      if (!err && todo?.id) dispatch(updateTodoIdAction(nextIndex, todo.id));
    });

    setDescription('');
  };

  return (
    <>
      <Paper
        component="form"
        onSubmit={onSubmit}
        sx={{ p: 1, display: 'flex', alignItems: 'center', width: '100%' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1, height: 36 }}
          placeholder="Add something to do here"
          inputProps={{ 'aria-label': 'add something to do here' }}
          value={description}
          onChange={onChange}
          autoFocus
        />
        {description && (
          <IconButton type="submit" sx={{ p: 0 }} aria-label="add">
            <Icon color="primary" fontSize="large">
              add_circle
            </Icon>
          </IconButton>
        )}
      </Paper>
    </>
  );
};

export default AddTodo;
