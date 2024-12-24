import { createSlice } from '@reduxjs/toolkit';

const festivalSeriesSlice = createSlice({
	name: 'festivalSeries',
	initialState: {},
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = festivalSeriesSlice.actions;

export default festivalSeriesSlice.reducer;
