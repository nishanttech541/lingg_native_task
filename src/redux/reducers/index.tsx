import { combineReducers } from 'redux';
import { userDataReducer } from './userDataReducer';

export const rootReducer = combineReducers({
  userData: userDataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;