import { Action, ThunkAction, configureStore } from '@reduxjs/toolkit';

import counterReducer from './components/counter/counterSlice';
import authReducer from './components/auth/store/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    userAuth: authReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
