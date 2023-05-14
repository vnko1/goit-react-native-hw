import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  displayName: null,
  photoURL: null,
  uid: null,
  accessToken: null,
  isLogedIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signIn(state, action) {
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
      state.uid = action.payload.uid;
      state.accessToken = action.payload.accessToken;
      state.isLogedIn = true;
    },
  },
});

export const { signIn } = authSlice.actions;
export const authReducer = authSlice.reducer;
