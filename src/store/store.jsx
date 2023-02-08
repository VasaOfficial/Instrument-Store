import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../Data/StoredInputs';

const store = configureStore({
  reducer: cartReducer,
});

export default store;
