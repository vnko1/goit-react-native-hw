import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: null,
  photoURL: null,
  email: null,
  uid: null,
  accessToken: null,
  isLogedIn: false,
  isLoading: false,
  error: null,
};

const authPending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const authSuccess = (state, action) => {
  state.displayName = action.payload.displayName;
  state.photoURL = action.payload.photoURL;
  state.email = action.payload.email;
  state.uid = action.payload.uid;
  state.accessToken = action.payload.accessToken;
  state.isLogedIn = true;
  state.isLoading = false;
};
const authError = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};
const logOut = (state) => (state = initialState);

const reducers = {
  signInInProgress: authPending,
  signInSuccess: authSuccess,
  signInError: authError,
  logInInProgress: authPending,
  logInSuccess: authSuccess,
  logInError: authError,
  logOutInProgress: authPending,
  logOutSuccess: logOut,
  logOutError: authError,
  // refreshInProgress: authPending,
  // refreshSuccess: authSuccess,
  // refreshError: authError,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers,
});

export const {
  signInInProgress,
  signInSuccess,
  signInError,
  logInInProgress,
  logInSuccess,
  logInError,
  logOutInProgress,
  logOutSuccess,
  logOutError,
  // refreshInProgress,
  // refreshSuccess,
  // refreshError,
} = authSlice.actions;
export const authReducer = authSlice.reducer;
