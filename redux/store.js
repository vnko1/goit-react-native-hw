import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { authReducer } from "./auth/authSlice";
import { postsReducer } from "./posts/postsSlice";
import { commentsReducer } from "./comments/commentsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  posts: postsReducer,
  comments: commentsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
