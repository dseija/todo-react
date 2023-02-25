import { combineReducers, createStore } from 'redux';

import { todoReducer } from '../features/todo';

const store = createStore(
  combineReducers({
    todoReducer,
  })
);

export default store;

// Export store types for react-redux hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
