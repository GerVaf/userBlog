import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  slider: [],
  detail_blog: {},
  music: [],
  sport: [],
};

export const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addAll: (state, action) => {
      state.all = action.payload;
    },
    detail: (state, action) => {
      state.detail_blog = action.payload;
    },
    addMusic: (state, action) => {
      state.music = action.payload;
    },
    addSport: (state, action) => {
      state.sport = action.payload;
    },
  },
});

export const { addAll, detail, addMusic, addSport } = BlogSlice.actions;

export default BlogSlice.reducer;
