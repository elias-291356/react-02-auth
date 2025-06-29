import { createSlice } from "@reduxjs/toolkit";

import { registerThunk, loginThunk, logoutThunk } from "../auth/operations";

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

        // register

        
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
            
            // login


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

        // logout

        .addCase(logoutThunk.pending, state => {
            state.loading = true;
            state.error = null;
        })
        .addCase(logoutThunk.fulfilled, (state) => {
            state.loading = false;
            state.user = {};
            state.token = "";
            state.isLogin = false;
        })
        .addCase(logoutThunk.rejected, (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        })
        
    }
})

export default authSlice.reducer;
