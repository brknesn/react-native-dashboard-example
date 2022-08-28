/* eslint-disable import/prefer-default-export */
import { configureStore } from '@reduxjs/toolkit'
import authReducer from './features/auth/store/reducer'
import { orderReducer } from './features/orders/store'

const reducer = {
  orders: orderReducer,
  auth: authReducer,
}
export const store = configureStore({
  reducer,
  devTools: false,
})
