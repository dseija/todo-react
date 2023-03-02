import { axios } from '../../common/lib';
import { Todo } from './todoTypes';

// TODO: change the type 'any'
type TodoResponse = [any, Todo?];
type TodosResponse = [any, Todo[]?];

export const getTodos = async (): Promise<TodosResponse> => {
  try {
    const { data } = await axios.get('/todos');
    return [null, data as Todo[]];
  } catch (err) {
    return [err];
  }
};

export const createTodo = async (
  description: string
): Promise<TodoResponse> => {
  try {
    const { data } = await axios.post('/todos', { description });
    return [null, data as Todo];
  } catch (err) {
    return [err];
  }
};

export const updateTodo = async (
  id: string,
  completed: boolean
): Promise<TodoResponse> => {
  try {
    const { data } = await axios.put(`/todos/${id}`, { completed });
    return [null, data as Todo];
  } catch (err) {
    return [err];
  }
};

export const removeTodo = async (id: string): Promise<TodoResponse> => {
  try {
    const response = await axios.delete(`/todos/${id}`);
    return [null];
  } catch (err) {
    return [err];
  }
};
