import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  email: null,
  token: null,
};
const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { id, email, token } = action.payload;
      state.id = id;
      state.email = email;
      state.token = token;
    },
    logoutUser: (state, action) => {
      state.id = null;
      state.email = null;
      state.token = null;
    },
  },
});
export const { setCredentials, logoutUser } = authSlice.actions;
export default authSlice.reducer;
export const userId = (state) => state.user.id;
export const userEmail = (state) => state.user.email;
export const userToken = (state) => state.user.token;
