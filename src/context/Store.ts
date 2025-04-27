// src/store.ts
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './Task';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;