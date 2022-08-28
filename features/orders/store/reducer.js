/* eslint-disable no-param-reassign */
import { createReducer } from '@reduxjs/toolkit'
import { fetchOrders, refreshOrders } from './actions'

const initialState = {
  data: {},
  pending: false,
  loading: false,
  error: false,
  hasNewOrder: false,
  errors: {},
}

export const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOrders.pending, (state) => {
      state.pending = true
      state.error = false
    })
    .addCase(fetchOrders.fulfilled, (state, { payload }) => {
      state.pending = false
      state.data = payload
    })
    .addCase(fetchOrders.rejected, (state, { payload }) => {
      state.pending = false
      state.error = true
      state.errors = payload
    })
    .addCase(refreshOrders.pending, (state) => {
      state.error = false
    })
    .addCase(refreshOrders.fulfilled, (state, { payload }) => {
      state.hasNewOrder = payload.data.length > 0 && payload.lastOrderId !== state.data.lastOrderId
      state.data = payload
    })
    .addCase(refreshOrders.rejected, (state, { payload }) => {
      state.error = true
      state.errors = payload
    })
    .addCase('SET_HAS_NEW_ORDER', (state, { payload }) => {
      state.hasNewOrder = payload
    })
})

export default orderReducer
