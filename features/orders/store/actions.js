/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from '@reduxjs/toolkit'
import OrderService from './service'

export const fetchOrders = createAsyncThunk(
  'orders/list',
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await OrderService.list(payload)
      return fulfillWithValue(response.data)
    } catch (error) {
      if (error.status === 500 || error.status === 502 || error.code === 'ERR_NETWORK') {
        return false
      }
      throw rejectWithValue(error.message)
    }
  },
)
export const refreshOrders = createAsyncThunk(
  'orders/refresh',
  async (payload, { fulfillWithValue, rejectWithValue }) => {
    try {
      const response = await OrderService.list(payload)
      return fulfillWithValue(response.data)
    } catch (error) {
      if (error.status === 500 || error.status === 502 || error.code === 'ERR_NETWORK') {
        return false
      }
      throw rejectWithValue(error.message)
    }
  },
)
