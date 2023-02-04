import { configureStore } from "@reduxjs/toolkit";
import { storeApi } from "./api";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [storeApi.reducerPath]: storeApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(storeApi.middleware),
});
