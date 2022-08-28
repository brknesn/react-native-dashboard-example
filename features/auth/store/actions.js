/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit'
import * as SecureStore from 'expo-secure-store'
import AuthService from './service'

export const login = createAsyncThunk(
  'login',
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
    //  const response = await AuthService.login(payload.username, payload.password)
      const response = { data: { token: '123' } }
      SecureStore.setItemAsync('token', response.data.token)
      return fulfillWithValue(response.data)
    } catch (error) {
      if (error.status === 500 || error.status === 502 || error.code === 'ERR_NETWORK') {
        return false
      }
      throw rejectWithValue(error.message)
    }
  },
)
