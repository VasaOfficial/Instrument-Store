import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: { items: [] },
  reducers: {
    addToCart: (state, action) => {
      const { name, price, amount } = action.payload;
      state.items.push({ name, price, amount });
    },
  },
});

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const { addToCart } = cartSlice.actions;
