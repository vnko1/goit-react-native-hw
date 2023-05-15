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

const authPending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const authSuccess = (state, action) => {
  state.displayName = action.payload.displayName;
  state.photoURL = action.payload.photoURL;
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signInInProgress: authPending,
    signInSuccess: authSuccess,
    signInError: authError,
    logInInProgress: authPending,
    logInSuccess: authSuccess,
    logInError: authError,
    logOutInProgress: authPending,
    logOutSuccess: logOut,
    logOutError: authError,
  },
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
} = authSlice.actions;
export const authReducer = authSlice.reducer;
