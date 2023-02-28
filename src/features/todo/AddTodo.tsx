import { Icon, IconButton, InputBase, Paper } from '@mui/material';
import { useState } from 'react';
import { useAppDispatch } from '../../common/hooks';
import { addTodoAction } from './todoActions';

const AddTodo = () => {
  const dispatch = useAppDispatch();
  const [description, setDescription] = useState('');

  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) =>
    setDescription(target.value);

  const onSubmit = (e: React.SyntheticEvent<HTMLElement>) => {
    e.preventDefault();
    dispatch(addTodoAction(description));
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
