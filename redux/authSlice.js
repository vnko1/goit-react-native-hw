import { createSlice } from "@reduxjs/toolkit";

const initialState = { name: null, uid: null, isLogedIn: false };

const authSlice = createSlice({ name: "auth", initialState, reducers: {} });

export const {} = authSlice.actions;
export const authReducer = authSlice.reducer;
