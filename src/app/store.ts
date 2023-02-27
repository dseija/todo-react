import { combineReducers, createStore } from 'redux';

import { todoReducer } from '../features/todo';
import { userReducer } from '../features/user';

const store = createStore(
  combineReducers({
    todoReducer,
    userReducer,
  })
);

export default store;

// Export store types for react-redux hooks
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
