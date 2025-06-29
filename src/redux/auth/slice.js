import { createSlice } from "@reduxjs/toolkit";

import { registerThunk, loginThunk } from "../auth/operations";

const initialState = {
    user: {},
    token: "",
    isLogin: false,
    loading: false,
    error: null,

  
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: builder => {
        builder.addCase(registerThunk.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(registerThunk.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
        })
        .addCase(registerThunk.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        .addCase(loginThunk.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(loginThunk.fulfilled, (state, {payload}) => {
            state.loading = false;
            state.user = payload.user;
            state.token = payload.token;
            state.isLogin = true;
        })
        .addCase(loginThunk.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        
    }
})

export default authSlice.reducer;
