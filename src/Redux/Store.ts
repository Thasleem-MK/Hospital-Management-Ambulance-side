import { configureStore } from "@reduxjs/toolkit";
import AmbulanceSlice from "./AmbulanceSlice";

export const store = configureStore({
  reducer: {
    Ambulance: AmbulanceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
