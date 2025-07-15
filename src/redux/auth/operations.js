import { createAsyncThunk } from "@reduxjs/toolkit";

import * as api from "../../shared/api/auth";

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.register(data);
      return result;
    } catch ({ response }) {
      console.log(response);
      return rejectWithValue(response.data.message);
    }
  },
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const result = await api.login(data);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
);

export const logoutThunk = createAsyncThunk(
  "auth/signout",
  async (_, { rejectWithValue }) => {
    try {
      const result = await api.logout();
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
);

export const currentThunk = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      const result = await api.getCurrent(auth.token);
      return result;
    } catch ({ response }) {
      return rejectWithValue(response.data.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  },
);

export const refreshThunk = createAsyncThunk("refresh", async (_, thunkApi) => {
  const savedToken = thunkApi.getState().auth.token;
  if (!savedToken) {
    return thunkApi.rejectWithValue("Token is not exist");
  }
  try {
    const data = await api.getCurrent(savedToken);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});
