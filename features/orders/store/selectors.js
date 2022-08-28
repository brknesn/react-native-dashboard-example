import { createSelector } from '@reduxjs/toolkit'

export const selectOrders = (state) => state.orders

export const ordersSelector = createSelector(
  selectOrders,
  (state) => state,
)
