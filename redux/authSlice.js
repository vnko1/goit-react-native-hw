import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: null,
  photoURL: null,
  uid: null,
  accessToken: null,
  isLogedIn: false,
  isLoading: false,
  error: null,
};

const pending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const error = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInInProgress: pending,
    signInSuccess(state, action) {
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
      state.uid = action.payload.uid;
      state.accessToken = action.payload.accessToken;
      state.isLogedIn = true;
      state.isLoading = false;
    },
    signInError: error,
  },
});

export const { signInInProgress, signInSuccess, signInError } =
  authSlice.actions;
export const authReducer = authSlice.reducer;
