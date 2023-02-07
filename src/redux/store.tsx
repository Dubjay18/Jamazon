import { configureStore } from "@reduxjs/toolkit";
import { authApi, storeApi } from "./api";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [storeApi.reducerPath]: storeApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(storeApi.middleware)
      .concat(authApi.middleware),
});
