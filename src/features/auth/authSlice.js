import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isAuthenticated: false,
  token: null,
  error: null,
};

export const loginAsync = createAsyncThunk(
  'auth/loginAsync',
  async (credentials, { dispatch, rejectWithValue }) => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', credentials);
      const token = response.data.token;
      localStorage.setItem('token', token);
      dispatch(login({ token }));
    } catch (error) {
      console.error('Login error:', error);
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.error = null;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.token = null;
      state.error = action.payload || { message: 'Login failed' };
    });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
