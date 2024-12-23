import { createSlice } from '@reduxjs/toolkit';

const seasonsSlice = createSlice({
	name: 'seasons',
	initialState: [],
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = seasonsSlice.actions;

export default seasonsSlice.reducer;
