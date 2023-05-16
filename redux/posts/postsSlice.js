import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
  isLoading: false,
  error: null,
};

const postPending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const getPostsResolved = (state, action) => {
  state.posts = action.payload;
  state.isLoading = false;
};

const postError = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const reducers = {
  getPostsPending: postPending,
  getPostsSuccess: getPostsResolved,
  getPostsError: postError,
};

const postsSlice = createSlice({ name: "posts", initialState, reducers });

export const { getPostsPending, getPostsSuccess, getPostsError } =
  postsSlice.actions;
export const postsReducer = postsSlice.reducer;
