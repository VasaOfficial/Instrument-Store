import { createSlice, configureStore, combineReducers } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { name, price, amount } = action.payload;
      state.push({ id: Date.now(), name, price: parseFloat(price), amount });
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const { addToCart, removeFromCart } = cartSlice.actions;
