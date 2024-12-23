import { createSlice } from '@reduxjs/toolkit';

const festivalSeriesesSlice = createSlice({
	name: 'festivalSerieses',
	initialState: [],
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = festivalSeriesesSlice.actions;

export default festivalSeriesesSlice.reducer;
