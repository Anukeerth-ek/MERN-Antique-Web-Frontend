import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, antiqueReducer } from './AntiqueSlice'; // Correct import

const store = configureStore({
  reducer: {
    cart: cartReducer,
    antiques: antiqueReducer,
  },
});

export default store;
