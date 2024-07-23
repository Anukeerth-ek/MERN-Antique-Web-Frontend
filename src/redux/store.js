import { configureStore } from '@reduxjs/toolkit';
import { cartReducer, antiqueReducer } from './AntiqueSlice'; 

const store = configureStore({
  reducer: {
    cart: cartReducer,
    antiques: antiqueReducer,
  },
});

export default store;
