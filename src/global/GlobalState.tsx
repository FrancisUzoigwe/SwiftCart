import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
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
  },
});

export const { toggled, changedToggle } = GlobalState.actions;

export default GlobalState.reducer;
