import { TodoActionName, TodoActionType } from './todoActions';
import { TODO_WITHOUT_ID_PREFIX } from './todoConstants';
import { Todo, TodoIdUpdatePayload } from './todoTypes';

const addTodo = (todos: Todo[], description: string) => {
  return [
    ...todos,
    { description, id: `${TODO_WITHOUT_ID_PREFIX}${todos.length}` },
  ];
};

const updateId = (todos: Todo[], { todoIndex, id }: TodoIdUpdatePayload) => {
  return todos.map((todo, index) =>
    index === todoIndex ? { ...todo, id } : todo
  );
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

const todoReducer = (todos: Todo[] = [], action: TodoActionType) => {
  switch (action.type) {
    case TodoActionName.SET_TODOS:
      return action.payload as Todo[];

    case TodoActionName.ADD_TODO:
      return addTodo(todos, action.payload as string);

    case TodoActionName.UPDATE_TODO_ID:
      return updateId(todos, action.payload as TodoIdUpdatePayload);

    case TodoActionName.TOGGLE_TODO:
      return toggleTodo(todos, action.payload as number);

    case TodoActionName.REMOVE_TODO:
      return removeTodo(todos, action.payload as number);

    default:
      return todos;
  }
};

export default todoReducer;
