import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    filterByName(state, action) {
      return (state = action.payload);
    },
  },
});

export const { filterByName } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
