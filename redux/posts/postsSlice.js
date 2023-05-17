import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: null,
  comments: null,
  isLoading: false,
  error: null,
};

const pending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const postsResolved = (state, action) => {
  state.posts = action.payload;
  state.isLoading = false;
};

const commentsResolved = (state, action) => {
  state.comments = action.payload;
  state.isLoading = false;
};

const error = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const reducers = {
  getPostsPending: pending,
  getPostsResolved: postsResolved,
  getPostsError: error,
  getCommentsPending: pending,
  getCommentsResolved: commentsResolved,
  getCommentsError: error,
};

const postsSlice = createSlice({ name: "posts", initialState, reducers });

export const {
  getPostsPending,
  getPostsResolved,
  getPostsError,
  getCommentsPending,
  getCommentsResolved,
  getCommentsError,
} = postsSlice.actions;
export const postsReducer = postsSlice.reducer;
