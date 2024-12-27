import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import pathReducer from './path'
import themeListReducer from './themelist'

export default configureStore({
  reducer: {
    path: pathReducer,
    themeList: themeListReducer,
    counter: counterReducer,
  },
})