import { createSlice } from '@reduxjs/toolkit';

const venuesSlice = createSlice({
	name: 'venues',
	initialState: [],
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = venuesSlice.actions;

export default venuesSlice.reducer;
