import { createSlice } from '@reduxjs/toolkit'

export const pathSlice = createSlice({
  name: 'path',
  initialState: {
    value: ['FirstPanel'],
    param: [{FirstParam: 'FirstParam'}]
  },
  reducers: {
    push: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.
      state.value = [...state.value, action.payload.panel]
      state.param = [...state.param, action.payload.param]
    },
    pop: (state) => {
      state.value = state.value.slice(0, state.value.length - 1);
      state.param = state.param.slice(0, state.param.length - 1);
    },
    reset: (state) => {
      state.value = ['MainPanel']
      state.param = []
    },
  },
})

// Action creators are generated for each case reducer function
export const { push, pop, reset } = pathSlice.actions

export default pathSlice.reducer