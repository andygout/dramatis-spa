import { createSlice } from '@reduxjs/toolkit';

const festivalSlice = createSlice({
	name: 'festival',
	initialState: {},
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = festivalSlice.actions;

export default festivalSlice.reducer;
