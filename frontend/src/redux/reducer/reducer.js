import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  authenticated: false,
};

export const userReducer = createReducer(initialState, {
  //register user
  RegisterRequest: (state) => {
    state.loading = true;
  },
  RegisterSuccess: (state, action) => {
    state.loading = false;
    state.authenticated = true;
    state.message = action.payload;
  },
  RegisterFailure: (state) => {
    state.loading = false;
  },

  //login user
  LoginRequest: (state) => {
    state.loading = true;
  },
  LoginSuccess: (state, action) => {
    state.loading = false;
    state.authenticated = true;
    state.message = action.payload;
  },
  LoginFailure: (state) => {
    state.loading = false;
  },

  //load user
  LoadUserRequest: (state) => {
    state.loading = true;
  },
  LoadUserSuccess: (state, action) => {
    state.loading = false;
    state.authenticated = true;
    state.user = action.payload;
  },
  LoadUserFailure: (state) => {
    state.loading = false;
  },

  //logout user
  LogoutRequest: (state) => {
    state.loading = true;
  },
  LogoutSuccess: (state, action) => {
    state.loading = false;
    state.authenticated = false;
  },
  LogoutFailure: (state) => {
    state.loading = false;
    state.authenticated = true;
  },

  //logout user
  AddRemoveRequest: (state) => {
    state.loading = true;
  },
  AddRemoveSuccess: (state, action) => {
    state.loading = false;
    state.message = action.payload;
  },
  AddRemoveFailure: (state) => {
    state.loading = false;
  },
});
