import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  user: {} || null,
};

const GlobalState = createSlice({
  name: "state",
  initialState,
  reducers: {
    toggled: (state: any) => {
      state.toggle = true;
    },
    changedToggle: (state: any) => {
      state.toggle = false;
    },
    mainUser: (state: any, { payload }) => {
      state.user = payload;
    },
    logOut: (state: any) => {
      state.user = null;
    },
  },
});

export const { toggled, changedToggle, logOut, mainUser } = GlobalState.actions;

export default GlobalState.reducer;
