import { createAction } from '../../common/utils';

export enum TodoActionName {
  ADD_TODO = 'ADD_TODO',
  TOGGLE_TODO = 'TOGGLE_TODO',
  REMOVE_TODO = 'REMOVE_TODO',
}

export const addTodoAction = (description: string) =>
  createAction(TodoActionName.ADD_TODO, description);

export const toggleTodoAction = (index: number) =>
  createAction(TodoActionName.TOGGLE_TODO, index);

export const removeTodoAction = (index: number) =>
  createAction(TodoActionName.REMOVE_TODO, index);

// Export action types
export type TodoActionType = ReturnType<
  typeof addTodoAction | typeof toggleTodoAction | typeof removeTodoAction
>;
