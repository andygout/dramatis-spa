import { createSlice } from '@reduxjs/toolkit';

const seasonSlice = createSlice({
	name: 'season',
	initialState: {},
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = seasonSlice.actions;

export default seasonSlice.reducer;
