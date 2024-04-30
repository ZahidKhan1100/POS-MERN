import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategories: (state, action) => {
      console.log(action.payload);
      state.categories = action.payload;
    },
  },
});

export const { getCategories } = categorySlice.actions;
export default categorySlice.reducer;
