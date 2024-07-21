import { createSlice } from '@reduxjs/toolkit';

// Define cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

// Define antique slice
const antiqueSlice = createSlice({
  name: 'antiques', // Corrected name to match the intended slice
  initialState: {
    uploadedAntiques: [],
  },
  reducers: {
    addUploadedAntique: (state, action) => {
      state.uploadedAntiques.push(action.payload);
    },
  },
});

// Export actions from both slices
export const { addToCart, removeFromCart } = cartSlice.actions;
export const { addUploadedAntique } = antiqueSlice.actions;

// Export reducers from both slices
export const cartReducer = cartSlice.reducer;
export const antiqueReducer = antiqueSlice.reducer;
