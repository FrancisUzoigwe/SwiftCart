import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  user: {} || null,
  verify: false,
  cart: [] as any,
  create: false,
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
    addToCart: (state, { payload }) => {
      let check = state.cart.findIndex((el: any) => el?._id === payload?._id);
      if (check >= 0) {
        state.cart[check].QTY += 1;
      } else {
        const data = {
          ...payload,
          QTY: 1,
        };
        state.cart.push(data);
      }
    },
    removeFromCart: (state: any, { payload }) => {
      state.cart = state.cart.filter((el: any) => {
        return el?._id !== payload?._id;
      });
    },
    created: (state: any) => {
      state.create = true;
    },
    changeCreated: (state: any) => {
      state.create = false;
    },
  },
});

export const {
  toggled,
  changedToggle,
  logOut,
  mainUser,
  addToCart,
  removeFromCart,
  changeVerified,
  verified,
  changeCreated,
  created,
} = GlobalState.actions;

export default GlobalState.reducer;
