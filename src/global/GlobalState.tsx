import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  user: {} || null,
  verify: false,
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
    verified: (state: any) => {
      state.verify = true;
    },
    changeVerified: (state: any) => {
      state.verify = false;
    },
  },
});

export const {
  toggled,
  changedToggle,
  logOut,
  mainUser,
  changeVerified,
  verified,
} = GlobalState.actions;

export default GlobalState.reducer;
