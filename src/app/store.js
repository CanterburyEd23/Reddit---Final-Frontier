import { configureStore, combineReducers } from '@reduxjs/toolkit';
import subRedditReducer from './subRedditSlice';

export const store = configureStore({
  reducer: combineReducers({
    subReddits: subRedditReducer,
  }),
});