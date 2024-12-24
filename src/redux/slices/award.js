import { createSlice } from '@reduxjs/toolkit';

const awardSlice = createSlice({
	name: 'award',
	initialState: {},
	reducers: {
		fetched (state, action) {

			return action.payload;

		}
	}
});

export const { fetched } = awardSlice.actions;

export default awardSlice.reducer;
