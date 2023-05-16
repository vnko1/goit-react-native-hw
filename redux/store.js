import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistReducer,
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { authReducer } from "./authSlice";

export const store = configureStore({
  reducer: authReducer,
});

// const persistConfig = {
//   key: "auth",
//   storage: AsyncStorage,
// };

// const reducer = persistReducer(persistConfig, authReducer);

// export const store = configureStore({
//   reducer: authReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistStor = persistStore(store);
