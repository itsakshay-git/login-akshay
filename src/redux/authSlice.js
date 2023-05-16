// import { createSlice } from '@reduxjs/toolkit';

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: {
//     email: '',
//     name: '',
//     password: '',
//     isLoggedIn: false,
//   },
//   reducers: {
//     registerUser: (state, action) => {
//       const { email, name, password } = action.payload;
//       // Store user data in the state
//       state.email = email;
//       state.name = name;
//       state.password = password;
//     },
//     loginUser: (state) => {
//       // Update login status
//       state.isLoggedIn = true;
//     },
//     logoutUser: (state) => {
//       // Clear user data and reset login status
//       state.email = '';
//       state.name = '';
//       state.password = '';
//       state.isLoggedIn = false;
//     },
//   },
// });

// export const { registerUser, loginUser, logoutUser } = authSlice.actions;
// export default authSlice.reducer;

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