import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  comments: null,
  isLoading: false,
  error: null,
};

const pending = (state) => {
  state.isLoading = true;
  state.error = null;
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
  getCommentsPending: pending,
  getCommentsResolved: commentsResolved,
  getCommentsError: error,
};

const commentsSlice = createSlice({ name: "comments", initialState, reducers });

export const { getCommentsPending, getCommentsResolved, getCommentsError } =
  commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;
