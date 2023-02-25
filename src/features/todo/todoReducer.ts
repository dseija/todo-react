import undoable from 'redux-undo';

import { TodoActionName, TodoActionType } from './todoActions';
import { Todo } from './todoTypes';

const addTodo = (todos: Todo[], description: string) => {
  return [...todos, { description }];
};

const toggleTodo = (todos: Todo[], todoIndex: number) => {
  return todos.map((todo, index) =>
    index === todoIndex
      ? { ...todo, completed: !Boolean(todo.completed) }
      : todo
  );
};

const removeTodo = (todos: Todo[], todoIndex: number) => {
  return todos.filter((_, index) => index !== todoIndex);
};

const todoReducer = undoable((todos: Todo[] = [], action: TodoActionType) => {
  switch (action.type) {
    case TodoActionName.ADD_TODO:
      return addTodo(todos, action.payload as string);

    case TodoActionName.TOGGLE_TODO:
      return toggleTodo(todos, action.payload as number);

    case TodoActionName.REMOVE_TODO:
      return removeTodo(todos, action.payload as number);

    default:
      return todos;
  }
});

export default todoReducer;
