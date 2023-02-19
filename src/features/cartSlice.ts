import { createSlice, configureStore, combineReducers, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id?: number;
  name: string;
  price: number;
  amount: number;
}

interface CartState extends Array<CartItem> {}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [] as CartState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { name, price, amount } = action.payload;
      state.push({ id: Date.now(), name, price: parseFloat(price.toString()), amount });
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const index = state.findIndex((item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default store;
