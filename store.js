import { configureStore } from "@reduxjs/toolkit";

import authReducers from "./store/auth/auth.reducers";

export const store = configureStore({
  reducer: {
    auth: authReducers,
  },
});
