import { createSlice } from '@reduxjs/toolkit';

const venueSlice = createSlice({
	name: 'venue',
	initialState: {},
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = venueSlice.actions;

export default venueSlice.reducer;
