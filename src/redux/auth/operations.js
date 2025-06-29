import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const $instance = axios.create({
    baseURL: 'http://localhost:3003/api/',
    

})

export const registerThunk = createAsyncThunk(
    'auth/register',
    async (data, { rejectWithValue }) => {
      try {
        const { data: result } = await $instance.post('auth/register', data);
        return result;
      } catch ({ response }) {
        console.error('❌ register error:', response?.data?.message);
        return rejectWithValue(response?.data?.message || 'Ошибка регистрации');
      }
    }
  );
  
  export const loginThunk = createAsyncThunk(
    'auth/login',
    async (data, { rejectWithValue }) => {
      try {
        const { data: result } = await $instance.post('auth/login', data);
        return result;
      } catch ({ response }) {
        console.error('❌ login error:', response?.data?.message);
        return rejectWithValue(response?.data?.message || 'Ошибка входа');
      }
    }
  );
  
  