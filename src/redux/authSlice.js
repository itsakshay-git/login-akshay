import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  loggedInUser: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
    loginUser: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find((user) => user.email === email && user.password === password);
      state.loggedInUser = user ? user.name : null;
    },
    logoutUser: (state) => {
      state.loggedInUser = null;
    }
  }
});

export const { registerUser, logoutUser, loginUser } = authSlice.actions;
export default authSlice.reducer;