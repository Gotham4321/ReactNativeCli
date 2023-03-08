/* eslint-disable prettier/prettier */
import {reducers} from '../../reducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: reducers,
  devTools: process.env.NODE_ENV !== 'production',
});
