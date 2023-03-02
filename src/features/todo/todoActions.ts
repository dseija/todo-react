import { createAction } from '../../common/utils';
import { Todo } from './todoTypes';

export enum TodoActionName {
  SET_TODOS = 'SET_TODOS',
  ADD_TODO = 'ADD_TODO',
  UPDATE_TODO_ID = 'UPDATE_TODO_ID',
  TOGGLE_TODO = 'TOGGLE_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
}

export const setTodosAction = (todos: Todo[]) =>
  createAction(TodoActionName.SET_TODOS, todos);

export const addTodoAction = (description: string) =>
  createAction(TodoActionName.ADD_TODO, description);

export const updateTodoIdAction = (todoIndex: number, id: string) =>
  createAction(TodoActionName.UPDATE_TODO_ID, { todoIndex, id });

export const toggleTodoAction = (index: number) =>
  createAction(TodoActionName.TOGGLE_TODO, index);

export const removeTodoAction = (index: number) =>
  createAction(TodoActionName.REMOVE_TODO, index);

// Export action types
export type TodoActionType = ReturnType<
  | typeof setTodosAction
  | typeof addTodoAction
  | typeof updateTodoIdAction
  | typeof toggleTodoAction
  | typeof removeTodoAction
>;
