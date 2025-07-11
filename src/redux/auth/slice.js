import { createSlice } from "@reduxjs/toolkit";

import {
  registerThunk,
  loginThunk,
  logoutThunk,
  refreshThunk,
} from "../auth/operations";

const initialState = {
  user: {},
  token: "",
  isLogin: false,
  loading: false,
  error: null,
  isRefresh: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    // register

    builder
      .addCase(registerThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(registerThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // login

      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLogin = true;
      })
      .addCase(loginThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // logout

      .addCase(logoutThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.loading = false;
        state.user = {};
        state.token = "";
        state.isLogin = false;
      })
      .addCase(logoutThunk.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })

      // refresh

      .addCase(refreshThunk.pending, (state, action) => {
        state.isRefresh = true;
      })

      .addCase(refreshThunk.fulfilled, (state, { payload }) => {
        state.user.name = payload.name;
        state.user.email = payload.name;
        state.isLogin = true;
        state.isRefresh = false;
      })

      .addCase(refreshThunk.rejected, (state) => {
        state.isRefresh = false;
      });
  },
});

export default authSlice.reducer;
