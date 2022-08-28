/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit'
import { login } from './actions'

const initialState = {
  pending: false,
  loading: false,
  token: null,
  isLoggedIn: false,
  error: false,
  errors: {},
}

export const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.pending, (state) => {
      state.pending = true
      state.error = false
    })
    .addCase(login.fulfilled, (state, { payload }) => {
      state.pending = false
      state.token = payload.token
      state.isLoggedIn = true
    })
    .addCase(login.rejected, (state, { payload }) => {
      state.pending = false
      state.error = true
      state.errors = payload
      state.isLoggedIn = false
    })
    .addCase('RESTORE_TOKEN', (state, { payload }) => {
      state.token = payload
      state.pending = false
      state.isLoggedIn = true
    })
    .addCase('SIGN_OUT', (state, { payload }) => {
      state.token = null
      state.pending = false
      state.isLoggedIn = false
    })
})

export default authReducer
