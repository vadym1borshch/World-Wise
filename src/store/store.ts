import { configureStore } from '@reduxjs/toolkit'

import { combineReducers } from '@reduxjs/toolkit'
import worldWiseSlice from '../slices/WorldWiseSlice'

const rootReducer = combineReducers({
  worldWiseSlice,
})

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
