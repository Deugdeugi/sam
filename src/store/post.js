import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    name: '',
    label: '',
    value: {},
  },
  reducers: {
    postSet: (state, action) => {
        state.name = action.payload.name;
        state.label = action.payload.label;
        state.value = action.payload.info;
    },
    postReset: (state) => {
        state.name = '';
        state.label = '';
        state.value = {};
    },
  },
})

// Action creators are generated for each case reducer function
export const { postSet, postReset } = postSlice.actions

export default postSlice.reducer