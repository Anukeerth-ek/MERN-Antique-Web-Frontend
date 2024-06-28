// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './AntiqueSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
